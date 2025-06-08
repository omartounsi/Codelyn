import { IoCheckmark } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const MainCSS = () => {
  const chapters = [
    { id: 1, title: "Introduction to CSS" },
    { id: 2, title: "CSS Selectors" },
    { id: 3, title: "Text and Fonts" },
    { id: 4, title: "Colors and Backgrounds" },
    { id: 5, title: "The Box Model" },
    { id: 6, title: "CSS Layout Basics" },
    { id: 7, title: "Flexbox Layout" },
    { id: 8, title: "CSS Grid Layout" },
    { id: 9, title: "Responsive Design and Media Queries" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="grid w-full min-h-screen grid-cols-12 pb-3 bg-zinc-950 text-neutral-300 pt-14">
      <div className="col-span-1 border-r border-dashed border-neutral-800"></div>
      {/* MAIN */}
      <div className="flex items-center col-span-10">
        {/* CARD */}
        <div className="max-h-170 w-[50%] border border-neutral-800 mt-10 rounded-xl flex flex-col p-10 overflow-y-scroll scrollbar-hide">
          {/* TITLE */}
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50 mb-4">
            CSS Chapters
          </h1>
          {/* CHAPTERS */}
          <div className="flex flex-col h-full gap-2">
            {chapters.map((chapter) => (
              <div
                onClick={() => navigate(`/lessons/css/${chapter.id}`)}
                key={chapter.id}
                className="flex items-center gap-2 px-4 transition-transform duration-300 border cursor-pointer border-neutral-900 min-h-16 rounded-xl hover:scale-105"
              >
                <div className="flex items-center justify-center text-black border border-white rounded-full h-7 w-7">
                  <IoCheckmark />
                </div>
                <p className="max-w-2xl font-light text-foreground text-neutral-300">
                  {" "}
                  {chapter.title}
                </p>
                <div className="ml-auto">
                  <BsThreeDots />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 border-l border-dashed border-neutral-800"></div>
    </div>
  );
};
