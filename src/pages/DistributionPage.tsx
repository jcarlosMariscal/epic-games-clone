import DeveloperCommunity from "@/assets/distributionPage/developer-community.svg?react";
import OnlineServices from "@/assets/distributionPage/online-services.svg?react";
import UnrealEngine from "@/assets/distributionPage/unreal-engine.svg?react";
import { CardGradient } from "../components/DistributionComponents/CardGradient";
import { CardMain } from "../components/DistributionComponents/CardMain";
export const DistributionPage = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <CardMain />
      <CardGradient
        backgroundStyle="rgba(22, 39, 49, 0) linear-gradient(to right, rgb(22, 39, 49) 31%, rgba(22, 39, 49, 0.8) 46%, rgba(22, 39, 49, 0.1) 63%, rgba(22, 39, 49, 0.1) 82%)"
        SVGComponent={DeveloperCommunity}
        description="Join the discussion or create topics for community support around distribution"
        linkText="Go to the community"
        sizeSVG="w-[12rem] md:w-full h-auto"
        height="h-[19rem]"
      />
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <CardGradient
          backgroundStyle="rgba(26, 12, 71, 0) linear-gradient(to right, rgb(26, 12, 71) 31%, rgba(26, 12, 71, 0.8) 46%, rgba(26, 12, 71, 0.1) 63%, rgba(26, 12, 71, 0.1) 82%)"
          SVGComponent={OnlineServices}
          description="A modular set of online services to connect your community across all platforms"
          linkText="Explore our services"
          sizeSVG="w-[10rem] md:w-full h-auto"
          height="h-[19rem] md:h-[17rem]"
        />
        <CardGradient
          backgroundStyle="rgba(14, 17, 40, 0) linear-gradient(to right, rgb(14, 17, 40) 31%, rgba(14, 17, 40, 0.8) 46%, rgba(14, 17, 40, 0.1) 63%, rgba(14, 17, 40, 0.1) 82%)"
          SVGComponent={UnrealEngine}
          description="The world's most open and advanced real-time 3D creation tool"
          linkText="Learn more"
          sizeSVG="w-[12rem] md:w-full h-auto"
          height="h-[19rem] md:h-[17rem]"
        />
      </div>
    </div>
  );
};
