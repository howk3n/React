import PropTypes from "prop-types";

Clock.propTypes = {
  formattedTime: PropTypes.string,
};

export default function Clock({ formattedTime }) {
  return <span className="clock">{formattedTime}</span>;
}
