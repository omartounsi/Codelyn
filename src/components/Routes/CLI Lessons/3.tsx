import { useEffect } from "react";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle, IoTerminal } from "react-icons/io5";
import { NavButtons } from "../../tools/navbuttons";

interface CLI3Props {
  onCommandsChange: (commands: string[]) => void;
}

export const CLI3 = ({ onCommandsChange }: CLI3Props) => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("cli", 3);

  const handleMarkComplete = () => {
    markLessonComplete("cli", 3);
  };

  useEffect(() => {
    onCommandsChange([
      "cat resume.txt",
      "mkdir my-project",
      "touch index.html",
    ]);
  }, [onCommandsChange]);

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 3:</span> Working
        with Files
      </h1>

      <div className="flex flex-col gap-7">
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">3.1:</span> Reading File Contents
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The <code className="text-blue-400">cat</code> command displays the
          contents of a file. It's great for quickly viewing text files.
        </p>

        <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
          <div className="flex items-center gap-2 mb-2">
            <IoTerminal className="w-4 h-4 text-green-400" />
            <code className="text-green-400 font-mono">cat filename.txt</code>
          </div>
          <p className="text-sm text-neutral-400">
            Shows the entire contents of the file in the terminal.
          </p>
        </div>

        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">3.2:</span> Creating Files and
          Directories
        </h3>

        <div className="space-y-4">
          <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
            <div className="flex items-center gap-2 mb-2">
              <IoTerminal className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">
                mkdir directory-name
              </code>
            </div>
            <p className="text-sm text-neutral-400">
              <strong>Make Directory</strong> - Creates a new folder.
            </p>
          </div>

          <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
            <div className="flex items-center gap-2 mb-2">
              <IoTerminal className="w-4 h-4 text-green-400" />
              <code className="text-green-400 font-mono">
                touch filename.txt
              </code>
            </div>
            <p className="text-sm text-neutral-400">
              Creates a new empty file.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30">
          <h4 className="text-lg font-semibold text-neutral-200 mb-3">
            🎯 File Operations Practice
          </h4>
          <p className="text-neutral-300 mb-4">Try these file operations:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-400">
            <li>
              Type <code className="text-purple-400">cat resume.txt</code> to
              read a file
            </li>
            <li>
              Type <code className="text-purple-400">mkdir my-project</code> to
              create a directory
            </li>
            <li>
              Type <code className="text-purple-400">touch index.html</code> to
              create a file
            </li>
          </ol>
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

        <NavButtons previous="/lessons/cli/2" next="/lessons/cli/4" />
      </div>
    </>
  );
};
