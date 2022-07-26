// Hooks
import { useContext } from "react";
import { useRestartGame } from "../hooks/useRestartGame";
// Contexts
import { GameOutcomeContext } from "../context/GameOutcomeContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";

const GameResult = ({ checkOption, setCheckOption }) => {
  const { restart } = useRestartGame();
  const { gameOutcome } = useContext(GameOutcomeContext);
  const { drawnPokemon } = useContext(DrawnPokemonContext);

  return (
    <div className="col-md-4">
      <div>
        {gameOutcome && (
          <div>
            You must be a Pokémon master! You guessed the pokemon was {drawnPokemon.name}!
          </div>
        )}
        {gameOutcome === false && (
          <div>
            You need to study the Pokédex a little more. The right pokemon was {drawnPokemon.name}.
          </div>
        )}
      </div>
      <div className="text-center">
        {checkOption ? (
          <button
            className="btn btn-warning"
            onClick={() => {
              restart();
              setCheckOption(false);
            }}
            disabled
          >
            Restart
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => {
              restart();
              setCheckOption(false);
            }}
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
};

export default GameResult;
