import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS8 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 8);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 8);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 8:</span> Events
        and Event Handling
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT ARE EVENTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">8.1:</span> Understanding Events
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Events are actions that happen in the browser - like clicking a
          button, typing in a text field, moving the mouse, or loading a page.
          JavaScript can "listen" for these events and respond to them, making
          web pages interactive.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Think of events as signals that tell your JavaScript code "something
          just happened!" Your code can then decide what to do in response.
        </p>

        <CodeElement
          codeString={`// Common events include:
// Mouse events: click, mouseover, mouseout, mousemove
// Keyboard events: keydown, keyup, keypress
// Form events: submit, change, input, focus, blur
// Window events: load, resize, scroll
// Touch events: touchstart, touchmove, touchend

// Basic event handling syntax:
element.addEventListener('eventType', function() {
    // Code to run when event happens
});`}
          styling=""
          paragraphString="Events are the foundation of interactive web applications."
        />

        {/* ADDING EVENT LISTENERS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">8.2:</span> Adding Event Listeners
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          There are several ways to handle events in JavaScript. The most
          flexible and recommended method is using addEventListener():
        </p>

        <CodeElement
          codeString={`// Method 1: addEventListener (recommended)
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log('Button was clicked!');
});

// Method 2: HTML onclick attribute
// <button onclick="handleClick()">Click me</button>

// Method 3: Direct property assignment
button.onclick = function() {
    console.log('Button clicked via property');
};

// addEventListener allows multiple listeners for the same event
button.addEventListener('click', function() {
    console.log('First listener');
});
button.addEventListener('click', function() {
    console.log('Second listener'); // Both will run!
});

// Remove event listeners
function handleClick() {
    console.log('Removable listener');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick); // Removes it`}
          styling=""
          paragraphString="addEventListener is preferred because it's more flexible and allows multiple listeners per event."
        />

        {/* EVENT OBJECT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">8.3:</span> The Event Object
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          When an event occurs, JavaScript creates an Event object containing
          information about what happened. This object is passed to your event
          handler function:
        </p>

        <CodeElement
          codeString={`button.addEventListener('click', function(event) {
    console.log('Event type:', event.type); // "click"
    console.log('Target element:', event.target); // The button
    console.log('Mouse position:', event.clientX, event.clientY);
    
    // Prevent default behavior (useful for forms, links)
    event.preventDefault();
    
    // Stop event from bubbling up to parent elements
    event.stopPropagation();
});

// Keyboard events have special properties
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.code);
    console.log('Ctrl key held?', event.ctrlKey);
    console.log('Shift key held?', event.shiftKey);
    
    // Check for specific keys
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
    }
});

// Mouse events have position information
document.addEventListener('mousemove', function(event) {
    console.log('Mouse at:', event.clientX, event.clientY);
});`}
          styling=""
          paragraphString="The event object contains useful information about what happened and methods to control event behavior."
        />

        {/* COMMON EVENT TYPES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">8.4:</span> Common Event Types
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Let's explore the most commonly used events in web development:
        </p>

        <CodeElement
          codeString={`// Mouse Events
const element = document.getElementById('demo');

element.addEventListener('click', () => console.log('Clicked!'));
element.addEventListener('dblclick', () => console.log('Double clicked!'));
element.addEventListener('mouseover', () => console.log('Mouse entered'));
element.addEventListener('mouseout', () => console.log('Mouse left'));
element.addEventListener('mousedown', () => console.log('Mouse button down'));
element.addEventListener('mouseup', () => console.log('Mouse button up'));

// Keyboard Events
document.addEventListener('keydown', (e) => {
    console.log('Key down:', e.key);
});
document.addEventListener('keyup', (e) => {
    console.log('Key up:', e.key);
});

// Form Events
const input = document.getElementById('textInput');
const form = document.getElementById('myForm');

input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input lost focus'));
input.addEventListener('input', (e) => console.log('Input value:', e.target.value));
input.addEventListener('change', () => console.log('Input value changed'));

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Form submitted');
});

// Window Events
window.addEventListener('load', () => console.log('Page loaded'));
window.addEventListener('resize', () => console.log('Window resized'));
window.addEventListener('scroll', () => console.log('Page scrolled'));`}
          styling=""
          paragraphString="Different elements support different events. Forms have submit events, inputs have focus/blur, etc."
        />

        {/* EVENT DELEGATION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">8.5:</span> Event Delegation
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Event delegation is a technique where you attach an event listener to
          a parent element to handle events from its children. This is
          especially useful for dynamically created elements:
        </p>

        <CodeElement
          codeString={`// Instead of adding listeners to each button individually:
// document.querySelectorAll('.btn').forEach(btn => {
//     btn.addEventListener('click', handleClick);
// });

// Use event delegation on the parent:
document.getElementById('container').addEventListener('click', function(event) {
    // Check if the clicked element has the 'btn' class
    if (event.target.classList.contains('btn')) {
        console.log('Button clicked:', event.target.textContent);
        
        // Different actions based on button type
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        } else if (event.target.classList.contains('edit-btn')) {
            const text = prompt('Edit text:');
            if (text) event.target.previousElementSibling.textContent = text;
        }
    }
});

// This works even for buttons created later!
function addNewButton() {
    const container = document.getElementById('container');
    const newButton = document.createElement('button');
    newButton.className = 'btn delete-btn';
    newButton.textContent = 'Delete Me';
    container.appendChild(newButton);
    // No need to add event listener - delegation handles it!
}`}
          styling=""
          paragraphString="Event delegation is efficient and automatically handles new elements added to the page."
        />

        {/* PRACTICAL EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">8.6:</span> Interactive Example
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Here's a comprehensive example that demonstrates various event types:
        </p>

        <CodeElement
          codeString={`<!DOCTYPE html>
<html>
<head>
    <title>Event Handling Demo</title>
    <style>
        .container { padding: 20px; max-width: 600px; }
        .event-box { 
            padding: 20px; margin: 10px 0; 
            border: 2px solid #ccc; border-radius: 5px;
            background: #f9f9f9;
        }
        .highlight { background: #ffffcc !important; }
        .log { 
            background: #f0f0f0; padding: 10px; 
            height: 150px; overflow-y: auto; 
            font-family: monospace; font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Event Handling Demo</h1>
        
        <div class="event-box" id="mouseBox">
            <h3>Mouse Events</h3>
            <p>Hover over this box and click it!</p>
            <button id="colorBtn">Change Color</button>
        </div>
        
        <div class="event-box">
            <h3>Keyboard Events</h3>
            <input type="text" id="keyInput" placeholder="Type something...">
            <p>Key info: <span id="keyInfo">Type to see key info</span></p>
        </div>
        
        <div class="event-box">
            <h3>Form Events</h3>
            <form id="demoForm">
                <input type="text" id="nameInput" placeholder="Your name" required>
                <button type="submit">Submit</button>
            </form>
        </div>
        
        <div id="eventLog" class="log"></div>
    </div>

    <script>
        const log = document.getElementById('eventLog');
        
        function logEvent(message) {
            const time = new Date().toLocaleTimeString();
            log.innerHTML += time + ': ' + message + '<br>';
            log.scrollTop = log.scrollHeight;
        }
        
        // Mouse events
        const mouseBox = document.getElementById('mouseBox');
        mouseBox.addEventListener('mouseenter', () => {
            mouseBox.classList.add('highlight');
            logEvent('Mouse entered the box');
        });
        
        mouseBox.addEventListener('mouseleave', () => {
            mouseBox.classList.remove('highlight');
            logEvent('Mouse left the box');
        });
        
        mouseBox.addEventListener('click', (e) => {
            logEvent('Box clicked at (' + e.clientX + ', ' + e.clientY + ')');
        });
        
        document.getElementById('colorBtn').addEventListener('click', (e) => {
            e.stopPropagation(); // Don't trigger box click
            const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            mouseBox.style.backgroundColor = randomColor;
            logEvent('Color changed to ' + randomColor);
        });
        
        // Keyboard events
        const keyInput = document.getElementById('keyInput');
        const keyInfo = document.getElementById('keyInfo');
        
        keyInput.addEventListener('keydown', (e) => {
            keyInfo.textContent = 'Key: ' + e.key + ', Code: ' + e.code;
            logEvent('Key pressed: ' + e.key);
            
            if (e.key === 'Enter') {
                logEvent('Enter key detected!');
            }
        });
        
        // Form events
        const form = document.getElementById('demoForm');
        const nameInput = document.getElementById('nameInput');
        
        nameInput.addEventListener('focus', () => logEvent('Name input focused'));
        nameInput.addEventListener('blur', () => logEvent('Name input lost focus'));
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = nameInput.value;
            if (name) {
                logEvent('Form submitted with name: ' + name);
                alert('Hello, ' + name + '!');
                nameInput.value = '';
            }
        });
        
        // Window events
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                logEvent('Window resized to ' + window.innerWidth + 'x' + window.innerHeight);
            }, 250);
        });
        
        logEvent('Event demo loaded successfully!');
    </script>
</body>
</html>`}
          styling=""
          paragraphString="This example shows mouse, keyboard, form, and window events working together."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Experiment with the event handling code:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>Hover over the mouse box and click the color button</li>
          <li>Type in the keyboard input and watch the key detection</li>
          <li>Submit the form with different names</li>
          <li>Resize the browser window and watch the log</li>
          <li>Add a double-click event that shows an alert</li>
          <li>Create a right-click context menu (use 'contextmenu' event)</li>
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

        <NavButtons previous="/lessons/js/7" next="/lessons/js/9" />
      </div>
    </>
  );
};
