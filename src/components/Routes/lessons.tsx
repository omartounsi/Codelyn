import { IoCode } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiBookOpenText } from "react-icons/pi";
import { HiCommandLine } from "react-icons/hi2";
import { IoIosGitBranch } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";

import { lessons, bonusLessons } from "../tools/lessons";
import { projects } from "../tools/projects";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";

import { CiCirclePlus } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

export const Lessons = () => {
  const [activeCard, setActiveCard] = useState(1);
  const { getCourseProgress } = useProgress();

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  // Function to get real progress for a lesson
  const getLessonProgress = (lessonTitle: string): number => {
    switch (lessonTitle.toLowerCase()) {
      case "html":
        return getCourseProgress("html")?.progress || 0;
      case "css":
        return getCourseProgress("css")?.progress || 0;
      case "js i":
        return getCourseProgress("javascript")?.progress || 0;
      default:
        return 0; // For bonus lessons and others that don't have progress tracking yet
    }
  };
  return (
    <div className="grid w-full h-auto grid-cols-12 pb-6 text-white bg-slate-800 ">
      {/* LEFT */}
      <div className="col-span-1"></div>

      {/* MAIN */}
      <div className="flex flex-col w-full h-auto col-span-10 p-6 border-l border-r mt-14 border-slate-700">
        {/* TITLE 1*/}
        <div
          style={{
            backdropFilter: "blur(2px)",
            // boxShadow: "10px 10px 10px rgb(31, 48, 64, 0.9)",
            backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          className="flex flex-row-reverse items-center w-full pl-5 border justify-evenly bg-neutral-200 rounded-xl border-slate-900 h-72 "
        >
          <div className="flex flex-col justify-center h-full">
            <h1 className="w-full font-bold tracking-tighter text-center text-8xl leading-tighter text-slate-700/90">
              Lessons
            </h1>
            <p className="mx-auto cursor-pointer hover:underline-offset-1 hover:underline text-neutral-600">
              Continue last lesson?
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-lg text-right w-120 w text-neutral-600">
              Welcome to your learning hub. Track your progress through our
              comprehensive web development curriculum, from HTML fundamentals
              to advanced JavaScript concepts.
            </p>
            {/* buttons */}
            <div className="flex justify-end gap-1 mt-2">
              <button className="bg-neutral-00 text-slate-800 text-[14px] rounded-sm px-3 py-1.5 cursor-pointer">
                Home
              </button>
              <button className=" text-slate-600 border border-slate-500 text-[14px] rounded-sm px-2 py-1 hover:bg-slate-700 cursor-pointer transition-colors hover:text-neutral-200">
                Continue Lessons
              </button>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="flex justify-between w-full gap-6 mt-6 border-dashed h-160">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={{ ...lesson, progress: getLessonProgress(lesson.title) }}
              activeCard={activeCard}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* TITLE 2*/}
        <div className="flex my-6 border shadow-md r rounded-xl bg-slate-900 border-slate-700 shadow-slate-900 h-70">
          <div className="flex flex-col min-w-[70%] h-full p-10 border-r border-r-slate-700/40">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-50">
              Bonus I
            </h1>
            <p className="max-w-2xl text-base font-light text-foreground sm:text-lg text-neutral-100">
              These next lessons are optional, they are not required for the
              course. However, they will help you understand the concepts
              better. You will learn version control with Git and GitHub, how to
              use the command line. You will also learn Syntactically Awesome
              Style Sheets (SASS) and how to use it to style your HTML in a
              faster / more efficient way. Or you can learn the alternative,
              Tailwind CSS
            </p>
          </div>
          <div className="flex items-center justify-center w-full h-full text-7xl border-slate-600 text-slate-300">
            <CiCirclePlus />
          </div>
        </div>

        {/* CARDS 2*/}
        <div className="flex justify-between w-full gap-6 p-2 h-160 ">
          {bonusLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={{ ...lesson, progress: 0 }} // Bonus lessons don't have progress tracking yet
              activeCard={activeCard}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* TITLE 3*/}
        <div className="flex my-6 border shadow-md r rounded-xl bg-slate-900 border-slate-700 shadow-slate-900 h-70">
          <div className="flex flex-col justify-center min-w-[70%] h-full p-10 border-r border-r-slate-700/40">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-50">
              Projects
            </h1>
            <p className="max-w-2xl text-base font-light text-foreground sm:text-lg text-neutral-100">
              It's time to put your skills to the test. You will be given a
              series of projects to complete. You will be given a deadline for
              each project. You will be graded on each project. You will also be
              given feedback on each project.
            </p>
          </div>

          <div className="flex items-center justify-center w-full h-full text-7xl text-slate-400">
            <IoCalendarOutline />
          </div>
        </div>

        {/* Projects Cards */}
        <div className="h-136 w-full flex flex-col justify-center  border-t border-black border-dashed border-b bg-neutral-100 text-neutral-800 gap-[5%]">
          {/* PROGRESS */}
          <div className="flex flex-col mx-auto">
            <p className="mx-auto font-[IBM_Plex_Mono] ">3/4 Completed</p>
            <div className="relative h-2 overflow-hidden bg-black rounded-full w-100">
              <div className="absolute h-2 w-[75%] bg-red-400"></div>
            </div>
          </div>
          <div className="flex justify-evenly">
            {/* CARDS */}
            {projects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="col-span-1"></div>
    </div>
  );
};
type lessonType = {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: string;
  route: string;
};

type lessonCardProps = {
  lesson: lessonType;
  activeCard: number;
  handleCardClick: (id: number) => void;
};
const LessonCard = ({
  lesson,
  activeCard,
  handleCardClick,
}: lessonCardProps) => {
  return (
    <div
      key={lesson.id}
      onClick={() => handleCardClick(lesson.id)}
      className={classNames(
        "border border-slate-600 bg-slate-700 rounded-xl flex flex-col justify-center gap-6 p-10 hover:scale-105 transition-all duration-300 ease-in-out will-change-transform cursor-pointer hover:shadow-xl hover:shadow-slate-950",
        activeCard === lesson.id ? "w-80" : "w-60 items-center",
        "overflow-hidden"
      )}
    >
      {/* LOGO? */}
      <div className="w-20 min-h-20 bg-neutral-100 mx-auto rounded-full grid place-content-center text-neutral-700 text-5xl hover:scale-x-[-1] transition-transform duration-300 ">
        {lesson.icon === "IoCode" && <IoCode />}
        {lesson.icon === "FaCss3Alt" && <FaCss3Alt />}
        {lesson.icon === "IoLogoJavascript" && <IoLogoJavascript />}
        {lesson.icon === "HiCommandLine" && <HiCommandLine />}
        {lesson.icon === "IoIosGitBranch" && <IoIosGitBranch />}
        {lesson.icon === "FiGithub" && <FiGithub />}
        {lesson.icon === "RiTailwindCssFill" && <RiTailwindCssFill />}
      </div>
      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50">
        {lesson.title}
      </h1>
      {/* DESCRIPTION */}
      <p
        className={classNames(
          "text-neutral-200 text-lg min-w-50 opacity-0 transition-opacity duration-500 ",
          activeCard === lesson.id ? "opacity-100" : ""
        )}
      >
        {lesson.description}
      </p>
      <p
        className={classNames(
          "text-neutral-400 h-full flex items-end mt-auto text-5xl ",
          activeCard !== lesson.id ? "" : "hidden"
        )}
      >
        <PiBookOpenText />
      </p>
      {/* Progress */}
      <div className="flex flex-col items-center mt-auto">
        <div className="bg-slate-700 w-[70%] h-2 rounded-full border border-neutral-400 overflow-hidden relative">
          <div
            style={{
              width: `${lesson.progress}%`,
              borderRadius: 100,
            }}
            className="h-2 bg-white "
          ></div>
        </div>
        <p className=" mx-auto text-sm mt-1 text-neutral-300 font-[IBM_Plex_Mono] ">
          {lesson.progress}%
        </p>
      </div>

      {/* BUTTONS? */}
      <div className="flex items-center justify-center">
        <Link to={lesson.route}>
          <button className="font-bold transition-colors cursor-pointer text-neutral-400 hover:text-neutral-200">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

type ProjectType = {
  title: string;
  description: string;
  completed: boolean;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <div
      key={project.title}
      className={classNames(
        "w-70 h-110 border border-neutral-600 border-dashed rounded-sm p-10 flex flex-col justify-evenly gap-1 select-none hover:scale-105 transition-all duration-300 ease-in-out will-change-transform",
        project.completed ? "opacity-50" : "opacity-100"
      )}
    >
      <h1 className="text-4xl font-bold max-w-18==23 h-[250px]">
        {project.title}
      </h1>
      <div className="flex flex-col w-full h-full ">
        <p className="text-lg text-neutral-700">{project.description}</p>

        <p className="mt-auto transition-opacity cursor-pointer w-30 text-neutral-800 text-md opacity-70 hover:opacity-100">
          Start Project
        </p>
      </div>
    </div>
  );
};
