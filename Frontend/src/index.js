// Frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutesComponent from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);
