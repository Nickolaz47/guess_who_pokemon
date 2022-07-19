import styles from "./Menu.module.css";
import filters from "../data/filters.json";
import { useState, useEffect, useContext } from "react";
import { OptionContext } from "../context/OptionContext";

const Menu = () => {
  const { selectOption, setSelectedOption } = useContext(OptionContext);
  const [allFilters, setAllFilters] = useState(filters);
  const [checkOption, setCheckOption] = useState();

  useEffect(() => {
    if (Object.keys(selectOption).length !== 0) {
      setCheckOption(true);
    }
  }, [selectOption]);

  return (
    <div>
      <h1>Who's that Pokémon?</h1>
      <p className={styles.select_display}>
        {/* Selects */}
        {Object.entries(allFilters).map((entrie, idx) => (
          <label key={idx}>
            {`${entrie[0]}:\u00a0\u00a0`}
            <select
              key={entrie[0]}
              name={entrie[0]}
              id={entrie[0]}
              onChange={(e) =>
                setSelectedOption({ filter: entrie[0], option: e.target.value })
              }
              disabled={checkOption}
            >
              <option value={undefined} selected disabled>
                Choose
              </option>
              {entrie[1].map((value) => (
                <option value={value} key={value}>
                  {value.toString()}
                </option>
              ))}
            </select>
          </label>
        ))}
      </p>
      <p>
        <div>Selected filter: {selectOption.filter}</div>
        <div>Selected option: {selectOption.option}</div>
      </p>
      <button>Try</button>
    </div>
  );
};

export default Menu;
