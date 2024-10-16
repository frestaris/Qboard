import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import AddPost from "./components/AddPost";
import { PostProvider } from "./PostContext";

function App() {
  return (
    <PostProvider>
      <Navigation />
      <div className="content-container">
        <Dashboard />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:category" element={<Main />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </div>
    </PostProvider>
  );
}

export default App;
