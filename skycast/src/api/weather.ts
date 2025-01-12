const API_KEY = '099a22e56a61aa9ab5d7888fccd6e6de';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};

export const fetchForecastData = async (city: string) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};