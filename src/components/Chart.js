import React, { Component } from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
    console.log(props.forecast[0].dt_txt.slice(8, 10));
    console.log(props.forecast[0].dt_txt.slice(11, 13) * 1);
    console.log(props.weather);
    console.log(props.forecast);

    super(props);

    this.state = {


      chartData: {
        labels: [
          `${props.forecast[0].dt_txt.slice(5, 7)}/${props.forecast[0].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[0].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[4].dt_txt.slice(5, 7)}/${props.forecast[4].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[4].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[8].dt_txt.slice(5, 7)}/${props.forecast[8].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[8].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[12].dt_txt.slice(5, 7)}/${props.forecast[12].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[12].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[16].dt_txt.slice(5, 7)}/${props.forecast[16].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[16].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[20].dt_txt.slice(5, 7)}/${props.forecast[20].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[20].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[24].dt_txt.slice(5, 7)}/${props.forecast[24].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[24].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[28].dt_txt.slice(5, 7)}/${props.forecast[28].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[28].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[32].dt_txt.slice(5, 7)}/${props.forecast[32].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[32].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[37].dt_txt.slice(5, 7)}/${props.forecast[37].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[37].dt_txt.slice(11, 13) * 1}:00`,
        ],
        datasets: [
          {
            label: 'Temperature',
            data: [
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
            backgroundColor: [
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
            borderColor: '#FFFFFF',
          },
        ],
      },

      chartDataWind: {
        labels: [
          `${props.forecast[0].dt_txt.slice(5, 7)}/${props.forecast[0].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[0].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[4].dt_txt.slice(5, 7)}/${props.forecast[4].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[4].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[8].dt_txt.slice(5, 7)}/${props.forecast[8].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[8].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[12].dt_txt.slice(5, 7)}/${props.forecast[12].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[12].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[16].dt_txt.slice(5, 7)}/${props.forecast[16].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[16].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[20].dt_txt.slice(5, 7)}/${props.forecast[20].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[20].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[24].dt_txt.slice(5, 7)}/${props.forecast[24].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[24].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[28].dt_txt.slice(5, 7)}/${props.forecast[28].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[28].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[32].dt_txt.slice(5, 7)}/${props.forecast[32].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[32].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[37].dt_txt.slice(5, 7)}/${props.forecast[37].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[37].dt_txt.slice(11, 13) * 1}:00`,
        ],
        datasets: [
          {
            label: 'Wind Speed',
            data: [
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
            backgroundColor: [
              'rgba(255, 99, 132, .6)',
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
            borderColor: '#FFFFFF',
          },
        ],
      },

      chartDataHumidity: {
        labels: [
          `${props.forecast[0].dt_txt.slice(5, 7)}/${props.forecast[0].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[0].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[4].dt_txt.slice(5, 7)}/${props.forecast[4].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[4].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[8].dt_txt.slice(5, 7)}/${props.forecast[8].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[8].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[12].dt_txt.slice(5, 7)}/${props.forecast[12].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[12].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[16].dt_txt.slice(5, 7)}/${props.forecast[16].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[16].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[20].dt_txt.slice(5, 7)}/${props.forecast[20].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[20].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[24].dt_txt.slice(5, 7)}/${props.forecast[24].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[24].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[28].dt_txt.slice(5, 7)}/${props.forecast[28].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[28].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[32].dt_txt.slice(5, 7)}/${props.forecast[32].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[32].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[37].dt_txt.slice(5, 7)}/${props.forecast[37].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[37].dt_txt.slice(11, 13) * 1}:00`,
        ],
        datasets: [
          {
            label: 'Wind Speed',
            data: [
              props.forecast[0].main.humidity,
              props.forecast[1].main.humidity,
              props.forecast[2].main.humidity,
              props.forecast[3].main.humidity,
              props.forecast[4].main.humidity,
              props.forecast[5].main.humidity,
              props.forecast[6].main.humidity,
              props.forecast[7].main.humidity,
              props.forecast[8].main.humidity,
              props.forecast[9].main.humidity,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, .5)',
              'rgba(54, 162, 235, .5)',
              'rgba(255, 206, 86, .5)',
              'rgba(75, 192, 192, .5)',
              'rgba(153, 102, 255, .5)',
              'rgba(255, 159, 64, .5)',
              'rgba(255, 99, 132, .5)',
              'rgba(53, 0, 255, .5)',
              'rgba(255, 0, 86, .5)',
              'rgba(0, 206, 86, .5)',
            ],
            borderColor: '#FFFFFF',
          },
        ],
      },

      chartDataPressure: {
        labels: [
          `${props.forecast[0].dt_txt.slice(5, 7)}/${props.forecast[0].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[0].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[4].dt_txt.slice(5, 7)}/${props.forecast[4].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[4].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[8].dt_txt.slice(5, 7)}/${props.forecast[8].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[8].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[12].dt_txt.slice(5, 7)}/${props.forecast[12].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[12].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[16].dt_txt.slice(5, 7)}/${props.forecast[16].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[16].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[20].dt_txt.slice(5, 7)}/${props.forecast[20].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[20].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[24].dt_txt.slice(5, 7)}/${props.forecast[24].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[24].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[28].dt_txt.slice(5, 7)}/${props.forecast[28].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[28].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[32].dt_txt.slice(5, 7)}/${props.forecast[32].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[32].dt_txt.slice(11, 13) * 1}:00`,
          `${props.forecast[37].dt_txt.slice(5, 7)}/${props.forecast[37].dt_txt.slice(
            8,
            10,
          )}, ${props.forecast[37].dt_txt.slice(11, 13) * 1}:00`,
        ],
        datasets: [
          {
            label: 'Pressure Altitude',
            data: [
              props.forecast[0].main.pressure,
              props.forecast[1].main.pressure,
              props.forecast[2].main.pressure,
              props.forecast[3].main.pressure,
              props.forecast[4].main.pressure,
              props.forecast[5].main.pressure,
              props.forecast[6].main.pressure,
              props.forecast[7].main.pressure,
              props.forecast[8].main.pressure,
              props.forecast[9].main.pressure,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, .7)',
              'rgba(54, 162, 235, .7)',
              'rgba(255, 206, 86, .7)',
              'rgba(75, 192, 192, .7)',
              'rgba(153, 102, 255, .7)',
              'rgba(255, 159, 64, .7)',
              'rgba(255, 99, 132, .7)',
              'rgba(53, 0, 255, .7)',
              'rgba(255, 0, 86, .7)',
              'rgba(0, 206, 86, .7)',
            ],
            borderColor: '#FFFFFF',
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: '',
  };


  render() {
    return (
      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
        className="chart"
      >



        <div style={{ width: '80%' }}>

          <Bar
            data={this.state.chartData}
            width={100}
            height={50}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Forecast Temperature in ' + this.props.weather.city,
                fontSize: 22,
                fontColor: 'white',
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                labels: {
                  fontColor: 'white',
                  fontSize: 15,
                },
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: 'white',
                      fontSize: 13,
                      stepSize: 1,
                      beginAtZero: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: 'white',
                      fontSize: 13,
                      stepSize: 1,
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>


        <div style={{ marginTop: '40px', width: '80%' }}>

          <Line
            data={this.state.chartDataWind}
            options={{
              title: {
                color: 'white',
                display: this.props.displayTitle,
                text: 'Forecast Wind Speed in  ' + this.props.weather.city,
                fontSize: 22,
                fontColor: 'white',
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                labels: {
                  fontColor: 'white',
                  fontSize: 15,
                },
              },

              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: 'white',
                      fontSize: 13,
                      stepSize: 1,
                      beginAtZero: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: 'white',
                      fontSize: 13,
                      stepSize: 1,
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />

        </div>


        <div style={{ marginTop: '40px', width: '80%' }}>

          <Pie
            data={this.state.chartDataHumidity}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Forecast Humidity in ' + this.props.weather.city,
                fontSize: 22,
                fontColor: 'white',
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                labels: {
                  fontColor: 'white',
                  fontSize: 15,
                },
              },
            }}
          />

        </div>


        <div style={{ marginTop: '40px', width: '80%' }}>

          <Doughnut
            data={this.state.chartDataPressure}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Forecast Pressure in ' + this.props.weather.city,
                fontSize: 23,
                fontColor: 'white',
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                labels: {
                  fontColor: 'white',
                  fontSize: 15,
                },
              },
            }}
          />

        </div>

      </div>
      
    );
  }
}

export default Chart;
