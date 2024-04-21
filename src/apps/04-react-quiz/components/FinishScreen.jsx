import PropTypes from "prop-types";

FinishScreen.propTypes = {
  points: PropTypes.number,
  possiblePoints: PropTypes.number,
  highscore: PropTypes.number,
  resetQuiz: PropTypes.func,
};

function FinishScreen({ points, possiblePoints, highscore, resetQuiz }) {
  const percentageScore = (points / possiblePoints) * 100;
  let emoji;
  if (percentageScore === 100) emoji = "🥇";
  else if (percentageScore >= 80) emoji = "🥳";
  else if (percentageScore >= 50) emoji = "🥉";
  else if (percentageScore >= 25) emoji = "🤔";
  else emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {possiblePoints} ({Math.ceil(percentageScore)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={resetQuiz}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
