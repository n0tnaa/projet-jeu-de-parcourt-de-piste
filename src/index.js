import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom";
//import SitePage from "./pages/SitePage";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
