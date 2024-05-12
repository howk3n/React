import PropTypes from "prop-types";
import List from "./List";

Posts.propTypes = {
  posts: PropTypes.array,
};

function Posts({ posts }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
