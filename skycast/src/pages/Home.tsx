import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import WeatherForecast from '../components/WeatherForecast';
import Footer from '../components/Footer';
import { fetchWeatherData, fetchForecastData } from '../api/weather';
import './Home.css';

const Home: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async (city: string) => {
    const currentWeather = await fetchWeatherData(city);
    const forecastData = await fetchForecastData(city);

    const formattedForecast = forecastData.list.slice(0, 5).map((item: any) => ({
      date: item.dt_txt,
      temperature: item.main.temp,
      condition: item.weather[0].description,
      icon: item.weather[0].icon,
    }));

    setWeather({
      current: {
        city: currentWeather.name,
        temperature: currentWeather.main.temp,
        condition: currentWeather.weather[0].description,
        icon: currentWeather.weather[0].icon,
        humidity: currentWeather.main.humidity,
        windSpeed: currentWeather.wind.speed,
      },
      forecast: formattedForecast,
    });
  };

  return (
    <div>
      <Header />
      <main>
        <SearchBar onSearch={handleSearch} />
        {weather && (
          <>
            <CurrentWeather {...weather.current} />
            <WeatherForecast forecast={weather.forecast} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;