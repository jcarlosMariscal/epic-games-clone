import { ElementType } from "react";
import { HyperLinkComponent } from "../pure/HyperLinkComponent";

type TCustomComponentProps = {
  backgroundStyle: React.CSSProperties["background"];
  SVGComponent?: ElementType;
  description: string;
  linkText: string;
  sizeSVG: string;
  height: string;
};

export const CardGradient = ({
  backgroundStyle,
  SVGComponent,
  description,
  linkText,
  sizeSVG,
  height,
}: TCustomComponentProps) => {
  return (
    <div
      className={`w-full ${height} p-10 rounded-2xl border border-epic-gray-50 border-opacity-50`}
      style={{
        background: backgroundStyle,
      }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center h-full">
        <div className="md:w-3/5">
          {SVGComponent !== undefined && (
            <SVGComponent className={`${sizeSVG} scale-150 md:scale-100`} />
          )}
        </div>
        <div className="h-full w-full md:w-2/5 flex flex-col gap-5 justify-center text-center">
          <span className="text-md opacity-60">{description}</span>
          <HyperLinkComponent
            type="underline"
            className="underline text-sm opacity-60 hover:opacity-100"
          >
            {linkText}
          </HyperLinkComponent>
        </div>
      </div>
    </div>
  );
};
