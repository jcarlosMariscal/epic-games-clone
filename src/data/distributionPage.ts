import DeveloperCommunity from "@/assets/distributionPage/developer-community.svg?react";
import OnlineServices from "@/assets/distributionPage/online-services.svg?react";
import UnrealEngine from "@/assets/distributionPage/unreal-engine.svg?react";
import DirectGameDistribution from "@/assets/distributionPage/direct-game-distribution.svg?react";
import VideoGameRevenue from "@/assets/distributionPage/video-game-revenue.svg?react";
import PlayerEngagement from "@/assets/distributionPage/player-engagement.svg?react";
import GamesPaymentMethods from "@/assets/distributionPage/games-payment-methods.svg?react";
import EpicGamesWallet from "@/assets/distributionPage/epic-games-wallet.svg?react";
import GameRatings from "@/assets/distributionPage/game-ratings-localization-and-affliate-network-benefits.svg?react";
import Plus from "@/assets/distributionPage/Plus.svg?react";
import Less from "@/assets/distributionPage/Less.svg?react";
import servicePublishing from "@/assets/distributionPage/games-store-self-service-publishing-tools.webp";
import LogotypeVertical from "@/assets/distributionPage/logotype-vertical-white.svg?react";
import { ElementType } from "react";

export type TQuestion = {
  id: number;
  question: string;
  answer: string;
  active: boolean;
};
export const question: TQuestion = {
  id: 0,
  question:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, facilis!",
  answer:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat facilis magnam consequatur ut perferendis voluptatem natus fuga, maxime quam aut molestiae, optio mollitia quis beatae.",
  active: false,
};
export const questions: TQuestion[] = [
  { ...question, id: 1 },
  { ...question, id: 2 },
  { ...question, id: 3 },
  { ...question, id: 4 },
  { ...question, id: 5 },
  { ...question, id: 6 },
  { ...question, id: 7 },
  { ...question, id: 8 },
];
export type TCardBasic = {
  title: string;
  description: string;
  className?: string;
  SVGComponent: ElementType;
};
export const cardBasicsData: TCardBasic[] = [
  {
    SVGComponent: DirectGameDistribution,
    title: "Reach a Global Audience",
    description:
      "Direct distribution to over 230 million Epic users across 187 countries with 16 languages supported.",
    className: "h-full lg:h-[28.1rem]",
  },
  {
    SVGComponent: VideoGameRevenue,
    title: "88%/12% Revenue Split",
    description:
      "Keep 88% of the revenue and monitor product performance with integrated analytics dashboards.",
    className: "h-full lg:h-[28.1rem]",
  },
  {
    SVGComponent: PlayerEngagement,
    title: "Drive Player Engagement",
    description:
      "Tap into store features like wishlists, achievements, store-wide promotions and more!",
    className: "h-full lg:h-[28.1rem]",
  },
  {
    SVGComponent: GamesPaymentMethods,
    title: "Worldwide E-Commerce",
    description:
      "Epic's payment service supports 76 payment methods with 47 regional currencies and more on the way.",
    className: "h-full lg:h-[28.1rem]",
  },
  {
    SVGComponent: EpicGamesWallet,
    title: "Epic Wallet",
    description:
      "Users can load up their Wallet with funds to spend on products and services in the store, now available in more than 140 countries.",
    className: "h-full lg:h-[28.1rem]",
  },
  {
    SVGComponent: GameRatings,
    title: "Additional Benefits",
    description:
      "Easy IARC ratings in Epic Developer Portal, request no-cost localization for store pages and activate our Support-A-Creator affiliate network.",
    className: "h-full lg:h-[28.1rem]",
  },
];

export {
  DeveloperCommunity,
  OnlineServices,
  UnrealEngine,
  DirectGameDistribution,
  VideoGameRevenue,
  PlayerEngagement,
  GamesPaymentMethods,
  EpicGamesWallet,
  GameRatings,
  Plus,
  Less,
  servicePublishing,
  LogotypeVertical,
};
