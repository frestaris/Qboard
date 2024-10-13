import React from "react";
import { useParams } from "react-router-dom";
import "./Main.css";
import Post from "./Post";

function Main({ posts }) {
  const { category } = useParams();

  const filteredPosts = category
    ? posts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      )
    : posts;

  return (
    <div className="main-content">
      <h1>
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Posts`
          : "All Posts"}
      </h1>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts available for this category.</p>
      )}
    </div>
  );
}

export default Main;
