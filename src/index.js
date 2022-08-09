import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CoordsContextProvider as Provider } from "./context/CoordsContext";
import { ThemeContextProvider as ThemeProvider } from "./context/ThemeContext";
import { UIContextProvider as UIProvider } from "./context/UIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UIProvider>
        <Provider>
          <App />
        </Provider>
      </UIProvider>
    </ThemeProvider>
  </React.StrictMode>
);
