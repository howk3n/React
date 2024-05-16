import { useQuiz } from "../contexts/QuizContext";

function ProgressBar() {
  const {
    currentQuestionIndex: index,
    numQuestions,
    points,
    maxPoints: possiblePoints,
    hasAnswered,
  } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(hasAnswered)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>
          {points} / {possiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default ProgressBar;
