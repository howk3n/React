import PropTypes from "prop-types";

Message.propTypes = {
  stepVal: PropTypes.number,
  children: PropTypes.any,
};

function Message({ stepVal, children }) {
  console.log(children);
  return (
    <div className="message">
      <h3>Step {stepVal}:</h3>
      {children}
    </div>
  );
}

export default Message;
