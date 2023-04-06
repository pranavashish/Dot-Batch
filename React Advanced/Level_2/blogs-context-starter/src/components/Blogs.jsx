import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "./Blog.css";

const Blogs = () => {
  //consume

  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="title">{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.catergory}</span>
            </p>
            <p>
              Posted on <span>{post.date}</span>
            </p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => {
                return <span key={index}>{` #${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
