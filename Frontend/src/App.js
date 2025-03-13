// Frontend/src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.log("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data ? data : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
