import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function LoginPage({ setIsLoggedIn, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      const { username: storedUsername, password: storedPassword } = storedUser;

      if (username === storedUsername && password === storedPassword) {
        setIsLoggedIn(true);
        setUser(storedUser);
        navigate("/");
      } else {
        setErrorMessage("Invalid username or password.");
      }
    } else {
      setErrorMessage("No user found. Please register.");
    }
  };

  return (
    <div className="main-content">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username..."
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
      <small className="register-link">
        Not an account? <Link to="/register">Register</Link>
      </small>
    </div>
  );
}

export default LoginPage;
