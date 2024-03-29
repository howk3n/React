import { useEffect, useState } from "react";
import { pizzaData } from "./pizzaData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./pizza.css";

const openHour = 9;
const closeHour = 23;

export default function PizzaMenu() {
  // TODO: useRef instead of state to prevent reRenders
  const [currentTime, setCurrentTime] = useState(new Date());

  // console.log("rerender");
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  function getIsOpen(time) {
    return time >= openHour && time < closeHour;
  }

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <Header formattedTime={formattedTime} />
      <Menu pizzaData={pizzaData} />
      <Footer isOpen={getIsOpen(currentTime.getHours())} />
    </div>
  );
}
