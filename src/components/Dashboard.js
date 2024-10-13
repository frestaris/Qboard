import React from "react";
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

function Dashboard() {
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

  return (
    <div className="dashboard">
      <div className="sidebar">
        <Link to="/" className="home-link">
          <div className="top-sidebar">
            <img src={home} alt="home" className="icon" />
            <span className="icons-text">Home</span>
          </div>
        </Link>

        <hr />
        <ul className="nav-list">
          {categories.map((category, index) => (
            <Link to={`/category/${category.title}`} className="nav-link">
              <li key={index} className="nav-item">
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
