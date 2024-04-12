import { useEffect, useState } from "react";
import "../use-popcorn.css";
import CollapsibleBox from "./CollapsibleBox";
import { NonWatchedMoviesList, WatchedMoviesList } from "./MoviesList";
import Summary from "./Summary";
import Main from "./Main";
import { OMDB_KEY } from "../constants";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import NavBar from "./NavBar";
import MovieDetails from "./MovieDetails";

export default function UsePopcorn() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${query}}`
        );
        if (!res.ok)
          throw new Error(
            "Something went wrong with fetching movies from omdbapi"
          );
        const data = await res.json();
        if (data.Response === "False") throw new Error("No movies found");

        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);

  function handleSelectMovie(key) {
    setSelectedMovieId((id) => (id === key ? null : key));
  }

  function handleDeselectMovie() {
    setSelectedMovieId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((w) => [...w, movie]);
  }

  function handleRemoveWatchedMovie(id) {
    setWatched((w) => w.filter((mov) => mov.imdbID !== id));
  }

  function handleUpdateWatchedMovie(id, data) {
    setWatched((w) =>
      w.map((m) => (m.imdbID === id ? { ...Object.assign(m, data) } : m))
    );
  }

  const getMovieBoxContent = () =>
    error ? (
      <ErrorMessage message={error} />
    ) : isLoading ? (
      <Loader />
    ) : (
      <NonWatchedMoviesList
        movies={movies}
        onSelectMovie={handleSelectMovie}
        className="list-movies"
      />
    );

  return (
    <div className="use-popcorn-container">
      <NavBar query={query} onSetQuery={setQuery} numResults={movies.length} />
      <Main>
        <CollapsibleBox>{getMovieBoxContent()}</CollapsibleBox>
        <CollapsibleBox>
          {selectedMovieId ? (
            <MovieDetails
              movieId={selectedMovieId}
              isWatched={!!watched?.some((w) => w.imdbID === selectedMovieId)}
              rating={
                watched.find((w) => w.imdbID === selectedMovieId)?.userRating ||
                0
              }
              onClose={handleDeselectMovie}
              onAddWatchedMovie={handleAddWatchedMovie}
              onRemoveWatchedMovie={handleRemoveWatchedMovie}
              onUpdateWatchedMovie={handleUpdateWatchedMovie}
              key={selectedMovieId}
            />
          ) : (
            <>
              <Summary watched={watched}>Movies you watched</Summary>
              <WatchedMoviesList
                movies={watched}
                onRemoveWatchedMovie={handleRemoveWatchedMovie}
              />
            </>
          )}
        </CollapsibleBox>
      </Main>
    </div>
  );
}
