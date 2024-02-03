import { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const SEARCH_URL = 'search.php';

function App() {
  const [result, setResult] = useState(null);

  const performSearchAsync = (location) => {
    return axios.get(
      `${BASE_URL}${SEARCH_URL}`, { params:
        {
          key: API_KEY,
          q: location,
          format: 'json',
        }})
    .then(response => {
      const { lat, lon } = response.data[0];
      setResult({ 
        location,
        latitude: Number(lat),
        longitude: Number(lon),
      });
    });
  };

  const locationSubmitted = (location) => {
    performSearchAsync(location);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Latitude and Longitude</h1>
        <SearchForm onLocationSubmit={locationSubmitted} />
      </header>
      <main>
        <SearchResult result={result} />
      </main>
    </div>
  );
}

export default App;