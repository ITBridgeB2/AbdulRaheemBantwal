// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function WeatherDashboard() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const API_BASE_URL = "http://localhost:3001";

//   const fetchWeather = async (e) => {
//     e.preventDefault();
//     if (!city.trim()) {
//       setError('Please enter a city name');
//       return;
//     }

//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await axios.get(
//         `${API_BASE_URL}/weather/${encodeURIComponent(city)}`,
//         { timeout: 5000 }
//       );
      
//       if (response.data.error) {
//         setError(response.data.error);
//       } else {
//         setWeather(response.data);
//         await fetchHistory();
//       }
//     } catch (err) {
//       handleApiError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchHistory = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/searches`);
//       setHistory(response.data);
//     } catch (err) {
//       console.error('Failed to fetch history:', err.message);
//     }
//   };

//   const handleApiError = (err) => {
//     if (err.code === 'ECONNABORTED') {
//       setError('Server is not responding. Please try again later.');
//     } else if (err.response) {
//       setError(err.response.data.error || `Error: ${err.response.status}`);
//     } else if (err.request) {
//       setError('Cannot connect to server. Please make sure the backend is running.');
//     } else {
//       setError('An unexpected error occurred');
//     }
//   };

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   return (
//     <div className="weather-dashboard">
//       <header>
//         <h1>Weather Dashboard</h1>
//       </header>

//       <main>
//         <form onSubmit={fetchWeather} className="search-form">
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Enter city name"
//             aria-label="City name"
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? (
//               <>
//                 <span className="spinner"></span> Loading...
//               </>
//             ) : (
//               'Get Weather'
//             )}
//           </button>
//         </form>

//         {error && <div className="error-message">{error}</div>}

//         {weather && (
//           <div className="weather-card">
//             <div className="weather-header">
//               <h2>{weather.city}</h2>
//               {weather.icon && (
//                 <img
//                   src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
//                   alt={weather.weather}
//                 />
//               )}
//             </div>
//             <div className="weather-details">
//               <p><strong>Temperature:</strong> {weather.temperature}°C</p>
//               <p><strong>Humidity:</strong> {weather.humidity}%</p>
//               <p><strong>Conditions:</strong> {weather.weather}</p>
//             </div>
//           </div>
//         )}

//         {history.length > 0 && (
//           <div className="search-history">
//             <h3>Recent Searches</h3>
//             <ul>
//               {history.map((item) => (
//                 <li
//                   key={item.id}
//                   onClick={() => {
//                     setCity(item.city);
//                     document.querySelector('input').focus();
//                   }}
//                 >
//                   <span className="city">{item.city}</span>
//                   <span className="timestamp">
//                     {new Date(item.timestamp).toLocaleString()}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </main>

//       <style>{`
//         .weather-dashboard {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 2rem;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         }

//         header {
//           text-align: center;
//           margin-bottom: 2rem;
//         }

//         .search-form {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 1.5rem;
//         }

//         input {
//           flex: 1;
//           padding: 0.75rem;
//           border: 1px solid #ddd;
//           border-radius: 4px;
//           font-size: 1rem;
//         }

//         button {
//           padding: 0.75rem 1.5rem;
//           background-color: #3498db;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           font-size: 1rem;
//           transition: background-color 0.2s;
//         }

//         button:hover {
//           background-color: #2980b9;
//         }

//         button:disabled {
//           background-color: #95a5a6;
//           cursor: not-allowed;
//         }

//         .spinner {
//           display: inline-block;
//           width: 1rem;
//           height: 1rem;
//           border: 2px solid rgba(255,255,255,0.3);
//           border-radius: 50%;
//           border-top-color: white;
//           animation: spin 1s ease-in-out infinite;
//           margin-right: 0.5rem;
//         }

//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }

//         .error-message {
//           color: #e74c3c;
//           padding: 1rem;
//           background-color: #fadbd8;
//           border-radius: 4px;
//           margin-bottom: 1.5rem;
//         }

//         .weather-card {
//           background-color: #f8f9fa;
//           border-radius: 8px;
//           padding: 1.5rem;
//           margin-bottom: 2rem;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//         }

//         .weather-header {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           margin-bottom: 1rem;
//         }

//         .weather-details {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//           gap: 1rem;
//         }

//         .search-history {
//           background-color: white;
//           border-radius: 8px;
//           padding: 1.5rem;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//         }

//         .search-history ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .search-history li {
//           padding: 0.75rem 0;
//           border-bottom: 1px solid #eee;
//           cursor: pointer;
//           display: flex;
//           justify-content: space-between;
//         }

//         .search-history li:hover {
//           background-color: #f8f9fa;
//         }

//         .city {
//           font-weight: bold;
//         }

//         .timestamp {
//           color: #7f8c8d;
//           font-size: 0.9rem;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default WeatherDashboard;








import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = 'http://localhost:5000/api';

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${API_BASE_URL}/save`,
        { city },
        { timeout: 5000 }
      );

      if (response.data.error) {
        setError(response.data.error);
      } else {
        const weatherData = response.data.weather;
        setWeather({
          city: weatherData.name,
          temperature: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          weather: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
        });
        await fetchHistory();
      }
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cities`);
      setHistory(
        response.data.map((item) => ({
          id: item.id,
          city: item.name,
          timestamp: item.timestamp || new Date(),
        }))
      );
    } catch (err) {
      console.error('Failed to fetch history:', err.message);
    }
  };

  const handleApiError = (err) => {
    if (err.code === 'ECONNABORTED') {
      setError('Server is not responding. Please try again later.');
    } else if (err.response) {
      setError(err.response.data.error || `Error: ${err.response.status}`);
    } else if (err.request) {
      setError('Cannot connect to server. Please make sure the backend is running.');
    } else {
      setError('An unexpected error occurred');
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="weather-dashboard">
      <header>
        <h1>Weather Dashboard</h1>
      </header>

      <main>
        <form onSubmit={fetchWeather} className="search-form">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            aria-label="City name"
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Loading...
              </>
            ) : (
              'Get Weather'
            )}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {weather && (
          <div className="weather-card">
            <div className="weather-header">
              <h2>{weather.city}</h2>
              {weather.icon && (
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.weather}
                />
              )}
            </div>
            <div className="weather-details">
              <p>
                <strong>Temperature:</strong> {weather.temperature}°C
              </p>
              <p>
                <strong>Humidity:</strong> {weather.humidity}%
              </p>
              <p>
                <strong>Conditions:</strong> {weather.weather}
              </p>
            </div>
          </div>
        )}

        {history.length > 0 && (
          <div className="search-history">
            <h3>Recent Searches</h3>
            <ul>
              {history.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setCity(item.city);
                    document.querySelector('input').focus();
                  }}
                >
                  <span className="city">{item.city}</span>
                  <span className="timestamp">
                    {new Date(item.timestamp).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <style>{`
        .weather-dashboard {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .search-form {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        button {
          padding: 0.75rem 1.5rem;
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.2s;
        }

        button:hover {
          background-color: #2980b9;
        }

        button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .error-message {
          color: #e74c3c;
          padding: 1rem;
          background-color: #fadbd8;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        .weather-card {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .weather-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .weather-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .search-history {
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .search-history ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .search-history li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
        }

        .search-history li:hover {
          background-color: #f8f9fa;
        }

        .city {
          font-weight: bold;
        }

        .timestamp {
          color: #7f8c8d;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}

export default WeatherDashboard;
