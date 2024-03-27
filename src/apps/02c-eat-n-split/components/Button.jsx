import PropTypes from "prop-types";

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.any,
};

function Button({ handleClick, children }) {
  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
}
export default Button;
