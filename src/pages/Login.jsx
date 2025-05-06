import React from 'react';
import '../styles.css';

function Login() {
  return (
    <div className="page-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;


