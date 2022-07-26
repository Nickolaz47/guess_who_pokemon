// Hooks
import { useContext } from "react";
import { useRestartGame } from "./useRestartGame";
// Contexts
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { GameOutcomeContext } from "../context/GameOutcomeContext";

export const useCheckResult = () => {
  const { restart } = useRestartGame();
  const { drawnPokemon } = useContext(DrawnPokemonContext);
  const { setGameOutcome } = useContext(GameOutcomeContext);

  const checkResult = (chosenPokemon) => {
    if (chosenPokemon.name === drawnPokemon.name) {
      setGameOutcome(true);
      setTimeout(() => {
        restart();
      }, 7000);
    } else {
      setGameOutcome(false);
      setTimeout(() => {
        restart();
      }, 7000);
    }
  };

  return { checkResult };
};
