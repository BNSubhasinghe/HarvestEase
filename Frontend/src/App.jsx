import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [data, setData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      axios
        .get(`${API_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setData(response.data.user);
        })
        .catch((error) => {
          console.log('Error fetching user data:', error);
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, [API_URL]);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setData(null);
    window.location.href = '/login';
    window.history.pushState(null, null, '/login');
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