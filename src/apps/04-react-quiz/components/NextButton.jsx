import PropTypes from "prop-types";

NextButton.propTypes = {
  onClickNext: PropTypes.func,
  children: PropTypes.any,
};

function NextButton({ onClickNext, children }) {
  return (
    <button className="btn btn-ui" onClick={onClickNext}>
      {children}
    </button>
  );
}

export default NextButton;
