import { useState } from "react";
import { SEASON_TYPES } from "../constants";
import { generateKey } from "../travelListHelper";
import PropTypes from "prop-types";

InitialSetupForm.propTypes = {
  submitForm: PropTypes.func,
};

function InitialSetupForm({ submitForm }) {
  const [season, setSeason] = useState(SEASON_TYPES.SUMMER);
  const [numDays, setNumDays] = useState(1);
  const [numTravelers, setNumTravelers] = useState(1);
  const [goingOutOfCountry, setGoingOutOfCountry] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(numTravelers, numDays, goingOutOfCountry, season);

    setSeason(SEASON_TYPES.SUMMER);
    setNumDays(1);
    setNumTravelers(1);
    setGoingOutOfCountry(true);
  }

  return (
    <div className="initial-setup-form-container">
      <h3>
        Details about your trip will help us set up initial packing items!
      </h3>
      <form className="initial-setup-form" onSubmit={handleSubmit}>
        <label>Season:</label>
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          {Object.values(SEASON_TYPES).map((s) => (
            <option value={s} key={generateKey(`season_${s}`)}>
              {s}
            </option>
          ))}
        </select>

        <label>
          Days:
          <select
            value={numDays}
            onChange={(e) => setNumDays(Number(e.target.value))}
            //   placeholder="Number of days"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
              <option value={i} key={generateKey(`selectNumDaysOption_${i}`)}>
                {i}
              </option>
            ))}
          </select>
        </label>

        <label>
          Travelers:
          <select
            value={numTravelers}
            onChange={(e) => setNumTravelers(Number(e.target.value))}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
              <option
                value={i}
                key={generateKey(`selectNumTravelersOption_${i}`)}
              >
                {i}
              </option>
            ))}
          </select>
        </label>

        <label>
          Going abroad?
          <select
            value={goingOutOfCountry}
            onChange={() => setGoingOutOfCountry((goo) => !goo)}
          >
            <option
              value={true}
              key={generateKey(`selectGoingAbroadOption_true`)}
            >
              Yes
            </option>
            <option
              value={false}
              key={generateKey(`selectGoingAbroadOption_false`)}
            >
              No
            </option>
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
export default InitialSetupForm;
