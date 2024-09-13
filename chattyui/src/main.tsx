import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare global {
  interface Window {
    stb?: {
      text?: {
        greeting?: string;
        botAvatarFallback?: string;
      };
      image?: {
        botAvatar?: string;
      };
      api?: {
        chat?: string;
      };
    };
  }
}

document.body.appendChild(document.createElement("div")).id = "stb-root";

createRoot(document.getElementById("stb-root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
