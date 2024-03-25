export const SEASON_TYPES = {
  SUMMER: "Summer",
  WINTER: "Winter",
  OMNI: "Both 😋",
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

export const GENERAL_ESSENTIALS = {
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

export const SEASONAL_ESSENTIALS = {
  [SEASON_TYPES.SUMMER]: {
    FLIPFLOPS: {
      name: "Flip-flops",
      calcQuant: (numTravelers) => numTravelers,
    },
    SUNSCREEN: {
      name: "Sunscreen",
      calcQuant: (numTravelers, numDays) => numTravelers * numDays * 100,
    },
    SUNGLASSES: {
      name: "Sunglasses",
      calcQuant: (numTravelers) => numTravelers,
    },
    SWIMMING_CLOTHES: {
      name: "Swimming Gear",
      calcQuant: (numTravelers, numDays) =>
        numTravelers * 1 + Math.ceil(numDays / 7),
    },
  },
  [SEASON_TYPES.WINTER]: {
    GLOVES: {
      name: "Gloves",
      calcQuant: (numTravelers) => numTravelers,
    },
    HAT: {
      name: "Hat",
      calcQuant: (numTravelers) => numTravelers,
    },
    SCARF: {
      name: "Scarf",
      calcQuant: (numTravelers) => numTravelers,
    },
  },
};

export const SORT_DESCRIPTIONS = {
  [SORT_TYPES.INPUT]: "Sort by input order",
  [SORT_TYPES.DESCRIPTION]: "Sort by description",
  [SORT_TYPES.PACKED]: "Sort by packed status",
};
