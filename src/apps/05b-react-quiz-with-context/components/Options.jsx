import { ACTIONS } from "../actions";
import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const {
    dispatch,
    currentQuestion: { correctOption, questionId, options },
    answer,
  } = useQuiz();
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
