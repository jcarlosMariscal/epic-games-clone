import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import { HomePage } from "./pages/HomePage.tsx";
import { HeaderComponent } from "./components/HeaderComponents/HeaderComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeaderComponent />
    {/* <HomePage /> */}
  </React.StrictMode>
);
