// Hooks
import { useContext } from "react";
import { useDrawPokemon } from "./useDrawPokemon";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { RightAnswersContext } from "../context/RightAnswersContext";
// Databases
import pokemon from "../data/pokemon1_3.json";

export const useRestartGame = () => {
  const drawnPokemon = useDrawPokemon();
  const { setPokemonDB } = useContext(PokemonContext);
  const { setSelectedOption } = useContext(OptionContext);
  const { setDrawnPokemon } = useContext(DrawnPokemonContext);
  const { setRightAnswers } = useContext(RightAnswersContext);
  
  const restart = () => {
    setPokemonDB(pokemon);
    setSelectedOption({});
    setDrawnPokemon(drawnPokemon);
    setRightAnswers([]);
  };

  return { restart };
};
