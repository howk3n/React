import { useState } from "react";
import "./steps.css";
import ControlVisible from "./components/ControlVisible";
import StepBadge from "./components/StepBadge";
import Buttons from "./components/Buttons";
import StepMessage from "./components/StepMessage";
import { messages } from "./stepsData";

function Steps() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleClickStep(index) {
    if (step !== index) {
      setStep(index);
    }
  }

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
          <StepMessage numStep={step + 1} message={messages[step]} />
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
