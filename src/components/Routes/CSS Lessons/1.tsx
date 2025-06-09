import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const CSS1 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("css", 1);

  const handleMarkComplete = () => {
    markLessonComplete("css", 1);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 1:</span>{" "}
        Introduction to CSS:
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT IS CSS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.1: </span>
          What is CSS?:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          CSS stands for{" "}
          <span className="font-bold underline">Cascading Style Sheets</span>.
          It's the language used to control the presentation and layout of HTML
          elements. While HTML provides the structure and content of a webpage,
          CSS makes it look beautiful by controlling colors, fonts, spacing,
          positioning, and visual effects.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Think of CSS as the designer of your webpage — if HTML is the
          skeleton, CSS is the skin, clothing, and makeup that makes everything
          visually appealing.
        </p>

        {/* THE ROLE  */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.2: </span>
          The Role of CSS in Web Development:
        </h3>
        <p className="max-w-2xl -mb-4 text-xl font-light text-foreground text-neutral-100">
          CSS works together with HTML and JavaScript:
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Language
              </th>
              <th className="w-auto max-w-2xl p-2 text-xl font-medium border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <span className="text-[#e34c26] font-bold">HTML</span>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Structure and content
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <span className="text-[#1572b6] font-bold">CSS</span>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Styling and layout
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <span className="text-[#f0db4f] font-bold">JavaScript</span>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Interactivity and behavior
              </td>
            </tr>
          </tbody>
        </table>

        {/* CSS SYNTAX */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.3: </span>
          CSS Syntax Basics:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          CSS follows a simple pattern: you select an HTML element and then
          define how you want it to look. This is called a{" "}
          <span className="text-[#1572b6] font-bold">CSS rule</span>.
        </p>
        <CodeElement
          codeString={`selector {
  property: value;
  property: value;
}`}
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          For example, to make all paragraphs red:
        </p>
        <CodeElement
          codeString={`p {
  color: red;
}`}
        />

        {/* HOW TO ADD CSS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.4: </span>
          Three Ways to Add CSS:
        </h3>

        <h4 className="text-xl font-medium text-neutral-200">
          1. Inline CSS (directly in HTML elements):
        </h4>
        <CodeElement
          codeString={`<p style="color: red; font-size: 20px;">This text is red and large.</p>`}
        />

        <h4 className="text-xl font-medium text-neutral-200">
          2. Internal CSS (in the &lt;head&gt; section):
        </h4>
        <CodeElement
          codeString={`<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>`}
        />

        <h4 className="text-xl font-medium text-neutral-200">
          3. External CSS (separate .css file):
        </h4>
        <CodeElement
          codeString={`<!-- In your HTML file -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* In your styles.css file */
p {
  color: green;
  font-size: 16px;
}`}
        />

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.5: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          In the editor, try changing the color of the heading from blue to red.
          You can also experiment with different colors like "green", "purple",
          or even hex codes like "#ff6b6b".
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Don't worry about memorizing everything - CSS is about experimenting
          and seeing what happens!
        </p>

        {/* MARK AS COMPLETE BUTTON */}
        <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700 mt-6">
          <div className="flex-1">
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

        <NavButtons previous="/lessons" next="/lessons/css/2" />
      </div>
    </>
  );
};
