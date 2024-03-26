import { useState } from "react";
import PropTypes from "prop-types";
import { generateKey } from "../../utils";

AddForm.propTypes = {
  onAddItem: PropTypes.func,
};

function AddForm({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    onAddItem({ description, quantity });

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={generateKey(`selectNumOption_${i}`)}>
            {i}
          </option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Item</button>
    </form>
  );
}

export default AddForm;
