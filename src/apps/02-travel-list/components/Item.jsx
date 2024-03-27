import PropTypes from "prop-types";

Item.propTypes = {
  data: PropTypes.object,
  onToggleItemPacked: PropTypes.func,
  onRemoveItem: PropTypes.func,
};

function Item({ data, onToggleItemPacked, onRemoveItem }) {
  const { quantity, description, id, packed } = data;

  function handleTogglePacked() {
    onToggleItemPacked(id);
  }

  function handleClickRemove() {
    onRemoveItem(id);
  }

  return (
    <li>
      <input type="checkbox" value={packed} onChange={handleTogglePacked} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={handleClickRemove}>❌</button>
    </li>
  );
}

export default Item;
