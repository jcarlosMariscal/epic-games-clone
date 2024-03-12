import { FaFacebook, FaTwitter, FaYoutube, FaChevronUp } from "react-icons/fa";
import epicLogo from "@/assets/epicgames-logo-light.svg";
import UELogoWhite from "@/assets/ue-logo-white.svg";
import { HyperLinkComponent } from "./pure/HyperLinkComponent";
export const FooterComponent = () => {
  const handleClick = () => {
    // const scrolled = window.pageYOffset;
    // console.log(scrolled);
    window.scrollBy(0, -10000);
    // if (window.pageYOffset > 0) {
    //   window.scrollBy(0, -80);
    //   setTimeout(handleClick, 0);
    // }
  };
  return (
    <div className="bg-epic-gray-100 text-white flex justify-center">
      <div className="py-8 w-full lg:w-11/12 px-6 lg:px-1">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <HyperLinkComponent type="hover" className="text-3xl opacity-80">
              <FaFacebook />
            </HyperLinkComponent>
            <HyperLinkComponent type="hover" className="text-3xl opacity-80">
              <FaTwitter />
            </HyperLinkComponent>
            <HyperLinkComponent type="hover" className="text-3xl opacity-80">
              <FaYoutube />
            </HyperLinkComponent>
          </div>
          <a
            className="text-xl opacity-80 size-9 border-2 flex items-center justify-center hover:text-epic-blue-100 btn-transition cursor-pointer"
            onClick={handleClick}
          >
            <FaChevronUp />
          </a>
        </div>
        <div className="w-full my-4">
          <span className="block text-sm opacity-50 my-2">Resources</span>
          <div className="text-sm flex flex-wrap items-center gap-0 ssm:gap-2 xl:gap-4">
            <div className="flex flex-col gap-1">
              <HyperLinkComponent type="hover">
                Support-A-Creator
              </HyperLinkComponent>
              <HyperLinkComponent type="hover">
                Distribute on Epic Games
              </HyperLinkComponent>
              <HyperLinkComponent type="hover">Careers</HyperLinkComponent>
              <HyperLinkComponent type="hover">Company</HyperLinkComponent>
            </div>
            <div className="flex flex-col gap-1">
              <HyperLinkComponent type="hover">
                Fan Art Policy
              </HyperLinkComponent>
              <HyperLinkComponent type="hover">UX Research</HyperLinkComponent>
              <HyperLinkComponent type="hover">Store EULA</HyperLinkComponent>
            </div>
            <div className="flex flex-col gap-1">
              <HyperLinkComponent type="hover">
                Online Services
              </HyperLinkComponent>
              <HyperLinkComponent type="hover">
                Community Rules
              </HyperLinkComponent>
              <HyperLinkComponent type="hover">
                Epic Newsroom
              </HyperLinkComponent>
            </div>
          </div>
        </div>

        <div className="w-full my-4 ssm:w-7/12 md:w-5/12 lg:w-4/12">
          <span className="block text-sm opacity-50 my-2">
            Made By Epic Games
          </span>
          <div className="text-sm flex flex-wrap items-center gap-0 ssm:gap-4 xl:gap-20">
            <div className="flex flex-col gap-1">
              <HyperLinkComponent type="hover">
                Battle Breakers
              </HyperLinkComponent>
              <HyperLinkComponent type="hover">Fortnite</HyperLinkComponent>
              <HyperLinkComponent type="hover">
                Infinity Blade
              </HyperLinkComponent>
            </div>
            <div className="flex flex-col gap-1">
              <HyperLinkComponent type="hover">Robo Recall</HyperLinkComponent>
              <HyperLinkComponent type="hover">
                Shadow Complex
              </HyperLinkComponent>
              <HyperLinkComponent type="hover">
                Unreal Tournament
              </HyperLinkComponent>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10"></div>
        <div className="w-full mt-8">
          <div className="w-full xl:w-6/12 text-xs font-extralight leading-loose">
            <p>
              © 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games,
              the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal
              Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal
              Tournament logo are trademarks or registered trademarks of Epic
              Games, Inc. in the United States of America and elsewhere.
            </p>
            <p>
              Other brands or product names are the trademarks of their
              respective owners.
            </p>
            <p>
              Our websites may contain links to other sites and resources
              provided by third parties. These links are provided for your
              convenience only. Epic Games has no control over the contents of
              those sites or resources, and accepts no responsibility for them
              or for any loss or damage that may arise from your use of them.
            </p>
          </div>
        </div>
        <div className="w-full mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start text-xs">
            <HyperLinkComponent type="hover">
              Terms of Service Privacy
            </HyperLinkComponent>
            <HyperLinkComponent type="hover">Privacy Policy</HyperLinkComponent>
            <HyperLinkComponent type="hover">
              Store Refund Policy
            </HyperLinkComponent>
          </div>
          <div className="flex gap-2">
            <div className="opacity-60 hover:opacity-100 cursor-pointer">
              <img
                src={epicLogo}
                alt="EpicGames Logo"
                className="size-[1.9rem]"
              />
            </div>
            <div className="opacity-60 hover:opacity-100 cursor-pointer">
              <img
                src={UELogoWhite}
                alt="Unreal Engine Logo"
                className="size-[1.9rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
