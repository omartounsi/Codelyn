import { IoCheckmarkCircle } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useProgress } from "../../../context/ProgressContext";

export const MainCSS = () => {
  const { getCourseProgress, isLessonCompleted } = useProgress();
  const courseProgress = getCourseProgress("css");

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
          {/* COURSE PROGRESS HEADER */}
          <div className="mb-6 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-neutral-200">
                CSS Course Progress
              </h2>
              <span className="text-sm text-neutral-400 font-mono">
                {courseProgress?.completedLessons.length || 0} /{" "}
                {courseProgress?.totalLessons || 9} lessons
              </span>
            </div>
            <div className="w-full h-3 bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700 ease-out"
                style={{ width: `${courseProgress?.progress || 0}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-neutral-500">
              <span>Beginner</span>
              <span className="font-mono">
                {courseProgress?.progress || 0}%
              </span>
              <span>Expert</span>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50 mb-4">
            CSS Chapters
          </h1>
          {/* CHAPTERS */}
          <div className="flex flex-col h-full gap-2">
            {chapters.map((chapter) => {
              const isCompleted = isLessonCompleted("css", chapter.id);
              return (
                <div
                  onClick={() => navigate(`/lessons/css/${chapter.id}`)}
                  key={chapter.id}
                  className={`flex items-center gap-2 px-4 transition-transform duration-300 border cursor-pointer min-h-16 rounded-xl hover:scale-105 ${
                    isCompleted
                      ? "border-green-500/30 bg-green-500/5"
                      : "border-neutral-900"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center rounded-full h-7 w-7 ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : "text-black border border-white bg-white"
                    }`}
                  >
                    {isCompleted ? (
                      <IoCheckmarkCircle />
                    ) : (
                      <span className="text-sm font-semibold">
                        {chapter.id}
                      </span>
                    )}
                  </div>
                  <p
                    className={`max-w-2xl font-light ${
                      isCompleted ? "text-neutral-200" : "text-neutral-300"
                    }`}
                  >
                    {chapter.title}
                  </p>
                  <div className="ml-auto">
                    <BsThreeDots
                      className={
                        isCompleted ? "text-green-400" : "text-neutral-500"
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-1 border-l border-dashed border-neutral-800"></div>
    </div>
  );
};
