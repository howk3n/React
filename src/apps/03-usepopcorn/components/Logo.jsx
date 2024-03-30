import PropTypes from "prop-types";

Logo.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.any,
};

function Logo({ icon, children }) {
  return (
    <div className="logo">
      <span role="img">{icon}</span>
      <h1>{children}</h1>
    </div>
  );
}
export default Logo;
