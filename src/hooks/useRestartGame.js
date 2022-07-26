// Hooks
import { useContext } from "react";
import { useDrawPokemon } from "./useDrawPokemon";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { FeaturesContext } from "../context/FeaturesContext";
import { GameOutcomeContext } from "../context/GameOutcomeContext";
// Databases
import pokemon from "../data/pokemon1_3.json";

export const useRestartGame = () => {
  const drawnPokemon = useDrawPokemon();
  const { setPokemonDB } = useContext(PokemonContext);
  const { setSelectedOption } = useContext(OptionContext);
  const { setDrawnPokemon } = useContext(DrawnPokemonContext);
  const { setFeatures } = useContext(FeaturesContext);
  const { setGameOutcome } = useContext(GameOutcomeContext);

  const restart = () => {
    setPokemonDB(pokemon);
    setSelectedOption({});
    setDrawnPokemon(drawnPokemon);
    setFeatures([]);
    setGameOutcome(null);
  };

  return { restart };
};
