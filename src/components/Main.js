import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.css";
import Post from "./Post";
import rowIcon from "../assets/row.png";
import gridIcon from "../assets/grid.png";
import filters from "../assets/filters.png";
import addPostIcon from "../assets/add-post.png";

function Main({ posts }) {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState("row");
  const [sortOrder, setSortOrder] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  const navigate = useNavigate();

  const handleAddPostClick = () => {
    navigate("/add-post");
  };

  const filteredPosts = category
    ? posts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      )
    : posts;

  const likedFilteredPosts = filteredPosts.filter(
    (post) => likedPosts[post.id]
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);

    if (sortOrder === "latest") {
      return dateB - dateA;
    } else if (sortOrder === "oldest") {
      return dateA - dateB;
    } else if (sortOrder === "alphabetical") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const postsToRender =
    sortOrder === "liked" ? likedFilteredPosts : sortedPosts;

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "row" ? "grid" : "row"));
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    setIsDropdownOpen(false);
  };

  const toggleLikePost = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="main-content">
      <div className="top-main-section">
        <h1>
          {category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} `
            : "All Posts"}
        </h1>

        {postsToRender.length > 0 ? (
          <p>{postsToRender.length} Results found</p>
        ) : (
          <p>No posts found</p>
        )}
      </div>
      <div className="view-icons">
        <div className="add-post-icon">
          <img
            src={addPostIcon}
            alt="add post icon"
            onClick={handleAddPostClick}
          />
        </div>
        <div className="right-icons">
          {viewMode === "grid" ? (
            <img
              src={gridIcon}
              alt="Switch to row view"
              className="icon"
              onClick={toggleViewMode}
            />
          ) : (
            <img
              src={rowIcon}
              alt="Switch to grid view"
              className="icon"
              onClick={toggleViewMode}
            />
          )}

          <div className="dropdown">
            <img
              src={filters}
              alt="filters"
              className="icon"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div onClick={() => handleSortChange("latest")}>Latest</div>
                <div onClick={() => handleSortChange("oldest")}>Oldest</div>
                <div onClick={() => handleSortChange("alphabetical")}>
                  Alphabetical
                </div>
                <div onClick={() => handleSortChange("liked")}>Liked</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`posts-container ${viewMode}`}>
        {postsToRender.length > 0 ? (
          postsToRender.map((post) => (
            <Post
              key={post.id}
              post={post}
              isLiked={likedPosts[post.id]}
              toggleLikePost={toggleLikePost}
            />
          ))
        ) : (
          <p>No posts available for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Main;
