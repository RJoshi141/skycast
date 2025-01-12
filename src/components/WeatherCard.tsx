import React from 'react';
import '../styles/WeatherCard.css';

interface WeatherCardProps {
  weather: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <div>
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp}°C</p>
    </div>
  );
};

export default WeatherCard;
