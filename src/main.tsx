import React from "react";
import ReactDOM from "react-dom/client";
import { Map } from "./Map";

import "./index.css";

if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
  throw new Error("Geolocation is not supported by your browser");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>
);
