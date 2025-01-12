import React, { useState } from 'react';
import { getCurrentWeather } from '../api/weatherApi';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import '../styles/HomePage.css';


const HomePage: React.FC = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const data = await getCurrentWeather(city);
      setWeather(data);
    } catch (error) {
      alert('City not found or API error!');
    }
  };

  return (
    <div>
      <h1>SkyCast</h1>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default HomePage;
