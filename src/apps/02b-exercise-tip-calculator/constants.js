const SATISFACTION_TYPES = {
  DISAPPOINTED: "DISAPPOINTED",
  SLIGHTLY_SATISFIED: "SLIGHTLY_SATISFIED",
  MEDIUM: "MEDIUM",
  SATISFIED: "SATISFIED",
  DELIGHTED: "DELIGHTED",
};

export const satisfactionOptions = {
  [SATISFACTION_TYPES.DISAPPOINTED]: {
    text: "It was terrible",
    tipPercentage: 0,
  },
  [SATISFACTION_TYPES.SLIGHTLY_SATISFIED]: {
    text: "It wasn't bad, it wasn't good",
    tipPercentage: 5,
  },
  [SATISFACTION_TYPES.MEDIUM]: {
    text: "It was fine",
    tipPercentage: 10,
  },
  [SATISFACTION_TYPES.SATISFIED]: {
    text: "It was great",
    tipPercentage: 15,
  },
  [SATISFACTION_TYPES.DELIGHTED]: {
    text: "It was AMAZING!",
    tipPercentage: 20,
  },
};
