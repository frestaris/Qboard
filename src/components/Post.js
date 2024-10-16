import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../PostContext";
import like from "../assets/like.png";
import liked from "../assets/liked.png";
import comment from "../assets/comment.png";
import "./Post.css";

function Post() {
  const { id } = useParams();
  const { posts, setPosts, formatTimeAgo, toggleLikePost, likedPosts } =
    usePostContext();
  const [newComment, setNewComment] = useState("");

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  const likesCount = post.likes;
  const commentsCount = post.comments.length;
  const isLiked = likedPosts[post.id];

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        author: "Current User",
        content: newComment,
        time: new Date().toISOString(),
      };

      setPosts((prevPosts) => {
        return prevPosts.map((p) =>
          p.id === post.id ? { ...p, comments: [...p.comments, comment] } : p
        );
      });

      setNewComment("");
    }
  };

  const handleLike = () => {
    toggleLikePost(post.id);
  };

  return (
    <div className="main-content">
      <div className="post-container">
        <h2>{post.title}</h2>
        <div className="top-section-container">
          <img className="avatar" src={post.avatar} alt={post.name} />
          <div>
            <span className="post-name">{post.name}</span>
            <span className="post-dot">&#x2022; </span>
            <span className="post-time">{formatTimeAgo(post.time)}</span>
          </div>
        </div>
        <p className="post-content">{post.content}</p>

        <div className="post-bottom-section">
          <span className="post-category">
            Category: <strong>{post.category}</strong>
          </span>
          <div className="button-icons">
            <div className="icon-container-like" onClick={handleLike}>
              {likesCount > 0 ? (
                <>
                  <span className="post-likes-count-circle">{likesCount}</span>
                  <img
                    src={isLiked ? liked : like}
                    alt={isLiked ? "liked" : "like"}
                  />
                </>
              ) : (
                <img
                  src={isLiked ? liked : like}
                  alt={isLiked ? "liked" : "like"}
                />
              )}
            </div>
            <div className="icon-container-comment">
              {commentsCount > 0 ? (
                <>
                  <span className="post-comments-count-circle">
                    {commentsCount}
                  </span>
                  <img src={comment} alt="comment" />
                </>
              ) : (
                <img src={comment} alt="comment" />
              )}
            </div>
          </div>
        </div>
      </div>

      <h3 className="comment-title-section">Comments</h3>
      <div className="comments-section">
        {post.comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index} className="comment-section-container">
                <div className="left-comment">
                  <img className="avatar" src={post.avatar} alt={post.name} />
                  <strong>{comment.author} </strong>
                  <span className="post-time">
                    &#x2022; {formatTimeAgo(comment.time)}
                  </span>
                </div>
                <span className="post-content">{comment.content}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <form onSubmit={handleAddComment} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default Post;
