import PropTypes from "prop-types";

ProgressBar.propTypes = {
  index: PropTypes.number,
  numQuestions: PropTypes.number,
  points: PropTypes.number,
  possiblePoints: PropTypes.number,
  hasAnswered: PropTypes.bool,
};

function ProgressBar({
  index,
  numQuestions,
  points,
  possiblePoints,
  hasAnswered,
}) {
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
