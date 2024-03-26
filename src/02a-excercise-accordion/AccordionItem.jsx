import PropTypes from "prop-types";

AccordionItem.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

function AccordionItem({ title, isOpen, index, onClick, children }) {
  const indexString = index.toString();
  return (
    <li className={`item ${isOpen ? "open" : ""}`} onClick={onClick}>
      <p className="number">
        {(indexString.length < 2 ? "0" : "") + indexString}
      </p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {children}
    </li>
  );
}
export default AccordionItem;
