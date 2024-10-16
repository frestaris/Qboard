import React from "react";
import "./PostList.css";
import like from "../assets/like.png";
import liked from "../assets/liked.png";
import comment from "../assets/comment.png";
import { useNavigate } from "react-router-dom";

function PostList({
  post,
  isLiked,
  toggleLikePost,
  commentsCount,
  likesCount,
}) {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${post.id}`);
  };

  const handleLike = () => {
    toggleLikePost(post.id);
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervalInSeconds = seconds;
    const intervalInMinutes = Math.floor(intervalInSeconds / 60);
    const intervalInHours = Math.floor(intervalInMinutes / 60);
    const intervalInDays = Math.floor(intervalInHours / 24);
    const intervalInWeeks = Math.floor(intervalInDays / 7);
    const intervalInMonths = Math.floor(intervalInDays / 30);
    const intervalInYears = Math.floor(intervalInMonths / 12);

    if (intervalInSeconds < 30) return "Just Now";
    if (intervalInYears >= 1)
      return `${intervalInYears} year${intervalInYears > 1 ? "s" : ""} ago`;
    if (intervalInMonths >= 1)
      return `${intervalInMonths} month${intervalInMonths > 1 ? "s" : ""} ago`;
    if (intervalInWeeks >= 1)
      return `${intervalInWeeks} week${intervalInWeeks > 1 ? "s" : ""} ago`;
    if (intervalInDays >= 1)
      return `${intervalInDays} day${intervalInDays > 1 ? "s" : ""} ago`;
    if (intervalInHours >= 1)
      return `${intervalInHours} hour${intervalInHours > 1 ? "s" : ""} ago`;
    if (intervalInMinutes >= 1)
      return `${intervalInMinutes} minute${
        intervalInMinutes > 1 ? "s" : ""
      } ago`;

    return `${intervalInSeconds} second${intervalInSeconds > 1 ? "s" : ""} ago`;
  };

  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={post.avatar} alt={post.name} />
        <div>
          <span className="post-name">{post.name}</span>
          <span className="post-dot">&#x2022; </span>
          <span className="post-time">{formatTimeAgo(post.time)}</span>
        </div>
      </div>
      <div className="post-body">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-content">{post.content}</p>
        <div className="post-bottom-section">
          <span className="post-category">Category: {post.category}</span>
          <div className="button-icons">
            <div className="icon-container-like" onClick={handleLike}>
              <img
                src={isLiked ? liked : like}
                alt={isLiked ? "liked" : "like"}
              />
              <span className="post-likes-count-circle">{likesCount}</span>
            </div>
            <div className="icon-container-comment" onClick={handlePostClick}>
              <span className="post-comments-count-circle">
                {commentsCount}
              </span>
              <img src={comment} alt="comment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
