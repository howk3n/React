import { useEffect, useState } from "react";
import "../atomicblog.css";
import Header from "./Header";
import Main from "./Main";
import Archive from "./Archive";
import Footer from "./Footer";
import { PostProvider } from "./PostContext";
import { useTitle } from "../../../globalContexts/TitleContext";

function AtomicBlog() {
  const { setAppTitle } = useTitle();
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    setAppTitle("Atomic Blog");
  }, [setAppTitle]);

  return (
    <div
      className={`atomic-blog-container ${isFakeDark ? "fake-dark-mode" : ""}`}
    >
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <PostProvider>
          <Header />
          <Main />
          <Archive />
        </PostProvider>
        <Footer />
      </section>
    </div>
  );
}

export default AtomicBlog;
