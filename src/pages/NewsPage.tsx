import { NewsList } from "../components/NewsComponent/NewsList";
import { NewsMainContent } from "../components/NewsComponent/NewsMainContent";

export const NewsPage = () => {
  return (
    <div className="w-full">
      <h1 className="text-lg">
        <span>Epic Games New</span>
      </h1>
      <NewsMainContent />
      <NewsList />
    </div>
  );
};
