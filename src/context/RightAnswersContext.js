import { createContext, useState } from "react";

export const RightAnswersContext = createContext();

export const RightAnswersContextProvider = ({ children }) => {
  const [rightAnswers, setRightAnswers] = useState([]);

  return (
    <RightAnswersContext.Provider value={{ rightAnswers, setRightAnswers }}>
      {children}
    </RightAnswersContext.Provider>
  );
};
