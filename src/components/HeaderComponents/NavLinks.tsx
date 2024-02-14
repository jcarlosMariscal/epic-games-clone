import { LinkComponent } from "../pure/LinkComponent";

type Link = {
  name: string;
  to: string;
};
type Navigation = {
  navigation: Array<Link>;
  navbar: string;
};
export const NavLinks = ({ navigation, navbar }: Navigation) => {
  const cssCustom =
    navbar === "primary"
      ? "bg-transparent hover:bg-epic-gray-50"
      : "!p-0 mx-5 text-md";
  return (
    <nav className="flex items-center">
      {navigation.map((item, index) => (
        <LinkComponent key={index} to="/" size="lg" className={cssCustom}>
          {item.name}
        </LinkComponent>
      ))}
    </nav>
  );
};
