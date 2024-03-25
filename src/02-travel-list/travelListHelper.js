import { COMPONENT_TYPES, ESSENTIALS } from "./constants";

let keys = [];

export const getInitialItems = (
  numTravelers = 2,
  numDays,
  goingOutOfCountry = true
) => {
  const list = Object.values(ESSENTIALS)
    .filter((item) => !item.conditionalToLeavingCountry || goingOutOfCountry)
    .map((item) => ({
      description: item.name,
      quantity: item.calcQuant(numTravelers, numDays),
      id: generateKey(COMPONENT_TYPES.ITEM),
    }));
  return list;
};

export const generateKey = (componentType) => {
  const key = componentType + "_" + Math.random().toString(16).slice(2);
  if (keys.includes(key)) {
    return generateKey(componentType);
  }
  keys.push(key);
  return key;
};

export const getStatsText = (numItems, numPackedItems) => {
  let text = "💼 Start adding some items for packing!";
  if (numItems > 0) {
    text = `💼You have ${numItems} items on your list, and you `;
    if (!numPackedItems > 0) {
      text += "haven't packed any of them. Take your time!";
    } else {
      text += "already packed ";
      if (numPackedItems !== numItems) {
        const percentage = ((numPackedItems * 100) / numItems).toFixed(2);
        text += `${numPackedItems} (${percentage}%)`;
      } else {
        text += "all of them! Happy travels!";
      }
    }
  }
  return text;
};
