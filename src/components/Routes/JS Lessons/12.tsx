import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS12 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 12);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 12);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 12:</span>{" "}
        Debugging and Error Handling
      </h1>
      <div className="flex flex-col gap-7">
        {/* DEBUGGING BASICS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.1:</span> JavaScript Debugging
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Debugging is the process of finding and fixing errors in your code.
          JavaScript provides several tools and techniques to help you identify
          and resolve issues in your programs.
        </p>

        <CodeElement
          codeString={`// Console Methods for Debugging
console.log('Basic logging');
console.warn('Warning message');
console.error('Error message');
console.info('Information');

// Console.table for objects and arrays
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
console.table(users);

// Console.group for organized logging
console.group('User Processing');
console.log('Starting user validation');
console.log('Checking permissions');
console.groupEnd();

// Console.time for performance monitoring
console.time('API Call');
// Some code here
console.timeEnd('API Call');`}
        />

        {/* ERROR TYPES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.2:</span> Common Error Types
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Understanding different types of errors helps you identify and fix
          problems more efficiently. JavaScript has several built-in error
          types.
        </p>

        <CodeElement
          codeString={`// Syntax Error - Code structure is wrong
// console.log('Hello world';  // Missing closing parenthesis

// Reference Error - Variable doesn't exist
// console.log(undefinedVariable);

// Type Error - Wrong data type operation
const number = 42;
// number.toUpperCase();  // Numbers don't have toUpperCase method

// Range Error - Value outside valid range
const arr = new Array(-1);  // Negative array length

// URI Error - Invalid URI encoding
// decodeURIComponent('%');  // Invalid URI component

// Creating custom errors
function validateAge(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative');
    }
    if (age > 150) {
        throw new Error('Age seems unrealistic');
    }
    return true;
}`}
        />

        {/* TRY-CATCH */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.3:</span> Error Handling with
          Try-Catch
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try-catch blocks allow you to handle errors gracefully instead of
          letting them crash your program. This is essential for building robust
          applications.
        </p>

        <CodeElement
          codeString={`// Basic try-catch structure
try {
    // Code that might throw an error
    const result = riskyOperation();
    console.log('Success:', result);
} catch (error) {
    // Handle the error
    console.error('Something went wrong:', error.message);
}

// Try-catch-finally
try {
    const data = JSON.parse('{"name": "Alice"}');
    console.log(data.name);
} catch (error) {
    console.error('JSON parsing failed:', error.message);
} finally {
    // This always runs
    console.log('Cleanup completed');
}

// Catching specific error types
function processUserInput(input) {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('Input must be a string');
        }
        if (input.length === 0) {
            throw new Error('Input cannot be empty');
        }
        return input.toUpperCase();
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Type error:', error.message);
        } else {
            console.error('General error:', error.message);
        }
        return null;
    }
}`}
        />

        {/* DEBUGGING TOOLS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.4:</span> Browser Developer Tools
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Modern browsers provide powerful debugging tools. The browser's
          Developer Tools are your best friend when debugging JavaScript code.
        </p>

        <CodeElement
          codeString={`// Using debugger statement
function calculateTotal(items) {
    let total = 0;
    
    for (let item of items) {
        debugger;  // Execution will pause here in dev tools
        total += item.price * item.quantity;
    }
    
    return total;
}

// Conditional debugging
function processData(data) {
    if (data.length > 100) {
        debugger;  // Only pause for large datasets
    }
    
    return data.map(item => item.processed = true);
}

// Using breakpoints effectively
function complexCalculation(x, y) {
    const step1 = x * 2;       // Set breakpoint here
    const step2 = y + step1;   // And here
    const result = step2 / 3;  // And here
    return result;
}`}
        />

        {/* ASYNC ERROR HANDLING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.5:</span> Async Error Handling
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Handling errors in asynchronous code requires special consideration.
          Promises and async/await provide different approaches to error
          handling.
        </p>

        <CodeElement
          codeString={`// Promise error handling with .catch()
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error.message));

// Async/await error handling
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Failed to fetch user data:', error.message);
        // Return default or cached data
        return { id: userId, name: 'Unknown User' };
    }
}

// Multiple async operations with error handling
async function processMultipleRequests() {
    const requests = [
        fetch('/api/data1'),
        fetch('/api/data2'),
        fetch('/api/data3')
    ];
    
    try {
        const responses = await Promise.allSettled(requests);
        
        responses.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(\`Request \${index + 1} succeeded\`);
            } else {
                console.error(\`Request \${index + 1} failed:\`, result.reason);
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error.message);
    }
}`}
        />

        {/* BEST PRACTICES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.6:</span> Debugging Best Practices
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Following debugging best practices will make you more efficient at
          finding and fixing bugs, and help prevent errors in the first place.
        </p>

        <CodeElement
          codeString={`// 1. Use meaningful variable names
// Bad
const d = new Date();
const u = users.filter(x => x.a > 18);

// Good
const currentDate = new Date();
const adultUsers = users.filter(user => user.age > 18);

// 2. Add helpful comments
function calculateDiscount(price, customerType) {
    // Apply 10% discount for premium customers
    if (customerType === 'premium') {
        return price * 0.9;
    }
    
    // Regular customers get 5% discount on orders over $100
    if (price > 100) {
        return price * 0.95;
    }
    
    return price;
}

// 3. Validate inputs early
function divide(a, b) {
    // Input validation
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    
    return a / b;
}

// 4. Use proper error messages
function findUser(id) {
    const user = database.find(u => u.id === id);
    
    if (!user) {
        throw new Error(\`User with ID \${id} not found in database\`);
    }
    
    return user;
}

// 5. Log important state changes
function updateUserStatus(userId, newStatus) {
    const oldStatus = getCurrentStatus(userId);
    
    console.log(\`Changing user \${userId} status from \${oldStatus} to \${newStatus}\`);
    
    try {
        setUserStatus(userId, newStatus);
        console.log(\`Successfully updated user \${userId} status\`);
    } catch (error) {
        console.error(\`Failed to update user \${userId} status:\`, error.message);
        throw error;
    }
}`}
        />

        {/* PRACTICAL EXERCISE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.7:</span> Practical Debugging Exercise
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try this exercise in the editor: The following code has several bugs.
          Use the debugging techniques you've learned to find and fix them!
        </p>

        <CodeElement
          codeString={`// DEBUGGING EXERCISE: Find and fix the bugs!
// This code is supposed to calculate the average grade
// and display student information

function processStudents(students) {
    console.log('Processing students...');
    
    try {
        const results = [];
        
        for (let student of students) {
            // Calculate average grade
            const total = student.grades.reduce((sum, grade) => {
                return sum + grade;
            }, 0);
            
            const average = total / student.grades.length;
            
            // Create result object
            const result = {
                name: student.name,
                average: Math.round(average * 100) / 100,
                status: average >= 70 ? 'Passing' : 'Needs Improvement'
            };
            
            results.push(result);
            console.log(\`Processed: \${student.name}\`);
        }
        
        return results;
        
    } catch (error) {
        console.error('Error processing students:', error.message);
        return [];
    }
}

// Test the function
const testStudents = [
    { name: 'Alice', grades: [85, 92, 78, 96] },
    { name: 'Bob', grades: [76, 84, 69, 73] },
    { name: 'Charlie', grades: [] }  // This might cause issues!
];

const results = processStudents(testStudents);
console.table(results);`}
        />

        {/* SUMMARY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">12.8:</span> Chapter Summary
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Congratulations! You've completed the JavaScript course. You've
          learned debugging techniques, error handling, and best practices that
          will help you write better, more reliable code. These skills are
          essential for any JavaScript developer.
        </p>

        <div className="p-6 border rounded-lg bg-yellow-500/10 border-yellow-500/30">
          <h4 className="mb-2 text-lg font-semibold text-yellow-400">
            🎉 Course Complete!
          </h4>
          <p className="text-neutral-300">
            You've mastered the fundamentals of JavaScript! You now know:
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside text-neutral-300">
            <li>JavaScript syntax and basic programming concepts</li>
            <li>Variables, functions, and data structures</li>
            <li>DOM manipulation and event handling</li>
            <li>Modern JavaScript features and best practices</li>
            <li>Debugging and error handling techniques</li>
          </ul>
          <p className="mt-3 text-neutral-300">
            Continue practicing and building projects to strengthen your skills!
          </p>
        </div>

        {/* Progress Tracking */}
        <div className="flex items-center justify-between p-6 mt-8 border rounded-lg bg-neutral-800/50 border-neutral-700">
          <div>
            <h4 className="mb-1 text-lg font-semibold text-neutral-200">
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

        <NavButtons previous="/lessons/js/11" next={null} />
      </div>
    </>
  );
};
