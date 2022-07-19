import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { FilterContext } from "../context/FilterContext";

export const useFilter = () => {
  const { pokemonDB, setPokemonDB } = useContext(PokemonContext);
  const { filterDB, setFilterDB } = useContext(FilterContext);

  const filterPokemon = ({ filter, option }) => {
    const filteredPokemonDB = pokemonDB.filter(
      (pokemon) => pokemon[filter] !== option
    );
    setPokemonDB(filteredPokemonDB);
  };

  const filterFilters = () => {};

  return { filterPokemon, filterFilters };
};
