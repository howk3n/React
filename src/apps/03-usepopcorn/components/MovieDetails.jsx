import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import StarRating from "./StarRating/StarRating";
import { OMDB_KEY } from "../constants";
import Loader from "./Loader";

MovieDetails.propTypes = {
  movieId: PropTypes.string,
  isWatched: PropTypes.bool,
  rating: PropTypes.number,
  onClose: PropTypes.func,
  onAddWatchedMovie: PropTypes.func,
  onRemoveWatchedMovie: PropTypes.func,
  onUpdateWatchedMovie: PropTypes.func,
};

function MovieDetails({
  movieId,
  isWatched,
  rating: initialRating,
  onClose,
  onAddWatchedMovie,
  onRemoveWatchedMovie,
  onUpdateWatchedMovie,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(initialRating);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    userRating,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${movieId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [movieId]);

  function handleAddRemoveWatchedMovie() {
    if (isWatched) {
      onRemoveWatchedMovie(movieId);
    } else {
      const newMovie = restructureMovie(movie);
      onAddWatchedMovie(newMovie);
    }
    onClose();
  }

  function handleSetRating(newRating) {
    if (isWatched) {
      onUpdateWatchedMovie(movie.imdbID, { userRating: newRating });
    } else {
      setMovie((m) => ({ ...m, userRating: newRating }));
      setRating(newRating);
    }
  }

  function restructureMovie(mov) {
    return {
      ...mov,
      imdbRating: Number(imdbRating),
      title,
      year,
      poster,
      Runtime:
        typeof runtime === "string"
          ? Number(runtime.split(" ").at(0))
          : runtime,
      userRating: userRating || 0,
    };
  }

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onClose}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              <StarRating
                maxRating={10}
                onSetRating={handleSetRating}
                initialRating={rating}
              />
              {rating > 0 && (
                <button
                  className="btn-add"
                  onClick={handleAddRemoveWatchedMovie}
                >
                  {isWatched ? "Remove Movie" : "Add movie"}
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
export default MovieDetails;
