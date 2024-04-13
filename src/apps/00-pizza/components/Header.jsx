import Clock from "./Clock";
import PropTypes from "prop-types";

Header.propTypes = {
  formattedTime: PropTypes.string,
  children: PropTypes.any,
};

export default function Header({ formattedTime, children }) {
  return (
    <>
      <Clock formattedTime={formattedTime} />
      <header className="header">
        <h1>{children}</h1>
      </header>
    </>
  );
}
