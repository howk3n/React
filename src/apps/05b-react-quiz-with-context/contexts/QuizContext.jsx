import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../reducer";
import { initialState } from "../initialState";
import { ACTIONS } from "../actions";
import { QUIZ_STATUS } from "../constants";
import { useTitle } from "../../../globalContexts/TitleContext";

const QuizContext = createContext();

QuizProvider.propTypes = {
  children: PropTypes.any,
};

function QuizProvider({ children }) {
  const [
    { status, questions, currentQuestionIndex, answer, points, highscore },
    dispatch,
  ] = useReducer(reducer, initialState);
  const { setAppTitle } = useTitle();
  const numQuestions = questions.length;
  const maxPoints = numQuestions
    ? questions.reduce((acc, { points: currPoints }) => acc + currPoints, 0)
    : 0;
  const currentQuestion = numQuestions ? questions[currentQuestionIndex] : {};
  const hasAnswered = answer !== null;
  const isFinalQuestion = currentQuestionIndex + 1 === numQuestions;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.DATA_RECIEVED, payload: data }))
      .catch(() => dispatch({ type: ACTIONS.DATA_FAILED }));
  }, []);

  useEffect(() => {
    if (status === QUIZ_STATUS.ACTIVE) {
      setAppTitle(`Question #${currentQuestionIndex + 1} | React Quiz`);
    } else setAppTitle("React Quiz");
  }, [setAppTitle, status, currentQuestionIndex]);

  return (
    <QuizContext.Provider
      value={{
        status,
        dispatch,
        questions,
        currentQuestionIndex,
        answer,
        points,
        highscore,
        isFinalQuestion,
        numQuestions,
        hasAnswered,
        currentQuestion,
        maxPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was called outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
