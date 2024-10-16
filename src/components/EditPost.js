import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostContext } from "../PostContext";
import "./EditPost.css"; // Create a CSS file for styling if needed

function EditPost() {
  const { posts, setPosts } = usePostContext();
  const { id } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();

  // Find the post by ID
  const postToEdit = posts.find((post) => post.id === parseInt(id));

  // State variables for the form
  const [avatar, setAvatar] = React.useState("");
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [categoryInput, setCategoryInput] = React.useState("");

  // Populate form fields with existing post data
  useEffect(() => {
    if (postToEdit) {
      setAvatar(postToEdit.avatar);
      setName(postToEdit.name);
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
      setCategoryInput(postToEdit.category);
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: postToEdit.id,
      avatar,
      name,
      time: postToEdit.time, // Keep the original time
      title,
      content,
      category: categoryInput,
    };

    // Update the post in the posts array
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );

    navigate("/");
  };

  if (!postToEdit) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit} className="edit-post-form">
        <h2>Edit Post</h2>
        {/* <label>
          Avatar:
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
        </label>*/}
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
          <select
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
          >
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
        <button type="submit" className="edit-post-button">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
