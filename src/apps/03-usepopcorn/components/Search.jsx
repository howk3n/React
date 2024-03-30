import PropTypes from "prop-types";

Search.propTypes = {
  query: PropTypes.any,
  handleSetQuery: PropTypes.func,
};

function Search({ query, handleSetQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => handleSetQuery(e.target.value)}
    />
  );
}
export default Search;
