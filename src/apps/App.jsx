/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import PizzaMenu from "./00-pizza/PizzaMenu";
import Steps from "./01-steps/Steps";
import TravelList from "./02-travel-list/TravelList";
import Accordion from "./02a-exercise-accordion/Accordion";
import TipCalculator from "./02b-exercise-tip-calculator/TipCalculator";
import EatSplit from "./02c-eat-n-split/EatSplit";
import UsePopcorn from "./03-usepopcorn/components/UsePopcorn";
import CurrencyConverter from "./03a-currency-converter/CurrencyConverter";
import Geolocation from "./03b-geolocation/Geolocation";
import ReactQuiz from "./04-react-quiz/components/ReactQuiz";
import BankAccount from "./04a-bank-account/BankAccount";
import Worldwise from "./05-worldwise/components/Worldwise";

function App() {
  const [appTitle, setAppTitle] = useState("My React Workshop");
  useEffect(
    function () {
      document.title = appTitle;
    },
    [appTitle]
  );
  return (
    <div className="main">
      {/* <PizzaMenu setAppTitle={setAppTitle} /> */}
      {/* <Steps setAppTitle={setAppTitle} /> */}
      {/* <TravelList setAppTitle={setAppTitle} /> */}
      {/* <Accordion /> */}
      {/* <TipCalculator /> */}
      {/* <EatSplit setAppTitle={setAppTitle} /> */}
      {/* <UsePopcorn setAppTitle={setAppTitle} /> */}
      {/* <CurrencyConverter setAppTitle={setAppTitle} /> */}
      {/* <Geolocation setAppTitle={setAppTitle} /> */}
      {/* <ReactQuiz setAppTitle={setAppTitle} /> */}
      {/* <BankAccount setAppTitle={setAppTitle} /> */}
      <Worldwise setAppTitle={setAppTitle} />
    </div>
  );
}

export default App;
