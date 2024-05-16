import { useReducer } from "react";
import { ACTIONS } from "../actions";

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - state.step };
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + state.step };
    case ACTIONS.SET_COUNT:
      return { ...state, count: action.count };
    case ACTIONS.SET_STEP:
      return { ...state, step: action.step };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: ACTIONS.DECREMENT, step });
  };

  const inc = function () {
    dispatch({ type: ACTIONS.INCREMENT, step });
  };

  const defineCount = function (e) {
    if (!isNaN(Number(e.target.value))) {
      dispatch({ type: ACTIONS.SET_COUNT, count: Number(e.target.value) });
    }
  };

  const defineStep = function (e) {
    dispatch({ type: ACTIONS.SET_STEP, step: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: ACTIONS.RESET });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
