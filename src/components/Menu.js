// Components
import Select from "./Select";
// Hooks
import { useState, useEffect, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
// Contexts
import { FilterContext } from "../context/FilterContext";
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
// CSS

const Menu = () => {
  const { filtersDB } = useContext(FilterContext);
  const { selectOption, setSelectedOption } = useContext(OptionContext);
  const { drawnPokemon } = useContext(DrawnPokemonContext);
  const [checkOption, setCheckOption] = useState();
  const { filterPokemon, filterFilters } = useFilter();
  console.log(drawnPokemon)
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
    <div>
      <h1>Who's that Pokémon?</h1>
      <Select
        filtersDB={filtersDB}
        checkOption={checkOption}
        setSelectedOption={setSelectedOption}
      />
      <div>
        <div>Selected filter: {selectOption.filter}</div>
        <div>Selected option: {selectOption.option}</div>
      </div>
      <button onClick={handleSelection}>Try</button>
    </div>
  );
};

export default Menu;
