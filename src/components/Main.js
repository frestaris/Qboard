import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePostContext } from "../PostContext";
import PostList from "./PostList";
import "./Main.css";
import rowIcon from "../assets/row.png";
import gridIcon from "../assets/grid.png";
import filters from "../assets/filters.png";
import addPostIcon from "../assets/add-post.png";

function Main() {
  const {
    posts,
    viewMode,
    setViewMode,
    sortOrder,
    setSortOrder,
    isDropdownOpen,
    setIsDropdownOpen,
    likedPosts,
    toggleLikePost,
  } = usePostContext();

  const { category } = useParams();
  const navigate = useNavigate();

  const handleAddPostClick = () => {
    navigate("/add-post");
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "row" ? "grid" : "row"));
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    setIsDropdownOpen(false);
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
    } else if (sortOrder === "most liked") {
      return b.likes - a.likes;
    } else if (sortOrder === "most commented") {
      return b.comments.length - a.comments.length;
    }

    return 0;
  });

  const postsToRender =
    sortOrder === "liked" ? likedFilteredPosts : sortedPosts;
  console.log("Posts to Render:", postsToRender);
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
                <div onClick={() => handleSortChange("most liked")}>
                  Most Liked
                </div>

                <div onClick={() => handleSortChange("most commented")}>
                  Most commented
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`posts-container ${viewMode}`}>
        {postsToRender.length > 0 ? (
          postsToRender.map((post) => (
            <PostList
              key={post.id}
              post={post}
              isLiked={likedPosts[post.id]}
              toggleLikePost={toggleLikePost}
              commentsCount={post.comments.length}
              likesCount={post.likes}
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
