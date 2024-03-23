import PropTypes from "prop-types";

StepMessage.propTypes = {
  numStep: PropTypes.number,
  message: PropTypes.string,
};

function StepMessage({ numStep, message }) {
  return (
    <p className="message">
      Step {numStep}: {message}
    </p>
  );
}

export default StepMessage;
