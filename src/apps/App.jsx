/* eslint-disable no-unused-vars */
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
import AtomicBlog from "./05a-atomic-blog/components/AtomicBlog";
import ReactQuizWithContext from "./05b-react-quiz-with-context/components/ReactQuizWithContext";
import { TitleProvider } from "../globalContexts/TitleContext";

function App() {
  return (
    <div className="main">
      <TitleProvider>
        {/* <PizzaMenu /> */}
        {/* <Steps /> */}
        {/* <TravelList /> */}
        {/* <Accordion /> */}
        {/* <TipCalculator /> */}
        {/* <EatSplit /> */}
        {/* <UsePopcorn /> */}
        {/* <CurrencyConverter /> */}
        {/* <Geolocation /> */}
        {/* <ReactQuiz /> */}
        {/* <BankAccount /> */}
        {/* <Worldwise /> */}
        {/* <AtomicBlog /> */}
        <ReactQuizWithContext />
      </TitleProvider>
    </div>
  );
}

export default App;
