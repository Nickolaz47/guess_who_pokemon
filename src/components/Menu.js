// Hooks
import { useState, useEffect, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
// Contexts
import { FilterContext } from "../context/FilterContext";
import { OptionContext } from "../context/OptionContext";
// CSS
import styles from "./Menu.module.css";

const Menu = () => {
  const { filtersDB } = useContext(FilterContext);
  const { selectOption, setSelectedOption } = useContext(OptionContext);
  const [checkOption, setCheckOption] = useState();
  const { filterPokemon, filterFilters } = useFilter();

  const handleSelection = () => {
    filterPokemon(selectOption);
    filterFilters(selectOption);
    setCheckOption(false);
  };

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
        {Object.entries(filtersDB).map((entrie, idx) => (
          <label key={idx}>
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
              <option>Choose</option>
              {entrie[1].map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        ))}
      </p>
      <div>
        <div>Selected filter: {selectOption.filter}</div>
        <div>Selected option: {selectOption.option}</div>
      </div>
      <button onClick={handleSelection}>Try</button>
    </div>
  );
};

export default Menu;
