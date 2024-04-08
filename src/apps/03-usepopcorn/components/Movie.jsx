import PropTypes from "prop-types";
import IconTextParagraph from "./IconTextParagraph";
import MovieStats from "./MovieStats";

Movie.propTypes = {
  data: PropTypes.object,
  onSelect: PropTypes.func,
};

export default function Movie({ data, onSelect }) {
  const { Poster, Title, Year, userRating, imdbRating, Runtime } = data;

  function handleSelect() {
    onSelect();
  }

  return (
    <li onClick={handleSelect}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        {imdbRating && Runtime ? (
          <MovieStats
            imdbRating={imdbRating}
            userRating={userRating}
            runtime={Runtime}
          />
        ) : (
          <IconTextParagraph icon={"🗓"}>{Year}</IconTextParagraph>
        )}
      </div>
    </li>
  );
}
