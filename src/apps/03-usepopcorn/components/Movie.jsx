import PropTypes from "prop-types";
import IconTextParagraph from "./IconTextParagraph";
import MovieDetails from "./MovieDetails";

Movie.propTypes = {
  data: PropTypes.object,
};

export default function Movie({ data }) {
  const { Poster, Title, Year, userRating, imdbRating, runtime } = data;

  return (
    <li>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        {userRating && imdbRating && runtime ? (
          <MovieDetails
            imdbRating={imdbRating}
            userRating={userRating}
            runtime={runtime}
          />
        ) : (
          <IconTextParagraph icon={"🗓"}>{Year}</IconTextParagraph>
        )}
        {/* <StarRating
          maxRating={5}
          messages={["Terrible", "Bad", "Okay", "Great", "Masterpiece"]}
        /> */}
      </div>
    </li>
  );
}
