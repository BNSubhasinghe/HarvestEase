import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom'; // Remove BrowserRouter
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Your protected component
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';  // Import NavBar

function App() {
  const [data, setData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);  // Add a loading state
  const [error, setError] = useState(null);  // Add an error state


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      axios.get(`${API_URL}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setData(response.data.user);
      })
      .catch(error => {
        console.log("Error fetching user data:", error);
        setIsAuthenticated(false);
        setData(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        setError("There was an error fetching the data!");
        setLoading(false);
      });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); // Remove the token
    setIsAuthenticated(false);
    setData(null);
    window.location.href = '/login'; // Redirect to login
    window.history.pushState(null, null, '/login'); // Clear history
  };

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <div>
            <h2>Welcome, {data?.email || 'User'}</h2>
            <button onClick={logout}>Logout</button>
            <p>Role: {data?.role}</p>
          </div>
        ) : (
          <div>
            <h1>Please log in</h1>
            <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
          </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <p>{data}</p>
        )}
      </header>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          />
      </Routes>
    </div>
  );
}

export default App;