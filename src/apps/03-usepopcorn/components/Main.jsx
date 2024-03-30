import { useState } from "react";
import PropTypes from "prop-types";
import CollapsibleBox from "./CollapsibleBox";
import MoviesList from "./MoviesList";
import Summary from "./Summary";
import { tempWatchedData } from "../constants";

Main.propTypes = {
  movies: PropTypes.array,
};

function Main({ movies }) {
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <main className="main">
      <CollapsibleBox>
        <MoviesList movies={movies} />
      </CollapsibleBox>
      <CollapsibleBox>
        <Summary watched={watched}>Movies you watched</Summary>
        <MoviesList movies={watched} />
      </CollapsibleBox>
    </main>
  );
}
export default Main;
