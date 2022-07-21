// Hooks
import { useContext } from "react";
import { useDrawPokemon } from "./useDrawPokemon";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { FilterContext } from "../context/FilterContext";
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
// Databases
import pokemon from "../data/pokemon1_3.json";
import filters from "../data/filters.json";

export const useRestartGame = () => {
  const drawnPokemon = useDrawPokemon();
  const { setPokemonDB } = useContext(PokemonContext);
  const { setFiltersDB } = useContext(FilterContext);
  const { setSelectedOption } = useContext(OptionContext);
  const { setDrawnPokemon } = useContext(DrawnPokemonContext);

  const restart = () => {
    setPokemonDB(pokemon);
    setFiltersDB(filters);
    setSelectedOption({});
    setDrawnPokemon(drawnPokemon);
  };

  return { restart };
};
