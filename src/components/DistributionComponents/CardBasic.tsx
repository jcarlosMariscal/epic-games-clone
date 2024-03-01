import { TCardBasic } from "../../data/distributionPage";

export const CardBasic = ({
  title,
  description,
  SVGComponent,
  className,
}: TCardBasic) => {
  return (
    <div
      className={`p-6 lg:p-10 border border-epic-gray-50 border-opacity-50 flex flex-col md:flex-row lg:flex-col gap-2 items-center rounded-2xl ${className}`}
    >
      {SVGComponent !== undefined && <SVGComponent className={`size-40`} />}
      <div className="text-center md:text-left lg:text-center">
        <h2 className="text-2xl my-2 lg:my-6 font-light">{title}</h2>
        <h3 className="text-lg opacity-60">{description}</h3>
      </div>
    </div>
  );
};
