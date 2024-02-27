import { Outlet } from "react-router-dom";
import { NavBarPrimary } from "./NavBarPrimary";
import { NavBarSecondary } from "./NavBarSecondary";
import { FooterComponent } from "../FooterComponent";
export const HeaderComponent = () => {
  return (
    <>
      <NavBarPrimary />
      <NavBarSecondary />

      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};
