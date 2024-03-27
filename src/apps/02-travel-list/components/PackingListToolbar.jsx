import PropTypes from "prop-types";
import { COMPONENT_TYPES, SORT_DESCRIPTIONS, SORT_TYPES } from "../constants";
import { generateKey } from "../../../utils";

PackingListToolbar.propTypes = {
  sortBy: PropTypes.string,
  setSortBy: PropTypes.func,
  sortInvert: PropTypes.number,
  setSortInvert: PropTypes.func,
  onRemoveAllItems: PropTypes.func,
  numItems: PropTypes.number,
};

function PackingListToolbar({
  sortBy,
  setSortBy,
  sortInvert,
  setSortInvert,
  onRemoveAllItems,
  numItems,
}) {
  function handleSortBy(e) {
    setSortBy(e.target.value);
  }
  function handleSortInvert(e) {
    setSortInvert(Number(e.target.value));
  }

  return (
    <div className="actions">
      <select value={sortBy} onChange={handleSortBy}>
        {Object.values(SORT_TYPES).map((sortType) => (
          <option value={sortType} key={generateKey(COMPONENT_TYPES.SORT)}>
            {SORT_DESCRIPTIONS[sortType]}
          </option>
        ))}
      </select>
      <select value={sortInvert} onChange={handleSortInvert}>
        <option value={1}>Descending</option>
        <option value={-1}>Ascending</option>
      </select>
      {numItems > 0 ? (
        <button onClick={onRemoveAllItems}>Clear List</button>
      ) : null}
    </div>
  );
}

export default PackingListToolbar;
