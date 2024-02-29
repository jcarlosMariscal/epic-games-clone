import { Outlet } from "react-router-dom";
import { NavBarPrimary } from "./NavBarPrimary";
import { NavBarSecondary } from "./NavBarSecondary";
import { FooterComponent } from "../FooterComponent";
export const HeaderComponent = () => {
  return (
    <>
      <NavBarPrimary />
      <NavBarSecondary />

      {/* <div className="background-dark h-24 flex-center sticky top-0 z-40"> */}
      {/* <div ></div> */}
      <main className="background-dark flex-center">
        <div className="main-content flex items-center gap-4 py-1">
          <Outlet />
        </div>
      </main>
      <FooterComponent />
    </>
  );
};
