import "./Main.css";
import Post from "./Post";

function Main({ posts }) {
  return (
    <div className="main-content">
      <h1>Category Title</h1>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export default Main;
