// Frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';  // Import NavBar


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  // Add a loading state
  const [error, setError] = useState(null);  // Add an error state

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setData(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        setError("There was an error fetching the data!");
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <p>{data}</p>
        )}
      </header>
    </div>
  );
}

export default App;
