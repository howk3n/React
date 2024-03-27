import { useState } from "react";
import { generateKey } from "../../utils";
import AccordionItem from "./AccordionItem";
import "./accordion.css";
import { faqs } from "./constants";

function Accordion() {
  const [openItemIndex, setOpenItemIndex] = useState(-1);

  function handleItemClick(index) {
    setOpenItemIndex((i) => (i === index ? null : index));
  }

  return (
    <div className="accordion-container">
      <ul className="accordion">
        {faqs.map(({ title, text }, i) => {
          const id = generateKey("accordion-text");
          const isOpen = i === openItemIndex;
          return (
            <AccordionItem
              title={title}
              isOpen={isOpen}
              index={i}
              onClick={() => handleItemClick(i)}
              key={id}
            >
              {isOpen ? <div className="content-box">{text}</div> : ""}
            </AccordionItem>
          );
        })}
      </ul>
    </div>
  );
}
export default Accordion;
