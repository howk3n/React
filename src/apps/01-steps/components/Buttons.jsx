import PropTypes from "prop-types";
import Button from "./Button";

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
      <Button
        className={step > 0 ? "active" : ""}
        onClick={handleClickPrevious}
      >
        <span>👈</span> {BUTTONS.PREVIOUS}
      </Button>
      <Button
        className={step < numMessages - 1 ? "active" : ""}
        onClick={handleClickNext}
      >
        {BUTTONS.NEXT} <span>👉</span>
      </Button>
    </div>
  );
}

export default Buttons;
