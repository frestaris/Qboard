import React from "react";
import "./Navigation.css";
import Logo from "./Logo";
import Search from "./Search";

function Navigation({ handleInputChange }) {
  return (
    <div className="navigation">
      <Logo />
      <Search handleInputChange={handleInputChange} />
    </div>
  );
}

export default Navigation;
