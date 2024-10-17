import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Login.css";

function LoginPage() {
  return (
    <div className="main-content">
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <input type="email" id="email" placeholder="Email..." required />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <small className="register-link">
        Not an account? <Link to="/register">Register</Link>
      </small>
    </div>
  );
}

export default LoginPage;
