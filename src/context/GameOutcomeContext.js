import { createContext, useState } from "react";

export const GameOutcomeContext = createContext();

export const GameOutcomeContextProvider = ({ children }) => {
  const [gameOutcome, setGameOutcome] = useState(null);

  return (
    <GameOutcomeContext.Provider value={{ gameOutcome, setGameOutcome }}>
      {children}
    </GameOutcomeContext.Provider>
  );
};
