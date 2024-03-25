import { useState } from "react";
import "./travel-list.css";
import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { generateKey, getInitialItems } from "./travelListHelper";
import { COMPONENT_TYPES } from "./constants";

const numTravelers = 2;
const numDays = 7;
const goingOutOfCountry = true;

function TravelList() {
  const [items, setItems] = useState(
    getInitialItems(numTravelers, numDays, goingOutOfCountry).map((item) => ({
      ...item,
      packed: false,
    }))
  );

  const numItems = items.length;
  const numPackedItems = items.filter((i) => i.packed).length;

  function handleAddItem(item) {
    setItems((it) => [
      ...it,
      { ...item, id: generateKey(COMPONENT_TYPES.ITEM), packed: false },
    ]);
  }

  function handleToggleItemPacked(id) {
    setItems((it) =>
      it.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleRemoveItem(id) {
    setItems((it) => it.filter((i) => i.id !== id));
  }

  function handleRemoveAllItems() {
    if (!items.length) return;
    const confirmed = window.confirm(
      "Are you sure you want to clear your packing list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="travel-list">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onToggleItemPacked={handleToggleItemPacked}
        onRemoveItem={handleRemoveItem}
        onRemoveAllItems={handleRemoveAllItems}
      />
      <Stats numItems={numItems} numPackedItems={numPackedItems} />
    </div>
  );
}

export default TravelList;
