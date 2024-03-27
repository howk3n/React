import { useState } from "react";
import "./travel-list.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { COMPONENT_TYPES } from "./constants";
import InitialSetupForm from "./components/InitialSetupForm";
import { generateKey } from "../../utils";
import { getInitialItems } from "./travelListHelper";

function TravelList() {
  const [items, setItems] = useState([]);

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

  function setInitialItems(numTravelers, numDays, goingOutOfCountry, season) {
    setItems(
      getInitialItems(numTravelers, numDays, goingOutOfCountry, season).map(
        (item) => ({
          ...item,
          packed: false,
        })
      )
    );
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
      <AddForm onAddItem={handleAddItem} />
      {items.length > 0 ? (
        <PackingList
          items={items}
          onToggleItemPacked={handleToggleItemPacked}
          onRemoveItem={handleRemoveItem}
          onRemoveAllItems={handleRemoveAllItems}
        />
      ) : (
        <InitialSetupForm submitForm={setInitialItems} />
      )}
      <Stats numItems={numItems} numPackedItems={numPackedItems} />
    </div>
  );
}

export default TravelList;
