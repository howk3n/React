import { pizzaData } from "../pizzaData";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = Object.values(pizzaData);
  // const pizzas = null;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. {pizzas?.length ? pizzas.length : "No"}{" "}
        creative dishes to choose from. All from the stone oven, all organic,
        all delicious!
      </p>
      {pizzas?.length ? (
        <ul className="pizzas">
          {pizzas.map((pd) => (
            <Pizza data={pd} key={pd.id} />
          ))}
        </ul>
      ) : (
        <p>Our menu is still being prepared. Please, come back later.</p>
      )}
    </main>
  );
}
