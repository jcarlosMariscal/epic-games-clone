import DeveloperCommunity from "@/assets/distributionPage/developer-community.svg?react";
import OnlineServices from "@/assets/distributionPage/online-services.svg?react";
import UnrealEngine from "@/assets/distributionPage/unreal-engine.svg?react";
import DirectGameDistribution from "@/assets/distributionPage/direct-game-distribution.svg?react";
import VideoGameRevenue from "@/assets/distributionPage/video-game-revenue.svg?react";
import PlayerEngagement from "@/assets/distributionPage/player-engagement.svg?react";
import GamesPaymentMethods from "@/assets/distributionPage/games-payment-methods.svg?react";
import EpicGamesWallet from "@/assets/distributionPage/epic-games-wallet.svg?react";
import GameRatings from "@/assets/distributionPage/game-ratings-localization-and-affliate-network-benefits.svg?react";
import { CardGradient } from "../components/DistributionComponents/CardGradient";
import { CardMain } from "../components/DistributionComponents/CardMain";
import { CardBasic } from "../components/DistributionComponents/CardBasic";
export const DistributionPage = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <CardMain />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <CardBasic
          SVGComponent={DirectGameDistribution}
          title="Reach a Global Audience"
          description="Direct distribution to over 230 million Epic users across 187 countries with 16 languages supported."
          className="h-full lg:h-[28.1rem]"
        />
        <CardBasic
          SVGComponent={VideoGameRevenue}
          title="88%/12% Revenue Split"
          description="Keep 88% of the revenue and monitor product performance with integrated analytics dashboards."
          className="h-full lg:h-[28.1rem]"
        />
        <CardBasic
          SVGComponent={PlayerEngagement}
          title="Drive Player Engagement"
          description="Tap into store features like wishlists, achievements, store-wide promotions and more!"
          className="h-full lg:h-[28.1rem]"
        />
        <CardBasic
          SVGComponent={GamesPaymentMethods}
          title="Worldwide E-Commerce"
          description="Epic's payment service supports 76 payment methods with 47 regional currencies and more on the way."
          className="h-full lg:h-[28.1rem]"
        />
        <CardBasic
          SVGComponent={EpicGamesWallet}
          title="Epic Wallet"
          description="Users can load up their Wallet with funds to spend on products and services in the store, now available in more than 140 countries."
          className="h-full lg:h-[28.1rem]"
        />
        <CardBasic
          SVGComponent={GameRatings}
          title="Additional Benefits"
          description="Easy IARC ratings in Epic Developer Portal, request no-cost localization for store pages and activate our Support-A-Creator affiliate network."
          className="h-full lg:h-[28.1rem]"
        />
      </div>
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
