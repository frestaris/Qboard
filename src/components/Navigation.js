import React from "react";
import "./Navigation.css";
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";

function Navigation({ isLoggedIn, setIsLoggedIn, setUser }) {
  return (
    <div className="navigation">
      <Logo />
      <Login
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
      <Search />
    </div>
  );
}

export default Navigation;
