import styles from "./Menu.module.css";
import filters from "../data/filters.json";
import { useState, useEffect, useContext } from "react";
import { OptionContext } from "../context/OptionContext";
import { useFilter } from "../hooks/useFilter";
import { PokemonContext } from "../context/PokemonContext";

const Menu = () => {
  const {pokemonDB, setPokemonDB} = useContext(PokemonContext);
  const { selectOption, setSelectedOption } = useContext(OptionContext);
  const [allFilters, setAllFilters] = useState(filters);
  const [checkOption, setCheckOption] = useState();
  const { filterPokemon } = useFilter();

  useEffect(() => {
    if (Object.keys(selectOption).length !== 0) {
      setCheckOption(true);
    }
  }, [selectOption]);

  const handleSelection = () => {
    filterPokemon(selectOption);
    setCheckOption(false);
  }


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
              <option selected>
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
      <div>
        <div>Selected filter: {selectOption.filter}</div>
        <div>Selected option: {selectOption.option}</div>
      </div>
      <button onClick={handleSelection}>Try</button>
    </div>
  );
};

export default Menu;
