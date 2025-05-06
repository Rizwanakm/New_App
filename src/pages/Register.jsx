import React from 'react';
import '../styles.css';

function Register() {
  return (
    <div className="page-container">
      <h2>Register</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Create password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
