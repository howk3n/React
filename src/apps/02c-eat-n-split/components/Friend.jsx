import PropTypes from "prop-types";
import Button from "./Button";

Friend.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};

function Friend({ data, id, onSelect, isSelected }) {
  const { name, image, balance } = data;

  function getBalanceText() {
    if (balance < 0)
      return (
        <p className="red">
          You owe {name} {Math.abs(balance)}RSD
        </p>
      );
    if (balance > 0)
      return (
        <p className="green">
          {name} owes you {balance}RSD
        </p>
      );
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {getBalanceText()}
      <Button handleClick={() => onSelect(id)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
export default Friend;
