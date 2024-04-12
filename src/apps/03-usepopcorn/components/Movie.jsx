import PropTypes from "prop-types";
import IconTextParagraph from "./IconTextParagraph";
import MovieStats from "./MovieStats";

Movie.propTypes = {
  data: PropTypes.object,
  onSelect: PropTypes.func,
  onRemoveWatchedMovie: PropTypes.func,
};

export default function Movie({ data, onSelect, onRemoveWatchedMovie }) {
  const { Poster, Title, Year, userRating, imdbRating, Runtime, imdbID } = data;

  function handleSelect() {
    onSelect();
  }

  return (
    <li onClick={handleSelect}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        {imdbRating && Runtime ? (
          <>
            <MovieStats
              imdbRating={imdbRating}
              userRating={userRating}
              runtime={Runtime}
            />
            <button
              className="btn-delete"
              onClick={() => onRemoveWatchedMovie(imdbID)}
            >
              X
            </button>
          </>
        ) : (
          <IconTextParagraph icon={"🗓"}>{Year}</IconTextParagraph>
        )}
      </div>
    </li>
  );
}
