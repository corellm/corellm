import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

document.body.appendChild(document.createElement("div")).id = "stb-root";

createRoot(document.getElementById("stb-root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
