import { ButtonComponent } from "../pure/ButtonComponent";
import { FiGlobe, FiUser } from "react-icons/fi";
import { LinkComponent } from "../pure/LinkComponent";

export const MoreOptions = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="flex justify-end xl:flex-center gap-3.5 mb-4 xl:mb-0">
        <ButtonComponent
          type="button"
          className="text-xl text-white hover:opacity-100"
          id="1"
          size="xs"
          onClick={handleClick}
        >
          <FiGlobe />
        </ButtonComponent>
        <LinkComponent
          to="/login"
          size="xs"
          className={`bg-epic-gray-200 text-lg hover:opacity-100 flex-center`}
        >
          <FiUser />
        </LinkComponent>
        <ButtonComponent
          type="button"
          className="bg-epic-blue-50 text-epic-black font-medium text-sm hidden xl:block"
          id="1"
          size="sm"
          onClick={handleClick}
        >
          Download
        </ButtonComponent>
      </div>
      <div className="absolute bottom-6 left-0  flex-center w-full xl:hidden">
        <ButtonComponent
          type="button"
          className="bg-epic-blue-50 text-epic-black font-medium text-sm !h-12 !w-[8rem] sm:!w-40 lg:!w-60"
          id="1"
          size="sm"
          onClick={handleClick}
        >
          Download
        </ButtonComponent>
      </div>
    </>
  );
};
