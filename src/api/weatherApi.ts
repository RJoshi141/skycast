import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather`, {
      params: { q: city, appid: API_KEY, units: 'metric' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
