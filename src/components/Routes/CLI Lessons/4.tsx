import { useEffect } from "react";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";
import { NavButtons } from "../../tools/navbuttons";

interface CLI4Props {
  onCommandsChange: (commands: string[]) => void;
}

export const CLI4 = ({ onCommandsChange }: CLI4Props) => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("cli", 4);

  const handleMarkComplete = () => {
    markLessonComplete("cli", 4);
  };

  useEffect(() => {
    onCommandsChange(["clear"]);
  }, [onCommandsChange]);

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 4:</span> Terminal
        Management
      </h1>

      <div className="flex flex-col gap-7">
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">4.1:</span> Keeping Your Terminal Clean
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          As you work, your terminal can get cluttered with previous commands
          and output. The <code className="text-blue-400">clear</code> command
          clears the screen, giving you a fresh start.
        </p>

        <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/30">
          <h4 className="text-lg font-semibold text-neutral-200 mb-3">
            🧹 Clean Up Exercise
          </h4>
          <p className="text-neutral-300 mb-4">
            Your terminal probably has a lot of text now. Let's clean it up:
          </p>
          <p className="text-sm text-neutral-400">
            Type <code className="text-cyan-400">clear</code> to clear the
            terminal screen.
          </p>
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

        <NavButtons previous="/lessons/cli/3" next="/lessons/cli/5" />
      </div>
    </>
  );
};
