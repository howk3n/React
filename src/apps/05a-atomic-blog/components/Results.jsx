import { useContext } from "react";
import { PostContext } from "./AtomicBlog";

function Results() {
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
