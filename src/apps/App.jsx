import { useEffect, useState } from "react";
import PizzaMenu from "./00-pizza/PizzaMenu";
import Steps from "./01-steps/Steps";
import TravelList from "./02-travel-list/TravelList";
import Accordion from "./02a-exercise-accordion/Accordion";
import TipCalculator from "./02b-exercise-tip-calculator/TipCalculator";
import EatSplit from "./02c-eat-n-split/EatSplit";
import UsePopcorn from "./03-usepopcorn/components/UsePopcorn";
import CurrencyConverter from "./03a-currency-converter/CurrencyConverter";

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
      <UsePopcorn setAppTitle={setAppTitle} />
      {/* <CurrencyConverter setAppTitle={setAppTitle} /> */}
    </div>
  );
}

export default App;
