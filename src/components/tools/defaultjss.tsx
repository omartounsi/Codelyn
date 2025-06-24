export const defaultJSs = [
  // JS CHAPTER 1 - JavaScript Basics and Syntax
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Basics</title>
  </head>
  <body>
    <h1>Welcome to JavaScript!</h1>
    <p id="demo">Click the button to run JavaScript!</p>
    <button onclick="myFunction()">Try it</button>

    <script>
      // This is a JavaScript comment
      function myFunction() {
        document.getElementById("demo").innerHTML = "Hello JavaScript!";
        console.log("JavaScript is running!");
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 2 - Variables and Data Types
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Variables</title>
  </head>
  <body>
    <h1>JavaScript Variables</h1>
    <p id="text">Click to see different data types:</p>
    <button onclick="showDataTypes()">Show Data Types</button>

    <script>
      function showDataTypes() {
        // Different variable types
        let message = "Hello World"; // String
        let number = 42; // Number
        let isTrue = true; // Boolean
        let fruits = ["apple", "banana", "orange"]; // Array
        
        document.getElementById("text").innerHTML = 
          "String: " + message + "<br>" +
          "Number: " + number + "<br>" +
          "Boolean: " + isTrue + "<br>" +
          "Array: " + fruits.join(", ");
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 3 - Functions and Scope
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Functions</title>
  </head>
  <body>
    <h1>JavaScript Functions</h1>
    <p id="result">Functions help organize your code!</p>
    <button onclick="calculateArea()">Calculate Area</button>
    <button onclick="greetUser()">Greet User</button>

    <script>
      // Function with parameters and return value
      function calculateArea() {
        let length = 10;
        let width = 5;
        let area = length * width;
        
        document.getElementById("result").innerHTML = 
          "Area of rectangle: " + area + " square units";
      }
      
      // Function with user input
      function greetUser() {
        let name = prompt("What's your name?");
        if (name) {
          document.getElementById("result").innerHTML = 
            "Hello, " + name + "! Welcome to JavaScript!";
        }
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 4 - Arrays and Objects
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Arrays and Objects</title>
  </head>
  <body>
    <h1>Arrays and Objects</h1>
    <p id="output">Click buttons to explore arrays and objects!</p>
    <button onclick="showArray()">Show Array</button>
    <button onclick="showObject()">Show Object</button>

    <script>
      function showArray() {
        let colors = ["red", "green", "blue", "yellow"];
        let output = "Colors array:<br>";
        
        for (let i = 0; i < colors.length; i++) {
          output += (i + 1) + ". " + colors[i] + "<br>";
        }
        
        document.getElementById("output").innerHTML = output;
      }
      
      function showObject() {
        let person = {
          name: "John",
          age: 25,
          city: "New York",
          greet: function() {
            return "Hello, I'm " + this.name;
          }
        };
        
        document.getElementById("output").innerHTML = 
          "Name: " + person.name + "<br>" +
          "Age: " + person.age + "<br>" +
          "City: " + person.city + "<br>" +
          "Greeting: " + person.greet();
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 5 - Control Flow and Conditionals
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Conditionals</title>
  </head>
  <body>
    <h1>Conditional Statements</h1>
    <p id="message">Enter your age to see a message!</p>
    <input type="number" id="ageInput" placeholder="Enter your age">
    <button onclick="checkAge()">Check Age</button>

    <script>
      function checkAge() {
        let age = document.getElementById("ageInput").value;
        let message;
        
        if (age < 13) {
          message = "You're a kid! 🧒";
        } else if (age < 20) {
          message = "You're a teenager! 🧑";
        } else if (age < 60) {
          message = "You're an adult! 👩‍💼";
        } else {
          message = "You're a senior! 👴";
        }
        
        document.getElementById("message").innerHTML = message;
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 6 - Loops and Iteration
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Loops</title>
  </head>
  <body>
    <h1>JavaScript Loops</h1>
    <p id="loop-output">Click buttons to see different loops in action!</p>
    <button onclick="forLoop()">For Loop</button>
    <button onclick="whileLoop()">While Loop</button>
    <button onclick="forEachLoop()">ForEach Loop</button>

    <script>
      function forLoop() {
        let output = "For Loop - Counting to 5:<br>";
        for (let i = 1; i <= 5; i++) {
          output += "Count: " + i + "<br>";
        }
        document.getElementById("loop-output").innerHTML = output;
      }
      
      function whileLoop() {
        let output = "While Loop - Countdown from 5:<br>";
        let count = 5;
        while (count > 0) {
          output += "Count: " + count + "<br>";
          count--;
        }
        document.getElementById("loop-output").innerHTML = output;
      }
      
      function forEachLoop() {
        let fruits = ["Apple", "Banana", "Orange", "Grape"];
        let output = "ForEach Loop - Fruits list:<br>";
        
        fruits.forEach(function(fruit, index) {
          output += (index + 1) + ". " + fruit + "<br>";
        });
        
        document.getElementById("loop-output").innerHTML = output;
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 7 - DOM Manipulation Basics
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - DOM Manipulation</title>
    <style>
      .highlight { background-color: yellow; }
      .large-text { font-size: 24px; }
    </style>
  </head>
  <body>
    <h1 id="main-title">DOM Manipulation</h1>
    <p id="text-paragraph">This text can be changed!</p>
    <button onclick="changeText()">Change Text</button>
    <button onclick="addHighlight()">Add Highlight</button>
    <button onclick="changeFontSize()">Change Font Size</button>

    <script>
      function changeText() {
        document.getElementById("text-paragraph").innerHTML = 
          "The text has been changed using JavaScript!";
      }
      
      function addHighlight() {
        let paragraph = document.getElementById("text-paragraph");
        paragraph.classList.toggle("highlight");
      }
      
      function changeFontSize() {
        let title = document.getElementById("main-title");
        title.classList.toggle("large-text");
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 8 - Events and Event Handling
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Events</title>
    <style>
      .box {
        width: 200px;
        height: 100px;
        background-color: lightblue;
        margin: 10px;
        text-align: center;
        line-height: 100px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>JavaScript Events</h1>
    <div class="box" onclick="handleClick()" onmouseover="handleMouseOver()" onmouseout="handleMouseOut()">
      Click or hover me!
    </div>
    <input type="text" id="textInput" onkeyup="handleKeyUp()" placeholder="Type something...">
    <p id="event-info">Interact with the elements above!</p>

    <script>
      function handleClick() {
        document.getElementById("event-info").innerHTML = 
          "Box was clicked! 🖱️";
      }
      
      function handleMouseOver() {
        document.getElementById("event-info").innerHTML = 
          "Mouse is over the box! 🔍";
      }
      
      function handleMouseOut() {
        document.getElementById("event-info").innerHTML = 
          "Mouse left the box! 👋";
      }
      
      function handleKeyUp() {
        let text = document.getElementById("textInput").value;
        document.getElementById("event-info").innerHTML = 
          "You typed: " + text + " ⌨️";
      }
    </script>
  </body>
</html>`,

  // JS CHAPTER 9 - Dynamic Content and Interaction
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Dynamic Content</title>
    <style>
      .task-item {
        padding: 10px;
        margin: 5px 0;
        background-color: #f0f0f0;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Dynamic To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Enter a new task...">
    <button onclick="addTask()">Add Task</button>
    <div id="taskList"></div>

    <script>
      let tasks = [];
      
      function addTask() {
        let taskInput = document.getElementById("taskInput");
        let taskText = taskInput.value.trim();
        
        if (taskText !== "") {
          tasks.push(taskText);
          taskInput.value = "";
          displayTasks();
        }
      }
      
      function displayTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        
        tasks.forEach(function(task, index) {
          let taskElement = document.createElement("div");
          taskElement.className = "task-item";
          taskElement.innerHTML = 
            task + 
            ' <button onclick="removeTask(' + index + ')">Remove</button>';
          taskList.appendChild(taskElement);
        });
      }
      
      function removeTask(index) {
        tasks.splice(index, 1);
        displayTasks();
      }
      
      // Allow Enter key to add task
      document.getElementById("taskInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          addTask();
        }
      });
    </script>
  </body>
</html>`,

  // JS CHAPTER 10 - JavaScript Best Practices
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Best Practices</title>
  </head>
  <body>
    <h1>JavaScript Best Practices</h1>
    <p id="demo">This code demonstrates clean JavaScript practices!</p>
    <button onclick="calculator.add(5, 3)">Add 5 + 3</button>
    <button onclick="calculator.multiply(4, 7)">Multiply 4 × 7</button>

    <script>
      // Use const for values that won't change
      const APP_NAME = "My Calculator";
      
      // Use descriptive variable names
      const displayElement = document.getElementById("demo");
      
      // Organize code into objects/modules
      const calculator = {
        add: function(num1, num2) {
          const result = num1 + num2;
          this.displayResult(\`\${num1} + \${num2} = \${result}\`);
          return result;
        },
        
        multiply: function(num1, num2) {
          const result = num1 * num2;
          this.displayResult(\`\${num1} × \${num2} = \${result}\`);
          return result;
        },
        
        displayResult: function(message) {
          displayElement.innerHTML = message;
          console.log(message); // Always log important operations
        }
      };
      
      // Initialize the app
      displayElement.innerHTML = \`Welcome to \${APP_NAME}!\`;
    </script>
  </body>
</html>`,

  // JS CHAPTER 11 - Modern JavaScript Features
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Modern Features</title>
  </head>
  <body>
    <h1>Modern JavaScript (ES6+)</h1>
    <p id="output">Click buttons to see modern JavaScript features!</p>
    <button onclick="showArrowFunctions()">Arrow Functions</button>
    <button onclick="showTemplateStrings()">Template Strings</button>
    <button onclick="showDestructuring()">Destructuring</button>

    <script>
      // Arrow functions
      const showArrowFunctions = () => {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map(num => num * 2);
        
        document.getElementById("output").innerHTML = 
          \`Original: [\${numbers.join(', ')}]<br>Doubled: [\${doubled.join(', ')}]\`;
      };
      
      // Template strings
      const showTemplateStrings = () => {
        const name = "JavaScript";
        const version = "ES6+";
        const year = 2024;
        
        // Using template strings with \${} syntax
        const message = \`
          Language: \${name}<br>
          Version: \${version}<br>
          Year: \${year}<br>
          Cool features: \${name} \${version} has amazing features!
        \`;
        
        document.getElementById("output").innerHTML = message;
      };
      
      // Destructuring
      const showDestructuring = () => {
        const person = {
          name: "Alice",
          age: 30,
          city: "Paris"
        };
        
        // Object destructuring
        const {name, age, city} = person;
        
        // Array destructuring
        const colors = ["red", "green", "blue"];
        const [first, second, third] = colors;
        
        document.getElementById("output").innerHTML = \`
          Object destructuring:<br>
          Name: \${name}, Age: \${age}, City: \${city}<br><br>
          Array destructuring:<br>
          First: \${first}, Second: \${second}, Third: \${third}
        \`;
      };
    </script>
  </body>
</html>`,

  // JS CHAPTER 12 - Debugging and Error Handling
  `<!DOCTYPE html>
<html>
  <head>
    <title>Learning JavaScript - Debugging</title>
  </head>
  <body>
    <h1>Debugging and Error Handling</h1>
    <p id="debug-output">Open browser developer tools (F12) to see console messages!</p>
    <button onclick="demonstrateDebugging()">Debug Demo</button>
    <button onclick="demonstrateErrorHandling()">Error Handling Demo</button>

    <script>
      function demonstrateDebugging() {
        console.log("Starting debugging demo...");
        
        let numbers = [1, 2, 3, 4, 5];
        console.log("Numbers array:", numbers);
        
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          console.log(\`Adding \${numbers[i]} to sum (\${sum})\`);
          sum += numbers[i];
        }
        
        console.log("Final sum:", sum);
        document.getElementById("debug-output").innerHTML = 
          \`Sum calculated: \${sum}<br>Check the console for debug messages!\`;
      }
      
      function demonstrateErrorHandling() {
        try {
          console.log("Attempting risky operation...");
          
          // This might cause an error
          let data = JSON.parse('{"name": "John", "age": 25}');
          console.log("Parsed data successfully:", data);
          
          // This will cause an error
          let badData = JSON.parse('invalid json');
          
        } catch (error) {
          console.error("An error occurred:", error.message);
          document.getElementById("debug-output").innerHTML = 
            \`Error caught and handled gracefully!<br>Error: \${error.message}\`;
        } finally {
          console.log("Cleanup operations completed");
        }
      }
    </script>
  </body>
</html>`,
];
