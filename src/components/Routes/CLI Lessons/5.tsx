import { useEffect } from "react";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";
import { NavButtons } from "../../tools/navbuttons";

interface CLI5Props {
  onCommandsChange: (commands: string[]) => void;
}

export const CLI5 = ({ onCommandsChange }: CLI5Props) => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("cli", 5);

  const handleMarkComplete = () => {
    markLessonComplete("cli", 5);
  };

  useEffect(() => {
    onCommandsChange([]);
  }, [onCommandsChange]);

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 5:</span> Next
        Steps
      </h1>

      <div className="flex flex-col gap-7">
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">5.1:</span> What You've Learned
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Congratulations! You've learned the fundamentals of command line
          navigation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
            <h4 className="text-lg font-semibold text-green-200 mb-2">
              ✅ Navigation
            </h4>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>
                • <code>pwd</code> - show current directory
              </li>
              <li>
                • <code>ls</code> - list contents
              </li>
              <li>
                • <code>cd</code> - change directory
              </li>
            </ul>
          </div>
          <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <h4 className="text-lg font-semibold text-blue-200 mb-2">
              ✅ File Operations
            </h4>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>
                • <code>cat</code> - read file contents
              </li>
              <li>
                • <code>mkdir</code> - create directories
              </li>
              <li>
                • <code>touch</code> - create files
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">5.2:</span> Real-World Applications
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          These skills will help you with:
        </p>

        <div className="space-y-3">
          <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
            <h4 className="text-lg font-semibold text-neutral-200 mb-2">
              🚀 Web Development
            </h4>
            <p className="text-sm text-neutral-400">
              Navigate project folders, run build scripts, and manage
              development servers.
            </p>
          </div>
          <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
            <h4 className="text-lg font-semibold text-neutral-200 mb-2">
              🔧 Version Control
            </h4>
            <p className="text-sm text-neutral-400">
              Use Git commands to manage your code versions and collaborate with
              others.
            </p>
          </div>
          <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
            <h4 className="text-lg font-semibold text-neutral-200 mb-2">
              📦 Package Management
            </h4>
            <p className="text-sm text-neutral-400">
              Install libraries and dependencies using npm, pip, or other
              package managers.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
          <h4 className="text-lg font-semibold text-neutral-200 mb-3">
            🎓 Keep Learning
          </h4>
          <p className="text-neutral-300 mb-4">
            This is just the beginning! Continue practicing and exploring:
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>• Learn Git for version control</li>
            <li>• Explore package managers like npm</li>
            <li>• Practice with real development projects</li>
            <li>• Learn about shell scripting and automation</li>
          </ul>
        </div>

        <div className="flex items-center justify-between p-6 bg-neutral-800/50 border border-neutral-700 rounded-lg mt-8">
          <div>
            <h4 className="text-lg font-semibold text-neutral-200 mb-1">
              Lesson Progress
            </h4>
            <p className="text-sm text-neutral-400">
              Mark this lesson as complete to track your progress
            </p>
          </div>
          <button
            onClick={handleMarkComplete}
            disabled={lessonCompleted}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              lessonCompleted
                ? "bg-green-500/20 text-green-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-105"
            }`}
          >
            <IoCheckmarkCircle className="w-5 h-5" />
            {lessonCompleted ? "Completed" : "Mark Complete"}
          </button>
        </div>

        <NavButtons previous="/lessons/cli/4" next="/lessons" />
      </div>
    </>
  );
};
