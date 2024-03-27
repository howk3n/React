import PropTypes from "prop-types";
import { useState } from "react";

ControlVisible.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

function ControlVisible({ setIsOpen, isOpen }) {
  const [controlVisibleIsHovered, setControlVisibleIsHovered] = useState(false);

  const openEmoji = controlVisibleIsHovered ? "📖" : "📘";
  const closeEmoji = controlVisibleIsHovered ? "❌" : "✖️";

  function handleOnHoverControlVisible(isHovered) {
    setControlVisibleIsHovered(isHovered);
  }

  return (
    <button
      className="controlVisible"
      onMouseEnter={() => handleOnHoverControlVisible(true)}
      onMouseLeave={() => handleOnHoverControlVisible(false)}
      onClick={() => setIsOpen((open) => !open)}
    >
      {isOpen ? closeEmoji : openEmoji}
    </button>
  );
}

export default ControlVisible;
