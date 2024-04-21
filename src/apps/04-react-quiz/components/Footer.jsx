import PropTypes from "prop-types";

Footer.propTypes = {
  children: PropTypes.any,
};

function Footer({ children }) {
  return <footer>{children}</footer>;
}

export default Footer;
