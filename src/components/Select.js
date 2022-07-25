// Hooks
import { useContext } from "react";
// Contexts
import { OptionContext } from "../context/OptionContext";
// CSS
import styles from "./Select.module.css";
// Databases
import filtersDB from "../data/filters.json"

const Select = ({ checkOption }) => {
  const { setSelectedOption } = useContext(OptionContext);

  return (
    <p className={styles.select_display}>
      {Object.entries(filtersDB).map((entrie, idx) => (
        <label key={idx} className={styles.label}>
          {`${entrie[0]}:\u00a0\u00a0`}
          <select
            key={entrie[0]}
            name={entrie[0]}
            id={entrie[0]}
            onChange={(e) =>
              setSelectedOption({
                filter: entrie[0],
                option: e.target.value,
              })
            }
            disabled={checkOption}
          >
            <option selected>Choose</option>
            {entrie[1].map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      ))}
    </p>
  );
};

export default Select;
