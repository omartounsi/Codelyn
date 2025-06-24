import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS4 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 4);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 4);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 4:</span> Arrays
        and Objects
      </h1>
      <div className="flex flex-col gap-7">
        {/* ARRAYS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">4.1:</span> Introduction to Arrays
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Arrays are ordered lists that can store multiple values. Think of them
          as containers that hold a collection of items, like a shopping list or
          a list of friends.
        </p>

        <CodeElement
          codeString={`// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, "more text"];

// Accessing array elements (zero-indexed)
console.log(fruits[0]);  // "apple" (first element)
console.log(fruits[1]);  // "banana" (second element)
console.log(fruits[2]);  // "orange" (third element)

// Array properties and methods
console.log(fruits.length);    // 3 (number of elements)
console.log(fruits.indexOf("banana")); // 1 (position of "banana")`}
          styling=""
          paragraphString="Arrays use square brackets and are zero-indexed (first element is at position 0)."
        />

        {/* ARRAY METHODS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">4.2:</span> Array Methods
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Arrays have many built-in methods for adding, removing, and
          manipulating elements:
        </p>

        <CodeElement
          codeString={`let colors = ["red", "green", "blue"];

// Adding elements
colors.push("yellow");        // Add to end: ["red", "green", "blue", "yellow"]
colors.unshift("purple");     // Add to beginning: ["purple", "red", "green", "blue", "yellow"]

// Removing elements
let lastColor = colors.pop();      // Remove from end: "yellow"
let firstColor = colors.shift();   // Remove from beginning: "purple"

// Other useful methods
let colorString = colors.join(", ");  // "red, green, blue"
let hasBlue = colors.includes("blue"); // true
let sliced = colors.slice(1, 3);      // ["green", "blue"] (copy portion)

// Looping through arrays
colors.forEach(function(color, index) {
    console.log(index + ": " + color);
});`}
          styling=""
          paragraphString="Array methods make it easy to manipulate lists of data dynamically."
        />

        {/* OBJECTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">4.3:</span> Introduction to Objects
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Objects store data as key-value pairs. They're perfect for
          representing real-world entities with multiple properties.
        </p>

        <CodeElement
          codeString={`// Creating an object
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isEmployed: true
};

// Accessing object properties
console.log(person.name);        // "John Doe" (dot notation)
console.log(person["age"]);      // 30 (bracket notation)

// Adding new properties
person.email = "john@email.com";
person["phone"] = "555-1234";

// Modifying existing properties
person.age = 31;
person.city = "Los Angeles";

// Checking if property exists
console.log("name" in person);   // true
console.log("salary" in person); // false`}
          styling=""
          paragraphString="Objects use curly braces and store data as property: value pairs."
        />

        {/* OBJECT METHODS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">4.4:</span> Object Methods
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Objects can also contain functions, which are called methods when
          they're part of an object:
        </p>

        <CodeElement
          codeString={`let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    
    // Object methods
    start: function() {
        return "The " + this.brand + " is starting!";
    },
    
    getInfo: function() {
        return this.year + " " + this.brand + " " + this.model;
    },
    
    changeColor: function(newColor) {
        this.color = newColor;
        return "Color changed to " + newColor;
    }
};

// Using object methods
console.log(car.start());           // "The Toyota is starting!"
console.log(car.getInfo());         // "2022 Toyota Camry"
console.log(car.changeColor("red")); // "Color changed to red"
console.log(car.color);             // "red"`}
          styling=""
          paragraphString="The 'this' keyword refers to the object that contains the method."
        />

        {/* ARRAYS OF OBJECTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">4.5:</span> Arrays of Objects
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You can combine arrays and objects to create more complex data
          structures:
        </p>

        <CodeElement
          codeString={`// Array of objects
let students = [
    { name: "Alice", grade: 95, subject: "Math" },
    { name: "Bob", grade: 87, subject: "Science" },
    { name: "Carol", grade: 92, subject: "English" }
];

// Accessing data
console.log(students[0].name);    // "Alice"
console.log(students[1].grade);   // 87

// Looping through array of objects
students.forEach(function(student) {
    console.log(student.name + " scored " + student.grade + " in " + student.subject);
});

// Finding a specific student
let foundStudent = students.find(function(student) {
    return student.name === "Bob";
});
console.log(foundStudent); // { name: "Bob", grade: 87, subject: "Science" }

// Adding a new student
students.push({ name: "David", grade: 89, subject: "History" });`}
          styling=""
          paragraphString="Arrays of objects are commonly used to represent lists of similar items with multiple properties."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Practice working with arrays and objects:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>Create an array of your favorite movies and use array methods</li>
          <li>
            Make an object representing yourself with properties like name,
            hobbies, and age
          </li>
          <li>
            Add methods to your object that return information about yourself
          </li>
          <li>
            Create an array of book objects with title, author, and pages
            properties
          </li>
          <li>Use forEach to display information about each book</li>
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

        <NavButtons previous="/lessons/js/3" next="/lessons/js/5" />
      </div>
    </>
  );
};
