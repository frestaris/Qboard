import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Main from "./components/Main";
import Navigation from "./components/Navigation";

function App() {
  const initialPosts = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/32",
      name: "John Doe",
      time: "2 hours ago",
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/32",
      name: "Jane Smith",
      time: "5 hours ago",
      title: "Second Post",
      content: "Here is the second post with some more content.",
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/32",
      name: "Alice Johnson",
      time: "1 day ago",
      title: "Third Post",
      content: "Third post content goes here, a bit longer to show layout.",
    },
    {
      id: 4,
      avatar: "https://via.placeholder.com/32",
      name: "John Doe",
      time: "2 hours ago",
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 5,
      avatar: "https://via.placeholder.com/32",
      name: "Jane Smith",
      time: "5 hours ago",
      title: "Second Post",
      content: "Here is the second post with some more content.",
    },
    {
      id: 6,
      avatar: "https://via.placeholder.com/32",
      name: "Alice Johnson",
      time: "1 day ago",
      title: "Third Post",
      content: "Third post content goes here, a bit longer to show layout.",
    },
  ];
  const [posts, setPosts] = useState(initialPosts);

  const handleSearch = (query) => {
    if (query.length >= 3) {
      const filteredPosts = initialPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setPosts(filteredPosts);
    } else {
      setPosts(initialPosts);
    }
  };
  return (
    <>
      <Navigation onSearch={handleSearch} />
      <div className="content-container">
        <Dashboard />
        <Main posts={posts} />
      </div>
    </>
  );
}

export default App;
