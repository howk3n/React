import { ACTIONS } from "./actions";
import { QUIZ_STATUS } from "./constants";
import { initialState } from "./initialState";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.DATA_RECIEVED:
      return { ...state, questions: action.payload, status: QUIZ_STATUS.READY };
    case ACTIONS.DATA_FAILED:
      return { ...state, status: QUIZ_STATUS.ERROR };
    case ACTIONS.QUIZ_START:
      return { ...state, status: QUIZ_STATUS.ACTIVE };
    case ACTIONS.SET_ANSWER: {
      const question = state.questions.at(state.currentQuestionIndex);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answer: null,
      };
    case ACTIONS.FINISH_QUIZ:
      return {
        ...state,
        status: QUIZ_STATUS.FINISHED,
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case ACTIONS.RESET_QUIZ:
      return {
        ...initialState,
        status: QUIZ_STATUS.READY,
        questions: state.questions,
        highscore: state.highscore,
      };
    default:
      throw new Error("Action unknown");
  }
}
