// Hooks
import { useContext } from "react";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { FilterContext } from "../context/FilterContext";

export const useFilter = () => {
  const { pokemonDB, setPokemonDB } = useContext(PokemonContext);
  const { filtersDB, setFiltersDB } = useContext(FilterContext);

  const filterPokemon = ({ filter, option }) => {
    const filteredPokemonDB = pokemonDB.filter((pokemon) => {
      if (pokemon[filter] !== "string") {
        if (pokemon[filter].includes(option)) {
          return pokemon;
        }
        return false;
      } else {
        if (pokemon[filter] !== option) {
          return pokemon;
        }
        return false;
      }
    });
    setPokemonDB(filteredPokemonDB);
  };

  const filterFilters = ({ filter, option }) => {
    const newPropertyValue = filtersDB[filter].filter(
      (value) => option !== value
    );
    filtersDB[filter] = newPropertyValue;
    setFiltersDB(filtersDB);
  };

  return { filterPokemon, filterFilters };
};
