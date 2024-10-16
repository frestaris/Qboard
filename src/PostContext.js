import { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";

const PostContext = createContext();

export function PostProvider({ children }) {
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
  const [categoryInput, setCategoryInput] = useState("");

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
      return {
        ...prevLikedPosts,
        [postId]: !isLiked,
      };
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
        // AddPost form values and handlers
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
