// Hooks
import { useContext } from "react";
import { useDrawPokemon } from "./useDrawPokemon";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { FilterContext } from "../context/FilterContext";
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { RightAnswersContext } from "../context/RightAnswersContext";
// Databases
import pokemon from "../data/pokemon1_3.json";
import filters from "../data/filters.json";

export const useRestartGame = () => {
  const drawnPokemon = useDrawPokemon();
  const { setPokemonDB } = useContext(PokemonContext);
  const { setFiltersDB } = useContext(FilterContext);
  const { setSelectedOption } = useContext(OptionContext);
  const { setDrawnPokemon } = useContext(DrawnPokemonContext);
  const { setRightAnswers } = useContext(RightAnswersContext);
  
  const restart = () => {
    setPokemonDB(pokemon);
    setFiltersDB(filters);
    setSelectedOption({});
    setDrawnPokemon(drawnPokemon);
    setRightAnswers([]);
  };

  return { restart };
};
