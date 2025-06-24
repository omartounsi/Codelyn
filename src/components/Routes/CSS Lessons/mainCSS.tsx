import { IoCheckmarkCircle, IoPlay } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useProgress } from "../../../context/ProgressContext";
import { IoCode, IoGlobe, IoRocket, IoLayers } from "react-icons/io5";

export const MainCSS = () => {
  const { getCourseProgress, isLessonCompleted, markLessonComplete } =
    useProgress();
  const courseProgress = getCourseProgress("css");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

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

    // Close menu when clicking outside
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleMenuClick = (e: React.MouseEvent, chapterId: number) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === chapterId ? null : chapterId);
  };

  const handleMarkComplete = async (e: React.MouseEvent, chapterId: number) => {
    e.stopPropagation();
    await markLessonComplete("css", chapterId);
    setOpenMenuId(null);
  };

  const handleOpenLesson = (chapterId: number) => {
    navigate(`/lessons/css/${chapterId}`);
    setOpenMenuId(null);
  };

  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "",
        backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
      className="grid w-full h-auto min-h-screen grid-cols-12 bg-zinc-900 text-neutral-300 pt-14"
    >
      <div className="col-span-1 border-r border-neutral-600"></div>
      {/* MAIN */}
      <div
        style={{
          backdropFilter: "blur(2px)",
        }}
        className="flex flex-col col-span-10 pb-12"
      >
        {/* COURSE HEADER */}
        <div className="flex items-center mt-10 mb-8 border justify-evenly w-[92%] mx-auto p-6 rounded-2xl bg-neutral-700/30 border-neutral-700 gap-2">
          {/* LEFT SIDE - Title and Course Info */}
          <div className="flex flex-col ">
            <p className="text-2xl pl-0.5 text-left text-neutral-400 font-[Quicksand]">
              Lesson 2
            </p>
            <h1 className="text-5xl font-bold tracking-tighter text-neutral-200">
              CSS Styling
            </h1>
          </div>

          {/* RIGHT SIDE - Description and Pills */}
          <div className="max-w-md">
            <p className="text-xl text-right text-neutral-400 font-[Quicksand] mb-4">
              Master CSS styling techniques and create beautiful, responsive web
              designs. From basic styling to advanced layouts with flexbox and
              grid systems.
            </p>

            {/* COURSE METADATA & LEARNING OBJECTIVES */}
            <div className="flex flex-wrap justify-end gap-2 text-sm">
              {/* Course Metadata Pills */}
              <div className="flex items-center gap-2 px-3 py-1.5 border rounded-full border-neutral-700/40 bg-neutral-800/50">
                <IoLayers className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-600">9 Lessons</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border rounded-full border-neutral-700/40 bg-neutral-800/50">
                <IoRocket className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-600">Beginner</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border rounded-full border-neutral-700/40 bg-neutral-800/50">
                <IoGlobe className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-600">~5 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative flex items-stretch justify-center gap-6 ">
          {/* CHAPTERS CARD - LEFT SIDE */}
          <div
            style={{
              backdropFilter: "blur(2px)",
            }}
            className="h-[600px] w-[45%] border border-neutral-700 bg-neutral-800/40 rounded-xl flex flex-col p-10 overflow-y-auto scrollbar-hide relative z-20 shadow-md shadow-neutral-800"
          >
            {/* TITLE */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50">
                Chapters
              </h1>
            </div>
            <p className="mb-6 leading-relaxed text-md text-neutral-400">
              Progress through each chapter to master CSS styling fundamentals.
              Click on any chapter to start learning, or use the menu to mark
              lessons as complete.
            </p>
            {/* CHAPTERS */}
            <div className="flex flex-col h-full gap-2">
              {chapters.map((chapter) => {
                const isCompleted = isLessonCompleted("css", chapter.id);
                return (
                  <div
                    onClick={() => navigate(`/lessons/css/${chapter.id}`)}
                    key={chapter.id}
                    className={`flex items-center gap-2 px-4 transition-transform duration-300 border cursor-pointer min-h-16 rounded-xl ${
                      openMenuId === chapter.id
                        ? "scale-105"
                        : openMenuId !== null
                          ? ""
                          : "hover:scale-105"
                    } ${
                      isCompleted
                        ? "border-green-500/30 bg-green-500/5"
                        : "border-neutral-700"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center rounded-full h-7 w-7 ${
                        isCompleted
                          ? "bg-green-500 text-white"
                          : "border border-white"
                      }`}
                    >
                      {isCompleted ? <IoCheckmarkCircle /> : null}
                    </div>
                    <p
                      className={`max-w-2xl font-light ${
                        isCompleted ? "text-neutral-200" : "text-neutral-300"
                      }`}
                    >
                      {chapter.title}
                    </p>
                    <div className="relative z-10 ml-auto">
                      {(openMenuId === null ||
                        openMenuId === chapter.id ||
                        openMenuId !== chapter.id - 1) && (
                        <button
                          onClick={(e) => handleMenuClick(e, chapter.id)}
                          disabled={
                            openMenuId !== null && openMenuId !== chapter.id
                          }
                          className={`p-1 transition-all rounded-full ${
                            openMenuId !== null && openMenuId !== chapter.id
                              ? "cursor-not-allowed opacity-50"
                              : "hover:bg-neutral-700"
                          }`}
                        >
                          <BsThreeDots
                            className={
                              isCompleted
                                ? "text-green-400"
                                : "text-neutral-500"
                            }
                          />
                        </button>
                      )}

                      {/* Dropdown Menu */}
                      {openMenuId === chapter.id && (
                        <div className="absolute right-0 top-8 w-40 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg z-[100]">
                          <button
                            onClick={() => handleOpenLesson(chapter.id)}
                            className="w-full px-4 py-2 text-sm text-left transition-colors rounded-t-lg text-neutral-200 hover:bg-neutral-700"
                          >
                            Open lesson
                          </button>
                          <button
                            onClick={(e) => handleMarkComplete(e, chapter.id)}
                            disabled={isCompleted}
                            className={`w-full px-4 py-2 text-left text-sm rounded-b-lg transition-colors ${
                              isCompleted
                                ? "text-neutral-500 cursor-not-allowed"
                                : "text-neutral-200 hover:bg-neutral-700"
                            }`}
                          >
                            {isCompleted ? "Completed" : "Mark as completed"}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PROGRESS CARD - RIGHT SIDE */}
          <div
            style={{
              backdropFilter: "blur(2px)",
            }}
            className="h-[600px] w-[45%] overflow-y-auto scrollbar-hide border border-neutral-700 bg-neutral-800/50 rounded-xl flex flex-col p-10 relative z-20 shadow-md shadow-neutral-800"
          >
            {/* COURSE PROGRESS HEADER */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-neutral-50">
                Course Progress
              </h1>
            </div>
            <div className="p-6 border bg-neutral-800 rounded-xl border-neutral-700">
              <div className="flex items-center justify-center ">
                <span className="font-mono text-md text-neutral-400">
                  {courseProgress?.completedLessons.length || 0} /{" "}
                  {courseProgress?.totalLessons || 9} lessons
                </span>
              </div>
              <div className="flex flex-col items-center justify-center py-4">
                {/* Circular Progress Bar */}
                <div className="relative w-40 h-40">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    {/* Background circle (grey, thin) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="#404040" // Tailwind neutral-700
                      strokeWidth="3"
                    />
                    {/* Progress circle (gradient, thick) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="none"
                      stroke="url(#progressGradientCSS)"
                      strokeWidth="8"
                      strokeDasharray="289"
                      strokeDashoffset={`${289 - ((courseProgress?.progress || 0) / 100) * 289}`}
                      strokeLinecap="round"
                      transform="rotate(-90, 50, 50)"
                      className="transition-all duration-700 ease-out"
                    />
                    <defs>
                      <linearGradient
                        id="progressGradientCSS"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />{" "}
                        {/* blue-500 */}
                        <stop offset="100%" stopColor="#22d3ee" />{" "}
                        {/* cyan-400 */}
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Percentage text in the middle */}
                  <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                    <span className="text-3xl font-bold text-white">
                      {courseProgress?.progress || 0}%
                    </span>
                    <span className="text-xs text-neutral-400">completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* NEXT LESSON SECTION */}
            <div className="p-6 mt-6 border bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl border-blue-500/30">
              <h3 className="mb-3 text-2xl font-semibold text-neutral-100">
                Continue Learning
              </h3>
              {(() => {
                const nextLesson = chapters.find(
                  (chapter) => !isLessonCompleted("css", chapter.id)
                );
                if (nextLesson) {
                  return (
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="mb-1 text-sm text-neutral-400">
                          Next Lesson
                        </p>
                        <p className="font-medium text-neutral-200">
                          {nextLesson.title}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          navigate(`/lessons/css/${nextLesson.id}`)
                        }
                        className="flex items-center justify-center w-10 h-10 text-sm font-medium text-white transition-colors duration-200 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
                      >
                        <IoPlay className="w-4 h-4" />
                      </button>
                    </div>
                  );
                } else {
                  return (
                    <div className="py-4 text-center">
                      <div className="mb-2 text-4xl text-green-400">🎉</div>
                      <p className="font-semibold text-green-400">
                        Congratulations!
                      </p>
                      <p className="text-sm text-neutral-300">
                        You've completed all chapters!
                      </p>
                    </div>
                  );
                }
              })()}
            </div>

            {/* STATS SECTION */}
            <div className="p-6 mt-6 border bg-neutral-800/50 rounded-xl border-neutral-700">
              <h3 className="mb-2 text-2xl font-bold leading-tight tracking-tighter text-neutral-100">
                Your Stats
              </h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col items-center p-3 border border-green-700 rounded-full bg-neutral-900/50 ">
                  <span className="text-xs text-neutral-500">Completed</span>
                  <span className="font-mono text-xl text-green-400">
                    {courseProgress?.completedLessons.length || 0}
                  </span>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-full border-blue-500/40 bg-neutral-900/50 ">
                  <span className="text-xs text-neutral-500">Remaining</span>
                  <span className="font-mono text-xl text-blue-400">
                    {(courseProgress?.totalLessons || 9) -
                      (courseProgress?.completedLessons.length || 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 border-l border-neutral-600"></div>
    </div>
  );
};
