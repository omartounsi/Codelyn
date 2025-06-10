import { IoCheckmarkCircle } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useProgress } from "../../../context/ProgressContext";

export const MainHTML = () => {
  const { getCourseProgress, isLessonCompleted, markLessonComplete } =
    useProgress();
  const courseProgress = getCourseProgress("html");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const chapters = [
    { id: 1, title: "Introduction to HTML" },
    { id: 2, title: "Text and Headings" },
    { id: 3, title: "Links and Images" },
    { id: 4, title: "Lists and Navigation" },
    { id: 5, title: "Tables and Data" },
    { id: 6, title: "Forms and Input" },
    { id: 7, title: "Divisions and Spans" },
    { id: 8, title: "Semantic HTML" },
    { id: 9, title: "HTML Structure Best Practices" },
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
    await markLessonComplete("html", chapterId);
    setOpenMenuId(null);
  };

  const handleOpenLesson = (chapterId: number) => {
    navigate(`/lessons/html/${chapterId}`);
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
      className="grid w-full min-h-screen grid-cols-12 pb-3 bg-zinc-900 text-neutral-300 pt-14"
    >
      <div className="col-span-1 border-r border-dashed border-neutral-800"></div>
      {/* MAIN */}
      <div className="flex items-stretch justify-center col-span-10 gap-10">
        {/* Section Header */}

        {/* CHAPTERS CARD - LEFT SIDE */}
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="h-[600px] w-[40%] border border-neutral-700 bg-neutral-800/40 mt-10 rounded-xl flex flex-col p-10 overflow-y-auto scrollbar-hide "
        >
          {/* TITLE */}
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50 mb-4">
            Chapters
          </h1>
          <p className="mb-6 leading-relaxed text-md text-neutral-400">
            Progress through each chapter to master HTML fundamentals. Click on
            any chapter to start learning, or use the menu to mark lessons as
            complete.
          </p>
          {/* CHAPTERS */}
          <div className="flex flex-col h-full gap-2">
            {chapters.map((chapter) => {
              const isCompleted = isLessonCompleted("html", chapter.id);
              return (
                <div
                  onClick={() => navigate(`/lessons/html/${chapter.id}`)}
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
                            isCompleted ? "text-green-400" : "text-neutral-500"
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
          className="h-[600px] w-[30%] border border-neutral-700 bg-neutral-800/50 mt-10 rounded-xl flex flex-col p-10"
        >
          {/* COURSE PROGRESS HEADER */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-50">
            Course Progress
          </h1>
          <div className="p-6 border bg-neutral-800 rounded-xl border-neutral-700">
            <div className="flex items-center justify-center ">
              {/* <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tighter  lg:leading-[1.1] text-neutral-400">
                HTML Course
              </h2> */}
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
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    strokeDasharray="289"
                    strokeDashoffset={`${289 - ((courseProgress?.progress || 0) / 100) * 289}`}
                    strokeLinecap="round"
                    transform="rotate(-90, 50, 50)"
                    className="transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient
                      id="progressGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#f97316" />{" "}
                      {/* orange-500 */}
                      <stop offset="100%" stopColor="#f87171" /> {/* red-400 */}
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

              {/* Text below the circle */}
              {/* <div className="flex justify-between w-full mt-4 text-xs text-neutral-500">
                <span>Beginner</span>
                <span>Expert</span>
              </div> */}
            </div>
          </div>

          {/* Additional statistics or information could go here */}
          <div className="p-6 mt-6 border bg-neutral-800/50 rounded-xl border-neutral-700">
            <h3 className="mb-2 text-2xl font-bold leading-tight tracking-tighter  lg:leading-[1.1] text-neutral-100">
              Your Stats
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-neutral-900/50">
                <span className="text-xs text-neutral-500">Completed</span>
                <span className="font-mono text-xl text-green-400">
                  {courseProgress?.completedLessons.length || 0}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-neutral-900/50">
                <span className="text-xs text-neutral-500">Remaining</span>
                <span className="font-mono text-xl text-orange-400">
                  {(courseProgress?.totalLessons || 9) -
                    (courseProgress?.completedLessons.length || 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 border-l border-dashed border-neutral-800"></div>
    </div>
  );
};
