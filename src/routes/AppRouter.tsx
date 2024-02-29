import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";
import { HeaderComponent } from "../components/HeaderComponents/HeaderComponent";
import { LoginPage } from "../pages/LoginPage";
import { DistributionPage } from "../pages/DistributionPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HeaderComponent />}>
        <Route index element={<HomePage />}></Route>
        <Route path="game" element={<GamePage />}></Route>
        <Route path="distribution" element={<DistributionPage />}></Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

export const AppRouter = () => {
  return (
    <div className="font-inter">
      <RouterProvider router={router} />
    </div>
  );
};
