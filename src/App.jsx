import { useState } from 'react';
import LocationIQ from './api/LocationIQ';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import SearchError from './components/SearchError';
import HistoryList from './components/HistoryList';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

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
    const api = new LocationIQ(API_KEY, BASE_URL);

    return api.getLatLonAsync(location)
      .then(result => addResult(result))
      .catch(error => setError(error.message));
  };

  // same method in async/await style
  // const performSearchAsync = async (location) => {
  //   clearError();
  //   const api = new LocationIQ(API_KEY);
  //   try {
  //     const result = await api.getLatLonAsync(location);
  //     addResult(result);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

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