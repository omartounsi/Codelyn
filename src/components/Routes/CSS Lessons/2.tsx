import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const CSS2 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("css", 2);

  const handleMarkComplete = () => {
    markLessonComplete("css", 2);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 2:</span> CSS
        Selectors:
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT ARE SELECTORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.1: </span>
          What are CSS Selectors?:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          CSS selectors are patterns that tell the browser which HTML elements
          to style. Think of them as a way to "point" at specific elements on
          your webpage and say "I want to change how THIS looks."
        </p>

        {/* ELEMENT SELECTORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.2: </span>
          Element Selectors:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The simplest selector is the{" "}
          <span className="text-[#1572b6] font-bold">element selector</span>. It
          selects all elements of a specific type:
        </p>
        <CodeElement
          codeString={`/* Selects ALL paragraphs */
p {
  color: blue;
}

/* Selects ALL headings level 1 */
h1 {
  font-size: 32px;
}

/* Selects ALL divs */
div {
  background-color: lightgray;
}`}
        />

        {/* CLASS SELECTORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.3: </span>
          Class Selectors:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Class selectors let you style specific elements that have a particular
          class attribute. Classes start with a{" "}
          <span className="text-[#1572b6] font-bold">dot (.)</span>:
        </p>
        <CodeElement
          codeString={`/* HTML */
<p class="highlight">This paragraph is special</p>
<p>This paragraph is normal</p>

/* CSS */
.highlight {
  background-color: yellow;
  font-weight: bold;
}`}
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Only the paragraph with{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">
            class="highlight"
          </code>{" "}
          will be yellow and bold.
        </p>

        {/* ID SELECTORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.4: </span>
          ID Selectors:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          ID selectors target a single, unique element. IDs start with a{" "}
          <span className="text-[#1572b6] font-bold">hash (#)</span>:
        </p>
        <CodeElement
          codeString={`/* HTML */
<h1 id="main-title">Welcome to My Website</h1>

/* CSS */
#main-title {
  color: red;
  text-align: center;
}`}
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Remember: Each ID should be unique on a page, while classes can be
          used multiple times.
        </p>

        {/* SELECTOR COMPARISON */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.5: </span>
          Selector Comparison:
        </h3>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[25%] text-xl font-medium text-foreground text-neutral-100 p-2">
                Selector Type
              </th>
              <th className="border border-neutral-600 border-dashed w-[25%] text-xl font-medium text-foreground text-neutral-100 p-2">
                Syntax
              </th>
              <th className="border border-neutral-600 border-dashed w-[50%] text-xl font-medium text-foreground text-neutral-100 p-2">
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Element
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded">p</code>
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Styles all elements of that type
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Class
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded">
                  .className
                </code>
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Styles elements with that class
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                ID
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded">
                  #idName
                </code>
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Styles one unique element
              </td>
            </tr>
          </tbody>
        </table>

        {/* COMBINING SELECTORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.6: </span>
          Combining Selectors:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You can combine selectors for more specific targeting:
        </p>
        <CodeElement
          codeString={`/* Select paragraphs with class "intro" */
p.intro {
  font-size: 18px;
}

/* Select all paragraphs AND all headings */
p, h1, h2 {
  font-family: Arial, sans-serif;
}

/* Select paragraphs inside divs */
div p {
  margin-bottom: 10px;
}`}
        />

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.7: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          In the editor, try adding a class to one of the paragraphs and then
          style it differently. For example, add{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">
            class="special"
          </code>{" "}
          to a paragraph, then create a CSS rule for{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">.special</code>.
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

        <NavButtons previous="/lessons/css/1" next="/lessons/css/3" />
      </div>
    </>
  );
};
