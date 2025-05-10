import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/weather/${city}`);
      setWeather(res.data);
      fetchHistory();
    } catch (err) {
      alert(err.response?.data?.error || 'Error fetching weather');
    }
  };

  const fetchHistory = async () => {
    const res = await axios.get('http://localhost:3001/searches');
    setHistory(res.data);
  };

  useEffect(() => { fetchHistory(); }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Weather Dashboard</h1>
      
      <div>
        <input 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {weather && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>Current Weather</h2>
          <p>City: {weather.city}</p>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Weather: {weather.weather}</p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h2>Recent Searches</h2>
        <ul>
          {history.map(item => (
            <li key={item.id}>
              {item.city} - {new Date(item.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}