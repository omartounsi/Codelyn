import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS3 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 3);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 3);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 3:</span>{" "}
        Functions and Scope
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT ARE FUNCTIONS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">3.1:</span> What are Functions?
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Functions are reusable blocks of code that perform specific tasks.
          They help organize your code, avoid repetition, and make your programs
          more maintainable.
        </p>

        <CodeElement
          codeString={`// Function declaration
function greetUser() {
    console.log("Hello, welcome to our website!");
}

// Call (invoke) the function
greetUser(); // Output: "Hello, welcome to our website!"

// Function with parameters
function greetPersonally(name) {
    console.log("Hello, " + name + "!");
}

greetPersonally("Alice"); // Output: "Hello, Alice!"
greetPersonally("Bob");   // Output: "Hello, Bob!"`}
          styling=""
          paragraphString="Functions can be called multiple times and can accept parameters to make them more flexible."
        />

        {/* FUNCTION PARAMETERS AND RETURN VALUES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">3.2:</span> Parameters and Return Values
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Functions can accept input through parameters and send output back
          using the return statement:
        </p>

        <CodeElement
          codeString={`// Function with multiple parameters
function addNumbers(a, b) {
    let sum = a + b;
    return sum; // Return the result
}

// Using the returned value
let result = addNumbers(5, 3);
console.log(result); // Output: 8

// Function with default parameters
function greetWithTitle(name, title = "Friend") {
    return "Hello, " + title + " " + name + "!";
}

console.log(greetWithTitle("Alice"));           // "Hello, Friend Alice!"
console.log(greetWithTitle("Bob", "Dr."));      // "Hello, Dr. Bob!"

// Function that calculates and returns
function calculateArea(length, width) {
    return length * width;
}

let roomArea = calculateArea(10, 12);
console.log("Room area: " + roomArea + " sq ft");`}
          styling=""
          paragraphString="The return statement sends a value back to where the function was called."
        />

        {/* FUNCTION EXPRESSIONS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">3.3:</span> Function Expressions and
          Arrow Functions
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          There are different ways to create functions in JavaScript:
        </p>

        <CodeElement
          codeString={`// Function expression
const sayHello = function(name) {
    return "Hello, " + name + "!";
};

// Arrow function (ES6+)
const sayGoodbye = (name) => {
    return "Goodbye, " + name + "!";
};

// Short arrow function (one line)
const double = (number) => number * 2;

// Arrow function with no parameters
const getCurrentTime = () => new Date().toLocaleTimeString();

// Using the functions
console.log(sayHello("Alice"));      // "Hello, Alice!"
console.log(sayGoodbye("Bob"));      // "Goodbye, Bob!"
console.log(double(5));              // 10
console.log(getCurrentTime());       // Current time`}
          styling=""
          paragraphString="Arrow functions provide a shorter syntax and are commonly used in modern JavaScript."
        />

        {/* SCOPE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">3.4:</span> Variable Scope
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Scope determines where variables can be accessed in your code.
          JavaScript has global scope and function scope:
        </p>

        <CodeElement
          codeString={`// Global scope - accessible everywhere
let globalVariable = "I'm global";

function demonstrateScope() {
    // Function scope - only accessible inside this function
    let localVariable = "I'm local";
    
    console.log(globalVariable);  // ✅ Can access global variable
    console.log(localVariable);   // ✅ Can access local variable
}

demonstrateScope();

console.log(globalVariable);  // ✅ Can access global variable
// console.log(localVariable); // ❌ Error! Can't access local variable

// Block scope with let and const
if (true) {
    let blockVariable = "I'm in a block";
    const anotherBlockVar = "Me too";
    var functionVariable = "I'm function scoped";
}

// console.log(blockVariable);    // ❌ Error! Block scoped
// console.log(anotherBlockVar);  // ❌ Error! Block scoped
console.log(functionVariable);    // ✅ Works! Function scoped`}
          styling=""
          paragraphString="Use let and const for block scope, avoid var for better code organization."
        />

        {/* PRACTICAL EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">3.5:</span> Practical Function Example
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Let's create a practical function that validates user input:
        </p>

        <CodeElement
          codeString={`// Function to validate email
function isValidEmail(email) {
    // Check if email contains @ and .
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

// Function to validate password
function isValidPassword(password) {
    // Password must be at least 6 characters
    return password.length >= 6;
}

// Function to register user
function registerUser(email, password) {
    if (!isValidEmail(email)) {
        return "Invalid email address";
    }
    
    if (!isValidPassword(password)) {
        return "Password must be at least 6 characters";
    }
    
    return "User registered successfully!";
}

// Test the functions
console.log(registerUser("user@email.com", "password123")); // Success
console.log(registerUser("invalid-email", "123"));          // Errors`}
          styling=""
          paragraphString="Breaking complex tasks into smaller functions makes code easier to understand and maintain."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Practice creating and using functions:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>Create a function that calculates the area of a circle</li>
          <li>Write a function that converts Celsius to Fahrenheit</li>
          <li>
            Make a function that takes a name and returns a personalized
            greeting
          </li>
          <li>
            Create an arrow function that checks if a number is even or odd
          </li>
          <li>Experiment with the prompt() function to get user input</li>
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

        <NavButtons previous="/lessons/js/2" next="/lessons/js/4" />
      </div>
    </>
  );
};
