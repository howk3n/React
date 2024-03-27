import PropTypes from "prop-types";

Footer.propTypes = {
  isOpen: PropTypes.bool,
};

export default function Footer({ isOpen }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>{isOpen ? "We are open" : "We are closed"}!</p>
        {isOpen && <button className="btn">Order</button>}
      </div>
    </footer>
  );
}
