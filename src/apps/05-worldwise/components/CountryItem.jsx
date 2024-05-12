import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

CountryItem.propTypes = {
  data: PropTypes.object,
};
function CountryItem({ data }) {
  return (
    <li className={styles.countryItem}>
      <span>{data.emoji}</span>
      <span>{data.country}</span>
    </li>
  );
}

export default CountryItem;
