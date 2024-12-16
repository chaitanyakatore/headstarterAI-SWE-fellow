import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserAuthContextProvider } from "./context/UserAuthContextProvider.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </StrictMode>
);
