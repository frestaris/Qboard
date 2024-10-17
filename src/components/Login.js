import React from "react";
import loginIcon from "../assets/login.png";
import logoutIcon from "../assets/logout.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ isLoggedIn, setIsLoggedIn, setUser, setPosts }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setIsLoggedIn(false);
      setUser(null);
      navigate("/");
    }
  };

  return (
    <div
      className="nav-right"
      onClick={handleLoginClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={isLoggedIn ? logoutIcon : loginIcon}
        alt={isLoggedIn ? "logout icon" : "login icon"}
      />
    </div>
  );
}

export default Login;
