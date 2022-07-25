// Components
import Select from "./Select";
import FilterPokemon from "./FilterPokemon";
import GameFeedback from "./GameFeedback";
import GameResult from "./GameResult";
// Hooks
import { useState, useEffect, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
// Contexts
import { OptionContext } from "../context/OptionContext";
import { DrawnPokemonContext } from "../context/DrawnPokemonContext";
import { RightAnswersContext } from "../context/RightAnswersContext";
// CSS
import styles from "./Menu.module.css";

const Menu = () => {
  const [checkOption, setCheckOption] = useState();
  const { filterPokemon } = useFilter();

  const { selectOption } = useContext(OptionContext);
  const { drawnPokemon } = useContext(DrawnPokemonContext);
  const { rightAnswers, setRightAnswers } = useContext(RightAnswersContext);

  const handleSelection = () => {
    filterPokemon(selectOption, drawnPokemon);
    setCheckOption(false);
    if (typeof drawnPokemon[selectOption.filter] === "string") {
      if (
        drawnPokemon[selectOption.filter] === selectOption.option &&
        !rightAnswers.includes(selectOption.option)
      ) {
        setRightAnswers([
          `${selectOption.filter}: ${selectOption.option}`,
          ...rightAnswers,
        ]);
      }
    } else {
      if (
        drawnPokemon[selectOption.filter].includes(selectOption.option) &&
        !rightAnswers.includes(selectOption.option)
      ) {
        setRightAnswers([
          `${selectOption.filter}: ${selectOption.option}`,
          ...rightAnswers,
        ]);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(selectOption).length !== 0) {
      setCheckOption(true);
    }
  }, [selectOption]);

  return (
    <div className={`container-fluid ${styles.background}`}>
      <h1 className={styles.title}>Who's that Pokémon?</h1>
      <Select checkOption={checkOption} />
      <div className="row">
        <GameFeedback />
        <FilterPokemon
          selectOption={selectOption}
          handleSelection={handleSelection}
        />
        <GameResult checkOption={checkOption} setCheckOption={setCheckOption} />
      </div>
    </div>
  );
};

export default Menu;
