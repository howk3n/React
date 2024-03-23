import PropTypes from "prop-types";

const BUTTONS = {
  PREVIOUS: "Previous",
  NEXT: "Next",
};

Buttons.propTypes = {
  setStep: PropTypes.func,
  step: PropTypes.number,
  numMessages: PropTypes.number,
};

function Buttons({ setStep, step, numMessages }) {
  function handleClickPrevious() {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  }
  function handleClickNext() {
    if (step < numMessages - 1) {
      setStep((s) => s + 1);
    }
  }
  return (
    <div className="buttons">
      <button
        className={step > 0 ? "active" : ""}
        onClick={handleClickPrevious}
      >
        <span>{BUTTONS.PREVIOUS}</span>
      </button>
      <button
        className={step < numMessages - 1 ? "active" : ""}
        onClick={handleClickNext}
      >
        <span>{BUTTONS.NEXT}</span>
      </button>
    </div>
  );
}

export default Buttons;
