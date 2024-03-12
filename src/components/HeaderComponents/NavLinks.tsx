import { LinkComponent } from "../pure/LinkComponent";

type Link = {
  name: string;
  to: string;
};
type Navigation = {
  navigation: Array<Link>;
  navbar: string;
};
type Style = {
  [key: string]: string;
};
export const NavLinks = ({ navigation, navbar }: Navigation) => {
  const style: Style = {
    primary:
      "bg-epic-gray-100 xl:bg-transparent hover:bg-epic-gray-50 text-sm py-7 xl:py-0 px-4 opacity-text",
    secondary: "!p-0 mx-5 text-sm opacity-text",
  };
  return (
    <nav className="flex flex-col xl:flex-row gap-4 xl:gap-1 xl:flex-center order-1 xl:order-none">
      {navigation.map((item, index) => (
        <LinkComponent
          key={index}
          to={item.to}
          size="sm"
          className={style[navbar]}
          navbar={navbar}
        >
          {item.name}
        </LinkComponent>
      ))}
      {navbar === "primary" && (
        <>
          <span
            className={`block ${style.primary} w-auto h-8 rounded-md flex items-center cursor-pointer`}
          >
            Support
          </span>
          <span
            className={`block ${style.primary} w-auto h-8 rounded-md flex items-center cursor-pointer`}
          >
            Unreal Engine
          </span>
        </>
      )}
    </nav>
  );
};
