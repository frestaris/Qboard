import React from "react";
import "./PostList.css";
import like from "../assets/like.png";
import liked from "../assets/liked.png";
import comment from "../assets/comment.png";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../PostContext";

function PostList({
  post,
  isLiked,
  toggleLikePost,
  commentsCount,
  likesCount,
}) {
  const navigate = useNavigate();
  const { formatTimeAgo } = usePostContext();

  const handlePostClick = () => {
    navigate(`/post/${post.id}`);
  };

  const handleLike = () => {
    toggleLikePost(post.id);
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
          <span className="post-category">
            Category: <strong>{post.category}</strong>
          </span>
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
