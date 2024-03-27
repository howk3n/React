import PropTypes from "prop-types";

NumberInput.propTypes = {
  bill: PropTypes.number,
  onSetBill: PropTypes.func,
  children: PropTypes.any,
};

function NumberInput({ bill, onSetBill, children }) {
  function handleChange(e) {
    onSetBill(Number(e.target.value));
  }
  return (
    <div>
      <label>
        {children}
        <input type="text" value={bill} onChange={handleChange} />
      </label>
    </div>
  );
}
export default NumberInput;
