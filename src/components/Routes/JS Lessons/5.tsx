import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS5 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 5);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 5);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 5:</span> Control
        Flow and Conditionals
      </h1>
      <div className="flex flex-col gap-7">
        {/* IF STATEMENTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">5.1:</span> If Statements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Conditional statements allow your program to make decisions and
          execute different code based on different conditions.
        </p>

        <CodeElement
          codeString={`let age = 18;

// Basic if statement
if (age >= 18) {
    console.log("You are an adult");
}

// If-else statement
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote yet");
}

// If-else if-else chain
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}`}
          styling=""
          paragraphString="Conditional statements use true/false conditions to control program flow."
        />

        {/* COMPARISON OPERATORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">5.2:</span> Comparison Operators
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Comparison operators are used to compare values and return true or
          false:
        </p>

        <CodeElement
          codeString={`let a = 10;
let b = "10";

// Equality operators
console.log(a == b);   // true (loose equality - converts types)
console.log(a === b);  // false (strict equality - no type conversion)
console.log(a != b);   // false (not equal, loose)
console.log(a !== b);  // true (not equal, strict)

// Comparison operators
console.log(a > 5);    // true
console.log(a < 20);   // true
console.log(a >= 10);  // true
console.log(a <= 9);   // false

// String comparison
let name1 = "Alice";
let name2 = "Bob";
console.log(name1 < name2);  // true (alphabetical order)`}
          styling=""
          paragraphString="Use === and !== for strict comparison to avoid unexpected type conversions."
        />

        {/* LOGICAL OPERATORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">5.3:</span> Logical Operators
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Logical operators combine multiple conditions:
        </p>

        <CodeElement
          codeString={`let age = 25;
let hasLicense = true;
let hasInsurance = false;

// AND operator (&&) - both conditions must be true
if (age >= 18 && hasLicense) {
    console.log("Can drive");
}

// OR operator (||) - at least one condition must be true
if (hasLicense || age >= 21) {
    console.log("Can rent a car in some places");
}

// NOT operator (!) - inverts the boolean value
if (!hasInsurance) {
    console.log("Need to get insurance");
}

// Complex conditions
if ((age >= 18 && hasLicense) && (hasInsurance || age >= 25)) {
    console.log("Fully qualified driver");
} else {
    console.log("Some requirements not met");
}`}
          styling=""
          paragraphString="Logical operators help create complex decision-making logic in your programs."
        />

        {/* SWITCH STATEMENTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">5.4:</span> Switch Statements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Switch statements provide a cleaner way to handle multiple conditions
          based on a single value:
        </p>

        <CodeElement
          codeString={`let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
    case 7:
        dayName = "Weekend";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // "Wednesday"

// Switch with strings
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Satisfactory");
        break;
    default:
        console.log("Keep trying!");
}`}
          styling=""
          paragraphString="Don't forget the 'break' statements to prevent fall-through behavior."
        />

        {/* TERNARY OPERATOR */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">5.5:</span> Ternary Operator
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The ternary operator provides a shorthand way to write simple if-else
          statements:
        </p>

        <CodeElement
          codeString={`// Ternary operator syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;

// Traditional if-else
let status;
if (age >= 18) {
    status = "adult";
} else {
    status = "minor";
}

// Ternary operator (shorter)
let status2 = age >= 18 ? "adult" : "minor";

// More examples
let score = 85;
let result = score >= 60 ? "Pass" : "Fail";

let temperature = 75;
let weather = temperature > 80 ? "Hot" : temperature > 60 ? "Warm" : "Cold";

// Using in function calls
function checkAccess(userAge) {
    return userAge >= 21 ? "Access granted" : "Access denied";
}

console.log(checkAccess(25)); // "Access granted"
console.log(checkAccess(18)); // "Access denied"`}
          styling=""
          paragraphString="Ternary operators are great for simple conditions but can become hard to read when nested."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Practice with conditional statements:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>
            Create a program that checks if a number is positive, negative, or
            zero
          </li>
          <li>Write a function that determines if a year is a leap year</li>
          <li>Make a grade calculator that converts scores to letter grades</li>
          <li>
            Create a simple login system that checks username and password
          </li>
          <li>
            Use the ternary operator to determine if someone can vote based on
            age
          </li>
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

        <NavButtons previous="/lessons/js/4" next="/lessons/js/6" />
      </div>
    </>
  );
};
