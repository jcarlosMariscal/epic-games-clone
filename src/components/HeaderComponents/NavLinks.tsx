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
    primary: "hover:bg-epic-gray-50 text-sm px-4 opacity-text",
    secondary: "!p-0 mx-5 text-sm opacity-text",
  };
  return (
    <nav className="flex-center">
      {navigation.map((item, index) => (
        <LinkComponent key={index} to="/" size="sm" className={style[navbar]}>
          {item.name}
        </LinkComponent>
      ))}
    </nav>
  );
};
