import { ButtonComponent } from "../pure/ButtonComponent";

type TControls = {
  left: string;
  right: string;
  prevSlide: () => void;
  nextSlide: () => void;
};
export const Controls = ({ left, right, prevSlide, nextSlide }: TControls) => {
  return (
    <>
      {/* type, className, id, size, hover = false, onClick, */}
      <ButtonComponent
        className={`${left} -translate-y-1/2 text-2xl bg-epic-black p-4`}
        size="xs"
        onClick={prevSlide}
      >
        &#10094;
      </ButtonComponent>
      <ButtonComponent
        className={`${right} -translate-y-1/2 text-2xl bg-epic-black p-4`}
        size="xs"
        onClick={prevSlide}
      >
        &#10095;
      </ButtonComponent>
    </>
  );
};
