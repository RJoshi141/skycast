import React from 'react';
import './CurrentWeather.css';

interface CurrentWeatherProps {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  city,
  temperature,
  condition,
  icon,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={condition} />
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} km/h</p>
    </div>
  );
};

export default CurrentWeather;