import PropTypes from "prop-types";
import { useState } from "react";

AccordionItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  index: PropTypes.number,
};

function AccordionItem({ title, text, index }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((o) => !o);
  }
  // console.log(index);
  const indexString = index.toString();

  return (
    <li className={`item ${isOpen ? "open" : ""}`} onClick={toggleIsOpen}>
      <p className="number">
        {(indexString.length < 2 ? "0" : "") + indexString}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{text}</div> : ""}
    </li>
  );
}
export default AccordionItem;
