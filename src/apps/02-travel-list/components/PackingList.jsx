import PropTypes from "prop-types";
import Item from "./Item";
import PackingListToolbar from "./PackingListToolbar";
import { useState } from "react";
import { SORT_TYPES } from "../constants";

PackingList.propTypes = {
  items: PropTypes.array,
  onToggleItemPacked: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onRemoveAllItems: PropTypes.func,
};

function PackingList({
  items,
  onToggleItemPacked,
  onRemoveItem,
  onRemoveAllItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [sortInvert, setSortInvert] = useState(1);

  const numItems = items.length;

  let sortedItems = items.slice().sort(() => sortInvert);

  if (sortBy === SORT_TYPES.DESCRIPTION) {
    sortedItems = items
      .slice()
      .sort((a, b) => sortInvert * b.description.localeCompare(a.description));
  }
  if (sortBy === SORT_TYPES.PACKED) {
    sortedItems = items
      .slice()
      .sort((a, b) => sortInvert * (Number(b.packed) - Number(a.packed)));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            data={item}
            key={item.id}
            onToggleItemPacked={onToggleItemPacked}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>
      <PackingListToolbar
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortInvert={sortInvert}
        setSortInvert={setSortInvert}
        onRemoveAllItems={onRemoveAllItems}
        numItems={numItems}
      />
    </div>
  );
}

export default PackingList;
