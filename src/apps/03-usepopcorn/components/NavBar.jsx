import PropTypes from "prop-types";
import Logo from "./Logo";
import Search from "./Search";

NavBar.propTypes = {
  query: PropTypes.any,
  onSetQuery: PropTypes.func,
  numResults: PropTypes.number,
};

export default function NavBar({ query, onSetQuery, numResults }) {
  return (
    <nav className="nav-bar">
      <Logo icon={"🍿"}>usePopcorn</Logo>
      <Search query={query} handleSetQuery={onSetQuery} />
      <NumResults>{numResults}</NumResults>
    </nav>
  );
}

NumResults.propTypes = {
  children: PropTypes.any,
};

function NumResults({ children }) {
  return (
    <p className="num-results">
      Found <strong>{children}</strong> results
    </p>
  );
}
