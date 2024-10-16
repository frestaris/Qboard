import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../PostContext";
import "./Post.css";

function Post() {
  const { id } = useParams();
  const { posts, setPosts, formatTimeAgo } = usePostContext();
  const [newComment, setNewComment] = useState("");

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found.</div>;
  }

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

        <span className="post-category">
          Category: <strong>{post.category}</strong>
        </span>
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
        <form onSubmit={handleAddComment} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
