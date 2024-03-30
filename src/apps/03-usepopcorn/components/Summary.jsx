import PropTypes from "prop-types";
import IconTextParagraph from "./IconTextParagraph";
import MovieDetails from "./MovieDetails";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

Summary.propTypes = {
  watched: PropTypes.array,
  children: PropTypes.any,
};

function Summary({ watched, children }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>{children}</h2>
      <div>
        <IconTextParagraph icon={"#️⃣"}>
          {watched.length} movies
        </IconTextParagraph>
        <MovieDetails
          imdbRating={avgImdbRating}
          userRating={avgUserRating}
          runtime={avgRuntime}
        />
      </div>
    </div>
  );
}
export default Summary;
