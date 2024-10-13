import React, { useState } from "react";
import "./Search.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      onSearch(value);
    } else {
      onSearch("");
    }
  };

  return (
    <div className="nav-right">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
}

export default Search;
