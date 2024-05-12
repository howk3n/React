import PropTypes from "prop-types";

Results.propTypes = {
  posts: PropTypes.array,
};

function Results({ posts }) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
