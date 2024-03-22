const PIZZA_TYPES = {
  FOCACCIA: "focaccia",
  MARGHERITA: "margherita",
  SPINACI: "spinaci",
  FUNGHI: "funghi",
  SALAMINO: "salamino",
  PROSCIUTTO: "prosciutto",
};

export const pizzaData = {
  [PIZZA_TYPES.FOCACCIA]: {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 599.99,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  [PIZZA_TYPES.MARGHERITA]: {
    id: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 999.99,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  [PIZZA_TYPES.SPINACI]: {
    id: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 1199.99,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  [PIZZA_TYPES.FUNGHI]: {
    id: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 1199.99,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  [PIZZA_TYPES.SALAMINO]: {
    id: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 1199.99,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  [PIZZA_TYPES.PROSCIUTTO]: {
    id: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 1499.99,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
};
