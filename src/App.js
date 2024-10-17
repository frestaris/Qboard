import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import AddPost from "./components/AddPost";
import { PostProvider } from "./PostContext";
import Post from "./components/Post";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./components/RegisterForm";
import UserProfile from "./components/UserProfile";
// import EditPost from "./components/EditPost";

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
          {/* <Route path="/edit-post/:id" element={<EditPost />} /> */}
          <Route path="/post/:id" element={<Post />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </div>
    </PostProvider>
  );
}

export default App;
