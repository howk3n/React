import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./travel-list.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { COMPONENT_TYPES } from "./constants";
import InitialSetupForm from "./components/InitialSetupForm";
import { getInitialItems } from "./travelListHelper";

TravelList.propTypes = {
  setAppTitle: PropTypes.func,
};

function TravelList({ setAppTitle }) {
  const [items, setItems] = useState([]);

  const numItems = items.length;
  const numPackedItems = items.filter((i) => i.packed).length;

  useEffect(() => {
    setAppTitle("Travel List");
  }, [setAppTitle]);

  function handleAddItem(item) {
    setItems((it) => [
      ...it,
      {
        ...item,
        id: (item.name, COMPONENT_TYPES.ITEM),
        packed: false,
      },
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
