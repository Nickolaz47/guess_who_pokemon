import { createContext, useState } from "react";

export const ChosenPokemonContext = createContext();

export const ChosenPokemonContextProvider = ({ children }) => {
  const [chosenPokemon, setChosenPokemon] = useState({});

  return (
    <ChosenPokemonContext.Provider
      value={{ chosenPokemon, setChosenPokemon }}
    >
      {children}
    </ChosenPokemonContext.Provider>
  );
};
