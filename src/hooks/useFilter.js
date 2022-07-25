// Hooks
import { useContext } from "react";
// Contexts
import { PokemonContext } from "../context/PokemonContext";

export const useFilter = () => {
  const { pokemonDB, setPokemonDB } = useContext(PokemonContext);

  const filterPokemon = ({ filter, option }, drewPokemon) => {
    const filteredPokemonDB = pokemonDB.filter((pokemon) => {
      if (typeof pokemon[filter] !== "string") {
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

  return { filterPokemon };
};
