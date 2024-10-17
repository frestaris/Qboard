import React from "react";
import "./RegisterForm.css";

function RegisterForm() {
  return (
    <div className="main-content">
      <h2 className="register-title">Register</h2>
      <form className="register-form">
        <div className="form-group">
          <input type="text" id="username" placeholder="Username..." required />
        </div>
        <div className="form-group">
          <input type="email" id="email" placeholder="Email..." required />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password..."
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
