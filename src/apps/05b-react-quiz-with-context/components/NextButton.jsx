import PropTypes from "prop-types";
import { useQuiz } from "../contexts/QuizContext";
import { ACTIONS } from "../actions";

NextButton.propTypes = {
  children: PropTypes.any,
};

function NextButton({ children }) {
  const { dispatch, isFinalQuestion } = useQuiz();
  function handleClickNext() {
    dispatch({
      type: !isFinalQuestion ? ACTIONS.NEXT_QUESTION : ACTIONS.FINISH_QUIZ,
    });
  }
  return (
    <button className="btn btn-ui" onClick={handleClickNext}>
      {children}
    </button>
  );
}

export default NextButton;
