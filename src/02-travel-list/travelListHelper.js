import { generateKey } from "../utils";
import {
  COMPONENT_TYPES,
  GENERAL_ESSENTIALS,
  SEASONAL_ESSENTIALS,
  SEASON_TYPES,
} from "./constants";

export const getInitialItems = (
  numTravelers,
  numDays,
  goingOutOfCountry,
  season
) => {
  const essentials = getEssentials(season);
  const list = Object.values(essentials)
    .filter((item) => !item.conditionalToLeavingCountry || goingOutOfCountry)
    .map((item) => ({
      description: item.name,
      quantity: item.calcQuant(numTravelers, numDays),
      id: generateKey(COMPONENT_TYPES.ITEM),
    }));
  return list;
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

function getEssentials(season) {
  const seasonalEssentials = !season
    ? null
    : season === SEASON_TYPES.OMNI
    ? {
        ...SEASONAL_ESSENTIALS[SEASON_TYPES.SUMMER],
        ...SEASONAL_ESSENTIALS[SEASON_TYPES.WINTER],
      }
    : SEASONAL_ESSENTIALS[season];
  return { ...GENERAL_ESSENTIALS, ...seasonalEssentials };
}
