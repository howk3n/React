import PropTypes from "prop-types";
import { useEffect, useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./initialState";
import { ACTIONS } from "./actions";

BankAccount.propTypes = {
  setAppTitle: PropTypes.func,
};

export default function BankAccount({ setAppTitle }) {
  const [
    { balance, loan, isActive, withdrawAmount, depositAmount, loanAmount },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    setAppTitle("Bank Account");
  }, [setAppTitle]);

  function handleSetWithdrawAmount(e) {
    const val = Number(e.target.value);
    if (!isNaN(val) && val > 0 && val <= balance) {
      dispatch({
        type: ACTIONS.SET_WITHDRAW_AMOUNT,
        payload: Number(e.target.value),
      });
    }
  }

  function handleSetDepositAmount(e) {
    if (!isNaN(Number(e.target.value)) && Number(e.target.value) > 0) {
      dispatch({
        type: ACTIONS.SET_DEPOSIT_AMOUNT,
        payload: Number(e.target.value),
      });
    }
  }
  function handleSetLoanAmount(e) {
    if (!isNaN(Number(e.target.value)) && Number(e.target.value) > 0) {
      dispatch({
        type: ACTIONS.SET_LOAN_AMOUNT,
        payload: Number(e.target.value),
      });
    }
  }

  return (
    <div style={{ fontFamily: "sansSerif", textAlign: "center" }}>
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.OPEN_ACCOUNT });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <input
          value={depositAmount}
          onChange={handleSetDepositAmount}
          disabled={!isActive}
        />
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DEPOSIT });
          }}
          disabled={!isActive}
        >
          Deposit
        </button>
      </p>
      <p>
        <input
          value={withdrawAmount}
          onChange={handleSetWithdrawAmount}
          disabled={!isActive}
        />
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.WITHDRAW });
          }}
          disabled={!isActive || balance < withdrawAmount}
        >
          Withdraw
        </button>
      </p>
      <p>
        <input
          value={loanAmount}
          onChange={handleSetLoanAmount}
          disabled={!isActive}
        />
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.TAKE_LOAN });
          }}
          disabled={!isActive}
        >
          Request a loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.PAY_LOAN });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.CLOSE_ACCOUNT });
          }}
          disabled={!isActive || loan || balance}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
