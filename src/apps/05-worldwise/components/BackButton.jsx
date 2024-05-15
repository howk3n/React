import PropTypes from "prop-types";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

BackButton.propTypes = {
  children: PropTypes.any,
};

function BackButton({ children }) {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </Button>
  );
}

export default BackButton;
