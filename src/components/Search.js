import React from "react";
import "./Search.css";

function Search({ handleInputChange }) {
  return (
    <div className="nav-right">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
}

export default Search;
