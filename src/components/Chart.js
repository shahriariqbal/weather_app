import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withTheme } from 'styled-components';

class Chart extends Component{
  constructor(props){

    console.log(props.forecast);

    
  
    console.log( props.forecast[0].dt_txt.slice(8, 10) );
    console.log(   props.forecast[0].dt_txt.slice(11, 13) * 1 );




    console.log(props.forecast[0].main.temp);
    console.log(props.forecast[1].main.temp);
    console.log(props.forecast[3].main.temp);

    console.log(props.weather);


    super(props);
    this.state = {
      

      chartData:{
        labels: [ `Date:${props.forecast[0].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}` , 
                  `Date:${props.forecast[1].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[2].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[3].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[4].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[5].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[6].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[7].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[8].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[9].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`
                  ],
        datasets:[
          {
            label:'Temperature',
            data:[
              props.forecast[0].main.temp,
              props.forecast[1].main.temp,
              props.forecast[2].main.temp,
              props.forecast[3].main.temp,
              props.forecast[4].main.temp,
              props.forecast[5].main.temp,
              props.forecast[6].main.temp,
              props.forecast[7].main.temp,
              props.forecast[8].main.temp,
              props.forecast[9].main.temp,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(53, 0, 255, 0.8)',
              'rgba(255, 0, 86, 0.8)',
              'rgba(0, 206, 86, 0.8)',
              
            ],
            borderColor: '#FFFFFF'
           
          }
        ]
      },


      chartDataWind:{
        labels: [ `Date:${props.forecast[0].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}` , 
                  `Date:${props.forecast[1].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[2].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[3].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[4].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`, 
                  `Date:${props.forecast[5].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[6].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[7].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[8].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`,
                  `Date:${props.forecast[9].dt_txt.slice(8, 10)} Time:${ props.forecast[0].dt_txt.slice(11, 13) * 1}`
                  ],
        datasets:[
          {
            label:'Wind Speed',
            data:[
              props.forecast[0].wind.speed,
              props.forecast[1].wind.speed,
              props.forecast[2].wind.speed,
              props.forecast[3].wind.speed,
              props.forecast[4].wind.speed,
              props.forecast[5].wind.speed,
              props.forecast[6].wind.speed,
              props.forecast[7].wind.speed,
              props.forecast[8].wind.speed,
              props.forecast[9].wind.speed,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(53, 0, 255, 1)',
              'rgba(255, 0, 86, 1)',
              'rgba(0, 206, 86, 1)',
              
            ],
            borderColor: '#FFFFFF'
           
          }
        ]
      }




    



    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:''
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Forecast Temperature in '+this.props.weather.city,
              fontSize:23,
              fontColor: 'white'
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartDataWind}
          options={{
            title:{
              color: 'white',
              display:this.props.displayTitle,
              text:'Forecast Wind Speed in  '+this.props.weather.city,
              fontSize:23,
              fontColor: 'white'
             
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Forecast Humidy in '+this.props.weather.city,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
