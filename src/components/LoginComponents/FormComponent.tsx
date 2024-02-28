import { useState } from "react";
export const FormComponent = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);
  const [errInput, setErrInput] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const handleFocus = () => {
    setErrInput(false);
    setInputActive(true);
  };
  const handleBlur = () => {
    emailValue === "" ? setErrInput(true) : setErrInput(false);
    setInputActive(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  return (
    <form className="my-6 background-epic-gray-100">
      <div
        className={`my-2 relative text-sm rounded-sm h-16 bg-trasparent flex ite opacity-90 hover:opacity-100 cursor-pointe items-center`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          required={true}
          id="email"
          type="email"
          value={emailValue}
          className={`absolute-full bg-transparent px-4 pt-6 outline-none border ${
            inputActive
              ? "border-white"
              : !errInput
              ? "border-epic-gray-50"
              : "border-epic-red"
          }  `}
          onChange={handleInputChange}
        />
        <label
          htmlFor="email"
          className={` opacity-60 pl-4 cursor-text transition-all duration-300 ease-in-out ${
            inputActive
              ? "-translate-y-3 text-xs"
              : !errInput
              ? "-translate-y-3 text-xs"
              : "-translate-y-0"
          }`}
        >
          Email Address
        </label>
        {errInput && (
          <span className="absolute bottom-[-1.5rem] text-xs text-epic-red">
            Required
          </span>
        )}
      </div>
      <input
        type="submit"
        value="CONTINUE"
        className="w-full text-xs py-6 mt-10 bg-epic-blue-100 cursor-pointer rounded-sm opacity-50"
      />
    </form>
  );
};
