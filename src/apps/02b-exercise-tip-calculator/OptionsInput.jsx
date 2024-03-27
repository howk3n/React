import PropTypes from "prop-types";
import { generateKey } from "../../utils";

OptionsInput.propTypes = {
  value: PropTypes.number,
  satisfactionOptions: PropTypes.object,
  handleChange: PropTypes.func,
  children: PropTypes.any,
};

function OptionsInput({ value, satisfactionOptions, handleChange, children }) {
  return (
    <label>
      {children}
      <select
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
      >
        {Object.values(satisfactionOptions).map((option) => {
          return (
            <Option data={option} key={generateKey("satisfaction-option")}>
              {option.text} ({option.tipPercentage}%)
            </Option>
          );
        })}
      </select>
    </label>
  );
}

Option.propTypes = {
  data: PropTypes.object,
  children: PropTypes.any,
};
function Option({ data, children }) {
  return <option value={data.tipPercentage}>{children}</option>;
}
export default OptionsInput;
