import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS2 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 2);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 2);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 2:</span>{" "}
        Variables and Data Types
      </h1>
      <div className="flex flex-col gap-7">
        {/* VARIABLES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.1:</span> What are Variables?
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Variables are containers that store data values. Think of them as
          labeled boxes where you can put different types of information and
          refer to them later in your code.
        </p>

        <CodeElement
          codeString={`// Declaring variables with let (recommended)
let userName = "Alice";
let userAge = 25;
let isStudent = true;

// Declaring variables with const (for values that won't change)
const PI = 3.14159;
const WEBSITE_NAME = "My Awesome Site";

// Declaring variables with var (older way, avoid when possible)
var oldVariable = "I'm old school";`}
          styling=""
          paragraphString="Use 'let' for variables that might change, 'const' for constants, and avoid 'var' in modern JavaScript."
        />

        {/* DATA TYPES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.2:</span> JavaScript Data Types
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          JavaScript has several data types to represent different kinds of
          information:
        </p>

        <CodeElement
          codeString={`// String - Text data (use quotes)
let message = "Hello, World!";
let name = 'JavaScript';
let template = \`Welcome to \${name}!\`; // Template literal

// Number - Numeric data (integers and decimals)
let age = 25;
let price = 19.99;
let temperature = -5;

// Boolean - True or false values
let isOnline = true;
let isComplete = false;

// Array - List of values
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// Object - Collection of key-value pairs
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Null and Undefined
let emptyValue = null;
let notDefined; // This is undefined`}
          styling=""
          paragraphString="JavaScript is dynamically typed - you don't need to specify the data type when creating variables."
        />

        {/* VARIABLE NAMING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.3:</span> Variable Naming Rules
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          JavaScript has specific rules for naming variables:
        </p>

        <CodeElement
          codeString={`// Valid variable names
let userName = "Alice";
let user_name = "Bob";
let userName2 = "Charlie";
let $element = "Dollar sign is allowed";
let _privateVar = "Underscore is allowed";

// Invalid variable names (these will cause errors)
// let 2names = "Can't start with number";
// let user-name = "Hyphens not allowed";
// let user name = "Spaces not allowed";
// let let = "Reserved keywords not allowed";

// Good naming conventions (camelCase)
let firstName = "John";
let lastName = "Doe";
let numberOfStudents = 25;
let isUserLoggedIn = true;`}
          styling=""
          paragraphString="Use descriptive names in camelCase. Variables must start with a letter, underscore, or dollar sign."
        />

        {/* TYPEOF OPERATOR */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.4:</span> Checking Data Types
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You can use the `typeof` operator to check what type of data a
          variable contains:
        </p>

        <CodeElement
          codeString={`let name = "JavaScript";
let age = 25;
let isAwesome = true;
let colors = ["red", "green", "blue"];
let person = {name: "John", age: 30};

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isAwesome); // "boolean"
console.log(typeof colors);    // "object" (arrays are objects)
console.log(typeof person);    // "object"

// Special cases
console.log(typeof null);      // "object" (this is a JavaScript quirk)
console.log(typeof undefined); // "undefined"`}
          styling=""
          paragraphString="The typeof operator returns a string indicating the type of the variable."
        />

        {/* STRING METHODS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">2.5:</span> Working with Strings
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Strings have many useful methods for manipulating text:
        </p>

        <CodeElement
          codeString={`let message = "Hello, JavaScript!";

// String properties and methods
console.log(message.length);           // 18 (number of characters)
console.log(message.toUpperCase());    // "HELLO, JAVASCRIPT!"
console.log(message.toLowerCase());    // "hello, javascript!"
console.log(message.charAt(0));        // "H" (first character)
console.log(message.indexOf("Java"));  // 7 (position of "Java")

// String concatenation (joining strings)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Template literals (modern way)
let greeting = \`Hello, \${firstName} \${lastName}!\`;
console.log(greeting); // "Hello, John Doe!"`}
          styling=""
          paragraphString="Strings are immutable - methods return new strings rather than modifying the original."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          In the editor, experiment with variables and data types:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>Create variables with your name, age, and favorite color</li>
          <li>Use template literals to create a personalized message</li>
          <li>Create an array of your hobbies</li>
          <li>Use console.log() to display the typeof different variables</li>
          <li>Try the string methods on your name variable</li>
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

        <NavButtons previous="/lessons/js/1" next="/lessons/js/3" />
      </div>
    </>
  );
};
