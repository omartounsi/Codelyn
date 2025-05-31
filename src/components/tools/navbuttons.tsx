import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useNavigate, useParams } from "react-router";

interface NavButtonsProps {
  previous?: string | null;
  next?: string | null;
}

export const NavButtons = ({ previous, next }: NavButtonsProps) => {
  const navigate = useNavigate();
  const id = useParams();

  // If no props provided, use default HTML lesson navigation
  const defaultPrevious =
    Number(id.lessonId) > 1
      ? `/lessons/html/${Number(id.lessonId ?? "1") - 1}`
      : null;
  const defaultNext = `/lessons/html/${Number(id.lessonId ?? "1") + 1}`;

  const previousRoute = previous !== undefined ? previous : defaultPrevious;
  const nextRoute = next !== undefined ? next : defaultNext;

  return (
    <div className="flex items-center h-10 w-[50%] top-[50%] justify-between fixed right-0 px-4 z-20">
      {previousRoute && (
        <button
          onClick={() => navigate(previousRoute)}
          className="hover:brightness-150 cursor-pointer text-sm font-light text-foreground border w-6 h-6 flex justify-center items-center rounded-full opacity-20 hover:scale-140 hover:opacity-80 transition-all"
        >
          <SlArrowLeft />
        </button>
      )}

      {nextRoute && (
        <button
          onClick={() => navigate(nextRoute)}
          className="hover:brightness-150 cursor-pointer text-sm font-light text-foreground ml-auto border w-6 h-6 flex justify-center items-center rounded-full opacity-20 hover:scale-140 hover:opacity-80 transition-all"
        >
          <SlArrowRight />
        </button>
      )}
    </div>
  );
};
