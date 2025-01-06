import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import MyApp from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);
