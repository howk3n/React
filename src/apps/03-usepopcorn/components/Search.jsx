import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useKeyEvent } from "../../../globalHooks/useKeyEvent";

Search.propTypes = {
  query: PropTypes.any,
  setQuery: PropTypes.func,
};

function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  useKeyEvent("Enter", () => {
    if (document.activeElement === inputElement.current) return;
    inputElement.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
export default Search;
