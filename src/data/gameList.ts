import expeditions from "@/assets/images/games/expeditions-desktop.jpg";
import expeditionsThumb from "@/assets/images/games/expeditions-thumb.jpg";
import expeditionsLogo from "@/assets/images/games/expeditions-logo.png";
import expeditionsMobile from "@/assets/images/games/expeditions-mobile.jpg";
import deadByDaylight from "@/assets/images/games/dead-by-daylight-all-things-wicked-desktop.jpg";
import deadByDaylightThumb from "@/assets/images/games/dead-by-daylight-all-things-wicked-thumb.jpg";
import deadByDaylightLogo from "@/assets/images/games/dead-by-daylight-all-things-wicked-logo.png";
import deadByDaylightMobile from "@/assets/images/games/dead-by-daylight-all-things-wicked-mobile.jpg";
import fortnitec5s2 from "@/assets/images/games/fortnite-c5s2-desktop.jpeg";
import fortnitec5s2Thumb from "@/assets/images/games/fortnite-c5s2-thumb.jpg";
import fortnitec5s2Logo from "@/assets/images/games/fortnite-c5s2-logo.png";
import fortnitec5s2Mobile from "@/assets/images/games/fortnite-c5s2-mobile.jpg";
import farHorizon from "@/assets/images/games/far-horizon-desktop.jpg";
import farHorizonThumb from "@/assets/images/games/far-horizon-thumb.jpg";
import farHorizonLogo from "@/assets/images/games/far-horizon-logo.png";
import farHorizonMobile from "@/assets/images/games/far-horizon-mobile.jpg";
import banishers from "@/assets/images/games/banishers-ghosts-of-new-eden-desktop.jpg";
import banishersThumb from "@/assets/images/games/banishers-ghosts-of-new-eden-thumb.jpg";
import banishersLogo from "@/assets/images/games/banishers-ghosts-of-new-eden-logo.png";
import banishersMobile from "@/assets/images/games/banishers-ghosts-of-new-eden-mobile.jpg";
import frostpunk2 from "@/assets/images/games/frostpunk2-desktop.jpg";
import frostpunk2Thumb from "@/assets/images/games/frostpunk2-thumb.jpg";
import frostpunk2Logo from "@/assets/images/games/frostpunk2-logo.png";
import frostpunk2Mobile from "@/assets/images/games/frostpunk2-mobile.jpg";

import aftermathDeluxe from "@/assets/images/deluxe/dotw-wwz-aftermath-deluxe-edition-breaker.jpg";
import toolsUpUltimateDeluxe from "@/assets/images/deluxe/dotw-tools-up-ultimate-edition-breaker.jpg";
import salesSpecialDeluxe from "@/assets/images/deluxe/sales-specials-dotw-breaker-asset.jpg";
import astroDuel2 from "@/assets/images/freegames/astro-duel-2.avif";
import deusEX from "@/assets/images/freegames/deus-ex--mankind-divided.avif";
import wideTheBridge from "@/assets/images/freegames/Wide_TheBridge.avif";

export type Images = {
  image: string;
  thumb: string;
  logo: string;
  mobile: string;
};

export interface IGameCarousel {
  id: number;
  title: string;
  images: Images;
  status: string;
  description: string;
  price: string;
  buttonOne: string;
  buttonTwo: string;
}
export interface IGame {
  id: number;
  title: string;
  image: string;
  thumb: string;
  status: string;
  description: string;
  price: string;
  studio: string;
  discount?: string;
  discountPrice?: string;
}

export interface IGamesDeluxe {
  id: number;
  title: string;
  image: string;
  price: string | boolean;
  discount?: string;
  discountPrice?: string;
  linkTo?: string;
  linkText?: string;
}

export { frostpunk2 };
export const gamesDeluxe: IGamesDeluxe[] = [
  {
    id: 1,
    title: "World War Z: Aftermath - Deluxe Edition",
    image: aftermathDeluxe,
    price: "599.99",
    discount: "-50%",
    discountPrice: "279.99",
  },
  {
    id: 2,
    title: "Tools Up! Ultimate Edition",
    image: toolsUpUltimateDeluxe,
    price: "312.99",
    discount: "-80%",
    discountPrice: "62.59",
  },
  {
    id: 3,
    title: "Check out all the deals for this week.",
    image: salesSpecialDeluxe,
    price: false,
    linkTo: "/",
    linkText: "Browse",
  },
];

export const gameCarousel: IGameCarousel[] = [
  {
    id: 1,
    title: "Expeditions: A MudRunner Game",
    images: {
      image: expeditions,
      thumb: expeditionsThumb,
      logo: expeditionsLogo,
      mobile: expeditionsMobile,
    },
    status: "NOW AVAILABLE",
    description:
      "Embark on scientific ecpeditions with this new off-road adventure from the creators of MudRunner and SnowRunner.",
    price: "Starting at MX$499.99",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 2,
    title: "Dead by Daylight",
    images: {
      image: deadByDaylight,
      thumb: deadByDaylightThumb,
      logo: deadByDaylightLogo,
      mobile: deadByDaylightMobile,
    },
    status: "All Things Wicked",
    description: "Face the unknown in Dead by Daylight's All Things Wicked",
    price: "Starting at MX$104.85",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 3,
    title: "Fortnite",
    images: {
      image: fortnitec5s2,
      thumb: fortnitec5s2Thumb,
      logo: fortnitec5s2Logo,
      mobile: fortnitec5s2Mobile,
    },
    status: "NEW SEASON",
    description:
      "Olympian legends rule the Island. Use their mytholocical means against them in Chapter 5 Season 2: Myths & Mortals!",
    price: "Free",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 4,
    title: "Far Horizon",
    images: {
      image: farHorizon,
      thumb: farHorizonThumb,
      logo: farHorizonLogo,
      mobile: farHorizonMobile,
    },
    status: "FROM EPIC FIRST RUN",
    description:
      "Embark on an epic adventure of exploration, ingenuity, and survival as you loot, shoot, and craft to forge your destiny.",
    price: "Starting at MX$267.99",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 5,
    title: "Banishers: Ghosts of New Eden",
    images: {
      image: banishers,
      thumb: banishersThumb,
      logo: banishersLogo,
      mobile: banishersMobile,
    },
    status: "NOW AVAILABLE",
    description:
      "Hunts ghost as two memorable characters in a story driven Action-RPG where your decisions have dramatic consequences.",
    price: "Starting at MX$599.99",
    buttonOne: "BUY NOW",
    buttonTwo: "",
  },
  {
    id: 6,
    title: "Frostpunk 2",
    images: {
      image: frostpunk2,
      thumb: frostpunk2Thumb,
      logo: frostpunk2Logo,
      mobile: frostpunk2Mobile,
    },
    status: "COMING JULY 25",
    description:
      "Discover a city-survival game set 30 years afeter an apocalyptic ravaged Earth.",
    price: "Starting at MX$999.99",
    buttonOne: "WISHLIST NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
];

export const gameCarouselDots = gameCarousel.map((game) => {
  return { id: game.id, title: game.title, thumb: game.images.thumb };
});
const gameList: IGame[] = [
  {
    id: 1,
    title: "skullAndBones",
    image: expeditions,
    thumb: expeditionsThumb,
    status: "Out Now",
    description:
      "skullAndBones is an immersive first-person action game that casts you as a supernatural assassin driven by revenge.",
    price: "200.500",
    studio: "Bethesda",
    discount: "-35%",
    discountPrice: "161.850",
  },
  {
    id: 2,
    title: "Far Cry 6",
    image: deadByDaylight,
    thumb: deadByDaylightThumb,
    status: "Coming October 7",
    description:
      "Welcome to Yara. Antón Castillo is intent on restoring his nation back to its former glory by any means, a revolution.",
    price: "619.190",
    studio: "Ubisoft",
  },
  {
    id: 3,
    title: "Assassins Creeds Valhalla",
    image: fortnitec5s2,
    thumb: fortnitec5s2Thumb,
    status: "Now Out",
    description:
      "Assassin's Creed Valhalla, Prepare for War Amid Sigrblot Season! Sharpen your axe and grab your one-handed sword to prepare for The Siege of Paris",
    price: "309.190",
    studio: "Ubisoft",
    discount: "-35%",
    discountPrice: "161.850",
  },
  {
    id: 4,
    title: "Little Nightmare",
    image: farHorizon,
    thumb: farHorizonThumb,
    status: "Now Out",
    description:
      "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw",
    price: "119.190",
    studio: "Tarsier Studios",
  },
  {
    id: 5,
    title: "Far Cry 6",
    image: banishers,
    thumb: banishersThumb,
    status: "Coming October 7",
    description:
      "Welcome to Yara. Antón Castillo is intent on restoring his nation back to its former glory by any means, a revolution.",
    price: "619.190",
    studio: "Ubisoft",
  },
  {
    id: 6,
    title: "homeworld3 bridge of spirits",
    image: frostpunk2,
    thumb: frostpunk2Thumb,
    status: "OUT NOW",
    description:
      "homeworld3, a young Spirit Guide, travels to an abandoned village in search of the sacred mountain shrine.",
    price: "659.000",
    studio: "Ember Lab",
    discount: "-35%",
    discountPrice: "161.850",
  },
];

// export const highlightGames = gameList.slice(0, 6);

// export const dummyGameList = [
//   ...gameList,
//   ...gameList,
//   ...gameList,
//   ...gameList,
// ];

interface IFreeGames {
  id: number;
  title: string;
  image: string;
  freeNow: boolean;
  rangeDate: string;
}
export const freeGames: IFreeGames[] = [
  {
    id: 1,
    title: "Astro Duel 2",
    image: astroDuel2,
    freeNow: true,
    rangeDate: "Free Now - Mar 14 at 10:00 AM",
  },
  {
    id: 2,
    title: "Deus Ex - Mankind Divided",
    image: deusEX,
    freeNow: false,
    rangeDate: "Free Mar 14 - Mar 21",
  },
  {
    id: 3,
    title: "The Bridge",
    image: wideTheBridge,
    freeNow: false,
    rangeDate: "Free Mar 14 - Mar 21",
  },
];

export default gameList;
