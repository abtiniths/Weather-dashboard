import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import sw from "./service-worker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
sw();
