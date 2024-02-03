import { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import SearchError from './components/SearchError';
import HistoryList from './components/HistoryList';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const SEARCH_URL = 'search.php';

function App() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const addResult = (result) => {
    setResults(current => {
      return [...current, result];
    });
  };

  const clearError = () => { setError(""); };

  const performSearchAsync = (location) => {
    clearError();
    return axios.get(
      `${BASE_URL}${SEARCH_URL}`, { params:
        {
          key: API_KEY,
          q: location,
          format: 'json',
        }})
    .then(response => {
      const { lat, lon } = response.data[0];
      addResult({ 
        location,
        latitude: Number(lat),
        longitude: Number(lon),
      });
    })
    .catch(error => {
      const message = error.response.data.error;
      setError(message);
    });
  };

  const locationSubmitted = (location) => {
    performSearchAsync(location);
  };

  const result = results[results.length - 1];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Latitude and Longitude</h1>
        <SearchForm onLocationSubmit={locationSubmitted} />
      </header>
      <main>
        <SearchResult result={result} />
        <SearchError error={error} />
        <HistoryList entries={results} />
      </main>
    </div>
  );
}

export default App;