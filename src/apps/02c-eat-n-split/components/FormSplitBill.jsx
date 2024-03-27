import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

FormSplitBill.propTypes = {
  friend: PropTypes.object,
  onSplitBill: PropTypes.func,
};

function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [payer, setPayer] = useState("user");
  const [errorActive, setErrorActive] = useState(false);
  const friendExpense = bill - myExpense;

  function handleSubmit(e) {
    e.preventDefault();
    if (bill <= 0 || myExpense < 0 || bill < myExpense) {
      setErrorActive(true);
      return;
    }
    onSplitBill(payer === "user" ? friendExpense : -myExpense);
  }

  return (
    <form
      className="form-split-bill"
      onSubmit={handleSubmit}
      onClick={() => setErrorActive(false)}
    >
      <h2>Split a bill with {friend.name}</h2>

      <label>💵 Bill Value</label>
      <input
        type="text"
        value={bill}
        onSelect={() => setErrorActive(false)}
        onChange={(e) => {
          setBill((bill) =>
            !isNaN(Number(e.target.value)) ? Number(e.target.value) : bill
          );
          setErrorActive(false);
        }}
        style={errorActive ? { backgroundColor: "rgba(255, 0, 0, 0.4)" } : {}}
      />

      <label>💵 Your expense</label>
      <input
        type="text"
        value={myExpense}
        onSelect={() => setErrorActive(false)}
        onChange={(e) => {
          setMyExpense((expense) =>
            !isNaN(Number(e.target.value)) ? Number(e.target.value) : expense
          );
          setErrorActive(false);
        }}
        style={errorActive ? { backgroundColor: "rgba(255, 0, 0, 0.4)" } : {}}
      />

      <label>💵 {friend.name}&apos;s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill?</label>
      <select
        value={payer}
        onSelect={() => setErrorActive(false)}
        onChange={(e) => {
          setErrorActive(false);
          setPayer(e.target.value);
        }}
      >
        <option value="user">Me</option>
        <option value={friend.id}>{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
export default FormSplitBill;
