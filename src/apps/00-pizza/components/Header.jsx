import Clock from "./Clock";
import PropTypes from "prop-types";

Header.propTypes = {
  formattedTime: PropTypes.string,
};

export default function Header({ formattedTime }) {
  return (
    <>
      <Clock formattedTime={formattedTime} />
      <header className="header">
        <h1>Eriukiyo&apos;s Pizza</h1>
      </header>
    </>
  );
}
