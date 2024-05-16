import { useEffect, useState } from "react";
import "../atomicblog.css";
import Header from "./Header";
import Main from "./Main";
import Archive from "./Archive";
import Footer from "./Footer";
import { PostProvider } from "./PostProvider";
import { useTitle } from "../../../globalContexts/TitleContext";

function AtomicBlog() {
  const { setAppTitle } = useTitle();
  const [isFakeDark, setIsFakeDark] = useState(false);
  useEffect(() => {
    setAppTitle("Atomic Blog");
  }, [setAppTitle]);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <div className="atomic-blog-container">
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
