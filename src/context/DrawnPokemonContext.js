import { createContext, useState } from "react";
import { useDrawPokemon } from "../hooks/useDrawPokemon";

export const DrawnPokemonContext = createContext();

export const DrawnPokemonContextProvider = ({ children }) => {
  const [drawnPokemon, setDrawnPokemon] = useState(useDrawPokemon());

  return (
    <DrawnPokemonContext.Provider value={{ drawnPokemon, setDrawnPokemon }}>
      {children}
    </DrawnPokemonContext.Provider>
  );
};
