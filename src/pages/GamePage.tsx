import { CarouselGame } from "../components/Carousel/CarouselGame";
import { GameDetails } from "../components/GameComponents/GameDetails";
import { GameNav } from "../components/GameComponents/GameNav";
import { GameTitle } from "../components/GameComponents/GameTitle";
import { HyperLinkComponent } from "../components/pure/HyperLinkComponent";

export const GamePage = () => {
  return (
    <div className="w-full">
      <GameTitle />
      <GameNav />
      <div className="md:grid md:grid-cols-12 gap-10 w-full">
        <div className="md:col-span-8">
          <CarouselGame />
          <div className="my-8">
            <p>Open-World Adventure High-Fantasy Strategy RPG</p>
            <div className="flex gap-20 text-sm my-10">
              <div className="pl-6 border-l border-epic-gray-50">
                <span className="block opacity-60">Genres</span>
                <div>
                  <HyperLinkComponent className="underline hover:no-underline">
                    Adventure
                  </HyperLinkComponent>
                  ,{" "}
                  <HyperLinkComponent className="underline hover:no-underline">
                    Open World
                  </HyperLinkComponent>
                  ,{" "}
                  <HyperLinkComponent className="underline hover:no-underline">
                    RPG
                  </HyperLinkComponent>
                </div>
              </div>
              <div className="pl-6 border-l border-epic-gray-50">
                <span className="block opacity-60">Features</span>
                <div>
                  <HyperLinkComponent className="underline hover:no-underline">
                    Co-op
                  </HyperLinkComponent>
                  ,{" "}
                  <HyperLinkComponent className="underline hover:no-underline">
                    Cross Platform
                  </HyperLinkComponent>
                  ,{" "}
                  <HyperLinkComponent className="underline hover:no-underline">
                    MMO
                  </HyperLinkComponent>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-epic-gray-100 p-5 rounded-md">
            <span className="text-[10px] opacity-60 block">
              LET'S JOIN D&D LEGENDS IN DRAGONHEIR: SILENT GODS!
            </span>
            <span className="text-sm">
              ◉ Dive into an Epic Magic Showdown! Starting Feb. 23, D&D
              Collaboration Phase 2 will reveal a brand-new storyline,
              characters, gameplay, artifact, dice appearances, dungeons, and
              more for you to explore!
            </span>
          </div>
          <GameDetails />
        </div>
        <div className="col-span-4 w-full h-10"></div>
      </div>
    </div>
  );
};
