import PropTypes from "prop-types";
import IconTextParagraph from "./IconTextParagraph";

MovieStats.propTypes = {
  imdbRating: PropTypes.number,
  userRating: PropTypes.number,
  runtime: PropTypes.number,
};

function MovieStats({ imdbRating, userRating, runtime }) {
  return (
    <>
      <IconTextParagraph icon={"⭐️"}>{imdbRating}</IconTextParagraph>
      <IconTextParagraph icon={"🌟"}>{userRating}</IconTextParagraph>
      <IconTextParagraph icon={"⏳"}>{runtime} min</IconTextParagraph>
    </>
  );
}
export default MovieStats;
