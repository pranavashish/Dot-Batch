import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "./Blog.css";

const Blogs = () => {
  //consume

  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[68px] mb-[68px]">
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length === 0 ? (
        <div>
          <p>No post found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm mt-[4px]">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-sm mt-[4px]">
              Posted on <span>{post.date}</span>
            </p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div className="flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-blue-600 underline font-bold uppercase text-[10px] mt-[10px]"
                  >{` #${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
