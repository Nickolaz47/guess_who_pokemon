import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OptionContextProvider } from "./context/OptionContext";
import { PokemonContextProvider } from "./context/PokemonContext";
import { FilterContextProvider } from "./context/FilterContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <PokemonContextProvider>
    <FilterContextProvider>
      <OptionContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </OptionContextProvider>
    </FilterContextProvider>
  </PokemonContextProvider>
);
