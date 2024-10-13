import React from "react";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={post.avatar} alt={post.name} />
        <div>
          <span className="post-name">{post.name}</span>
          <span className="post-dot">&#x2022; </span>
          <span className="post-time">{post.time}</span>
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
