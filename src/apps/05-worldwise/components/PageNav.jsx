// import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

PageNav.propTypes = {};

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/Worldwise/">
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink to="/Worldwise/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/Worldwise/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/Worldwise/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
