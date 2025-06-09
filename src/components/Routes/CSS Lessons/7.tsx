import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const CSS7 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("css", 7);

  const handleMarkComplete = () => {
    markLessonComplete("css", 7);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 7:</span> Flexbox
        Layout:
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION TO FLEXBOX */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.1: </span>
          Introduction to Flexbox:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="text-[#1572b6] font-bold">Flexbox</span> (Flexible
          Box Layout) is a modern CSS layout method that makes it easy to
          arrange items in rows or columns. It's perfect for creating responsive
          layouts and aligning items both horizontally and vertically.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          To use flexbox, you set <code>display: flex</code> on a container
          (parent element). The items inside automatically become flexible and
          can be easily arranged.
        </p>

        {/* BASIC FLEXBOX SETUP */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.2: </span>
          Basic Flexbox Setup:
        </h3>
        <CodeElement
          codeString={`/* Create a flex container */
.container {
  display: flex;
}

/* Basic HTML structure */
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
        />

        {/* FLEX DIRECTION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.3: </span>
          Flex Direction:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The <span className="text-[#1572b6] font-bold">flex-direction</span>{" "}
          property controls whether items are arranged in rows or columns:
        </p>
        <CodeElement
          codeString={`/* Items in a row (default) */
.row-container {
  display: flex;
  flex-direction: row;
}

/* Items in a column */
.column-container {
  display: flex;
  flex-direction: column;
}

/* Reverse the order */
.reverse-row {
  display: flex;
  flex-direction: row-reverse;
}

.reverse-column {
  display: flex;
  flex-direction: column-reverse;
}`}
        />

        {/* JUSTIFY CONTENT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.4: </span>
          Justify Content (Horizontal Alignment):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="text-[#1572b6] font-bold">justify-content</span>{" "}
          controls how items are spaced along the main axis (horizontally in a
          row):
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Value
              </th>
              <th className="w-auto max-w-2xl p-2 text-xl font-medium border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Effect
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">flex-start</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Items at the beginning (left)
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">center</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Items in the center
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">flex-end</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Items at the end (right)
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">space-between</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Equal space between items
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">space-around</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Equal space around items
              </td>
            </tr>
          </tbody>
        </table>

        <CodeElement
          codeString={`/* Center items horizontally */
.center-items {
  display: flex;
  justify-content: center;
}

/* Space items evenly */
.spaced-items {
  display: flex;
  justify-content: space-between;
}`}
        />

        {/* ALIGN ITEMS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.5: </span>
          Align Items (Vertical Alignment):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="text-[#1572b6] font-bold">align-items</span> controls
          how items are aligned along the cross axis (vertically in a row):
        </p>
        <CodeElement
          codeString={`/* Center items vertically */
.vertical-center {
  display: flex;
  align-items: center;
  height: 200px; /* Need height to see the effect */
}

/* Align to top */
.align-top {
  display: flex;
  align-items: flex-start;
}

/* Align to bottom */
.align-bottom {
  display: flex;
  align-items: flex-end;
}

/* Stretch to fill container */
.stretch-items {
  display: flex;
  align-items: stretch;
}`}
        />

        {/* PERFECT CENTERING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.6: </span>
          Perfect Centering:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          One of flexbox's superpowers is perfectly centering content both
          horizontally and vertically:
        </p>
        <CodeElement
          codeString={`.perfect-center {
  display: flex;
  justify-content: center;  /* Horizontal centering */
  align-items: center;      /* Vertical centering */
  height: 300px;           /* Give it some height */
  background-color: lightgray;
}

/* HTML */
<div class="perfect-center">
  <div>I'm perfectly centered!</div>
</div>`}
        />

        {/* FLEX PROPERTIES FOR ITEMS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.7: </span>
          Flex Properties for Items:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Individual flex items can have special properties to control their
          behavior:
        </p>
        <CodeElement
          codeString={`/* Make an item grow to fill available space */
.grow-item {
  flex-grow: 1;
}

/* Make an item shrink when space is tight */
.shrink-item {
  flex-shrink: 2;
}

/* Set a base size for an item */
.fixed-item {
  flex-basis: 200px;
}

/* Shorthand: flex-grow, flex-shrink, flex-basis */
.flexible-item {
  flex: 1 1 200px;
}

/* Common patterns */
.equal-width {
  flex: 1; /* All items same width */
}

.sidebar {
  flex: 0 0 250px; /* Fixed 250px width */
}`}
        />

        {/* PRACTICAL EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.8: </span>
          Practical Navigation Bar:
        </h3>
        <CodeElement
          codeString={`<!DOCTYPE html>
<html>
<head>
  <style>
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      padding: 1rem;
      color: white;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
    }
    
    .nav-links a:hover {
      color: #ddd;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">MyBrand</div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</body>
</html>`}
        />

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.9: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Practice creating different layouts with flexbox. Try making a simple
          card layout where cards are centered and evenly spaced. Experiment
          with different justify-content and align-items values to see how they
          affect your layout.
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

        <NavButtons previous="/lessons/css/6" next="/lessons/css/8" />
      </div>
    </>
  );
};
