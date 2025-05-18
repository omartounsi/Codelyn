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
import { Link, Outlet } from "react-router";

export const Lessons = () => {
  const [activeCard, setActiveCard] = useState(1);
  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };
  return (
    <div className="h-[400vh] w-full grid bg-zinc-950 text-white  4 grid-cols-12">
      {/* LEFT */}
      <div className="col-span-1 border-r border-dashed border-neutral-800">
        <div className="w-full mt-14 border-b border-dashed border-neutral-800 h-72"></div>
        <div className="h-160 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-70 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-160 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-56 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-136 w-full border-b border-dashed border-neutral-800 "></div>
      </div>

      {/* MAIN */}
      <div className="h-auto w-full col-span-10 flex flex-col mt-14  border-">
        {/* TITLE 1*/}
        <div className="pl-5 border-b border-dashed border-neutral-800 flex flex-col justify-center h-72">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter  lg:leading-[1.1] text-neutral-50">
            Welcome to{" "}
            <span className="font-[IBM_Plex_Mono] font-light">Web101</span>
          </h1>
          <p className="max-w-2xl text-base font-light text-foreground sm:text-lg text-neutral-300 mt-2">
            This section has the essentials you will need to get your started
            with web development. You will learn the basics of HTML, CSS and
            JavaScript. You will also learn about the DOM and how to manipulate
            it using JavaScript.
          </p>
        </div>

        {/* CARDS */}
        <div className="h-160 w-full flex p-2 justify-between gap-6 overflow-hidden border-b border-dashed border-neutral-800">
          {lessons.map((lesson) => (
            <LessonCard
              lesson={lesson}
              activeCard={activeCard}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* TITLE 2*/}
        <div className="pl-5 border-b border-dashed border-neutral-800 flex justify-center flex-col h-70">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-50">
            Bonus I
          </h1>
          <p className="max-w-2xl text-base font-light text-foreground sm:text-lg text-neutral-100">
            These next lessons are optional, they are not required for the
            course. However, they will help you understand the concepts better.
            You will learn version control with Git and GitHub, how to use the
            command line. You will also learn Syntactically Awesome Style Sheets
            (SASS) and how to use it to style your HTML in a faster / more
            efficient way. Or you can learn the alternative, Tailwind CSS
          </p>
        </div>

        {/* CARDS 2*/}
        <div className="h-160 w-full flex p-2 justify-between gap-6 overflow-hidden border-b border-dashed border-neutral-800">
          {bonusLessons.map((lesson) => (
            <LessonCard
              lesson={lesson}
              activeCard={activeCard}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* TITLE 3*/}
        <div className="h-56 pl-5 border-b border-dashed border-neutral-800 flex justify-center flex-col ">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-50">
            Projects
          </h1>
          <p className="max-w-2xl text-base font-light text-foreground sm:text-lg text-neutral-100">
            It's time to put your skills to the test. You will be given a series
            of projects to complete. You will be given a deadline for each
            project. You will be graded on each project. You will also be given
            feedback on each project.
          </p>
        </div>

        {/* Projects Cards */}
        <div className="h-136 w-full flex flex-col justify-center  border-t border-black border-dashed border-b bg-neutral-100 text-neutral-800 gap-[5%]">
          {/* PROGRESS */}
          <div className="mx-auto flex flex-col">
            <p className="mx-auto font-[IBM_Plex_Mono] ">3/4 Completed</p>
            <div className="relative w-100 h-2 rounded-full bg-black overflow-hidden">
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
      <div className="border-l border-dashed border-neutral-800">
        <div className="w-full mt-14 border-b border-dashed border-neutral-800 h-72"></div>
        <div className="h-160 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-70 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-160 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-56 w-full border-b border-dashed border-neutral-800 "></div>
        <div className="h-136 w-full border-b border-dashed border-neutral-800 "></div>
      </div>
    </div>
  );
};
type lessonType = {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: string;
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
      onClick={() => handleCardClick(lesson.id)}
      className={classNames(
        "border border-neutral-800 rounded-xl flex flex-col justify-center gap-6 p-10 hover:scale-105 transition-all duration-300 ease-in-out will-change-transform cursor-pointer",
        activeCard === lesson.id ? "w-80" : "w-60 items-center",
        "overflow-hidden"
      )}
    >
      {/* LOGO? */}
      <div className="w-20 h-20 bg-neutral-900 mx-auto rounded-full grid place-content-center text-white text-5xl hover:scale-x-[-1] transition-transform duration-300">
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
          "text-neutral-400 text-lg",
          activeCard === lesson.id ? "" : "hidden"
        )}
      >
        {lesson.description}
      </p>
      <p
        className={classNames(
          "text-neutral-400 my-auto text-5xl",
          activeCard !== lesson.id ? "" : "hidden"
        )}
      >
        <PiBookOpenText />
      </p>
      {/* Progress */}
      <div className="flex flex-col items-center mt-auto">
        <div className="bg-black w-[70%] h-2 rounded-full border overflow-hidden relative">
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
        <Link to="/lessons/html">
          <button className="text-neutral-700 hover:text-neutral-200 sborder-neutral-800 font-bold transition-colors">
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
      className={classNames(
        "w-70 h-110 border border-neutral-600 border-dashed rounded-sm p-10 flex flex-col justify-evenly gap-1 select-none hover:scale-105 transition-all duration-300 ease-in-out will-change-transform",
        project.completed ? "opacity-50" : "opacity-100"
      )}
    >
      <h1 className="text-4xl font-bold max-w-18==23 h-[250px]">
        {project.title}
      </h1>
      <div className="w-full h-full flex flex-col ">
        <p className="text-lg text-neutral-700">{project.description}</p>

        <p className=" mt-auto w-30 text-neutral-800 text-md opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          Start Project
        </p>
      </div>
    </div>
  );
};
