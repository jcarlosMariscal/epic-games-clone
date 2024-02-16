import { ButtonComponent } from "../pure/ButtonComponent";
import { FiGlobe, FiUser } from "react-icons/fi";
import { LinkComponent } from "../pure/LinkComponent";

export const MoreOptions = () => {
  const handleClick = () => {};
  return (
    <div className="flex-center gap-3.5">
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
        to="/"
        size="xs"
        className={`bg-epic-gray-200 text-lg hover:opacity-100`}
      >
        <FiUser />
      </LinkComponent>
      <ButtonComponent
        type="button"
        className="bg-epic-blue-50 text-epic-black font-medium text-sm"
        id="1"
        size="sm"
        onClick={handleClick}
      >
        Download
      </ButtonComponent>
    </div>
  );
};
