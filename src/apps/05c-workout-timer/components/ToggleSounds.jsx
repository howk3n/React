/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { memo } from "react";

ToggleSounds.propTypes = {
  setAllowSound: PropTypes.func,
  children: PropTypes.any,
};

function ToggleSounds({ setAllowSound, children }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {children}
    </button>
  );
}

export default memo(ToggleSounds);
