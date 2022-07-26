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
          <div className="p-1 mb-2 text-success bg-light">
            You must be a Pokémon master! You guessed the pokemon was{" "}
            <span className="text-capitalize fw-bold">{drawnPokemon.name}</span>
            !
          </div>
        )}
        {gameOutcome === false && (
          <div className="p-1 mb-2 text-danger bg-light">
            You need to study the Pokédex a little more. The right pokemon was{" "}
            <span className="text-capitalize fw-bold">{drawnPokemon.name}</span>
            .
          </div>
        )}
      </div>
      <div className="text-center">
        {checkOption ? (
          <button
            className="btn btn-warning m-2"
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
            className="btn btn-warning m-2"
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
