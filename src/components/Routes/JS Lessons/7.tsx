import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS7 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 7);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 7);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 7:</span> DOM
        Manipulation Basics
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT IS THE DOM */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">7.1:</span> Understanding the DOM
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The DOM (Document Object Model) is a programming interface for HTML
          documents. It represents the page as a tree of objects that JavaScript
          can manipulate. Every HTML element becomes an object that you can
          access and modify.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Think of the DOM as a bridge between your HTML and JavaScript. It
          allows you to change content, modify styles, add or remove elements,
          and respond to user interactions.
        </p>

        <CodeElement
          codeString={`<!-- HTML Structure -->
<div id="container">
    <h1 class="title">Welcome</h1>
    <p class="content">This is a paragraph</p>
    <button id="myButton">Click me</button>
</div>

<!-- JavaScript can access and modify these elements -->
<script>
    // Access elements by ID
    const button = document.getElementById('myButton');
    
    // Access elements by class
    const title = document.querySelector('.title');
    
    // Modify content
    title.textContent = 'Hello from JavaScript!';
</script>`}
          styling=""
          paragraphString="The DOM allows JavaScript to find and modify HTML elements using various methods."
        />

        {/* SELECTING ELEMENTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">7.2:</span> Selecting DOM Elements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Before you can manipulate elements, you need to select them.
          JavaScript provides several methods to find elements in the DOM:
        </p>

        <CodeElement
          codeString={`// Select by ID (returns single element)
const header = document.getElementById('header');

// Select by class name (returns NodeList)
const buttons = document.getElementsByClassName('btn');

// Select by tag name (returns NodeList)
const paragraphs = document.getElementsByTagName('p');

// Modern selectors (like CSS selectors)
const firstButton = document.querySelector('.btn'); // First match
const allButtons = document.querySelectorAll('.btn'); // All matches

// Complex selectors
const specificElement = document.querySelector('#container .title');
const nestedElements = document.querySelectorAll('div > p');`}
          styling=""
          paragraphString="querySelector and querySelectorAll are the most flexible methods, accepting any CSS selector."
        />

        {/* MODIFYING CONTENT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">7.3:</span> Modifying Element Content
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Once you've selected an element, you can change its content in several
          ways:
        </p>

        <CodeElement
          codeString={`const element = document.getElementById('demo');

// Change text content (safer, prevents XSS)
element.textContent = 'New text content';

// Change HTML content (can include HTML tags)
element.innerHTML = '<strong>Bold text</strong>';

// Change specific attributes
element.setAttribute('class', 'new-class');
element.id = 'new-id';

// Modify CSS styles
element.style.color = 'blue';
element.style.fontSize = '20px';
element.style.display = 'none'; // Hide element

// Add/remove CSS classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');`}
          styling=""
          paragraphString="Always use textContent for plain text and innerHTML only when you need to add HTML tags."
        />

        {/* CREATING AND ADDING ELEMENTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">7.4:</span> Creating and Adding Elements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          JavaScript can create new HTML elements and add them to the page
          dynamically:
        </p>

        <CodeElement
          codeString={`// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new element!';
newDiv.className = 'dynamic-content';

// Create a new button
const newButton = document.createElement('button');
newButton.textContent = 'New Button';
newButton.onclick = function() {
    alert('Dynamic button clicked!');
};

// Add elements to the page
const container = document.getElementById('container');
container.appendChild(newDiv);        // Add at the end
container.prepend(newButton);         // Add at the beginning

// Insert at specific position
const firstChild = container.firstElementChild;
container.insertBefore(newDiv, firstChild);

// Remove elements
// container.removeChild(newDiv);     // Old way
newDiv.remove();                      // Modern way`}
          styling=""
          paragraphString="createElement() makes new elements, and appendChild() or prepend() adds them to the page."
        />

        {/* PRACTICAL EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">7.5:</span> Practical DOM Example
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Let's create a practical example that demonstrates DOM manipulation.
          This example creates a simple to-do list:
        </p>

        <CodeElement
          codeString={`<!DOCTYPE html>
<html>
<head>
    <title>DOM Manipulation Demo</title>
    <style>
        .container { max-width: 400px; margin: 20px; }
        .todo-item { padding: 10px; margin: 5px 0; background: #f0f0f0; }
        .completed { text-decoration: line-through; background: #d4edda; }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="title">My To-Do List</h1>
        <input type="text" id="todoInput" placeholder="Enter a task...">
        <button onclick="addTodo()">Add Task</button>
        <div id="todoList"></div>
        <p id="counter">Tasks: 0</p>
    </div>

    <script>
        let taskCount = 0;

        function addTodo() {
            const input = document.getElementById('todoInput');
            const todoList = document.getElementById('todoList');
            const counter = document.getElementById('counter');
            
            if (input.value.trim() === '') {
                alert('Please enter a task!');
                return;
            }
            
            // Create new todo item
            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = input.value + 
                ' <button onclick="toggleComplete(this)">Done</button>' +
                ' <button onclick="deleteTask(this)">Delete</button>';
            
            // Add to list
            todoList.appendChild(todoItem);
            
            // Update counter
            taskCount++;
            counter.textContent = 'Tasks: ' + taskCount;
            
            // Clear input
            input.value = '';
        }
        
        function toggleComplete(button) {
            const todoItem = button.parentElement;
            todoItem.classList.toggle('completed');
        }
        
        function deleteTask(button) {
            const todoItem = button.parentElement;
            todoItem.remove();
            taskCount--;
            document.getElementById('counter').textContent = 'Tasks: ' + taskCount;
        }
    </script>
</body>
</html>`}
          styling=""
          paragraphString="This example shows element creation, content modification, event handling, and dynamic updates."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Experiment with the DOM manipulation code in the editor:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>Try adding tasks to the to-do list</li>
          <li>Mark tasks as completed and delete them</li>
          <li>Modify the CSS styles using JavaScript</li>
          <li>Add a "Clear All" button that removes all tasks</li>
          <li>Try changing the page title using document.title</li>
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

        <NavButtons previous="/lessons/js/6" next="/lessons/js/8" />
      </div>
    </>
  );
};
