import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import {
  IoTerminal,
  IoGlobe,
  IoRocket,
  IoLayers,
  IoLockClosed,
} from "react-icons/io5";

export const Curriculum = () => {
  return (
    <div
      style={{
        backgroundColor: "",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
      className="min-h-screen bg-zinc-900 pt-14"
    >
      <div className="px-16 py-8 mx-auto border-l border-r border-neutral-800/50 max-w-7xl">
        {/* Header - Inspired by mainHTML layout */}
        <div className="flex items-center w-full gap-2 p-6 mx-auto mt-10 mb-8 border justify-evenly rounded-2xl bg-neutral-700/30 border-neutral-700">
          {/* LEFT SIDE - Title and Course Info */}
          <div className="flex flex-col">
            <p className="text-2xl pl-0.5 text-left text-neutral-400 font-[Quicksand]">
              Learning path
            </p>
            <h1 className="text-5xl font-bold tracking-tighter text-neutral-200">
              Web Development
            </h1>
          </div>

          {/* RIGHT SIDE - Description and Stats */}
          <div className="max-w-lg">
            <p className="text-lg text-right text-neutral-400 font-[Geist] mb-6">
              Master modern web development with our comprehensive, hands-on
              curriculum designed for real-world success. Learn by building real
              projects.
            </p>

            {/* COURSE METADATA */}
            <div className="flex flex-wrap justify-end gap-2 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 border rounded-full border-neutral-700/40 bg-neutral-800/50">
                <IoLayers className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-600">7 Courses</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border rounded-full border-neutral-700/40 bg-neutral-800/50">
                <IoRocket className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-600">Beginner to Advanced</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 border rounded-full border-neutral-700/40 bg-neutral-800/50">
                <IoGlobe className="w-4 h-4 text-neutral-600" />
                <span className="text-neutral-600">~40 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* CURRICULUM CONTENT */}
        <div className="grid w-full grid-cols-2 gap-4 border">
          {/* AVAILABLE COURSES - LEFT SIDE */}
          <div
            style={{
              backdropFilter: "blur(2px)",
            }}
            className="relative z-20 flex flex-col w-full p-10 border shadow-md border-neutral-700 bg-neutral-800/40 rounded-xl shadow-neutral-800"
          >
            {/* TITLE */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h1 className="mb-2 text-4xl font-black leading-tight tracking-tighter text-neutral-200">
                Available Courses
              </h1>
            </div>
            <p className="mb-8 text-lg text-neutral-300 font-[Geist]">
              Start your web development journey with these foundational
              courses. Each course builds upon the previous one to give you a
              comprehensive understanding of modern web development.
            </p>

            {/* COURSE LIST */}
            <div className="space-y-6">
              {/* HTML */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-orange-500/20 border-orange-500/30">
                    <FaHtml5 className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-200">
                    1. HTML Fundamentals
                  </h3>
                  <span className="px-2 py-1 text-xs border rounded bg-neutral-800/50 border-neutral-700/40 text-neutral-500">
                    9 lessons
                  </span>
                </div>
                <p className="text-md text-neutral-400 font-[Geist] ml-11">
                  Learn the building blocks of the web. Master HTML structure,
                  semantic elements, forms, and accessibility best practices.
                  This course covers everything from basic tags to modern HTML5
                  features.
                </p>
              </div>

              {/* CSS */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-blue-500/20 border-blue-500/30">
                    <FaCss3Alt className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-200">
                    2. CSS Styling
                  </h3>
                  <span className="px-2 py-1 text-xs border rounded bg-neutral-800/50 border-neutral-700/40 text-neutral-500">
                    9 lessons
                  </span>
                </div>
                <p className="text-md text-neutral-400 font-[Geist] ml-11">
                  Transform your HTML into beautiful, responsive websites. Learn
                  layout systems, grid, flexbox, animations, and modern CSS
                  techniques that bring your designs to life.
                </p>
              </div>

              {/* JavaScript */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-yellow-500/20 border-yellow-500/30">
                    <RiJavascriptLine className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-200">
                    3. JavaScript Programming
                  </h3>
                  <span className="px-2 py-1 text-xs border rounded bg-neutral-800/50 border-neutral-700/40 text-neutral-500">
                    12 lessons
                  </span>
                </div>
                <p className="text-md text-neutral-400 font-[Geist] ml-11">
                  Add interactivity and dynamic behavior to your websites.
                  Master variables, functions, DOM manipulation, events, and
                  modern ES6+ features to create engaging user experiences.
                </p>
              </div>

              {/* CLI */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-purple-500/20 border-purple-500/30">
                    <IoTerminal className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-200">
                    4. Command Line Interface
                  </h3>
                  <span className="px-2 py-1 text-xs border rounded bg-neutral-800/50 border-neutral-700/40 text-neutral-500">
                    6 lessons
                  </span>
                </div>
                <p className="text-md text-neutral-400 font-[Geist] ml-11">
                  Master the terminal and command line tools essential for web
                  development. Learn file navigation, Git commands, package
                  management, and development workflows.
                </p>
              </div>
            </div>
          </div>

          {/* ADVANCED COURSES - RIGHT SIDE */}
          <div
            style={{
              backdropFilter: "blur(2px)",
            }}
            className="relative z-20 flex flex-col w-full p-10 border shadow-md border-neutral-700 bg-neutral-800/40 rounded-xl shadow-neutral-800"
          >
            {/* TITLE */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <h1 className="mb-2 text-4xl font-black leading-tight tracking-tighter text-neutral-200">
                Advanced Courses
              </h1>
            </div>
            <p className="mb-8 text-lg text-neutral-300 font-[Geist]">
              Advanced courses that will be unlocked as you complete the
              foundational courses. These will take your skills to professional
              level.
            </p>

            {/* LOCKED COURSES */}
            <div className="space-y-6">
              {/* React */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-cyan-500/20 border-cyan-500/30 opacity-60">
                    <FaReact className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-200 opacity-60">
                    5. React Framework
                  </h3>
                  <span className="px-2 py-1 text-xs border rounded bg-neutral-800/50 border-neutral-700/40 text-neutral-500 opacity-60">
                    15 lessons
                  </span>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-700">
                    <IoLockClosed className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
                <p className="text-md text-neutral-400 font-[Geist] ml-11 opacity-60">
                  Build modern, interactive user interfaces with React. Learn
                  components, state management, hooks, routing, and how to
                  create scalable single-page applications.
                </p>
              </div>

              {/* Node.js */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-green-500/20 border-green-500/30 opacity-60">
                    <FaNodeJs className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-200 opacity-60">
                    6. Node.js Backend
                  </h3>
                  <span className="px-2 py-1 text-xs border rounded bg-neutral-800/50 border-neutral-700/40 text-neutral-500 opacity-60">
                    10 lessons
                  </span>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-700">
                    <IoLockClosed className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
                <p className="text-md text-neutral-400 font-[Geist] ml-11 opacity-60">
                  Learn server-side JavaScript development. Build APIs, handle
                  databases, authentication, and create full-stack web
                  applications with Node.js and Express.
                </p>
              </div>

              {/* Git */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-red-500/20 border-red-500/30 opacity-60">
                    <FaGitAlt className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-200 opacity-60">
                    7. Git & Version Control
                  </h3>
                  <span className="px-2 py-1 text-xs border rounded bg-neutral-800/50 border-neutral-700/40 text-neutral-500 opacity-60">
                    8 lessons
                  </span>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-700">
                    <IoLockClosed className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
                <p className="text-md text-neutral-400 font-[Geist] ml-11 opacity-60">
                  Master version control with Git and GitHub. Learn branching,
                  merging, collaboration workflows, and best practices for team
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
