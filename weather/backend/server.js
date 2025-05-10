


const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',  // Replace with your database password
  database: 'weather_db',  // Ensure this database exists
});

// OpenWeatherMap API key and URL
const WEATHER_API_KEY = '86949bc030db9583f7322cd157c67548';
const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function getWeather(city) {
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: 'metric', // Celsius
      },
    });
    return response.data;  // Return the weather data
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return null;
  }
}

// Route to fetch weather and save city
app.post('/api/save', async (req, res) => {
  const { city } = req.body;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const weather = await getWeather(city);
    if (!weather) return res.status(404).json({ error: 'City not found' });

    // Save city name to the database
    db.query('INSERT INTO cities (name) VALUES (?)', [city], (err) => {
      if (err) {
        console.error('Error saving city:', err);  // Log the error
        return res.status(500).json({ error: 'Error saving city' });
      }
      res.json({ success: true, weather });  // Send back the weather data
    });
  } catch (err) {
    console.error('Error fetching weather:', err);  // Log the error
    res.status(500).json({ error: 'Error fetching weather or saving city' });
  }
});

// Route to fetch saved cities from database
app.get('/api/cities', (req, res) => {
  db.query('SELECT * FROM cities ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('Error fetching cities:', err);
      return res.status(500).json({ error: 'Error fetching cities' });
    }
    res.json(results);  // Send back all cities from the database
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});






