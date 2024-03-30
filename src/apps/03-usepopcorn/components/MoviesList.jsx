import PropTypes from "prop-types";
import Movie from "./Movie";

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default function MoviesList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie data={movie} key={movie.imdbID}></Movie>
      ))}
    </ul>
  );
}
