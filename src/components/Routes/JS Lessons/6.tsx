// Lessons 6-15 template files
import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS6 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 6);
  const handleMarkComplete = () => markLessonComplete("javascript", 6);

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 6:</span> Loops
        and Iteration
      </h1>
      <div className="flex flex-col gap-7">
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">6.1:</span> For Loops
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Loops allow you to repeat code multiple times. The for loop is perfect
          when you know how many times you want to repeat something.
        </p>
        <CodeElement
          codeString={`// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log("Count: " + i);
}

// Looping through arrays
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    console.log("Color " + (i + 1) + ": " + colors[i]);
}`}
          styling=""
          paragraphString="For loops have three parts: initialization, condition, and increment."
        />

        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">6.2:</span> While and Do-While Loops
        </h3>
        <CodeElement
          codeString={`// While loop
let count = 0;
while (count < 3) {
    console.log("While count: " + count);
    count++;
}

// Do-while loop (runs at least once)
let number = 0;
do {
    console.log("Do-while: " + number);
    number++;
} while (number < 3);`}
          styling=""
          paragraphString="While loops continue as long as the condition is true."
        />

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
                : "bg-yellow-500 hover:bg-yellow-600 text-white hover:scale-105"
            }`}
          >
            <IoCheckmarkCircle className="w-5 h-5" />
            {lessonCompleted ? "Completed" : "Mark Complete"}
          </button>
        </div>
        <NavButtons previous="/lessons/js/5" next="/lessons/js/7" />
      </div>
    </>
  );
};
