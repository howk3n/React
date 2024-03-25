export const ESSENTIALS = {
  PASSPORT: {
    conditionalToLeavingCountry: true,
    name: "Passport",
    calcQuant: (numTravelers) => numTravelers,
  },
  INSURANCE: {
    name: "Insurance",
    calcQuant: (numTravelers) => numTravelers,
  },
  SOCKS: {
    name: "Socks",
    calcQuant: (numTravelers, numDays) =>
      Math.ceil(numDays * numTravelers * 1.5) + 2,
  },
  UNDERWEAR: {
    name: "Underwear",
    calcQuant: (numTravelers, numDays) => Math.ceil(numDays * numTravelers) + 2,
  },
  CHARGER: {
    name: "Charger",
    calcQuant: (numTravelers) => numTravelers,
  },
  SHIRT: {
    name: "Shirt",
    calcQuant: (numTravelers, numDays) => Math.ceil(numDays * numTravelers) + 2,
  },
};

export const COMPONENT_TYPES = {
  ITEM: "Item",
  SORT: "Sort",
};

export const SORT_TYPES = {
  INPUT: "input",
  DESCRIPTION: "description",
  PACKED: "packed",
};

export const SORT_DESCRIPTIONS = {
  [SORT_TYPES.INPUT]: "Sort by input order",
  [SORT_TYPES.DESCRIPTION]: "Sort by description",
  [SORT_TYPES.PACKED]: "Sort by packed status",
};
