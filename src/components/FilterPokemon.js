const FilterPokemon = ({selectOption, handleSelection}) => {
  return (
    <div className="col-md-4">
      <div>Selected filter: {selectOption.filter}</div>
      <div>Selected option: {selectOption.option}</div>
      <div className="text-center">
        <button className="btn btn-info col-2" onClick={handleSelection}>
          Try
        </button>
      </div>
    </div>
  );
};

export default FilterPokemon;
