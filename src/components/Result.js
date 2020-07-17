import React from 'react';
import './Result.sass';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import device from '../responsive/Device';
import ForecastHour from './ForecastHour';
import ResultFadeIn from './ResultFadeIn';
import BigLabel from './BigLabel';
import MediumLabel from './MediumLabel';
import SmallLabel from './SmallLabel';
import Text from './Text';



import Chart from "./Chart";
import { CSVLink, CSVDownload } from "react-csv";








const Results = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;




const LocWeath = styled.div`
  display: flex;
  width: 90%;
  
  flex-wrap: wrap;
  justify-content:  space-between;
  margin-top: 100px;

  

`;





const LocationWrapper = styled.div`
display: flex; 
 flex-direction: column; 
 align-items: center;
   margin-bottom: 20px;

`;

const CurrentWeatherWrapper = styled.div`
  flex-basis: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto 1fr;

  grid-gap: 30px;
  @media ${device.mobileL} {
    flex-basis: 50%;
    padding-right: 10px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
  }
`;

const WeatherIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 100px;
    justify-content: flex-end;
  }
  @media ${device.laptop} {
    font-size: 120px;
  }
  @media ${device.laptopL} {
    font-size: 140px;
  }
`;

const TemperatureWrapper = styled.div``;

const Temperature = styled.h3`
  display: block;
  font-size: 50px;
  font-weight: 400;
  color: #ffffff;
  @media ${device.tablet} {
    font-size: 70px;
  }
  @media ${device.laptop} {
    font-size: 90px;
  }
  @media ${device.laptopL} {
    font-size: 110px;
  }
`;

const WeatherDetailsWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  align-self: flex-start;
  @media ${device.mobileL} {
    flex-basis: 50%;
  }
`;

const WeatherDetail = styled.div`
  flex-basis: calc(100% / 3);
  padding: 10px;
  @media ${device.laptop} {
    padding: 20px 10px;
  }
`;

const ForecastWrapper = styled.div`
  flex-basis: 100%;
  margin: 20px 0;
  overflow: hidden;
`;

const Forecast = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-color: lightgray #ffffff;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-bottom: 20px;
  @media ${device.laptop} {
    order: 4;
  }
`;




const Result = ({ weather }) => {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
  } = weather;

  const forecasts = forecast.map(item => (
    <ForecastHour
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      hour={item.dt_txt.slice(11, 13) * 1}
    />
  ));

  let weatherIcon = null;

  if (main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === 'Drizzle') {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === 'Rain') {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === 'Snow') {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === 'Clear') {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === 'Clouds') {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }



    const csvData = [
      ["Date","Time", "Country", "City",  "Temperature","Highest Temperature", "Lowest Temperature", "Wind Speed", "Humidity",  "Air Pressure", "Description"],
  
      [
      `${forecast[0].dt_txt.slice(2, 4)}/${forecast[0].dt_txt.slice(5, 7)}/${forecast[0].dt_txt.slice(8, 10)}`,
      `${ forecast[0].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[0].main.temp} °C `, 
      `${forecast[0].main.temp_max} °C `, 
      `${forecast[0].main.temp_min} °C `, 
      `${forecast[0].wind.speed} mph`, 
      `${forecast[0].main.humidity}%`,  
      `${forecast[0].main.pressure}`,
      `${forecast[0].weather[0].description}`
    ],

    [
      `${forecast[4].dt_txt.slice(2, 4)}/${forecast[4].dt_txt.slice(5, 7)}/${forecast[4].dt_txt.slice(8, 10)}`,
      `${ forecast[4].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[4].main.temp} °C `, 
      `${forecast[4].main.temp_max} °C `, 
      `${forecast[4].main.temp_min} °C `, 
      `${forecast[4].wind.speed} mph`, 
      `${forecast[4].main.humidity}%`,  
      `${forecast[4].main.pressure}`,
      `${forecast[4].weather[0].description}`
    ],

    [
      `${forecast[8].dt_txt.slice(2, 4)}/${forecast[8].dt_txt.slice(5, 7)}/${forecast[8].dt_txt.slice(8, 10)}`,
      `${ forecast[8].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[8].main.temp} °C `, 
      `${forecast[8].main.temp_max} °C `, 
      `${forecast[8].main.temp_min} °C `, 
      `${forecast[8].wind.speed} mph`, 
      `${forecast[8].main.humidity}%`,  
      `${forecast[8].main.pressure}`,
      `${forecast[8].weather[0].description}`
    ],

    [
      `${forecast[12].dt_txt.slice(2, 4)}/${forecast[12].dt_txt.slice(5, 7)}/${forecast[12].dt_txt.slice(8, 10)}`,
      `${ forecast[12].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[12].main.temp} °C `, 
      `${forecast[12].main.temp_max} °C `, 
      `${forecast[12].main.temp_min} °C `, 
      `${forecast[12].wind.speed} mph`, 
      `${forecast[12].main.humidity}%`,  
      `${forecast[12].main.pressure}`,
      `${forecast[12].weather[0].description}`
    ],

    [
      `${forecast[16].dt_txt.slice(2, 4)}/${forecast[16].dt_txt.slice(5, 7)}/${forecast[16].dt_txt.slice(8, 10)}`,
      `${ forecast[16].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[16].main.temp} °C `, 
      `${forecast[16].main.temp_max} °C `, 
      `${forecast[16].main.temp_min} °C `, 
      `${forecast[16].wind.speed} mph`, 
      `${forecast[16].main.humidity}%`,  
      `${forecast[16].main.pressure}`,
      `${forecast[16].weather[0].description}`
    ],


    [
      `${forecast[20].dt_txt.slice(2, 4)}/${forecast[20].dt_txt.slice(5, 7)}/${forecast[20].dt_txt.slice(8, 10)}`,
      `${ forecast[20].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[20].main.temp} °C `, 
      `${forecast[20].main.temp_max} °C `, 
      `${forecast[20].main.temp_min} °C `, 
      `${forecast[20].wind.speed} mph`, 
      `${forecast[20].main.humidity}%`,  
      `${forecast[20].main.pressure}`,
      `${forecast[20].weather[0].description}`
    ],

    [
      `${forecast[24].dt_txt.slice(2, 4)}/${forecast[24].dt_txt.slice(5, 7)}/${forecast[24].dt_txt.slice(8, 10)}`,
      `${ forecast[24].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[24].main.temp} °C `, 
      `${forecast[24].main.temp_max} °C `, 
      `${forecast[24].main.temp_min} °C `, 
      `${forecast[24].wind.speed} mph`, 
      `${forecast[24].main.humidity}%`,  
      `${forecast[24].main.pressure}`,
      `${forecast[24].weather[0].description}`
    ],

    [
      `${forecast[28].dt_txt.slice(2, 4)}/${forecast[28].dt_txt.slice(5, 7)}/${forecast[28].dt_txt.slice(8, 10)}`,
      `${ forecast[28].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[28].main.temp} °C `, 
      `${forecast[28].main.temp_max} °C `, 
      `${forecast[28].main.temp_min} °C `, 
      `${forecast[28].wind.speed} mph`, 
      `${forecast[28].main.humidity}%`,  
      `${forecast[28].main.pressure}`,
      `${forecast[28].weather[0].description}`
    ],

    [
      `${forecast[32].dt_txt.slice(2, 4)}/${forecast[32].dt_txt.slice(5, 7)}/${forecast[32].dt_txt.slice(8, 10)}`,
      `${ forecast[32].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[32].main.temp} °C `, 
      `${forecast[32].main.temp_max} °C `, 
      `${forecast[32].main.temp_min} °C `, 
      `${forecast[32].wind.speed} mph`, 
      `${forecast[32].main.humidity}%`,  
      `${forecast[32].main.pressure}`,
      `${forecast[32].weather[0].description}`
    ],

    [
      `${forecast[36].dt_txt.slice(2, 4)}/${forecast[36].dt_txt.slice(5, 7)}/${forecast[36].dt_txt.slice(8, 10)}`,
      `${ forecast[36].dt_txt.slice(11, 13) * 1}:00`,
      country, 
      city,  
      `${forecast[36].main.temp} °C `, 
      `${forecast[36].main.temp_max} °C `, 
      `${forecast[36].main.temp_min} °C `, 
      `${forecast[36].wind.speed} mph`, 
      `${forecast[36].main.humidity}%`,  
      `${forecast[36].main.pressure}`,
      `${forecast[36].weather[0].description}`
    ]



    ];







  

  return (
    <Results>



   



      <LocationWrapper>
        <BigLabel>
          {city}, {country}
        </BigLabel>
        <SmallLabel weight="400">{date}</SmallLabel>
      </LocationWrapper>


      <MediumLabel>  

 <CSVLink 
 style={{
   textDecoration:"none",
    color: "white", 
   backgroundColor: "rgba(0, 206, 86, 0.4)", 
   padding: "10px",
    borderRadius: "50px", 
   border: "3px solid green" 

  }} 
   data={csvData}
   >

 Export Weather Report   
      </CSVLink>  

      </MediumLabel>  



      

      <LocWeath>

      <CurrentWeatherWrapper>
        <WeatherIcon>{weatherIcon}</WeatherIcon>
        <TemperatureWrapper>
          <Temperature>{Math.floor(temp)}&#176;</Temperature>
          <SmallLabel weight="400" firstToUpperCase>
            {description}
          </SmallLabel>
        </TemperatureWrapper>
      </CurrentWeatherWrapper>


    


   

   

       

      

     






      <WeatherDetailsWrapper>

        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {Math.floor(highestTemp)}&#176;
          </SmallLabel>

          <Text align="center">Hight</Text>

        </WeatherDetail>


        <WeatherDetail>

          <SmallLabel align="center" weight="400">
            {wind}mph
          </SmallLabel>

          <Text align="center">Wind</Text>

        </WeatherDetail>


        <WeatherDetail>

          <SmallLabel align="center" weight="400">
            {sunrise}
          </SmallLabel>
          <Text align="center">Sunrise</Text>
        </WeatherDetail>


        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {Math.floor(lowestTemp)}&#176;
          </SmallLabel>
          <Text align="center">Low</Text>
        </WeatherDetail>


        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {humidity}%
          </SmallLabel>
          <Text align="center">Rain</Text>
        </WeatherDetail>

        
        <WeatherDetail>
          <SmallLabel align="center" weight="400">
            {sunset}
          </SmallLabel>
          <Text align="center">Sunset</Text>
        </WeatherDetail>

      </WeatherDetailsWrapper>


      </LocWeath>


      <Chart  weather={weather}  forecast={forecast} />







      <ForecastWrapper>
        <MediumLabel weight="400">Forecast</MediumLabel>
        <Forecast>{forecasts}</Forecast>
      </ForecastWrapper>

    </Results>
  );
};

Result.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
    temp: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    humidity: PropTypes.number,
    wind: PropTypes.number,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
    forecast: PropTypes.array,
  }).isRequired,
};

export default Result;
