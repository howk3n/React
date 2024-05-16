import { QUIZ_STATUS } from "../constants";
import { useQuiz } from "../contexts/QuizContext";
import Error from "./Error";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import StartScreen from "./StartScreen";
import Timer from "./Timer";

function ReactQuizBody() {
  const { isFinalQuestion, status, hasAnswered } = useQuiz();

  return (
    <div className="react-quiz-container">
      <div className="react-quiz">
        <Header />
        <Main>
          {status === QUIZ_STATUS.LOADING && <Loader />}
          {status === QUIZ_STATUS.ERROR && <Error />}
          {status === QUIZ_STATUS.READY && <StartScreen />}
          {status === QUIZ_STATUS.ACTIVE && (
            <>
              <ProgressBar />
              <Question />
              <Footer>
                <Timer />
                {hasAnswered && (
                  <NextButton>
                    {!isFinalQuestion ? "Next" : "Finish"}
                  </NextButton>
                )}
              </Footer>
            </>
          )}
          {status === QUIZ_STATUS.FINISHED && <FinishScreen />}
          {/* <p>1/15</p>
              <p>Question?</p> */}
        </Main>
      </div>
    </div>
  );
}

export default ReactQuizBody;
