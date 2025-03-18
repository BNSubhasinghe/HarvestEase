// Frontend/src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';  // Import NavBar

const RoutesComponent = () => {
  return (
    <Router>
      <NavBar />  {/* Add the NavBar so it's visible across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
