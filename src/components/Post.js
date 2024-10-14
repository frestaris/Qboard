import React from "react";
import "./Post.css";

function Post({ post }) {
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
        <span className="post-category">Category: {post.category}</span>
      </div>
    </div>
  );
}

export default Post;
