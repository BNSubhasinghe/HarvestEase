import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;