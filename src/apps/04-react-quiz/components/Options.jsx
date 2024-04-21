import PropTypes from "prop-types";
import { ACTIONS } from "../actions";

Options.propTypes = {
  dispatch: PropTypes.func,
  question: PropTypes.object,
  answer: PropTypes.number,
};

function Options({ dispatch, question, answer }) {
  const { correctOption, questionId, options } = question;
  const hasAnswered = answer !== null;

  function getClassNames(index) {
    let className = "btn btn-option";
    if (index === answer) className += " answer";
    if (hasAnswered)
      className += index === correctOption ? " correct" : " wrong";
    return className;
  }

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={getClassNames(index)}
          key={`${questionId}_${option}`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: ACTIONS.SET_ANSWER, payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
export default Options;
