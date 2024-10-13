import React from "react";
import "./Dashboard.css";
import home from "../assets/home.png";
import user from "../assets/user.png";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="top-sidebar">
          <img src={home} alt="home" />
          <a href="/" className="home-link">
            Home
          </a>
        </div>
        <hr />
        <ul className="nav-list">
          <li>
            <img src={user} alt="user" />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <img src={user} alt="user" />
            <a href="#">Orders</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
