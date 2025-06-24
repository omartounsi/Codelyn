import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS9 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 9);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 9);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 9:</span> Dynamic
        Content and Interaction
      </h1>
      <div className="flex flex-col gap-7">
        {/* CREATING DYNAMIC INTERFACES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">9.1:</span> Creating Dynamic User
          Interfaces
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Dynamic content means your web page can change and respond to user
          actions without reloading. This creates smooth, app-like experiences
          where content updates instantly based on user input.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          We'll combine DOM manipulation, event handling, and data management to
          create interactive applications that feel responsive and modern.
        </p>

        <CodeElement
          codeString={`// Example: Dynamic content that responds to user input
const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

// Sample data
const movies = [
    'The Matrix', 'Inception', 'Interstellar', 'Avatar', 
    'Titanic', 'Star Wars', 'Lord of the Rings'
];

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    // Clear previous results
    resultsList.innerHTML = '';
    
    if (searchTerm.length > 0) {
        // Filter movies based on search term
        const matches = movies.filter(movie => 
            movie.toLowerCase().includes(searchTerm)
        );
        
        // Display results dynamically
        matches.forEach(movie => {
            const listItem = document.createElement('li');
            listItem.textContent = movie;
            listItem.addEventListener('click', () => {
                searchInput.value = movie;
                resultsList.innerHTML = '';
            });
            resultsList.appendChild(listItem);
        });
    }
});`}
          styling=""
          paragraphString="This creates a real-time search that filters results as you type, providing immediate feedback."
        />

        {/* FORM VALIDATION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">9.2:</span> Real-time Form Validation
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Instead of waiting until form submission to validate data, we can
          provide instant feedback as users type. This improves user experience
          by catching errors early.
        </p>

        <CodeElement
          codeString={`// Real-time form validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showValidation(input, isValid, message) {
    const feedback = input.nextElementSibling;
    
    if (isValid) {
        input.style.borderColor = 'green';
        feedback.textContent = '✓ Valid';
        feedback.style.color = 'green';
    } else {
        input.style.borderColor = 'red';
        feedback.textContent = message;
        feedback.style.color = 'red';
    }
}

emailInput.addEventListener('input', function() {
    const email = this.value;
    const isValid = validateEmail(email);
    showValidation(this, isValid, 'Please enter a valid email address');
});

passwordInput.addEventListener('input', function() {
    const password = this.value;
    const isValid = password.length >= 8;
    showValidation(this, isValid, 'Password must be at least 8 characters');
    
    // Also check confirm password if it has a value
    if (confirmPasswordInput.value) {
        const passwordsMatch = password === confirmPasswordInput.value;
        showValidation(confirmPasswordInput, passwordsMatch, 'Passwords do not match');
    }
});

confirmPasswordInput.addEventListener('input', function() {
    const confirmPassword = this.value;
    const passwordsMatch = confirmPassword === passwordInput.value;
    showValidation(this, passwordsMatch, 'Passwords do not match');
});`}
          styling=""
          paragraphString="Real-time validation gives users immediate feedback and helps prevent form submission errors."
        />

        {/* INTERACTIVE WIDGETS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">9.3:</span> Building Interactive Widgets
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Interactive widgets are reusable components that respond to user
          input. Let's create a tab system and an image carousel:
        </p>

        <CodeElement
          codeString={`// Tab System Implementation
class TabSystem {
    constructor(tabContainer) {
        this.container = document.querySelector(tabContainer);
        this.tabButtons = this.container.querySelectorAll('.tab-button');
        this.tabPanels = this.container.querySelectorAll('.tab-panel');
        this.activeIndex = 0;
        
        this.init();
    }
    
    init() {
        // Add click listeners to tab buttons
        this.tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => this.switchTab(index));
        });
        
        // Show first tab by default
        this.switchTab(0);
    }
    
    switchTab(index) {
        // Remove active class from all tabs and panels
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        this.tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to selected tab and panel
        this.tabButtons[index].classList.add('active');
        this.tabPanels[index].classList.add('active');
        
        this.activeIndex = index;
    }
}

// Image Carousel Implementation
class ImageCarousel {
    constructor(carouselSelector) {
        this.carousel = document.querySelector(carouselSelector);
        this.images = this.carousel.querySelectorAll('img');
        this.prevBtn = this.carousel.querySelector('.prev-btn');
        this.nextBtn = this.carousel.querySelector('.next-btn');
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.previousImage());
        this.nextBtn.addEventListener('click', () => this.nextImage());
        
        // Auto-play functionality
        setInterval(() => this.nextImage(), 5000);
        
        this.updateCarousel();
    }
    
    previousImage() {
        this.currentIndex = this.currentIndex === 0 
            ? this.images.length - 1 
            : this.currentIndex - 1;
        this.updateCarousel();
    }
    
    nextImage() {
        this.currentIndex = this.currentIndex === this.images.length - 1 
            ? 0 
            : this.currentIndex + 1;
        this.updateCarousel();
    }
    
    updateCarousel() {
        this.images.forEach((img, index) => {
            img.style.display = index === this.currentIndex ? 'block' : 'none';
        });
    }
}

// Initialize widgets
document.addEventListener('DOMContentLoaded', function() {
    new TabSystem('#myTabs');
    new ImageCarousel('#myCarousel');
});`}
          styling=""
          paragraphString="Creating reusable widget classes makes your code organized and easy to maintain."
        />

        {/* DATA MANAGEMENT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">9.4:</span> Managing Application State
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          As applications grow, managing data becomes crucial. Let's create a
          simple shopping cart that tracks items and updates the interface:
        </p>

        <CodeElement
          codeString={`// Shopping Cart Implementation
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.cartDisplay = document.getElementById('cart-items');
        this.totalDisplay = document.getElementById('cart-total');
        this.countDisplay = document.getElementById('cart-count');
        
        this.setupEventListeners();
        this.loadFromStorage();
    }
    
    setupEventListeners() {
        // Listen for "Add to Cart" button clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart')) {
                const productId = e.target.dataset.productId;
                const productName = e.target.dataset.productName;
                const productPrice = parseFloat(e.target.dataset.productPrice);
                
                this.addItem({
                    id: productId,
                    name: productName,
                    price: productPrice
                });
            }
            
            if (e.target.classList.contains('remove-from-cart')) {
                const productId = e.target.dataset.productId;
                this.removeItem(productId);
            }
        });
    }
    
    addItem(product) {
        // Check if item already exists
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        
        this.updateDisplay();
        this.saveToStorage();
        this.showNotification(product.name + ' added to cart!');
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.updateDisplay();
        this.saveToStorage();
    }
    
    updateDisplay() {
        // Update cart items display
        this.cartDisplay.innerHTML = '';
        this.total = 0;
        
        this.items.forEach(item => {
            const itemTotal = item.price * item.quantity;
            this.total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.innerHTML = \`
                <span>\${item.name} x\${item.quantity}</span>
                <span>$\${itemTotal.toFixed(2)}</span>
                <button class="remove-from-cart" data-product-id="\${item.id}">Remove</button>
            \`;
            this.cartDisplay.appendChild(cartItem);
        });
        
        // Update total and count displays
        this.totalDisplay.textContent = '$' + this.total.toFixed(2);
        this.countDisplay.textContent = this.items.length;
    }
    
    saveToStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.items));
    }
    
    loadFromStorage() {
        const saved = localStorage.getItem('shoppingCart');
        if (saved) {
            this.items = JSON.parse(saved);
            this.updateDisplay();
        }
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize shopping cart
const cart = new ShoppingCart();`}
          styling=""
          paragraphString="This cart system manages state, persists data to localStorage, and provides user feedback."
        />

        {/* COMPREHENSIVE EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">9.5:</span> Complete Interactive
          Application
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Let's put everything together in a complete example - a task
          management application with real-time updates:
        </p>

        <CodeElement
          codeString={`<!DOCTYPE html>
<html>
<head>
    <title>Task Manager - Dynamic Interaction Demo</title>
    <style>
        .container { max-width: 800px; margin: 20px auto; padding: 20px; }
        .task-input { width: 300px; padding: 10px; margin-right: 10px; }
        .task-list { margin: 20px 0; }
        .task-item { 
            display: flex; justify-content: space-between; align-items: center;
            padding: 10px; margin: 5px 0; background: #f5f5f5; border-radius: 5px;
        }
        .task-item.completed { background: #d4edda; text-decoration: line-through; }
        .task-item.priority-high { border-left: 5px solid #dc3545; }
        .task-item.priority-medium { border-left: 5px solid #ffc107; }
        .task-item.priority-low { border-left: 5px solid #28a745; }
        .task-stats { display: flex; gap: 20px; margin: 20px 0; }
        .stat-box { padding: 10px; background: #e9ecef; border-radius: 5px; text-align: center; }
        .filter-buttons { margin: 10px 0; }
        .filter-buttons button { margin-right: 10px; padding: 5px 15px; }
        .filter-buttons button.active { background: #007bff; color: white; }
        .notification { 
            position: fixed; top: 20px; right: 20px; 
            padding: 15px; background: #28a745; color: white; 
            border-radius: 5px; z-index: 1000;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Interactive Task Manager</h1>
        
        <div class="task-input-section">
            <input type="text" id="taskInput" class="task-input" placeholder="Enter a new task...">
            <select id="prioritySelect">
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
            <button onclick="addTask()">Add Task</button>
        </div>
        
        <div class="filter-buttons">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="pending">Pending</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
            <button class="filter-btn" data-filter="high">High Priority</button>
        </div>
        
        <div class="task-stats">
            <div class="stat-box">
                <div>Total Tasks</div>
                <div id="totalTasks">0</div>
            </div>
            <div class="stat-box">
                <div>Completed</div>
                <div id="completedTasks">0</div>
            </div>
            <div class="stat-box">
                <div>Pending</div>
                <div id="pendingTasks">0</div>
            </div>
            <div class="stat-box">
                <div>Completion Rate</div>
                <div id="completionRate">0%</div>
            </div>
        </div>
        
        <div id="taskList" class="task-list"></div>
    </div>

    <script>
        let tasks = [];
        let currentFilter = 'all';
        
        // Load tasks from localStorage on page load
        document.addEventListener('DOMContentLoaded', function() {
            loadTasks();
            setupEventListeners();
            updateDisplay();
        });
        
        function setupEventListeners() {
            // Add task on Enter key
            document.getElementById('taskInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addTask();
                }
            });
            
            // Filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Update active button
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update filter and display
                    currentFilter = this.dataset.filter;
                    updateDisplay();
                });
            });
        }
        
        function addTask() {
            const input = document.getElementById('taskInput');
            const priority = document.getElementById('prioritySelect').value;
            const taskText = input.value.trim();
            
            if (taskText === '') {
                showNotification('Please enter a task!', 'error');
                return;
            }
            
            const newTask = {
                id: Date.now().toString(),
                text: taskText,
                priority: priority,
                completed: false,
                createdAt: new Date().toISOString()
            };
            
            tasks.push(newTask);
            input.value = '';
            
            saveTasks();
            updateDisplay();
            showNotification('Task added successfully!', 'success');
        }
        
        function toggleTask(taskId) {
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                saveTasks();
                updateDisplay();
                
                const message = task.completed ? 'Task completed!' : 'Task marked as pending';
                showNotification(message, 'info');
            }
        }
        
        function deleteTask(taskId) {
            if (confirm('Are you sure you want to delete this task?')) {
                tasks = tasks.filter(t => t.id !== taskId);
                saveTasks();
                updateDisplay();
                showNotification('Task deleted!', 'error');
            }
        }
        
        function updateDisplay() {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';
            
            // Filter tasks based on current filter
            let filteredTasks = tasks;
            
            switch(currentFilter) {
                case 'pending':
                    filteredTasks = tasks.filter(t => !t.completed);
                    break;
                case 'completed':
                    filteredTasks = tasks.filter(t => t.completed);
                    break;
                case 'high':
                    filteredTasks = tasks.filter(t => t.priority === 'high');
                    break;
            }
            
            // Sort by priority and completion status
            filteredTasks.sort((a, b) => {
                if (a.completed !== b.completed) {
                    return a.completed ? 1 : -1;
                }
                const priorityOrder = { high: 3, medium: 2, low: 1 };
                return priorityOrder[b.priority] - priorityOrder[a.priority];
            });
            
            // Display tasks
            filteredTasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = \`task-item \${task.completed ? 'completed' : ''} priority-\${task.priority}\`;
                
                taskElement.innerHTML = \`
                    <div>
                        <input type="checkbox" \${task.completed ? 'checked' : ''} 
                               onchange="toggleTask('\${task.id}')">
                        <span>\${task.text}</span>
                        <small>(\${task.priority} priority)</small>
                    </div>
                    <div>
                        <button onclick="deleteTask('\${task.id}')" style="background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 3px;">Delete</button>
                    </div>
                \`;
                
                taskList.appendChild(taskElement);
            });
            
            updateStats();
        }
        
        function updateStats() {
            const total = tasks.length;
            const completed = tasks.filter(t => t.completed).length;
            const pending = total - completed;
            const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
            
            document.getElementById('totalTasks').textContent = total;
            document.getElementById('completedTasks').textContent = completed;
            document.getElementById('pendingTasks').textContent = pending;
            document.getElementById('completionRate').textContent = completionRate + '%';
        }
        
        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
        function loadTasks() {
            const saved = localStorage.getItem('tasks');
            if (saved) {
                tasks = JSON.parse(saved);
            }
        }
        
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.style.background = type === 'error' ? '#dc3545' : 
                                          type === 'success' ? '#28a745' : '#17a2b8';
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }
    </script>
</body>
</html>`}
          styling=""
          paragraphString="This complete application demonstrates state management, real-time updates, filtering, persistence, and user feedback."
        />

        {/* TRY IT YOURSELF */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Experiment with the task manager application:
        </p>
        <ul className="max-w-2xl text-lg text-neutral-100 list-disc list-inside space-y-2">
          <li>Add tasks with different priorities and mark them as complete</li>
          <li>Use the filter buttons to view different task categories</li>
          <li>Watch how the statistics update in real-time</li>
          <li>Refresh the page to see that tasks are saved in localStorage</li>
          <li>Add an "Edit Task" feature that allows modifying task text</li>
          <li>Implement drag-and-drop to reorder tasks</li>
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

        <NavButtons previous="/lessons/js/8" next="/lessons/js/10" />
      </div>
    </>
  );
};
