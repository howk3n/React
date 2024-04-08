import PropTypes from "prop-types";
import IconTextParagraph from "./IconTextParagraph";
import MovieStats from "./MovieStats";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

Summary.propTypes = {
  watched: PropTypes.array,
  children: PropTypes.any,
};

function Summary({ watched, children }) {
  const avgImdbRating = Number(
    watched.length > 0
      ? average(watched.map((movie) => movie.imdbRating)).toFixed(1)
      : 0
  );
  const avgUserRating = Number(
    watched.length > 0
      ? average(watched.map((movie) => movie.userRating)).toFixed(2)
      : 0
  );
  const avgRuntime = Number(average(watched.map((movie) => movie.Runtime)));

  return (
    <div className="summary">
      <h2>{children}</h2>
      <div>
        <IconTextParagraph icon={"#️⃣"}>
          {watched.length} movies
        </IconTextParagraph>
        <MovieStats
          imdbRating={avgImdbRating}
          userRating={avgUserRating}
          runtime={avgRuntime}
        />
      </div>
    </div>
  );
}
export default Summary;
