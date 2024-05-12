import PropTypes from "prop-types";
import styles from "./Button.module.css";
Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any,
};

function Button({ onClick, type, children }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
