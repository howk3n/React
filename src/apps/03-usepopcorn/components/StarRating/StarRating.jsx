import PropTypes from "prop-types";
import { useState } from "react";
import { generateKey } from "../../../../utils";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  onSetRating: PropTypes.func,
  color: PropTypes.any,
  size: PropTypes.number,
  messages: PropTypes.arrayOf(PropTypes.string),
  initialRating: PropTypes.number,
};

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 30,
  messages = [],
  initialRating = 0,
  onSetRating = () => {},
}) {
  const [curRating, setCurRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(null);

  const highestFullStarIndex = hoveredRating || curRating;
  const displayText =
    messages.length === maxRating
      ? messages[highestFullStarIndex - 1]
      : highestFullStarIndex;

  function handleSetRating() {
    setCurRating(hoveredRating);
    onSetRating(hoveredRating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size}px`,
  };

  return (
    <div style={containerStyle}>
      <div
        style={starContainerStyle}
        onMouseLeave={() => setHoveredRating(0)}
        onClick={handleSetRating}
      >
        {Array.from({ length: maxRating }, (_, i) => {
          const index = i + 1;
          return (
            <Star
              isFull={index <= highestFullStarIndex}
              onHover={(val) => setHoveredRating(val ? index : null)}
              color={color}
              size={size}
              key={generateKey(`star${index}`, "star")}
            />
          );
        })}
        <p style={textStyle}>{displayText || ""}</p>
      </div>
    </div>
  );
}
