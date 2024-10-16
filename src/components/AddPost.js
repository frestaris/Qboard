import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../PostContext";
import "./AddPost.css";

function AddPost() {
  const { handleAddPost } = usePostContext();
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      avatar,
      name,
      time: new Date().toISOString(),
      title,
      content,
      category,
    };

    handleAddPost(newPost);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="add-post-form">
      <h2>Add New Post</h2>
      <label>
        Avatar URL:
        <input
          type="text"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Enter avatar URL"
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          required
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here"
          required
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Music">Music</option>
          <option value="Health">Health</option>
          <option value="Movie">Movie</option>
          <option value="News">News</option>
          <option value="Gaming">Gaming</option>
          <option value="Education">Education</option>
          <option value="DIY">DIY</option>
          <option value="Travel">Travel</option>
        </select>
      </label>
      <button type="submit" className="add-post-button">
        Add Post
      </button>
    </form>
  );
}

export default AddPost;
