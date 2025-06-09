import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const CSS9 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("css", 9);

  const handleMarkComplete = () => {
    markLessonComplete("css", 9);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 9:</span>{" "}
        Responsive Design and Media Queries:
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION TO RESPONSIVE DESIGN */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.1: </span>
          What is Responsive Design?:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="text-[#1572b6] font-bold">Responsive design</span>{" "}
          ensures your website looks great and functions well on all devices -
          from desktop computers to tablets to smartphones. Instead of creating
          separate websites for different devices, responsive design adapts your
          layout automatically.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          With the variety of screen sizes today (phones, tablets, laptops,
          large monitors), responsive design is essential for providing a good
          user experience for everyone.
        </p>

        {/* VIEWPORT META TAG */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.2: </span>
          Setting Up the Viewport:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The first step in responsive design is adding the viewport meta tag to
          your HTML. This tells the browser how to control the page's dimensions
          and scaling:
        </p>
        <CodeElement
          codeString={`<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Responsive Website</title>
</head>`}
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          This meta tag ensures your website starts at the correct zoom level on
          mobile devices.
        </p>

        {/* MEDIA QUERIES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.3: </span>
          Introduction to Media Queries:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="text-[#1572b6] font-bold">Media queries</span> let
          you apply different CSS styles based on device characteristics like
          screen width, height, or orientation. They're the foundation of
          responsive design.
        </p>
        <CodeElement
          codeString={`/* Basic media query syntax */
@media (max-width: 768px) {
  /* CSS rules for screens 768px and smaller */
  .container {
    width: 100%;
    padding: 10px;
  }
}

/* Media query for larger screens */
@media (min-width: 1200px) {
  /* CSS rules for screens 1200px and larger */
  .container {
    max-width: 1140px;
    margin: 0 auto;
  }
}`}
        />

        {/* COMMON BREAKPOINTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.4: </span>
          Common Breakpoints:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Breakpoints are specific screen widths where your design changes. Here
          are commonly used breakpoints:
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Device
              </th>
              <th className="w-auto max-w-2xl p-2 text-xl font-medium border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Breakpoint
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                Mobile
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                480px and below
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                Tablet
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                481px - 768px
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                Desktop
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                769px - 1024px
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                Large Desktop
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                1025px and above
              </td>
            </tr>
          </tbody>
        </table>

        <CodeElement
          codeString={`/* Mobile-first approach */
.container {
  width: 100%;
  padding: 15px;
}

/* Tablet */
@media (min-width: 481px) {
  .container {
    padding: 20px;
  }
}

/* Desktop */
@media (min-width: 769px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
  }
}

/* Large Desktop */
@media (min-width: 1025px) {
  .container {
    max-width: 1400px;
  }
}`}
        />

        {/* RESPONSIVE UNITS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.5: </span>
          Responsive Units:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Using the right units makes your design more flexible and responsive:
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Unit
              </th>
              <th className="w-auto max-w-2xl p-2 text-xl font-medium border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Best For
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">%</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Widths, flexible layouts
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">vw/vh</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Viewport-based sizing
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">em/rem</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Text and spacing
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-lg font-light text-foreground text-neutral-100 p-2 ">
                <code className="text-[#1572b6] font-bold">fr</code>
              </td>
              <td className="w-auto max-w-2xl p-2 text-lg font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                CSS Grid layouts
              </td>
            </tr>
          </tbody>
        </table>

        <CodeElement
          codeString={`/* Responsive units in action */
.hero {
  height: 100vh;        /* Full viewport height */
  width: 100vw;         /* Full viewport width */
  font-size: 4vw;       /* Text scales with viewport */
}

.sidebar {
  width: 25%;           /* 25% of parent width */
  padding: 2rem;        /* Relative to root font size */
}

.content {
  width: 75%;
  padding: 1.5em;       /* Relative to element font size */
}`}
        />

        {/* RESPONSIVE IMAGES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.6: </span>
          Responsive Images:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Images need special attention in responsive design to prevent them
          from breaking layouts:
        </p>
        <CodeElement
          codeString={`/* Basic responsive image */
img {
  max-width: 100%;
  height: auto;
}

/* Responsive image with CSS */
.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Maintains aspect ratio */
}

/* Using HTML picture element for different screen sizes */
<picture>
  <source media="(max-width: 480px)" srcset="image-small.jpg">
  <source media="(max-width: 768px)" srcset="image-medium.jpg">
  <img src="image-large.jpg" alt="Description">
</picture>`}
        />

        {/* COMPLETE RESPONSIVE EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.7: </span>
          Complete Responsive Website Example:
        </h3>
        <CodeElement
          codeString={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Website</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Header */
    header {
      background: #333;
      color: white;
      padding: 1rem 0;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      justify-content: center;
    }
    
    nav li {
      margin: 0 1rem;
    }
    
    nav a {
      color: white;
      text-decoration: none;
    }
    
    /* Main content */
    .content-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      margin: 2rem 0;
    }
    
    .main-content {
      background: #f4f4f4;
      padding: 2rem;
      border-radius: 8px;
    }
    
    .sidebar {
      background: #e8e8e8;
      padding: 1.5rem;
      border-radius: 8px;
    }
    
    /* Footer */
    footer {
      background: #333;
      color: white;
      text-align: center;
      padding: 1rem 0;
      margin-top: 2rem;
    }
    
    /* Tablet styles */
    @media (max-width: 768px) {
      .content-grid {
        grid-template-columns: 1fr;
      }
      
      nav ul {
        flex-direction: column;
        text-align: center;
      }
      
      nav li {
        margin: 0.5rem 0;
      }
      
      .container {
        padding: 0 15px;
      }
    }
    
    /* Mobile styles */
    @media (max-width: 480px) {
      .main-content,
      .sidebar {
        padding: 1rem;
      }
      
      h1 {
        font-size: 1.5rem;
      }
      
      .container {
        padding: 0 10px;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <div class="container">
    <div class="content-grid">
      <main class="main-content">
        <h1>Welcome to Our Responsive Website</h1>
        <p>This website adapts to different screen sizes using responsive design principles.</p>
        <p>Try resizing your browser window to see how the layout changes!</p>
      </main>
      
      <aside class="sidebar">
        <h2>Sidebar</h2>
        <p>This sidebar moves below the main content on smaller screens.</p>
      </aside>
    </div>
  </div>
  
  <footer>
    <div class="container">
      <p>&copy; 2024 Responsive Website. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`}
        />

        {/* BEST PRACTICES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.8: </span>
          Responsive Design Best Practices:
        </h3>
        <p className="max-w-2xl -mb-4 text-xl font-light text-foreground text-neutral-100">
          Follow these guidelines for effective responsive design:
        </p>
        <ul className="max-w-2xl text-lg font-light text-foreground text-neutral-100 list-disc pl-6 space-y-2">
          <li>
            Start with mobile-first design (design for small screens first)
          </li>
          <li>Use flexible layouts (Grid, Flexbox, percentages)</li>
          <li>Test on real devices, not just browser resize</li>
          <li>Optimize images for different screen sizes</li>
          <li>Keep navigation simple on mobile</li>
          <li>Ensure touch targets are at least 44px</li>
          <li>Use readable font sizes (minimum 16px on mobile)</li>
        </ul>

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.9: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Practice creating responsive layouts in the editor. Try making a
          simple card grid that shows 4 cards per row on desktop, 2 per row on
          tablet, and 1 per row on mobile. Experiment with different media
          queries and watch how your design adapts!
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

        <NavButtons previous="/lessons/css/8" next="/lessons" />
      </div>
    </>
  );
};
