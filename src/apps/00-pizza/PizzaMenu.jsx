import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { pizzaData } from "./pizzaData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./pizza.css";

const PAGE_TITLE = "Eriukiyo's Pizza";
const openHour = 9;
const closeHour = 23;

PizzaMenu.propTypes = {
  setAppTitle: PropTypes.func,
};

export default function PizzaMenu({ setAppTitle }) {
  // console.log("rerender");
  const time = useRef(new Date());
  const [currentTime, setCurrentTime] = useState(time.current);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    setAppTitle(PAGE_TITLE);
  }, [setAppTitle]);

  useEffect(() => {
    const interval = setInterval(() => {
      time.current = new Date();
      if (time.current.getMinutes() !== currentTime.getMinutes()) {
        setCurrentTime(time.current);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  function getIsOpen(time) {
    return time >= openHour && time < closeHour;
  }

  return (
    <div className="container">
      <Header formattedTime={formattedTime}>{PAGE_TITLE}</Header>
      <Menu pizzaData={pizzaData} />
      <Footer isOpen={getIsOpen(currentTime.getHours())} />
    </div>
  );
}
