import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { ButtonComponent } from "../pure/ButtonComponent";
import { GameDetail } from "./GameDetail";
import { useState } from "react";

export const GameDetails = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const title = "◉ Game Features ◉";
  const description =
    "Dragonheir: Silent Gods is an open-world high-fantasy RPG that puts  in control of over 200 heroes. In the multiversal adventure, you'll experience strategic combat like never before, where every move counts and every decision could be the difference between victory and defeat.";
  const handleClick = () => setShowDetails(!showDetails);
  return (
    <div>
      <div className={`overflow-hidden ${showDetails ? "" : "h-80"}`}>
        <GameDetail title={title} description={description} />
        <GameDetail
          title="〓 Adventure In An Open World 〓"
          description={description}
        />
        <GameDetail title="〓 Roll The Dice 〓" description={description} />
        <GameDetail title="〓 Roll The Dice 〓" description={description} />
        <GameDetail title="〓 Roll The Dice 〓" description={description} />
        <GameDetail title="〓 Roll The Dice 〓" description={description} />
        <GameDetail title="〓 Roll The Dice 〓" description={description} />
      </div>
      {/* type, className, id, size, hover = false, onClick, children, */}
      <div className="my-4 bg-epic-black">
        <ButtonComponent
          type="button"
          className="bg-epic-gray-50 bg-opacity-80 text-xs !w-full hover:bg-opacity-100"
          size="lg"
          id=""
          onClick={handleClick}
        >
          {showDetails ? (
            <>
              SHOW LESS <FiChevronUp className="text-xl" />
            </>
          ) : (
            <>
              SHOW MORE <FiChevronDown className="text-xl" />
            </>
          )}
        </ButtonComponent>
      </div>
    </div>
  );
};
