import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { fetchBlogsPost } = useContext(AppContext);

  useEffect(() => {
    fetchBlogsPost();
  }, []);

  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
