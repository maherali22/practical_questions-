import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ColorContext from "./practical-1/colorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorContext>
      <App />
    </ColorContext>
  </StrictMode>
);
