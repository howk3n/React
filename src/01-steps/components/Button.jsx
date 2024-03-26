import PropTypes from "prop-types";

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.any),
};

function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
