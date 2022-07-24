// Hooks
import { useContext } from "react";
// Contexts
import { PokemonContext } from "../context/PokemonContext";
import { RightAnswersContext } from "../context/RightAnswersContext";

const GameFeedback = () => {
  const { pokemonDB } = useContext(PokemonContext);
  const { rightAnswers } = useContext(RightAnswersContext);

  return (
    <div className="col-md-4 text-center">
      <p>Remaining Pokémon: {pokemonDB.length}</p>
      <span>Right answers</span>
      <div className="p-2 mb-2 bg-success text-white" style={{ opacity: 0.6 }}>
        {rightAnswers.join(", ")}
      </div>
    </div>
  );
};

export default GameFeedback;
