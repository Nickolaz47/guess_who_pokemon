import { createContext, useState } from "react";
import pokemon from "../data/pokemon1_3.json";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [pokemonDB, setPokemonDB] = useState(pokemon);

  return (
    <PokemonContext.Provider value={{ pokemonDB, setPokemonDB }}>
      {children}
    </PokemonContext.Provider>
  );
};
