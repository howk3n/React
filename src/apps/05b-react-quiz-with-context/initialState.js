import { QUIZ_STATUS } from "./constants";

export const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  // loading, error, ready, active, finished
  status: QUIZ_STATUS.LOADING,
  answer: null,
  points: 0,
  highscore: 0,
};
