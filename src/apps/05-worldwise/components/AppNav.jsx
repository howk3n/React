// import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
AppNav.propTypes = {};

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
