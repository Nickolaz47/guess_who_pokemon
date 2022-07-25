import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OptionContextProvider } from "./context/OptionContext";
import { PokemonContextProvider } from "./context/PokemonContext";
import { DrawnPokemonContextProvider } from "./context/DrawnPokemonContext";
import { RightAnswersContextProvider } from "./context/RightAnswersContext";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <RightAnswersContextProvider>
    <DrawnPokemonContextProvider>
      <PokemonContextProvider>
          <OptionContextProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </OptionContextProvider>
      </PokemonContextProvider>
    </DrawnPokemonContextProvider>
  </RightAnswersContextProvider>
);
