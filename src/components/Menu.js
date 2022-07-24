// Components
import Select from "./Select";
import FilterPokemon from "./FilterPokemon";
import GameFeedback from "./GameFeedback";
// Hooks
import { useState, useEffect, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { useRestartGame } from "../hooks/useRestartGame";
// Contexts
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { RightAnswersContext } from "../context/RightAnswersContext";
// CSS
import styles from "./Menu.module.css";

const Menu = () => {
  const [checkOption, setCheckOption] = useState();
  const { filterPokemon, filterFilters } = useFilter();
  const { restart } = useRestartGame();

  const { selectOption } = useContext(OptionContext);
  const { drawnPokemon } = useContext(DrawnPokemonContext);
  const { rightAnswers, setRightAnswers } = useContext(RightAnswersContext);

  const handleSelection = () => {
    filterPokemon(selectOption, drawnPokemon);
    filterFilters(selectOption);
    setCheckOption(false);
    if (typeof drawnPokemon[selectOption.filter] === "string") {
      if (
        drawnPokemon[selectOption.filter] === selectOption.option &&
        !rightAnswers.includes(selectOption.option)
      ) {
        setRightAnswers([selectOption.option, ...rightAnswers]);
      }
    } else {
      if (
        drawnPokemon[selectOption.filter].includes(selectOption.option) &&
        !rightAnswers.includes(selectOption.option)
      ) {
        setRightAnswers([selectOption.option, ...rightAnswers]);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(selectOption).length !== 0) {
      setCheckOption(true);
    }
  }, [selectOption]);

  return (
    <div className="container">
      <h1 className={styles.title}>Who's that Pokémon?</h1>
      <Select checkOption={checkOption} />
      <div className="row">
        <GameFeedback />
        <FilterPokemon
          selectOption={selectOption}
          handleSelection={handleSelection}
        />
        <div className="col-md-4">
          <button
            className="btn btn-warning"
            onClick={() => {
              restart();
              setCheckOption(false);
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
