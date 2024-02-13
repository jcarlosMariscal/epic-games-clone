import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { HomePage } from "./pages/HomePage.tsx";
import { NavBar } from "./components/NavBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <HomePage />
  </React.StrictMode>
);
