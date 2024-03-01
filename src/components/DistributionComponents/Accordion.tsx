import { Less, Plus, TQuestion } from "../../data/distributionPage";

type TAccordion = {
  item: TQuestion;
  activateAnswer: (id: number) => void;
};
export const Accordion = ({ item, activateAnswer }: TAccordion) => {
  return (
    <div className="my-2 ">
      <div
        className="pb-4 border-b border-epic-gray-50 border-opacity-50"
        onClick={() => activateAnswer(item.id)}
      >
        <div className="px-1 flex justify-between hover:text-epic-blue-100 cursor-pointer">
          <h3 className="font-bold">{item.question}</h3>
          <span className="w-10 sm:w-5">
            {item.active ? <Plus /> : <Less />}
          </span>
        </div>
        <div className={`my-4 ${item.active ? "block" : "hidden"}`}>
          <p className="text-sm opacity-80">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};
