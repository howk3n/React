import { ACTIONS } from "./actions";
import { initialState } from "./initialState";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.OPEN_ACCOUNT:
      return { ...state, isActive: true };
    case ACTIONS.CLOSE_ACCOUNT:
      return { ...initialState };
    case ACTIONS.SET_WITHDRAW_AMOUNT:
      return { ...state, withdrawAmount: action.payload };
    case ACTIONS.WITHDRAW:
      return { ...state, balance: state.balance - state.withdrawAmount };
    case ACTIONS.SET_DEPOSIT_AMOUNT:
      return { ...state, depositAmount: action.payload };
    case ACTIONS.DEPOSIT:
      return { ...state, balance: state.balance + state.depositAmount };
    case ACTIONS.SET_LOAN_AMOUNT:
      return { ...state, loanAmount: action.payload };
    case ACTIONS.TAKE_LOAN:
      return {
        ...state,
        balance: state.balance + state.loanAmount,
        loan: state.balance + state.loanAmount,
      };
    case ACTIONS.PAY_LOAN:
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    default:
      throw new Error("Action Unknown");
  }
}
