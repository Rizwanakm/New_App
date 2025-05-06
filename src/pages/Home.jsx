import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // import css

function Home() {
  return (
    <div className="home-background">
      <div className="home-content">
        <h1>Home Page</h1>
        <Link to="/login" style={{ color: 'white', marginRight: '10px' }}>Login</Link>
        <Link to="/register" style={{ color: 'white' }}>Register</Link>
      </div>
    </div>
  );
}

export default Home;
