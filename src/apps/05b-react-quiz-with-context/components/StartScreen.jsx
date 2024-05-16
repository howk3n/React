import { ACTIONS } from "../actions";
import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery!</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: ACTIONS.QUIZ_START })}
      >
        Let&apos;s start
      </button>
    </div>
  );
}

export default StartScreen;
