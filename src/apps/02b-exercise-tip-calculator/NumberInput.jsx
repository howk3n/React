import PropTypes from "prop-types";

NumberInput.propTypes = {
  bill: PropTypes.number,
  setBill: PropTypes.func,
  children: PropTypes.any,
};

function NumberInput({ bill, setBill, children }) {
  function handleChange(e) {
    setBill(Number(e.target.value));
  }
  return (
    <label>
      {children}
      <input type="text" value={bill} onChange={handleChange} />
    </label>
  );
}
export default NumberInput;
