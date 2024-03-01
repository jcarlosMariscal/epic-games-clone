import { CardGradient } from "../components/DistributionComponents/CardGradient";
import { CardMain } from "../components/DistributionComponents/CardMain";
import { CardBasic } from "../components/DistributionComponents/CardBasic";
import { useState } from "react";
import { Accordion } from "../components/DistributionComponents/Accordion";
import {
  DeveloperCommunity,
  OnlineServices,
  TQuestion,
  UnrealEngine,
  cardBasicsData,
  questions,
} from "../data/distributionPage";
const gradient1 =
  "rgba(22, 39, 49, 0) linear-gradient(to right, rgb(22, 39, 49) 31%, rgba(22, 39, 49, 0.8) 46%, rgba(22, 39, 49, 0.1) 63%, rgba(22, 39, 49, 0.1) 82%)";
const gradient2 =
  "rgba(26, 12, 71, 0) linear-gradient(to right, rgb(26, 12, 71) 31%, rgba(26, 12, 71, 0.8) 46%, rgba(26, 12, 71, 0.1) 63%, rgba(26, 12, 71, 0.1) 82%)";
const gradient3 =
  "rgba(14, 17, 40, 0) linear-gradient(to right, rgb(14, 17, 40) 31%, rgba(14, 17, 40, 0.8) 46%, rgba(14, 17, 40, 0.1) 63%, rgba(14, 17, 40, 0.1) 82%)";
export const DistributionPage = () => {
  const [answerQuestions, setAnswerQuestions] =
    useState<TQuestion[]>(questions);
  const handleClick = (id: number) => {
    setAnswerQuestions((prevData) => {
      const data = prevData;
      const updated = data.map((item) =>
        item.id === id
          ? {
              ...item,
              active: !item.active,
            }
          : item
      );
      return updated;
    });
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <CardMain />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {cardBasicsData.map((card, index) => (
          <CardBasic
            key={index}
            SVGComponent={card.SVGComponent}
            title={card.title}
            description={card.description}
            className={card.className}
          />
        ))}
      </div>
      <CardGradient
        backgroundStyle={gradient1}
        SVGComponent={DeveloperCommunity}
        description="Join the discussion or create topics for community support around distribution"
        linkText="Go to the community"
        sizeSVG="w-[12rem] md:w-full h-auto"
        height="h-[19rem]"
      />
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <CardGradient
          backgroundStyle={gradient2}
          SVGComponent={OnlineServices}
          description="A modular set of online services to connect your community across all platforms"
          linkText="Explore our services"
          sizeSVG="w-[10rem] md:w-full h-auto"
          height="h-[19rem] md:h-[17rem]"
        />
        <CardGradient
          backgroundStyle={gradient3}
          SVGComponent={UnrealEngine}
          description="The world's most open and advanced real-time 3D creation tool"
          linkText="Learn more"
          sizeSVG="w-[12rem] md:w-full h-auto"
          height="h-[19rem] md:h-[17rem]"
        />
      </div>
      <div className="w-full mb-20">
        <h2 className="text-center text-xl my-4">Frequently Asked Questions</h2>
        {answerQuestions.map((item) => (
          <Accordion key={item.id} item={item} activateAnswer={handleClick} />
        ))}
      </div>
    </div>
  );
};
