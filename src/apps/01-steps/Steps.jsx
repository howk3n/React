import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./steps.css";
import ControlVisible from "./components/ControlVisible";
import StepBadge from "./components/StepBadge";
import Buttons from "./components/Buttons";
import Message from "./components/Message";
import { messages } from "./stepsData";

Steps.propTypes = {
  setAppTitle: PropTypes.func,
};

function Steps({ setAppTitle }) {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleClickStep(index) {
    if (step !== index) {
      setStep(index);
    }
  }

  useEffect(() => {
    setAppTitle("Steps");
  }, [setAppTitle]);

  return (
    <div className="stepsContainer">
      <ControlVisible setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && (
        <div className="steps">
          <div className="stepBadges">
            {messages.map((_, index) => {
              const className = step >= index ? "active" : "";
              const style = step !== index ? { cursor: "pointer" } : "";
              return (
                <StepBadge
                  key={`step_${index}`}
                  onClickStep={handleClickStep}
                  index={index}
                  divClassName={className}
                  divStyle={style}
                />
              );
            })}
          </div>
          <Message stepVal={step + 1}>{messages[step]}</Message>
          <Buttons
            setStep={setStep}
            step={step}
            numMessages={messages.length}
          />
        </div>
      )}
    </div>
  );
}

export default Steps;
