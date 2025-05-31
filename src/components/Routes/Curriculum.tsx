import { FaHtml5, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiJavascriptLine } from "react-icons/ri";
import { NavLink } from "react-router";

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
      className="grid min-h-screen grid-cols-12 text-white bg-zinc-900 pt-14"
    >
      <div className="col-span-1"></div>
      <div className="flex flex-col justify-center h-full col-span-10 py-10 border-l border-r border-neutral-700">
        {/* TOP */}
        <h1 className="w-full mb-12 font-bold tracking-tighter text-center text-8xl leading-tighter text-neutral-200/90">
          Curriculum
        </h1>

        {/* FOUNDATION COURSES */}
        <div className="mb-8">
          <h2 className="text-2xl font-[Geist] font-semibold text-neutral-300 mb-6 text-center">
            Foundation Courses
          </h2>
          <div className="grid grid-cols-4 gap-6 px-12 mb-8">
            {/* HTML CARD */}
            <div className="flex flex-col p-8 border shadow-md shadow-neutral-900 rounded-xl border-neutral-600 bg-neutral-700/20">
              <div className="flex gap-2">
                <div className="flex items-center justify-center w-10 h-10 text-2xl border rounded-full bg-neutral-200 text-neutral-900">
                  <FaHtml5 />
                </div>
                <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-2">
                  HTML
                </h3>
              </div>
              <div className="px-4 py-1 my-3 border rounded-md bg-neutral-700 border-neutral-500">
                <p className="italic text-md text-neutral-300 ">
                  Master the structure of web documents.
                </p>
              </div>
              <ul className="space-y-2 text-md text-neutral-400">
                <li>• Document Structure & Semantics</li>
                <li>• Forms & Input Elements</li>
                <li>• Accessibility Best Practices</li>
                <li>• Modern HTML5 Features</li>
              </ul>
            </div>

            {/* CSS CARD */}
            <div className="flex flex-col p-8 border shadow-md shadow-neutral-900 rounded-xl border-neutral-600 bg-neutral-700/20">
              <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-2">
                CSS
              </h3>
              <p className="mb-4 text-lg text-">
                Style and layout your web pages with modern CSS
              </p>
              <ul className="text-md text-neutral-400">
                <li>• Selectors & Properties</li>
                <li>• Flexbox & Grid Layouts</li>
                <li>• Responsive Design</li>
                <li>• Animations & Transitions</li>
              </ul>
            </div>

            {/* JAVASCRIPT CARD */}
            <div className="flex flex-col h-auto p-8 bg-yellow-500 border shadow-md text-neutral-900 shadow-neutral-900 rounded-xl border-neutral-500">
              <div className="flex gap-2">
                <div className="flex items-center justify-center w-10 h-10 text-3xl rounded-full bg-neutral-900 text-neutral-200 ">
                  <RiJavascriptLine />
                </div>
                <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-900 mb-2">
                  JavaScript
                </h3>
              </div>

              <div className="px-4 py-1 my-3 border rounded-md bg-neutral-900/20 border-neutral-800/40">
                <p className="font-bold text-md text-neutral-200">
                  Add interactivity and dynamic behavior to websites
                </p>
              </div>
              <ul className="space-y-2 text-md text-neutral-50">
                <li>• Variables & Data Types</li>
                <li>• Functions & Scope</li>
                <li>• DOM Manipulation</li>
                <li>• Event Handling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ADVANCED TOPICS */}
        <div className="mb-8">
          <h2 className="text-2xl font-[Geist] font-semibold text-neutral-300 mb-6 text-center">
            Advanced Topics
          </h2>
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
            {/* REACT CARD */}
            <div className="flex flex-col p-6 border shadow-md shadow-neutral-900 rounded-xl border-neutral-800 bg-neutral-700/20 h-80">
              <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-4">
                React
              </h3>
              <p className="mb-6 text-sm text-neutral-400">
                Build modern user interfaces with React
              </p>
              <ul className="flex-grow space-y-2 text-xs text-neutral-500">
                <li>• Components & JSX</li>
                <li>• State & Props</li>
                <li>• Hooks & Context</li>
                <li>• Routing & Navigation</li>
              </ul>
            </div>

            {/* SASS CARD */}
            <div className="flex flex-col p-6 border shadow-md shadow-neutral-900 rounded-xl border-neutral-800 bg-neutral-700/20 h-80">
              <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-4">
                SASS
              </h3>
              <p className="mb-6 text-sm text-neutral-400">
                Write more maintainable CSS with preprocessors
              </p>
              <ul className="flex-grow space-y-2 text-xs text-neutral-500">
                <li>• Variables & Mixins</li>
                <li>• Nesting & Partials</li>
                <li>• Functions & Control Flow</li>
                <li>• Build Integration</li>
              </ul>
            </div>

            {/* TAILWIND CSS CARD */}
            <div className="flex flex-col p-6 border shadow-md shadow-neutral-900 rounded-xl border-neutral-800 bg-neutral-700/20 h-80">
              <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-4">
                Tailwind CSS
              </h3>
              <p className="mb-6 text-sm text-neutral-400">
                Utility-first CSS framework for rapid development
              </p>
              <ul className="flex-grow space-y-2 text-xs text-neutral-500">
                <li>• Utility Classes</li>
                <li>• Responsive Design</li>
                <li>• Custom Configurations</li>
                <li>• Component Patterns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEVELOPER TOOLS */}
        <div className="mb-8">
          <h2 className="text-2xl font-[Geist] font-semibold text-neutral-300 mb-6 text-center">
            Developer Tools
          </h2>
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
            {/* GIT CARD */}
            <div className="flex flex-col p-6 border shadow-md shadow-neutral-900 rounded-xl border-neutral-800 bg-neutral-700/20 h-80">
              <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-4">
                Git & Version Control
              </h3>
              <p className="mb-6 text-sm text-neutral-400">
                Track changes and collaborate with team members
              </p>
              <ul className="flex-grow space-y-2 text-xs text-neutral-500">
                <li>• Repository Management</li>
                <li>• Branching & Merging</li>
                <li>• Collaboration Workflows</li>
                <li>• GitHub Integration</li>
              </ul>
            </div>

            {/* COMMAND LINE CARD */}
            <div className="flex flex-col p-6 border shadow-md shadow-neutral-900 rounded-xl border-neutral-800 bg-neutral-700/20 h-80">
              <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter text-neutral-200 mb-4">
                Command Line
              </h3>
              <p className="mb-6 text-sm text-neutral-400">
                Navigate and control your development environment
              </p>
              <ul className="flex-grow space-y-2 text-xs text-neutral-500">
                <li>• Terminal Navigation</li>
                <li>• File Operations</li>
                <li>• Package Management</li>
                <li>• Build Scripts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="p-8 text-center border rounded-xl border-neutral-700 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <h3 className="text-2xl font-[Geist] font-bold text-neutral-200 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="max-w-2xl mx-auto mb-6 text-neutral-400">
            Join thousands of students mastering web development with our
            comprehensive curriculum.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <NavLink
              to="/register"
              className="px-8 py-3 bg-white text-neutral-800 rounded-lg font-[Geist] font-semibold hover:bg-neutral-200 transition-colors"
            >
              Start Learning Today
            </NavLink>
            <NavLink
              to="/contact"
              className="px-8 py-3 border border-neutral-600 text-neutral-300 rounded-lg font-[Geist] font-semibold hover:border-neutral-500 hover:text-neutral-200 transition-colors"
            >
              Have Questions?
            </NavLink>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};
