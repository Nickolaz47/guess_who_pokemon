// Hooks
import { useRestartGame } from "../hooks/useRestartGame";
import { useContext } from "react";
// Contexts
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { ChosenPokemonContext } from "../context/ChosenPokemon";

const GameResult = ({ checkOption, setCheckOption }) => {
  const { restart } = useRestartGame();

  const { drawnPokemon } = useContext(DrawnPokemonContext);
  const { chosenPokemon } = useContext(ChosenPokemonContext);

  return (
    <div className="col-md-4">
      <div>
        <h4>The pokemon was: </h4>
        <div>
          {drawnPokemon.name === chosenPokemon.name ? "certo" : "errado"}
        </div>
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
