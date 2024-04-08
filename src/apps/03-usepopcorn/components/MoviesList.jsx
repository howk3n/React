import PropTypes from "prop-types";
import Movie from "./Movie";

MoviesList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
  className: PropTypes.string,
};

export default function MoviesList({
  movies,
  onSelectMovie = () => {},
  className = "",
}) {
  return (
    <ul className={`list ` + className}>
      {movies?.map((movie) => (
        <Movie
          data={movie}
          onSelect={() => onSelectMovie(movie.imdbID)}
          key={movie.imdbID}
        ></Movie>
      ))}
    </ul>
  );
}
