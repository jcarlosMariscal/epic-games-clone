import { FaGlobeAmericas } from "react-icons/fa";
import { FaDiscord, FaTwitter } from "react-icons/fa6";

export const FollowUs = () => {
  return (
    <>
      <span className="mt-12 mb-6 block">Follow Us</span>
      <div className="bg-epic-gray-100 p-5 rounded-md">
        <div className="flex justify-between mx-20 py-5">
          <span className="a-icon-translate">
            <FaGlobeAmericas />
          </span>
          <span className="a-icon-translate">
            <FaTwitter />
          </span>
          <span className="a-icon-translate">
            <FaDiscord />
          </span>
          <span className="a-icon-translate">
            <FaGlobeAmericas />
          </span>
          <span className="a-icon-translate">
            <FaTwitter />
          </span>
          <span className="a-icon-translate">
            <FaDiscord />
          </span>
        </div>
      </div>
    </>
  );
};
