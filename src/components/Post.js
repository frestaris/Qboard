import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../PostContext";
import "./Post.css";

function Post() {
  const { id } = useParams();
  const { posts, setPosts } = usePostContext();
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
        <img src={post.avatar} alt={post.name} className="post-avatar" />
        <p>
          <strong>{post.name}</strong> - {new Date(post.time).toLocaleString()}
        </p>
        <p>{post.content}</p>
        <p>
          <em>Category: {post.category}</em>
        </p>
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        {post.comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul>
            {post.comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.author}</strong>: {comment.content}{" "}
                <em>({new Date(comment.time).toLocaleString()})</em>
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
