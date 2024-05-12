import { assetRoot } from "../constants";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      src={`${assetRoot}worldwise/logo.png`}
      alt="WorldWise logo"
      className={styles.logo}
    />
  );
}

export default Logo;
