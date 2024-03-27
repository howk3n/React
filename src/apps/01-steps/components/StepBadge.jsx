import PropTypes from "prop-types";

StepBadge.propTypes = {
  onClickStep: PropTypes.func,
  index: PropTypes.number,
  divClassName: PropTypes.string,
  divStyle: PropTypes.any,
};

function StepBadge({ onClickStep, index, divClassName, divStyle }) {
  //   console.log("rerender stepbadge");
  return (
    <div
      style={{ ...divStyle }}
      className={divClassName}
      onClick={() => onClickStep(index)}
    >
      {index + 1}
    </div>
  );
}

export default StepBadge;
