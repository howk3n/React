import PropTypes from "prop-types";

IconTextParagraph.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.any,
};

function IconTextParagraph({ icon, children }) {
  return (
    <p>
      <span>{icon}</span>
      <span>{children}</span>
    </p>
  );
}
export default IconTextParagraph;
