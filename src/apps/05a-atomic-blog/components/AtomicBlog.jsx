import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../atomicblog.css";
import Header from "./Header";
import Main from "./Main";
import Archive from "./Archive";
import Footer from "./Footer";
import { createRandomPost } from "../helper";

AtomicBlog.propTypes = {
  setAppTitle: PropTypes.func,
};

// 1. Create a context
export const PostContext = createContext();
export const SearchContext = createContext();

function AtomicBlog({ setAppTitle }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    setAppTitle("Atomic Blog");
  }, [setAppTitle]);
  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    // 2. Provide value to child components
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
      }}
    >
      <div className="atomic-blog-container">
        <section>
          <button
            onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
            className="btn-fake-dark-mode"
          >
            {isFakeDark ? "☀️" : "🌙"}
          </button>
          <SearchContext.Provider
            value={{
              searchQuery,
              setSearchQuery,
            }}
          >
            <Header />
          </SearchContext.Provider>
          <Main />
          <Archive />
          <Footer />
        </section>
      </div>
    </PostContext.Provider>
  );
}

export default AtomicBlog;
