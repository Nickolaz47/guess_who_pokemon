import { createContext, useState } from "react";

export const FeaturesContext = createContext();

export const FeaturesContextProvider = ({ children }) => {
  const [features, setFeatures] = useState([]);

  return (
    <FeaturesContext.Provider value={{ features, setFeatures }}>
      {children}
    </FeaturesContext.Provider>
  );
};
