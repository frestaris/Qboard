import React from "react";
import { usePostContext } from "../PostContext";
import "./Search.css";

function Search() {
  const { handleSearch } = usePostContext();

  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

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
