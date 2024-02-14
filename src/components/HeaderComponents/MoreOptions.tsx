import { ButtonComponent } from "../pure/ButtonComponent";
import { TbWorld } from "react-icons/tb";
import { LinkComponent } from "../pure/LinkComponent";
import { FiUser } from "react-icons/fi";

export const MoreOptions = () => {
  const handleClick = () => {};
  return (
    <div className="flex items-center gap-3">
      <ButtonComponent
        type="button"
        className="bg-transparent"
        id="1"
        size="sm"
        onClick={handleClick}
      >
        <TbWorld className="text-xl" />
      </ButtonComponent>
      <LinkComponent to="/" size="sm" className={`bg-epic-gray-50`}>
        <FiUser className="text-md" />
      </LinkComponent>
      <ButtonComponent
        type="button"
        className="bg-epic-blue-50 text-epic-black"
        id="1"
        size="lg"
        onClick={handleClick}
      >
        Download
      </ButtonComponent>
    </div>
  );
};
