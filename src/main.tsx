import React from "react";
import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   RouterProvider,
//   createBrowserRouter,
// } from "react-router-dom";
import "./style.css";
import { AppRouter } from "./routes/AppRouter.tsx";
// import { HomePage } from "./pages/HomePage.tsx";
// import { GamePage } from "./pages/GamePage.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "game",
//     element: <GamePage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
