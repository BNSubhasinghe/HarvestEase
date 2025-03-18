// Frontend/src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <h1>Welcome to the Home Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default Home;
