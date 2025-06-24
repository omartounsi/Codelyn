import { useEffect } from "react";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle, IoTerminal } from "react-icons/io5";
import { NavButtons } from "../../tools/navbuttons";

interface CLI2Props {
  onCommandsChange: (commands: string[]) => void;
}

export const CLI2 = ({ onCommandsChange }: CLI2Props) => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("cli", 2);

  const handleMarkComplete = () => {
    markLessonComplete("cli", 2);
  };

  // Set expected commands for this lesson
  useEffect(() => {
    onCommandsChange(["ls", "cd Documents", "pwd", "ls", "cd .."]);
  }, [onCommandsChange]);

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 2:</span>{" "}
        Navigation and Directory Structure
      </h1>

      <div className="flex flex-col gap-7">
        {/* DIRECTORY STRUCTURE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.1:</span> Understanding Directory
          Structure
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Your computer's file system is organized like a tree. At the top is
          the root directory, and everything else branches out from there. Think
          of it like a filing cabinet with folders inside folders.
        </p>

        <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
          <h4 className="mb-3 text-lg font-semibold text-neutral-200">
            📁 Directory Tree Example
          </h4>
          <div className="space-y-1 font-mono text-sm text-neutral-300">
            <div>📁 root/</div>
            <div className="ml-4">📁 Documents/</div>
            <div className="ml-8">📄 resume.txt</div>
            <div className="ml-8">📁 projects/</div>
            <div className="ml-12">📁 website/</div>
            <div className="ml-4">📁 Downloads/</div>
            <div className="ml-8">📄 image.jpg</div>
            <div className="ml-4">📁 Desktop/</div>
            <div className="ml-8">📄 notes.txt</div>
          </div>
        </div>

        {/* NAVIGATION COMMANDS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.2:</span> Navigation Commands
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Now let's learn how to move around the file system using navigation
          commands:
        </p>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <div className="flex items-center gap-2 mb-2">
              <IoTerminal className="w-4 h-4 text-green-400" />
              <code className="font-mono text-green-400">cd [directory]</code>
            </div>
            <p className="mb-2 text-sm text-neutral-400">
              <strong>Change Directory</strong> - Move into a different folder.
            </p>
            <div className="p-2 font-mono text-xs bg-black rounded-md">
              <div className="text-neutral-400"># Examples:</div>
              <div className="text-blue-400">cd Documents</div>
              <div className="text-neutral-400">
                # Move into Documents folder
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <div className="flex items-center gap-2 mb-2">
              <IoTerminal className="w-4 h-4 text-green-400" />
              <code className="font-mono text-green-400">cd ..</code>
            </div>
            <p className="mb-2 text-sm text-neutral-400">
              Move up one level to the parent directory. The <code>..</code>{" "}
              means "parent directory".
            </p>
            <div className="p-2 font-mono text-xs bg-black rounded-md">
              <div className="text-blue-400">cd ..</div>
              <div className="text-neutral-400"># Go back to parent folder</div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <div className="flex items-center gap-2 mb-2">
              <IoTerminal className="w-4 h-4 text-green-400" />
              <code className="font-mono text-green-400">cd</code> (no
              arguments)
            </div>
            <p className="text-sm text-neutral-400">
              Go back to your home directory from anywhere.
            </p>
          </div>
        </div>

        {/* SPECIAL DIRECTORY SYMBOLS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.3:</span> Special Directory Symbols
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <code className="text-lg text-blue-400">~</code>
            <h4 className="mt-2 text-sm font-semibold text-neutral-200">
              Home Directory
            </h4>
            <p className="mt-1 text-xs text-neutral-400">
              Your personal folder
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <code className="text-lg text-blue-400">.</code>
            <h4 className="mt-2 text-sm font-semibold text-neutral-200">
              Current Directory
            </h4>
            <p className="mt-1 text-xs text-neutral-400">Where you are now</p>
          </div>
          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <code className="text-lg text-blue-400">..</code>
            <h4 className="mt-2 text-sm font-semibold text-neutral-200">
              Parent Directory
            </h4>
            <p className="mt-1 text-xs text-neutral-400">One level up</p>
          </div>
        </div>

        {/* INTERACTIVE EXERCISE */}
        <div className="p-6 border bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border-green-500/30">
          <h4 className="mb-3 text-lg font-semibold text-neutral-200">
            🎯 Navigation Practice
          </h4>
          <p className="mb-4 text-neutral-300">
            Let's practice navigating the file system. Follow these steps in
            order:
          </p>
          <ol className="space-y-2 text-sm list-decimal list-inside text-neutral-400">
            <li>
              Type <code className="text-green-400">ls</code> to see what's in
              your current directory
            </li>
            <li>
              Type <code className="text-green-400">cd Documents</code> to enter
              the Documents folder
            </li>
            <li>
              Type <code className="text-green-400">pwd</code> to confirm your
              new location
            </li>
            <li>
              Type <code className="text-green-400">ls</code> to see what's
              inside Documents
            </li>
            <li>
              Type <code className="text-green-400">cd ..</code> to go back to
              the parent directory
            </li>
          </ol>
          <p className="mt-3 text-xs text-neutral-500">
            💡 Watch how the prompt changes as you navigate through directories!
          </p>
        </div>

        {/* TIPS AND TRICKS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.4:</span> Navigation Tips
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <h4 className="mb-2 text-lg font-semibold text-neutral-200">
              💡 Case Sensitivity
            </h4>
            <p className="text-sm text-neutral-400">
              Directory names are case-sensitive. <code>Documents</code> and{" "}
              <code>documents</code> are different!
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-neutral-800/50 border-neutral-700">
            <h4 className="mb-2 text-lg font-semibold text-neutral-200">
              📍 Tab Completion
            </h4>
            <p className="text-sm text-neutral-400">
              Start typing a directory name and press Tab to auto-complete it
              (not available in this simulator).
            </p>
          </div>
        </div>

        {/* COMMON MISTAKES */}
        <div className="p-4 border rounded-lg bg-red-500/10 border-red-500/30">
          <h4 className="mb-3 text-lg font-semibold text-red-200">
            ⚠️ Common Mistakes to Avoid
          </h4>
          <ul className="space-y-2 text-sm text-red-100">
            <li>
              • Typing <code>cd documents</code> instead of{" "}
              <code>cd Documents</code> (wrong case)
            </li>
            <li>
              • Forgetting that spaces in directory names need to be handled
              specially
            </li>
            <li>
              • Not checking where you are with <code>pwd</code> before
              navigating
            </li>
          </ul>
        </div>

        {/* SUMMARY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 mb-2">
          Summary:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You've learned how to navigate the file system using{" "}
          <code className="text-blue-400">cd</code> to change directories, and
          understand special symbols like{" "}
          <code className="text-blue-400">~</code>,{" "}
          <code className="text-blue-400">.</code>, and{" "}
          <code className="text-blue-400">..</code>. Navigation is fundamental
          to using the command line effectively.
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

        <NavButtons previous="/lessons/cli/1" next="/lessons/cli/3" />
      </div>
    </>
  );
};
