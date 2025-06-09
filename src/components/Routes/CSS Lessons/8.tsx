import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const CSS8 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("css", 8);

  const handleMarkComplete = () => {
    markLessonComplete("css", 8);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 8:</span> CSS Grid
        Layout:
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION TO GRID */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.1: </span>
          Introduction to CSS Grid:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="text-[#1572b6] font-bold">CSS Grid</span> is a
          powerful two-dimensional layout system that allows you to create
          complex layouts with rows and columns. While flexbox is great for
          one-dimensional layouts, Grid excels at creating full page layouts and
          complex component designs.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Grid is perfect for creating magazine-style layouts, dashboards, card
          grids, and any design where you need precise control over both rows
          and columns.
        </p>

        {/* BASIC GRID SETUP */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.2: </span>
          Creating a Basic Grid:
        </h3>
        <CodeElement
          codeString={`/* Create a grid container */
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 columns */
  grid-template-rows: 100px 100px; /* 2 rows */
  gap: 10px; /* Space between items */
}

/* HTML structure */
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>`}
        />

        {/* FLEXIBLE GRID SIZES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.3: </span>
          Flexible Grid Sizes:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Grid offers flexible ways to define column and row sizes using
          fractions (fr), percentages, auto, and the repeat() function:
        </p>
        <CodeElement
          codeString={`/* Using fractions (fr) - most flexible */
.flexible-grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 ratio */
  grid-template-rows: auto;
}

/* Using repeat() function */
.repeated-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: repeat(3, 100px); /* 3 rows of 100px */
}

/* Mixed sizes */
.mixed-grid {
  display: grid;
  grid-template-columns: 200px 1fr 100px; /* Fixed, flexible, fixed */
  grid-template-rows: auto 1fr auto; /* Auto, flexible, auto */
  min-height: 100vh; /* Full viewport height */
}

/* Auto-fit and auto-fill */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`}
        />

        {/* GRID AREAS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.4: </span>
          Grid Areas and Template Areas:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Grid areas let you name sections of your grid and create intuitive
          layouts:
        </p>
        <CodeElement
          codeString={`/* Define a layout using grid areas */
.layout-grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 100vh;
  gap: 20px;
}

/* Assign elements to areas */
.header {
  grid-area: header;
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f4f4f4;
  padding: 20px;
}

.main {
  grid-area: main;
  background-color: white;
  padding: 20px;
}

.aside {
  grid-area: aside;
  background-color: #e8e8e8;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}`}
        />

        {/* POSITIONING GRID ITEMS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.5: </span>
          Positioning Grid Items:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You can precisely control where grid items are placed using line
          numbers or span keywords:
        </p>
        <CodeElement
          codeString={`/* Position items using line numbers */
.positioned-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
}

/* Place item from column 1 to 3, row 1 to 2 */
.spanning-item {
  grid-column: 1 / 3;  /* or grid-column-start: 1; grid-column-end: 3; */
  grid-row: 1 / 2;
  background-color: lightblue;
}

/* Span across multiple cells */
.wide-item {
  grid-column: span 2; /* Span 2 columns */
  grid-row: span 2;    /* Span 2 rows */
  background-color: lightgreen;
}

/* Position at specific location */
.placed-item {
  grid-column: 4;
  grid-row: 3;
  background-color: lightcoral;
}`}
        />

        {/* ALIGNMENT IN GRID */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.6: </span>
          Alignment in Grid:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Grid provides powerful alignment options for both the grid container
          and individual items:
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[40%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Property
              </th>
              <th className="w-auto max-w-2xl p-2 text-xl font-medium border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[40%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">justify-items</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Align all items horizontally in their cells
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[40%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">align-items</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Align all items vertically in their cells
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[40%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">
                  justify-content
                </code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Align the entire grid horizontally
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[40%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">align-content</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Align the entire grid vertically
              </td>
            </tr>
          </tbody>
        </table>

        <CodeElement
          codeString={`/* Center all items in their cells */
.centered-grid {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(2, 150px);
  justify-items: center; /* Horizontal centering */
  align-items: center;   /* Vertical centering */
  gap: 10px;
}

/* Center the entire grid */
.container {
  display: grid;
  justify-content: center; /* Center grid horizontally */
  align-content: center;   /* Center grid vertically */
  min-height: 100vh;
}`}
        />

        {/* PRACTICAL EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.7: </span>
          Complete Page Layout Example:
        </h3>
        <CodeElement
          codeString={`<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .page-layout {
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      grid-template-rows: 60px 1fr 40px;
      grid-template-areas:
        "header header header"
        "nav main aside"
        "footer footer footer";
      min-height: 100vh;
      gap: 1px;
      background-color: #ccc;
    }
    
    .header {
      grid-area: header;
      background-color: #2c3e50;
      color: white;
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-size: 1.2rem;
    }
    
    .nav {
      grid-area: nav;
      background-color: #34495e;
      color: white;
      padding: 20px;
    }
    
    .main {
      grid-area: main;
      background-color: white;
      padding: 20px;
      overflow-y: auto;
    }
    
    .aside {
      grid-area: aside;
      background-color: #ecf0f1;
      padding: 20px;
    }
    
    .footer {
      grid-area: footer;
      background-color: #2c3e50;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Card grid inside main content */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .card {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="page-layout">
    <header class="header">My Dashboard</header>
    <nav class="nav">
      <h3>Navigation</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
    <main class="main">
      <h1>Main Content</h1>
      <div class="card-grid">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
      </div>
    </main>
    <aside class="aside">
      <h3>Sidebar</h3>
      <p>Additional content...</p>
    </aside>
    <footer class="footer">© 2024 My Dashboard</footer>
  </div>
</body>
</html>`}
        />

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.8: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Experiment with creating different grid layouts in the editor. Try
          making a photo gallery with different sized images, or create a
          dashboard layout with header, sidebar, and main content area. Practice
          using both grid lines and grid areas to position elements.
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

        <NavButtons previous="/lessons/css/7" next="/lessons/css/9" />
      </div>
    </>
  );
};
