// Components
import Select from "./Select";
import FilterPokemon from "./FilterPokemon";
import GameFeedback from "./GameFeedback";
// Hooks
import { useState, useEffect, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { useRestartGame } from "../hooks/useRestartGame";
// Contexts
import { FilterContext } from "../context/FilterContext";
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
// CSS
import styles from "./Menu.module.css";

const Menu = () => {
  const [checkOption, setCheckOption] = useState();
  const { filterPokemon, filterFilters } = useFilter();
  const { restart } = useRestartGame();

  const { filtersDB } = useContext(FilterContext);
  const { selectOption, setSelectedOption } = useContext(OptionContext);
  const { drawnPokemon } = useContext(DrawnPokemonContext);

  const handleSelection = () => {
    filterPokemon(selectOption, drawnPokemon);
    filterFilters(selectOption);
    setCheckOption(false);
  };

  useEffect(() => {
    if (Object.keys(selectOption).length !== 0) {
      setCheckOption(true);
    }
  }, [selectOption]);

  return (
    <div className="container">
      <h1 className={styles.title}>Who's that Pokémon?</h1>
      <Select
        filtersDB={filtersDB}
        checkOption={checkOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="row">
        <FilterPokemon
          selectOption={selectOption}
          handleSelection={handleSelection}
        />
        <GameFeedback />
        <div className="col-md-4">
          <button className="btn btn-warning" onClick={restart}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
