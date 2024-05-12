import { useContext } from "react";
import { SearchContext } from "./AtomicBlog";

function SearchPosts() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

export default SearchPosts;
