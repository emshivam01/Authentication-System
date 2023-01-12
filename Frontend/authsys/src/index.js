import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div>
        <h1 className="text-2xl text-center mb-10">This is top heading {}</h1>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
