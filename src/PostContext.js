import { createContext, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "./data";

const PostContext = createContext();

export function PostProvider({ children, isLoggedIn }) {
  const [posts, setPosts] = useState(data);
  const [query, setQuery] = useState("");
  const { category } = useParams();
  const [viewMode, setViewMode] = useState("row");
  const [sortOrder, setSortOrder] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [likedPosts, setLikedPosts] = useState({});

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryInput, setCategoryInput] = useState("Select a category");

  const navigate = useNavigate();
  const handleSearch = (query) => {
    setQuery(query);
    if (query.length >= 2) {
      const filteredPosts = data.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setPosts(filteredPosts);
    } else {
      setPosts(data);
    }
  };

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleClearPosts = () => {
    setQuery("");
    setPosts(data);
  };

  const toggleLikePost = (postId) => {
    if (!isLoggedIn) {
      alert("You need to log in to like a post.");
      navigate("/login");
      return;
    }

    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === postId) {
          const isLiked = likedPosts[postId];
          return {
            ...post,
            likes: isLiked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      });
    });

    setLikedPosts((prevLikedPosts) => {
      const isLiked = prevLikedPosts[postId];
      const updatedLikedPosts = {
        ...prevLikedPosts,
        [postId]: !isLiked,
      };

      // Store the liked posts in local storage
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));

      return updatedLikedPosts;
    });
  };

  const filteredPosts = category
    ? posts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase()
      )
    : posts;

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);
    if (sortOrder === "latest") return dateB - dateA;
    if (sortOrder === "oldest") return dateA - dateB;
    if (sortOrder === "alphabetical") return a.title.localeCompare(b.title);
    return 0;
  });

  const searchedPosts = sortedPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

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
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        setPosts,
        handleSearch,
        handleAddPost,
        handleClearPosts,
        viewMode,
        setViewMode,
        sortOrder,
        setSortOrder,
        isDropdownOpen,
        setIsDropdownOpen,
        likedPosts,
        setLikedPosts,
        query,
        setQuery,
        toggleLikePost,
        formatTimeAgo,
        avatar,
        setAvatar,
        name,
        setName,
        title,
        setTitle,
        content,
        setContent,
        categoryInput,
        setCategoryInput,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePostContext() {
  return useContext(PostContext);
}
