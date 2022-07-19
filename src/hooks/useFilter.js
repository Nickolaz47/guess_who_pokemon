import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { FilterContext } from "../context/FilterContext";

export const useFilter = () => {
  const { pokemonDB, setPokemonDB } = useContext(PokemonContext);
  const { filterDB, setFilterDB } = useContext(FilterContext);

  const filterPokemon = ({ filter, option }) => {
    const filteredPokemonDB = pokemonDB.filter(
      (pokemon) => {
        if (pokemon[filter] !== "string") {
          if(pokemon[filter].includes(option)) {
            return pokemon
          }
          return false
        } else {
          if (pokemon[filter] !== option) {
            return pokemon
          }
          return false
        }
      }
    );
    setPokemonDB(filteredPokemonDB);
  };

  const filterFilters = () => {};

  return { filterPokemon, filterFilters };
};
