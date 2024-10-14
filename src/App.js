import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import data from "./data";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState(data);
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    if (query.length >= 2) {
      const filteredPosts = data.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setPosts(filteredPosts);
    } else {
      setPosts(data);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    setPosts(data);
  };

  return (
    <>
      <Navigation handleInputChange={handleInputChange} />
      <div className="content-container">
        <Dashboard clearSearch={clearSearch} />
        <Routes>
          <Route path="/" element={<Main posts={posts} />} />
          <Route path="/category/:category" element={<Main posts={posts} />} />
          <Route path="/add-post" element={<AddPost setPosts={setPosts} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
