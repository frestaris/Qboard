import React from "react";
import "./Navigation.css";
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";

function Navigation() {
  return (
    <div className="navigation">
      <Logo />
      <Login />
      <Search />
    </div>
  );
}

export default Navigation;
