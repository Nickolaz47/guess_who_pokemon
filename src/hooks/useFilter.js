// Hooks
import { useContext } from "react";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { FilterContext } from "../context/FilterContext";

export const useFilter = () => {
  const { pokemonDB, setPokemonDB } = useContext(PokemonContext);
  const { filtersDB, setFiltersDB } = useContext(FilterContext);

  const filterPokemon = ({ filter, option }, drewPokemon) => {
    const filteredPokemonDB = pokemonDB.filter((pokemon) => {
      if (pokemon[filter] !== "string") {
        if (drewPokemon[filter].includes(option)) {
          return pokemon[filter].includes(option);
        } else {
          return !pokemon[filter].includes(option);
        }
      } else {
        if (drewPokemon[filter] === option) {
          return pokemon[filter] === option;
        } else {
          return pokemon[filter] !== option;
        }
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
