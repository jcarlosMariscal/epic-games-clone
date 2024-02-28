import epicLogo from "@/assets/epicgames-logo-light.svg";
// import ReactComponent from "*.svg";
import Xbox from "@/assets/svg/Xbox.svg?react";
import PlayStation from "@/assets/svg/PlayStation.svg?react";
import Nintendo from "@/assets/svg/Nintendo.svg?react";
import Steam from "@/assets/svg/Steam.svg?react";
import Facebook from "@/assets/svg/Facebook.svg?react";
import Google from "@/assets/svg/Google.svg?react";
import Apple from "@/assets/svg/Apple.svg?react";
import Lego from "@/assets/svg/Lego.svg?react";
import { ButtonComponent } from "../components/pure/ButtonComponent";
import { ContinueWithComponent } from "../components/pure/ContinueWithComponent";
import { FormComponent } from "../components/LoginComponents/FormComponent";

const loginWith = [
  { svg: <Xbox className="size-1/2" />, bg: "btn-xbox" },
  { svg: <PlayStation className="size-1/2" />, bg: "btn-playstation" },
  { svg: <Nintendo className="size-1/2" />, bg: "btn-nintendo" },
  { svg: <Steam className="size-1/2" />, bg: "btn-steam" },
  { svg: <Facebook className="size-1/2" />, bg: "btn-facebook" },
  { svg: <Google className="size-1/2" />, bg: "btn-google" },
  { svg: <Apple className="size-1/2" />, bg: "btn-apple" },
  { svg: <Lego className="size-1/2" />, bg: "btn-lego" },
];
export const LoginPage = () => {
  const handleClick = () => {};
  return (
    <div className="background-dark w-full py-0 sm:py-7 flex justify-center min-h-screen">
      <div className="w-full sm:w-[30rem] bg-epic-gray-100 rounded-sm p-3 py-14  ssm:p-14">
        <div className="w-full h-full">
          <div className="flex justify-center">
            <img src={epicLogo} alt="EpicGames Logo" className="size-12" />
          </div>
          <div className="text-center mt-14">
            <span className="font-bold text-lg">Sign In or Sign Up</span>
          </div>
          <FormComponent />
          <div className="flex-center w-full my-10">
            <ContinueWithComponent text="or continue with" />
          </div>
          <div className="flex flex-wrap gap-2 justify-evenly mb-10">
            {loginWith.map((login, index) => (
              <ButtonComponent
                key={index}
                type="button"
                className={login.bg}
                id="Xbox"
                size="login"
                onClick={handleClick}
              >
                {login.svg}
              </ButtonComponent>
            ))}
          </div>
          <p className="text-[13px] opacity-80 text-center px-[2px]">
            By signing in or signing up, you agree with our{" "}
            <a href="#" className="underline !opacity-100 hover:no-underline">
              Privay Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
