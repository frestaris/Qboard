import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import home from "../assets/home.png";
import music from "../assets/music.png";
import health from "../assets/health-care.png";
import movie from "../assets/film.png";
import news from "../assets/newspaper.png";
import gaming from "../assets/game-controller.png";
import education from "../assets/graduation.png";
import diy from "../assets/diy.png";
import travel from "../assets/plane.png";
import topics from "../assets/topics.png";
import arrowUp from "../assets/arrow-up.png";
import arrowDown from "../assets/arrow-down.png";

function Dashboard() {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    { title: "Music", icon: music },
    { title: "Health", icon: health },
    { title: "Movie", icon: movie },
    { title: "News", icon: news },
    { title: "Gaming", icon: gaming },
    { title: "Education", icon: education },
    { title: "DIY", icon: diy },
    { title: "Travel", icon: travel },
  ];

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <Link to="/" className="home-link">
          <div className="top-sidebar">
            <img src={home} alt="home" className="icon" />
            <span className="icons-text">Home</span>
          </div>
        </Link>
        <Link to="/user" className="user-link">
          <div className="top-sidebar">
            <img
              src="https://i.pravatar.cc/48?u=333333"
              alt="user"
              className="avatar-dashboard"
            />
            <span className="icons-text">User</span>
          </div>
        </Link>

        <hr />
        <div className="categories-button" onClick={toggleCategories}>
          <button
            className={`categories-toggle ${showCategories ? "active" : ""}`}
          >
            <div className="topic-left">
              <img src={topics} alt="topics" className="icon" />
              <span className="icons-text">Topics</span>
            </div>
            <img
              src={showCategories ? arrowUp : arrowDown}
              alt="toggle-arrow"
              className="arrow-icon"
            />
          </button>
        </div>
        <ul className={`nav-list ${showCategories ? "show" : ""}`}>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.title}`}
              className="nav-link"
            >
              <li className="nav-item">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="icon"
                />
                <span className="icons-text">{category.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
