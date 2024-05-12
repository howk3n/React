import PropTypes from "prop-types";
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

Main.propTypes = {
  posts: PropTypes.array,
  onAddPost: PropTypes.func,
};

function Main({ posts, onAddPost }) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;
