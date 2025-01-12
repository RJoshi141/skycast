import React from 'react';
import './WeatherForecast.css';

interface ForecastDay {
  date: string;
  temperature: number;
  condition: string;
  icon: string;
}

interface WeatherForecastProps {
  forecast: ForecastDay[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div>
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{day.date}</p>
            <img src={`http://openweathermap.org/img/wn/${day.icon}.png`} alt={day.condition} />
            <p>Temperature: {day.temperature}°C</p>
            <p>Condition: {day.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;