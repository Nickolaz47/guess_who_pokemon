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
          <div className="p-1 mb-2 text-success bg-light rounded">
            You must be a Pokémon master! You guessed the Pokémon was{" "}
            <span className="text-capitalize fw-bold">{drawnPokemon.name}</span>
            !
          </div>
        )}
        {gameOutcome === false && (
          <div className="p-1 mb-2 text-danger bg-light rounded">
            You need to study the Pokédex a little more. The right Pokémon was{" "}
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
        <p>
          <a
            className="link-light"
            href="https://github.com/Nickolaz47/guess_who_pokemon"
            rel="noreferrer"
            target="_blank"
          >
            Manual
          </a>
        </p>
      </div>
    </div>
  );
};

export default GameResult;
