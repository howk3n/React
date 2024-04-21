import PropTypes from "prop-types";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import "../reactquiz.css";
import Main from "./Main";
import { QUIZ_STATUS, SECONDS_PER_QUESTION } from "../constants";
import reducer from "../reducer";
import { ACTIONS } from "../actions";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import { initialState } from "../initialState";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

ReactQuiz.propTypes = {
  setAppTitle: PropTypes.func,
};

function ReactQuiz({ setAppTitle }) {
  const [
    { status, questions, currentQuestionIndex, answer, points, highscore },
    dispatch,
  ] = useReducer(reducer, initialState);

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

  function handleClickNext() {
    dispatch({
      type: !isFinalQuestion ? ACTIONS.NEXT_QUESTION : ACTIONS.FINISH_QUIZ,
    });
  }

  function handleResetQuiz() {
    setAppTitle("React Quiz");
    dispatch({
      type: ACTIONS.RESET_QUIZ,
    });
  }

  return (
    <div className="react-quiz-container">
      <div className="react-quiz">
        <Header />
        <Main>
          {status === QUIZ_STATUS.LOADING && <Loader />}
          {status === QUIZ_STATUS.ERROR && <Error />}
          {status === QUIZ_STATUS.READY && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === QUIZ_STATUS.ACTIVE && (
            <>
              <ProgressBar
                index={currentQuestionIndex}
                numQuestions={numQuestions}
                points={points}
                possiblePoints={maxPoints}
                hasAnswered={hasAnswered}
              />
              <Question
                data={currentQuestion}
                dispatch={dispatch}
                answer={answer}
              />
              <Footer>
                <Timer
                  dispatch={dispatch}
                  startingTime={numQuestions * SECONDS_PER_QUESTION}
                />
                {hasAnswered && (
                  <NextButton onClickNext={handleClickNext}>
                    {!isFinalQuestion ? "Next" : "Finish"}
                  </NextButton>
                )}
              </Footer>
            </>
          )}
          {status === QUIZ_STATUS.FINISHED && (
            <FinishScreen
              points={points}
              possiblePoints={maxPoints}
              highscore={highscore}
              resetQuiz={handleResetQuiz}
            />
          )}
          {/* <p>1/15</p>
          <p>Question?</p> */}
        </Main>
      </div>
    </div>
  );
}

export default ReactQuiz;
