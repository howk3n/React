import { useState } from "react";
import BillTotal from "./BillTotal";
import NumberInput from "./NumberInput";
import OptionsInput from "./OptionsInput";
import { satisfactionOptions } from "./constants";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tips, setTips] = useState([0, 0]);

  function handleSetTips(value, index) {
    setTips((tips) => tips.map((tip, i) => (i === index ? value : tip)));
  }

  function handleReset() {
    setBill(0);
    setTips([0, 0]);
  }

  return (
    <div>
      <NumberInput bill={bill} setBill={setBill}>
        How much was the bill?
      </NumberInput>
      <br />
      <OptionsInput
        value={tips[0]}
        satisfactionOptions={satisfactionOptions}
        handleChange={(value) => handleSetTips(value, 0)}
      >
        How was the food and service?
      </OptionsInput>
      <br />
      <OptionsInput
        value={tips[1]}
        satisfactionOptions={satisfactionOptions}
        handleChange={(value) => handleSetTips(value, 1)}
      >
        How did your friend like the food and service?
      </OptionsInput>
      <br />
      <BillTotal bill={bill} tipPercentage={(tips[0] + tips[1]) / 2} />
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default TipCalculator;
