import { useTitle } from "../../../globalContexts/TitleContext";
import { ACTIONS } from "../actions";
import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { setAppTitle } = useTitle();
  const { dispatch, points, maxPoints: possiblePoints, highscore } = useQuiz();
  const percentageScore = (points / possiblePoints) * 100;
  let emoji;
  if (percentageScore === 100) emoji = "🥇";
  else if (percentageScore >= 80) emoji = "🥳";
  else if (percentageScore >= 50) emoji = "🥉";
  else if (percentageScore >= 25) emoji = "🤔";
  else emoji = "🤦‍♂️";

  function handleResetQuiz() {
    setAppTitle("React Quiz");
    dispatch({
      type: ACTIONS.RESET_QUIZ,
    });
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {possiblePoints} ({Math.ceil(percentageScore)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={handleResetQuiz}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
