import { useState } from "react";
import "../use-popcorn.css";
import { tempMovieData } from "../constants";
import Main from "./Main";
import NavBar from "./NavBar";

export default function UsePopcorn() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <div className="use-popcorn-container">
      <NavBar query={query} onSetQuery={setQuery} numResults={movies.length} />
      <Main movies={movies} />
    </div>
  );
}
