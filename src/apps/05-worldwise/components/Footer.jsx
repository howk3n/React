// import PropTypes from 'prop-types';
import styles from "./Footer.module.css";

Footer.propTypes = {};

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Copyright {new Date().getFullYear()} by Eriukiyo Inc
      </p>
    </footer>
  );
}

export default Footer;
