import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useNavigate, useParams } from "react-router";

export const NavButtons = () => {
  const navigate = useNavigate();
  const id = useParams();
  return (
    <div className="flex items-center h-10 w-[50%] top-[50%] justify-between fixed right-0 px-4 z-20">
      {Number(id.lessonId) > 1 && (
        <button
          onClick={() =>
            navigate(`/lessons/html/${Number(id.lessonId ?? "1") - 1}`)
          }
          className="hover:brightness-150 cursor-pointer text-sm font-light text-foreground border w-6 h-6 flex justify-center items-center rounded-full opacity-20 hover:scale-140 hover:opacity-80 transition-all"
        >
          <SlArrowLeft />
        </button>
      )}

      <button
        onClick={() =>
          navigate(`/lessons/html/${Number(id.lessonId ?? "1") + 1}`)
        }
        className="hover:brightness-150 cursor-pointer text-sm font-light text-foreground ml-auto border w-6 h-6 flex justify-center items-center rounded-full opacity-20 hover:scale-140 hover:opacity-80 transition-all"
      >
        <SlArrowRight />
      </button>
    </div>
  );
};
