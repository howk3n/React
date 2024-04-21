import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ACTIONS } from "../actions";

Timer.propTypes = {
  dispatch: PropTypes.func,
  startingTime: PropTypes.number,
};

function Timer({ dispatch, startingTime }) {
  const [secondsRemaining, setSecondsRemaining] = useState(startingTime);
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTimeRemaining =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining === 0) {
        dispatch({ type: ACTIONS.FINISH_QUIZ });
      } else {
        setSecondsRemaining((s) => s - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [secondsRemaining, dispatch]);
  return <div className="timer">{formattedTimeRemaining}</div>;
}

export default Timer;
