import { createContext, useState } from "react";
import filters from "../data/filters.json";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filtersDB, setFiltersDB] = useState(filters);

  return (
    <FilterContext.Provider value={{ filtersDB, setFiltersDB }}>
      {children}
    </FilterContext.Provider>
  );
};
