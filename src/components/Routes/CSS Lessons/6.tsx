import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const CSS6 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("css", 6);

  const handleMarkComplete = () => {
    markLessonComplete("css", 6);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 6:</span> CSS
        Layout Basics:
      </h1>
      <div className="flex flex-col gap-7">
        {/* DISPLAY PROPERTY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.1: </span>
          The Display Property:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The <span className="text-[#1572b6] font-bold">display</span> property
          controls how an element appears on the page. It's one of the most
          important layout properties in CSS.
        </p>

        <h4 className="text-xl font-medium text-neutral-200">
          Common Display Values:
        </h4>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Value
              </th>
              <th className="w-auto max-w-2xl p-2 text-xl font-medium border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">block</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Takes full width, starts on new line
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">inline</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Only takes needed width, stays in line
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">inline-block</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Combines benefits of both
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">none</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Hides the element completely
              </td>
            </tr>
          </tbody>
        </table>

        <CodeElement
          codeString={`/* Making spans behave like block elements */
span {
  display: block;
  background-color: lightblue;
  padding: 10px;
  margin: 5px 0;
}

/* Making divs behave like inline elements */
div {
  display: inline;
  background-color: lightgreen;
  padding: 5px;
}`}
        />

        {/* POSITION PROPERTY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.2: </span>
          CSS Positioning:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The <span className="text-[#1572b6] font-bold">position</span>{" "}
          property controls where elements appear on the page. You can combine
          it with <code>top</code>, <code>right</code>, <code>bottom</code>, and{" "}
          <code>left</code> properties.
        </p>

        <h4 className="text-xl font-medium text-neutral-200">
          Position Values:
        </h4>
        <CodeElement
          codeString={`/* Static positioning (default) */
.normal {
  position: static;
}

/* Relative positioning - moves from normal position */
.move-down {
  position: relative;
  top: 20px;
  left: 10px;
}

/* Absolute positioning - positioned relative to parent */
.corner {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed positioning - stays in place when scrolling */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}`}
        />

        {/* FLOAT PROPERTY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.3: </span>
          Float and Clear:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Float was originally designed for text wrapping around images, but
          it's also used for layout.
        </p>
        <CodeElement
          codeString={`/* Float an image to the left */
.photo {
  float: left;
  margin: 0 15px 15px 0;
}

/* Float elements side by side */
.column {
  float: left;
  width: 50%;
}

/* Clear floats to start fresh */
.clearfix {
  clear: both;
}`}
        />

        {/* Z-INDEX */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.4: </span>
          Layering with Z-Index:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          When elements overlap,{" "}
          <span className="text-[#1572b6] font-bold">z-index</span> controls
          which one appears on top. Higher numbers appear in front of lower
          numbers.
        </p>
        <CodeElement
          codeString={`/* Layer elements on top of each other */
.background {
  position: absolute;
  z-index: 1;
  background-color: blue;
}

.middle-layer {
  position: absolute;
  z-index: 2;
  background-color: green;
}

.top-layer {
  position: absolute;
  z-index: 3;
  background-color: red;
}`}
        />

        {/* PRACTICAL EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.5: </span>
          Practical Layout Example:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Here's a simple two-column layout using the concepts we've learned:
        </p>
        <CodeElement
          codeString={`<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .header {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    .content {
      display: inline-block;
      width: 65%;
      padding: 20px;
      vertical-align: top;
    }
    
    .sidebar {
      display: inline-block;
      width: 30%;
      background-color: #f4f4f4;
      padding: 20px;
      vertical-align: top;
    }
    
    .footer {
      clear: both;
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>My Website</h1>
    </div>
    
    <div class="content">
      <h2>Main Content</h2>
      <p>This is the main content area...</p>
    </div>
    
    <div class="sidebar">
      <h3>Sidebar</h3>
      <p>Additional information...</p>
    </div>
    
    <div class="footer">
      <p>&copy; 2024 My Website</p>
    </div>
  </div>
</body>
</html>`}
        />

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.6: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Experiment with different display and position values in the editor.
          Try creating a simple layout with a header, main content area, and
          sidebar. Notice how different position values affect element
          placement.
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

        <NavButtons previous="/lessons/css/5" next="/lessons/css/7" />
      </div>
    </>
  );
};
