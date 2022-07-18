import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OptionContextProvider } from "./context/OptionContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <OptionContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </OptionContextProvider>
);
