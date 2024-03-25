import PropTypes from "prop-types";
import { getStatsText } from "../travelListHelper";

Stats.propTypes = {
  numItems: PropTypes.number,
  numPackedItems: PropTypes.number,
};

function Stats({ numItems, numPackedItems }) {
  const text = getStatsText(numItems, numPackedItems);
  return (
    <footer className="stats">
      <em>{text}</em>
    </footer>
  );
}

export default Stats;
