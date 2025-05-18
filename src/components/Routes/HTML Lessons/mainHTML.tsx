import { IoCheckmark } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const MainHTML = () => {
  const chapters = [
    { id: 1, title: "What is HTML?" },
    { id: 2, title: "Hands On" },
    { id: 3, title: "Attributes" },
    { id: 4, title: "Commonly used tags" },
    { id: 5, title: "Lists" },
    { id: 6, title: "Tables" },
    { id: 7, title: "Divisions and Spans" },
    { id: 8, title: "Semantics" },
    { id: 100, title: "Structuring" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bg-zinc-950 h-[200vh] w-full grid grid-cols-12 text-neutral-300 pt-14 scrollbar-custom">
      <div className="col-span-1 border-r border-dashed border-neutral-800"></div>
      <div className="col-span-10">
        <div className="flex flex-col items-center">
          {/* CARD */}
          <div className="max-h-170 w-[96%] border border-neutral-800 mt-10 rounded-xl flex flex-col p-10 overflow-y-scroll scrollbar-custom">
            {/* TITLE */}
            <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50 mb-4">
              Chapters
            </h1>
            {/* CHAPTERS */}
            <div className="flex flex-col gap-2 h-full">
              {chapters.map((chapter) => (
                <div
                  onClick={() => navigate(`/lessons/html/${chapter.id}`)}
                  key={chapter.id}
                  className="border border-neutral-900 flex items-center gap-2 px-4 min-h-16 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div className="h-7 w-7 border border-white rounded-full flex items-center justify-center text-black">
                    <IoCheckmark />
                  </div>
                  <p className="max-w-2xl  font-light text-foreground text-neutral-300">
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
      </div>
      <div className="col-span-1 border-l border-dashed border-neutral-800"></div>
    </div>
  );
};
