import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekday", "weekend"];
const ChallengeOne = () => {
  const [option, setOption] = useState("");
  const [day, setDay] = useState("");
  return (
    <div>
      <h1>
        Which day <br />
        {days.map((item) => (
          <>
            <input
              type="radio"
              name="day"
              value={item}
              id=""
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
            <label htmlFor="">{item}</label>
          </>
        ))}
      </h1>
      <h3>
        Will you play? <br />
        {options.map((item) => (
          <>
            <input
              type="radio"
              name="option"
              id=""
              value={item}
              onChange={(e) => {
                setOption(e.target.value);
              }}
            />
            <label htmlFor="">{item}</label>
          </>
        ))}
      </h3>
      <p>
        i will play {option} on {day}
      </p>
    </div>
  );
};
export default ChallengeOne;
