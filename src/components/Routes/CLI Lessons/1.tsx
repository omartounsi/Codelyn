import { useEffect } from "react";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";
import { NavButtons } from "../../tools/navbuttons";

interface CLI1Props {
  onCommandsChange: (commands: string[]) => void;
}

export const CLI1 = ({ onCommandsChange }: CLI1Props) => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("cli", 1);

  const handleMarkComplete = () => {
    markLessonComplete("cli", 1);
  };

  // Set expected commands for this lesson
  useEffect(() => {
    onCommandsChange(["help", "pwd", "ls"]);
  }, [onCommandsChange]);

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 1:</span>{" "}
        Introduction to Command Line
      </h1>

      <div className="flex flex-col gap-7">
        {/* WHAT IS THE COMMAND LINE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.1:</span> What is the Command Line?
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The command line (also called terminal, shell, or CLI) is a text-based
          interface where you can interact with your computer using commands
          instead of clicking buttons. It's like having a conversation with your
          computer using text.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          While it might seem intimidating at first, the command line is
          incredibly powerful and efficient. Many developers prefer it because
          you can accomplish tasks much faster than using a graphical interface.
        </p>

        {/* WHY USE THE COMMAND LINE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.2:</span> Why Learn the Command Line?
        </h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <h4 className="mb-2 text-lg font-semibold text-neutral-200">
              Speed & Efficiency
            </h4>
            <p className="leading-relaxed text-neutral-400">
              Navigate and manage files much faster than using a graphical
              interface. Experienced developers can perform complex tasks in
              seconds that would take minutes through traditional interfaces.
            </p>
          </div>

          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <h4 className="mb-2 text-lg font-semibold text-neutral-200">
              Essential Developer Tools
            </h4>
            <p className="leading-relaxed text-neutral-400">
              Git, npm, build systems, and package managers are designed to work
              primarily through the command line.
            </p>
          </div>

          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <h4 className="mb-2 text-lg font-semibold text-neutral-200">
              Server Management
            </h4>
            <p className="leading-relaxed text-neutral-400">
              When working with remote servers or cloud platforms, the command
              line is often the only interface available.
            </p>
          </div>

          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <h4 className="mb-2 text-lg font-semibold text-neutral-200">
              Task Automation
            </h4>
            <p className="leading-relaxed text-neutral-400">
              Create scripts to automate repetitive tasks, batch operations, and
              complex workflows that would take hours to do manually.
            </p>
          </div>
        </div>

        {/* FIRST COMMANDS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.3:</span> Your First Commands
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Let's start with some basic commands. In the terminal on the left, try
          typing these commands one by one:
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-5 transition-all duration-200 border group rounded-xl bg-neutral-800/50 border-neutral-700 hover:border-blue-500/50 hover:bg-neutral-800/70">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 border rounded-lg bg-blue-500/20 border-blue-500/30">
                <span className="font-mono text-sm text-blue-400">?</span>
              </div>
              <code className="px-2 py-1 font-mono text-lg text-blue-400 rounded bg-black/50">
                help
              </code>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Shows a list of available commands. This is your friend when
              you're not sure what to do!
            </p>
          </div>

          <div className="p-5 transition-all duration-200 border group rounded-xl bg-neutral-800/50 border-neutral-700 hover:border-green-500/50 hover:bg-neutral-800/70">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 border rounded-lg bg-green-500/20 border-green-500/30">
                <span className="font-mono text-sm text-green-400">📍</span>
              </div>
              <code className="px-2 py-1 font-mono text-lg text-green-400 rounded bg-black/50">
                pwd
              </code>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              <strong className="text-green-300">
                Print Working Directory
              </strong>{" "}
              - Shows you where you currently are in the file system.
            </p>
          </div>

          <div className="p-5 transition-all duration-200 border group rounded-xl bg-neutral-800/50 border-neutral-700 hover:border-orange-500/50 hover:bg-neutral-800/70">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 border rounded-lg bg-orange-500/20 border-orange-500/30">
                <span className="font-mono text-sm text-orange-400">📁</span>
              </div>
              <code className="px-2 py-1 font-mono text-lg text-orange-400 rounded bg-black/50">
                ls
              </code>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              <strong className="text-orange-300">List</strong> - Shows all
              files and folders in your current directory.
            </p>
          </div>
        </div>

        {/* INTERACTIVE EXERCISE */}
        <div className="p-6 border rounded-lg bg-neutral-800/50 border-neutral-700">
          <h1 className="mb-2 text-2xl font-black leading-tight tracking-tighter">
            Interactive Exercise
          </h1>
          <p className="mb-4 text-neutral-300">
            Try the following commands in the terminal (in order):
          </p>
          <ol className="space-y-2 text-sm list-decimal list-inside text-neutral-400">
            <li>
              Type <code className="text-blue-400">help</code> to see available
              commands
            </li>
            <li>
              Type <code className="text-blue-400">pwd</code> to see your
              current location
            </li>
            <li>
              Type <code className="text-blue-400">ls</code> to see what's in
              your current directory
            </li>
          </ol>
          <p className="mt-3 text-sm text-neutral-500">
            Note: The terminal will show hints about what command to try next.
          </p>
        </div>

        {/* UNDERSTANDING THE PROMPT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.4:</span> Understanding the Prompt
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The terminal prompt shows important information about your current
          state:
        </p>

        <div className="p-4 font-mono bg-black border rounded-lg border-neutral-700">
          <div className="text-blue-400">user@codelyn:~$</div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-3 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <code className="text-blue-400">user</code>
            <p className="mt-1 text-xs text-neutral-400">Your username</p>
          </div>
          <div className="p-3 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <code className="text-blue-400">codelyn</code>
            <p className="mt-1 text-xs text-neutral-400">Computer name</p>
          </div>
          <div className="p-3 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <code className="text-blue-400">~</code>
            <p className="mt-1 text-xs text-neutral-400">
              Current directory (~ means home)
            </p>
          </div>
        </div>

        {/* SUMMARY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 mb-2">
          Summary:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The command line is a powerful text-based interface for interacting
          with your computer. You've learned your first three commands:{" "}
          <code className="text-blue-400">help</code>,{" "}
          <code className="text-blue-400">pwd</code>, and{" "}
          <code className="text-blue-400">ls</code>. These are the building
          blocks for navigation and file management.
        </p>

        {/* Progress Tracking */}
        <div className="flex items-center justify-between p-6 mt-8 border rounded-lg bg-neutral-800/50 border-neutral-700">
          <div>
            <h4 className="mb-1 text-lg font-semibold text-neutral-200">
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

        <NavButtons previous={null} next="/lessons/cli/2" />
      </div>
    </>
  );
};
