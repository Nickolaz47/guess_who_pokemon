// Hooks
import { useContext } from "react";
// Contexts
import { PokemonContext } from "../context/PokemonContext";

const FilterPokemon = ({ selectOption, handleSelection }) => {
  const { pokemonDB } = useContext(PokemonContext);

  return (
    <div className="col-md-4">
      <p className="text-center">Remaining Pokémon: {pokemonDB.length}</p>
      <div>Selected filter: {selectOption.filter}</div>
      <div>Selected option: {selectOption.option}</div>
      <div className="text-center">
        <button className="btn btn-info m-2 btn-lg" onClick={handleSelection}>
          Filter out
        </button>
      </div>
    </div>
  );
};

export default FilterPokemon;
