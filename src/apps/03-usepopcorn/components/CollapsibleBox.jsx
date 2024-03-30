import PropTypes from "prop-types";
import { useState } from "react";

CollapsibleBox.propTypes = {
  children: PropTypes.any,
};

export default function CollapsibleBox({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const icon = isOpen ? "➖" : "➕";

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="box">
      <ToggleButton onToggle={handleToggle}>{icon}</ToggleButton>
      {isOpen && children}
    </div>
  );
}

ToggleButton.propTypes = {
  onToggle: PropTypes.func,
  children: PropTypes.any,
};

function ToggleButton({ onToggle, children }) {
  return (
    <button className="btn-toggle" onClick={onToggle}>
      {children}
    </button>
  );
}
