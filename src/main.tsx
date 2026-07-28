import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { requestPersistence } from "./lib/db";
import { initTheme } from "./lib/theme";
import "./index.css";

initTheme();
void requestPersistence();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
