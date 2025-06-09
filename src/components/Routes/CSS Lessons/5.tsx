import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const CSS5 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("css", 5);

  const handleMarkComplete = () => {
    markLessonComplete("css", 5);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 5:</span> The Box
        Model:
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT IS THE BOX MODEL */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.1: </span>
          Understanding the Box Model:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Every HTML element is essentially a rectangular box. The CSS Box Model
          describes how the size of these boxes is calculated. It consists of
          four parts:
        </p>
        <ul className="max-w-2xl text-xl font-light text-foreground text-neutral-100 space-y-2 list-disc list-inside ml-4">
          <li>
            <strong>Content</strong> - The actual content (text, images, etc.)
          </li>
          <li>
            <strong>Padding</strong> - Space between content and border
          </li>
          <li>
            <strong>Border</strong> - The border around the padding
          </li>
          <li>
            <strong>Margin</strong> - Space outside the border
          </li>
        </ul>

        {/* CONTENT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.2: </span>
          Content (Width and Height):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Control the size of the content area with{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">width</code> and{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">height</code>:
        </p>
        <CodeElement
          codeString={`/* Fixed dimensions */
.box {
  width: 300px;
  height: 200px;
}

/* Percentage-based (relative to parent) */
.responsive-box {
  width: 50%;
  height: 100vh; /* 100% of viewport height */
}

/* Maximum and minimum sizes */
.flexible-box {
  width: 80%;
  max-width: 600px;   /* Won't exceed 600px */
  min-width: 300px;   /* Won't go below 300px */
  min-height: 200px;
}`}
        />

        {/* PADDING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.3: </span>
          Padding (Inner Space):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Padding creates space inside the element, between the content and the
          border:
        </p>
        <CodeElement
          codeString={`/* Same padding on all sides */
.card {
  padding: 20px;
}

/* Different padding for each side */
.custom-card {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
}

/* Shorthand (top, right, bottom, left) */
.shorthand {
  padding: 10px 15px 10px 15px;
}

/* Shorthand (vertical, horizontal) */
.simple {
  padding: 10px 15px;
}`}
        />

        {/* BORDER */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.4: </span>
          Border (Edge of the Element):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Borders define the edge of your element. You can control width, style,
          and color:
        </p>
        <CodeElement
          codeString={`/* Basic border */
.bordered {
  border: 2px solid #333;
}

/* Individual border properties */
.custom-border {
  border-width: 3px;
  border-style: dashed;
  border-color: red;
}

/* Different borders on each side */
.mixed-borders {
  border-top: 2px solid blue;
  border-right: 1px dashed green;
  border-bottom: 3px solid red;
  border-left: 1px dotted orange;
}

/* Border styles */
.border-styles {
  border: 2px solid black;   /* solid line */
  border: 2px dashed black;  /* dashed line */
  border: 2px dotted black;  /* dotted line */
  border: 2px double black;  /* double line */
}`}
        />

        {/* MARGIN */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.5: </span>
          Margin (Outer Space):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Margins create space outside the element, pushing other elements away:
        </p>
        <CodeElement
          codeString={`/* Same margin on all sides */
.spaced {
  margin: 20px;
}

/* Individual margins */
.custom-spacing {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-left: 15px;
}

/* Shorthand (top, right, bottom, left) */
.shorthand-margin {
  margin: 10px 15px 20px 15px;
}

/* Center an element horizontally */
.centered {
  width: 300px;
  margin: 0 auto; /* 0 top/bottom, auto left/right */
}`}
        />

        {/* BOX SIZING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.6: </span>
          Box Sizing:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          By default, width and height only apply to content.{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">box-sizing</code>{" "}
          changes this behavior:
        </p>
        <CodeElement
          codeString={`/* Default behavior - content-box */
.content-box {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width = 300 + 20 + 20 + 5 + 5 = 350px */
}

/* Include padding and border in width */
.border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Total width = exactly 300px */
}

/* Apply to all elements (common practice) */
* {
  box-sizing: border-box;
}`}
        />

        {/* PRACTICAL EXAMPLES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.7: </span>
          Practical Examples:
        </h3>
        <CodeElement
          codeString={`/* Card component */
.card {
  width: 300px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Button with proper spacing */
.button {
  padding: 12px 24px;
  margin: 5px;
  border: 2px solid #007bff;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
}

/* Container with inner spacing */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}`}
        />

        {/* MARGIN COLLAPSE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.8: </span>
          Margin Collapse:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          When two elements with margins touch, their margins "collapse" into
          one. The larger margin wins:
        </p>
        <CodeElement
          codeString={`/* These two elements touch */
.element1 {
  margin-bottom: 20px;
}

.element2 {
  margin-top: 30px;
}

/* The space between them will be 30px (not 50px) */
/* This is called "margin collapse" */

/* To prevent collapse, use padding or borders */
.no-collapse {
  padding-bottom: 1px; /* Prevents collapse */
}`}
        />

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.9: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          In the editor, try creating a card-like element with padding, borders,
          and margins. Experiment with different values to see how they affect
          the layout. Remember that you can inspect elements in your browser's
          developer tools to see the box model visually!
        </p>
        <CodeElement
          codeString={`/* Try this card example */
.my-card {
  width: 250px;
  padding: 15px;
  margin: 20px auto;
  border: 2px solid #3498db;
  border-radius: 10px;
  background-color: #f8f9fa;
  text-align: center;
}

.my-card h3 {
  margin-top: 0;
  color: #2c3e50;
}

.my-card p {
  margin-bottom: 0;
  color: #7f8c8d;
}`}
        />

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

        <NavButtons previous="/lessons/css/4" next="/lessons/css/6" />
      </div>
    </>
  );
};
