// Hooks
import { useState, useEffect, useContext } from "react";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { OptionContext } from "../context/OptionContext";

const GameFeedback = () => {
  const { pokemonDB } = useContext(PokemonContext);
  const { drawnPokemon } = useContext(DrawnPokemonContext);
  const { selectOption } = useContext(OptionContext);

  const [rightAnswers, setRightAnswers] = useState([]);

  useEffect(() => {
    if (drawnPokemon[selectOption.filter] === selectOption.option) {
      if (rightAnswers.length === 0) {
        setRightAnswers([selectOption.option]);
      } else {
        setRightAnswers([...rightAnswers, selectOption.option]);
      }
    }
  }, [selectOption]);

  return (
    <div className="col-md-4 text-center">
      <p>Remaining Pokémon: {pokemonDB.length}</p>
      <span>Right answers</span>
      <div className="p-3 mb-2 bg-success text-white">
        {rightAnswers.join(", ")}
      </div>
    </div>
  );
};

export default GameFeedback;
