import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const HTML7 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("html", 7);

  const handleMarkComplete = () => {
    markLessonComplete("html", 7);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 7:</span>{" "}
        Divisions and Spans
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.1: </span>
          Introduction to Container Elements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML provides two incredibly versatile elements for organizing
          content: div and span. These are like containers that help you group
          and style different parts of your webpage.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Think of div as a box that takes up the full width of its container,
          while span is like a small wrapper that only takes up as much space as
          its content needs.
        </p>

        {/* DIV ELEMENT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.2: </span>
          The Division Element
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The div element is a block-level container that's perfect for creating
          sections of your webpage. It automatically starts on a new line and
          takes up the full width available.
        </p>
        <CodeElement
          codeString={`<div>
  <h2>Article Title</h2>
  <p>This is the first paragraph.</p>
  <p>This is the second paragraph.</p>
</div>`}
          styling="whitespace-pre"
          paragraphString="The <div>...</div> creates a block-level container that groups related content together."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try adding this div to the editor and notice how it groups the heading
          and paragraphs into one section!
        </p>

        {/* SPAN ELEMENT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.3: </span>
          The Span Element
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The span element is an inline container that's perfect for styling
          specific words or phrases within a larger text block. It doesn't break
          the flow of text.
        </p>
        <CodeElement
          codeString={`<p>This is a paragraph with <span>highlighted text</span> in the middle.</p>`}
          paragraphString="The <span>...</span> creates an inline container that doesn't disrupt the text flow."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Span elements are invisible by default, but they become powerful when
          combined with CSS to style specific parts of your text.
        </p>

        {/* CLASSES AND IDS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.4: </span>
          Classes and IDs
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          To make div and span elements truly useful, we use class and id
          attributes. These allow us to identify and style specific elements.
        </p>
        <div className="flex flex-col gap-6">
          <CodeElement
            codeString={`<div class="container">
  <h2>Main Content</h2>
  <p>Some text here.</p>
</div>`}
            styling="whitespace-pre"
            paragraphString="Classes can be reused on multiple elements."
          />
          <CodeElement
            codeString={`<div id="header">
  <h1>Page Title</h1>
</div>`}
            styling="whitespace-pre"
            paragraphString="IDs should be unique - only one element per page should have the same ID."
          />
        </div>

        {/* NESTED STRUCTURE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.5: </span>
          Nested Structures
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You can nest divs inside other divs to create complex layouts. This is
          how modern websites organize their content into headers, sidebars,
          main content areas, and footers.
        </p>
        <CodeElement
          codeString={`<div class="page">
  <div class="header">
    <h1>Website Title</h1>
  </div>
  <div class="content">
    <p>Main content goes here.</p>
  </div>
  <div class="footer">
    <p>Footer information</p>
  </div>
</div>`}
          styling="whitespace-pre"
          paragraphString="Nested divs create a hierarchical structure that's perfect for webpage layouts."
        />

        {/* PRACTICAL EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">7.6: </span>
          Practical Example
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Here's a practical example combining both div and span elements to
          create a structured article with highlighted text.
        </p>
        <CodeElement
          codeString={`<div class="article">
  <h2>Learning HTML</h2>
  <p>HTML is <span class="important">essential</span> for web development.</p>
  <p>With <span class="highlight">practice</span>, you'll master it quickly!</p>
</div>`}
          styling="whitespace-pre"
          paragraphString="This example shows how div and span work together to create structured, styleable content."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try this example in the editor - while you won't see the styling yet,
          the structure is there and ready for CSS!
        </p>

        {/* Progress Tracking */}
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

        {/* NAVIGATION */}
        <NavButtons previous="/lessons/html/6" next="/lessons/html/8" />
      </div>
    </>
  );
};
