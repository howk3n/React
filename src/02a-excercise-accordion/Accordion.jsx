import { generateKey } from "../utils";
import AccordionItem from "./AccordionItem";
import "./accordion.css";
import { faqs } from "./constants";

function Accordion() {
  return (
    <div className="accordion-container">
      <ul className="accordion">
        {faqs.map(({ title, text }, i) => {
          const id = generateKey("accordion-text");
          return (
            <AccordionItem title={title} text={text} index={i + 1} key={id} />
          );
        })}
      </ul>
    </div>
  );
}
export default Accordion;
