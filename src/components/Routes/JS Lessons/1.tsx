import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS1 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 1);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 1);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 1:</span>{" "}
        JavaScript Basics and Syntax
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT IS JAVASCRIPT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.1:</span> What is JavaScript?
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          JavaScript is a programming language that makes websites interactive
          and dynamic. While HTML provides structure and CSS provides styling,
          JavaScript adds behavior and functionality to web pages.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          JavaScript can respond to user actions, manipulate content, validate
          forms, create animations, and communicate with servers. It's the
          programming language of the web!
        </p>

        {/* JAVASCRIPT SYNTAX */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.2:</span> JavaScript Syntax Basics
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          JavaScript syntax is the set of rules that define how JavaScript
          programs are written. Let's look at the basic elements:
        </p>

        <CodeElement
          codeString={`// This is a single-line comment

/* This is a 
   multi-line comment */

// Statements end with semicolons (optional but recommended)
console.log("Hello, World!");

// Variables store data
let message = "Welcome to JavaScript";

// Functions perform actions
function sayHello() {
    alert("Hello!");
}`}
          styling=""
          paragraphString="Comments help explain your code, statements perform actions, and semicolons mark the end of statements."
        />

        {/* WHERE TO PUT JAVASCRIPT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.3:</span> Where to Put JavaScript
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          JavaScript can be included in HTML in several ways:
        </p>

        <CodeElement
          codeString={`<!-- Internal JavaScript: Inside <script> tags -->
<script>
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello JavaScript!";
    }
</script>

<!-- Inline JavaScript: In HTML attributes -->
<button onclick="myFunction()">Click me</button>

<!-- External JavaScript: In separate .js files -->
<script src="script.js"></script>`}
          styling=""
          paragraphString="Internal JavaScript goes in <script> tags, inline JavaScript goes in HTML attributes, and external JavaScript is in separate files."
        />

        {/* CONSOLE AND DEBUGGING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.4:</span> Console and Debugging
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The browser console is your best friend for debugging JavaScript. You
          can access it by pressing F12 or right-clicking and selecting
          "Inspect".
        </p>

        <CodeElement
          codeString={`// console.log() displays messages in the browser console
console.log("This appears in the console");

// You can log variables, objects, and more
let name = "JavaScript";
console.log("Language:", name);

// console.error() shows error messages
console.error("This is an error message");

// console.warn() shows warning messages
console.warn("This is a warning message");`}
          styling=""
          paragraphString="Use console.log() to debug your code and see what's happening behind the scenes."
        />

        {/* YOUR FIRST JAVASCRIPT PROGRAM */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">1.5:</span> Your First JavaScript Program
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Let's create a simple interactive program. In the editor, you can see
          a complete HTML page with JavaScript that responds to button clicks.
        </p>

        <CodeElement
          codeString={`<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Welcome to JavaScript!</h1>
    <p id="demo">This text will change</p>
    <button onclick="changeText()">Click me!</button>
    
    <script>
        function changeText() {
            document.getElementById("demo").innerHTML = "Text changed with JavaScript!";
            console.log("Button was clicked!");
        }
    </script>
</body>
</html>`}
          styling=""
          paragraphString="This example shows a complete HTML page with JavaScript. The function changeText() runs when the button is clicked."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          In the editor on the left, try modifying the JavaScript:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>Change the text that appears when you click the button</li>
          <li>Add a second button that shows an alert message</li>
          <li>
            Open the browser console (F12) and look for the console.log message
          </li>
          <li>Try adding more console.log statements to see what happens</li>
        </ul>

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
                : "bg-yellow-500 hover:bg-yellow-600 text-white hover:scale-105"
            }`}
          >
            <IoCheckmarkCircle className="w-5 h-5" />
            {lessonCompleted ? "Completed" : "Mark Complete"}
          </button>
        </div>

        <NavButtons previous="/lessons" next="/lessons/js/2" />
      </div>
    </>
  );
};
