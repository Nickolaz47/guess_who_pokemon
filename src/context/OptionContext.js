import { createContext, useState } from "react";

export const OptionContext = createContext();

export const OptionContextProvider = ({ children }) => {
  const [selectOption, setSelectedOption] = useState({})

  return (
    <OptionContext.Provider value={{ selectOption, setSelectedOption}}>
      {children}
    </OptionContext.Provider>
  );
};