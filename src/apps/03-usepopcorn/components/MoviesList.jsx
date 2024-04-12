import PropTypes from "prop-types";
import Movie from "./Movie";

MoviesList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
  onRemoveWatchedMovie: PropTypes.func,
  className: PropTypes.string,
};

function MoviesList({
  movies,
  onSelectMovie = () => {},
  onRemoveWatchedMovie = () => {},
  className = "",
}) {
  return (
    <ul className={`list ` + className}>
      {movies?.map((movie) => (
        <Movie
          data={movie}
          onSelect={() => onSelectMovie(movie.imdbID)}
          onRemoveWatchedMovie={onRemoveWatchedMovie}
          key={movie.imdbID}
        ></Movie>
      ))}
    </ul>
  );
}

WatchedMoviesList.propTypes = {
  movies: PropTypes.array,
  onRemoveWatchedMovie: PropTypes.func,
};

export function WatchedMoviesList({ movies, onRemoveWatchedMovie }) {
  return (
    <MoviesList movies={movies} onRemoveWatchedMovie={onRemoveWatchedMovie} />
  );
}

NonWatchedMoviesList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
  className: PropTypes.string,
};

export function NonWatchedMoviesList({
  movies,
  onSelectMovie,
  className = "",
}) {
  return (
    <MoviesList
      movies={movies}
      onSelectMovie={onSelectMovie}
      className={className}
    />
  );
}
