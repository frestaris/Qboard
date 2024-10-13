import React from "react";
import "./Navigation.css";
import Logo from "./Logo";
import Search from "./Search";

function Navigation({ onSearch }) {
  return (
    <div className="navigation">
      <Logo />
      <Search onSearch={onSearch} />
    </div>
  );
}

export default Navigation;
