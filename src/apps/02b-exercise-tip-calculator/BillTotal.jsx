import PropTypes from "prop-types";

BillTotal.propTypes = {
  bill: PropTypes.number,
  tipPercentage: PropTypes.number,
};

function BillTotal({ bill, tipPercentage }) {
  const total = (bill * (tipPercentage + 100)) / 100 || 0;
  const tipValue = (bill * tipPercentage) / 100;
  return (
    <div>
      <span style={{ fontSize: "35px" }}>
        You pay ${total.toFixed(2)} (${bill.toFixed(2)} + {tipValue.toFixed(2)}{" "}
        tip)
      </span>
    </div>
  );
}
export default BillTotal;
