import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Assuming you have a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">HarvestEase</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/crops">Crops</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/finance">Finance</Link></li>
        <li><Link to="/plant-care">Plant Care</Link></li>
      </ul>
      <div className="navbar-contact">
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
