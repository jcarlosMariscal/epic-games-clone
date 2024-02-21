import skullAndBones from "@/assets/images/games/skull-and-bones-premium-edition-desktop.jpg";
import banishers from "@/assets/images/games/banishers-ghosts-of-new-eden-desktop.jpg";
import princeOfPersia from "@/assets/images/games/prince-of-persia-lost-crown-desktop.jpg";
import honkaiStarRail from "@/assets/images/games/honkai-star-rail-version-2-0-desktop.jpg";
import outriders from "@/assets/images/games/outriders-complete-edition-desktop.jpg";
import homeworld3 from "@/assets/images/games/homeworld-3-desktop.jpg";
import skullAndBonesThumb from "@/assets/images/games/skull-and-bones-premium-edition-thumb.jpg";
import banishersThumb from "@/assets/images/games/banishers-ghosts-of-new-eden-thumb.jpg";
import princeOfPersiaThumb from "@/assets/images/games/prince-of-persia-lost-crown-thumb.jpg";
import honkaiStarRailThumb from "@/assets/images/games/honkai-star-rail-version-2-0-thumb.jpg";
import outridersThumb from "@/assets/images/games/outriders-complete-edition-thumb.jpg";
import homeworld3Thumb from "@/assets/images/games/homeworld-3-thumb.jpg";
import skullAndBonesLogo from "@/assets/images/games/skull-and-bones-premium-edition-logo.png";
import banishersLogo from "@/assets/images/games/banishers-ghosts-of-new-eden-logo.png";
import princeOfPersiaLogo from "@/assets/images/games/prince-of-persia-lost-crown-logo.png";
import honkaiStarRailLogo from "@/assets/images/games/honkai-star-rail-version-2-0-logo.png";
import outridersLogo from "@/assets/images/games/outriders-complete-edition-logo.png";
import homeworld3Logo from "@/assets/images/games/homeworld-3-logo.png";
import skullAndBonesMobile from "@/assets/images/games/skull-and-bones-premium-edition-mobile.jpg";
import banishersMobile from "@/assets/images/games/banishers-ghosts-of-new-eden-mobile.jpg";
import princeOfPersiaMobile from "@/assets/images/games/prince-of-persia-lost-crown-mobile.jpg";
import honkaiStarRailMobile from "@/assets/images/games/honkai-star-rail-version-2-0-mobile.jpg";
import outridersMobile from "@/assets/images/games/outriders-complete-edition-mobile.jpg";
import homeworld3Mobile from "@/assets/images/games/homeworld-3-mobile.jpg";
import theLamplightherDeluxe from "@/assets/images/deluxe/dotw-the-lamplighers-league-breaker.jpg";
import DisciplesDeluxe from "@/assets/images/deluxe/dotw-disciples-liberation-deluxe-edition-breaker.jpg";
import salesSpecialDeluxe from "@/assets/images/deluxe/sales-specials-dotw-breaker-asset.jpg";
import dakarDesertRally from "@/assets/images/freegames/DakarDesertRally_SaberPortoLtd.avif";
import superMeatBoyForever from "@/assets/images/freegames/SuperMeatBoyForever_TeamMeat.jpg";

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

export const gamesDeluxe: IGamesDeluxe[] = [
  {
    id: 1,
    title: "The Lamplighters League",
    image: theLamplightherDeluxe,
    price: "899",
    discount: "-40%",
    discountPrice: "539.40",
  },
  {
    id: 2,
    title: "Disciples: Liberation Digital Deluxe Edition",
    image: DisciplesDeluxe,
    price: "559.99",
    discount: "-50%",
    discountPrice: "289.99",
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
    title: "Skull and Bones",
    images: {
      image: skullAndBones,
      thumb: skullAndBonesThumb,
      logo: skullAndBonesLogo,
      mobile: skullAndBonesMobile,
    },
    status: "EARLY ACCESS NOW AVAILABLE",
    description:
      "Purchase Premium Edition to start playing inmediately and receive in-game content and the digital art book/soundtrack.",
    price: "",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 2,
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
    id: 3,
    title: "Prince of Persia The Lost Crown",
    images: {
      image: princeOfPersia,
      thumb: princeOfPersiaThumb,
      logo: princeOfPersiaLogo,
      mobile: princeOfPersiaMobile,
    },
    status: "OUT NOW",
    description:
      "Dash into a stylish and thrilling action-adventure platformer set in a mythological Persian world.",
    price: "Starting at MX$999.00",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 4,
    title: "Honkai Star Rail",
    images: {
      image: honkaiStarRail,
      thumb: honkaiStarRailThumb,
      logo: honkaiStarRailLogo,
      mobile: honkaiStarRailMobile,
    },
    status: "VERSION 2.0",
    description: '"If One Dreams At Midnight" released!',
    price: "Free",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 5,
    title: "OUTRIDERS COMPLETE EDITION",
    images: {
      image: outriders,
      thumb: outridersThumb,
      logo: outridersLogo,
      mobile: outridersMobile,
    },
    status: "NOW AVAILABLE",
    description:
      "Get the complete experience now. Includes all the released content for OUTRIDERS.",
    price: "Starting at MX$550.00",
    buttonOne: "BUY NOW",
    buttonTwo: "ADD TO WISH LIST",
  },
  {
    id: 6,
    title: "Homeworld 3",
    images: {
      image: homeworld3,
      thumb: homeworld3Thumb,
      logo: homeworld3Logo,
      mobile: homeworld3Mobile,
    },
    status: "AVAILABLE MARCH 8, 2024",
    description:
      "Tactical, beautiful, and wholly unique, the GOTY-winning sci-fi RTS returns with Homeworld 3.",
    price: "Starting at MX$999.99",
    buttonOne: "PRE PURCHASE NOW",
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
    image: skullAndBones,
    thumb: skullAndBonesThumb,
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
    image: banishers,
    thumb: banishersThumb,
    status: "Coming October 7",
    description:
      "Welcome to Yara. Antón Castillo is intent on restoring his nation back to its former glory by any means, a revolution.",
    price: "619.190",
    studio: "Ubisoft",
  },
  {
    id: 3,
    title: "Assassins Creeds Valhalla",
    image: princeOfPersia,
    thumb: princeOfPersiaThumb,
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
    image: honkaiStarRail,
    thumb: honkaiStarRailThumb,
    status: "Now Out",
    description:
      "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw",
    price: "119.190",
    studio: "Tarsier Studios",
  },
  {
    id: 5,
    title: "outriders 2042",
    image: outriders,
    thumb: outridersThumb,
    status: "PRE-LOAD NOW AVAILABLE",
    description:
      "Don't miss a moment of the outriders 2042 Open Beta, start your pre-load now!",
    price: "659.000",
    studio: "Electronic Arts",
  },
  {
    id: 6,
    title: "homeworld3 bridge of spirits",
    image: homeworld3,
    thumb: homeworld3Thumb,
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
    title: "Dakar Desert Rally",
    image: dakarDesertRally,
    freeNow: true,
    rangeDate: "Free Now - Feb 22 at 10:00 AM",
  },
  {
    id: 2,
    title: "Super Meat Boy Forever",
    image: superMeatBoyForever,
    freeNow: false,
    rangeDate: "Free Feb 22 - Feb 29",
  },
];

export default gameList;
