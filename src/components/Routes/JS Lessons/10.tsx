import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS10 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 10);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 10);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 10:</span>{" "}
        JavaScript Best Practices
      </h1>
      <div className="flex flex-col gap-7">
        {/* CODE ORGANIZATION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">10.1:</span> Code Organization and
          Structure
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Well-organized code is easier to read, maintain, and debug. Following
          best practices helps you write professional-quality JavaScript that
          other developers (including future you) can understand and work with.
        </p>

        <CodeElement
          codeString={`// ❌ Poor code organization
var a = 5;
function calc(x,y){return x*y+a;}
var users=[];
function adduser(n){users.push(n);updateui();}
function updateui(){document.getElementById('list').innerHTML=users.join(',');}

// ✅ Well-organized code
const TAX_RATE = 0.08; // Use descriptive constants

class UserManager {
    constructor() {
        this.users = [];
        this.userListElement = document.getElementById('userList');
    }
    
    addUser(name) {
        if (!this.isValidName(name)) {
            throw new Error('Invalid user name');
        }
        
        this.users.push({
            id: Date.now(),
            name: name,
            createdAt: new Date()
        });
        
        this.updateDisplay();
    }
    
    isValidName(name) {
        return typeof name === 'string' && name.trim().length > 0;
    }
    
    updateDisplay() {
        this.userListElement.innerHTML = this.users
            .map(user => \`<li>\${user.name}</li>\`)
            .join('');
    }
}

// Calculate price with tax
function calculateTotalPrice(basePrice) {
    if (typeof basePrice !== 'number' || basePrice < 0) {
        throw new Error('Base price must be a positive number');
    }
    
    return basePrice * (1 + TAX_RATE);
}`}
          styling=""
          paragraphString="Good code is self-documenting with clear names, proper formatting, and logical organization."
        />

        {/* NAMING CONVENTIONS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">10.2:</span> Naming Conventions
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Good naming makes your code self-explanatory. Use descriptive names
          that clearly indicate what variables store and what functions do.
        </p>

        <CodeElement
          codeString={`// ❌ Poor naming
let d = new Date();
let u = [];
function c(x) { return x * 2; }
let btn = document.getElementById('btn');

// ✅ Descriptive naming
let currentDate = new Date();
let activeUsers = [];
function doubleValue(number) { return number * 2; }
let submitButton = document.getElementById('submitButton');

// Naming conventions:
// Variables and functions: camelCase
let userName = 'john_doe';
let isLoggedIn = true;
function calculateTotalPrice() { }

// Constants: UPPER_SNAKE_CASE
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = 'https://api.example.com';

// Classes: PascalCase
class UserManager { }
class ShoppingCart { }

// Private methods/properties: prefix with underscore
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
        this._accountNumber = this._generateAccountNumber();
    }
    
    _generateAccountNumber() {
        return Math.random().toString(36).substr(2, 9);
    }
}

// Boolean variables: use is/has/can/should prefixes
let isValid = true;
let hasPermission = false;
let canEdit = user.role === 'admin';
let shouldUpdate = data.length > 0;`}
          styling=""
          paragraphString="Consistent naming conventions make your code more readable and professional."
        />

        {/* ERROR HANDLING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">10.3:</span> Proper Error Handling
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Good error handling prevents your application from crashing and
          provides meaningful feedback to users and developers.
        </p>

        <CodeElement
          codeString={`// ❌ No error handling
function divideNumbers(a, b) {
    return a / b; // What if b is 0?
}

let result = divideNumbers(10, 0); // Returns Infinity
console.log(result.toFixed(2)); // Might crash

// ✅ Proper error handling
function divideNumbers(a, b) {
    // Validate inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    
    return a / b;
}

// Using try-catch for error handling
function safeDivision(a, b) {
    try {
        const result = divideNumbers(a, b);
        return {
            success: true,
            result: result,
            error: null
        };
    } catch (error) {
        console.error('Division error:', error.message);
        return {
            success: false,
            result: null,
            error: error.message
        };
    }
}

// Example usage
const calculation = safeDivision(10, 2);
if (calculation.success) {
    console.log('Result:', calculation.result);
} else {
    console.log('Error:', calculation.error);
    // Show user-friendly error message
    showNotification('Unable to perform calculation: ' + calculation.error);
}

// Error handling for DOM operations
function updateUserProfile(userId, data) {
    try {
        const userElement = document.getElementById(\`user-\${userId}\`);
        
        if (!userElement) {
            throw new Error(\`User element not found for ID: \${userId}\`);
        }
        
        userElement.querySelector('.name').textContent = data.name;
        userElement.querySelector('.email').textContent = data.email;
        
        return true;
    } catch (error) {
        console.error('Failed to update user profile:', error);
        showErrorMessage('Failed to update profile. Please try again.');
        return false;
    }
}`}
          styling=""
          paragraphString="Always validate inputs and handle potential errors gracefully to create robust applications."
        />

        {/* PERFORMANCE BEST PRACTICES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">10.4:</span> Performance Optimization
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Writing efficient JavaScript ensures your applications run smoothly,
          especially with large amounts of data or frequent updates.
        </p>

        <CodeElement
          codeString={`// ❌ Inefficient DOM manipulation
function updateList(items) {
    const list = document.getElementById('itemList');
    list.innerHTML = ''; // Clears the list
    
    // This causes layout recalculation for each item
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        list.appendChild(li); // Multiple DOM updates
    });
}

// ✅ Efficient DOM manipulation
function updateList(items) {
    const list = document.getElementById('itemList');
    
    // Build HTML string first (faster)
    const htmlString = items
        .map(item => \`<li>\${item.name}</li>\`)
        .join('');
    
    // Single DOM update
    list.innerHTML = htmlString;
}

// Or use DocumentFragment for multiple elements
function updateListWithFragment(items) {
    const list = document.getElementById('itemList');
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        fragment.appendChild(li); // Add to fragment (not DOM)
    });
    
    list.innerHTML = '';
    list.appendChild(fragment); // Single DOM update
}

// ❌ Inefficient event handling
window.addEventListener('scroll', function() {
    updateScrollPosition(); // Fires hundreds of times per second
});

// ✅ Throttled event handling
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

window.addEventListener('scroll', throttle(function() {
    updateScrollPosition(); // Fires at most once every 100ms
}, 100));

// Cache DOM queries
// ❌ Repeated DOM queries
function highlightActiveItems() {
    for (let i = 0; i < 100; i++) {
        document.getElementById('item-' + i).classList.add('active');
        document.querySelector('.status').textContent = 'Processing...';
    }
}

// ✅ Cache DOM elements
function highlightActiveItems() {
    const statusElement = document.querySelector('.status'); // Query once
    statusElement.textContent = 'Processing...';
    
    for (let i = 0; i < 100; i++) {
        const item = document.getElementById('item-' + i);
        if (item) { // Check if element exists
            item.classList.add('active');
        }
    }
    
    statusElement.textContent = 'Complete!';
}`}
          styling=""
          paragraphString="Optimize DOM operations, cache queries, and throttle expensive operations for better performance."
        />

        {/* DEBUGGING TECHNIQUES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">10.5:</span> Debugging Techniques
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Effective debugging skills help you find and fix problems quickly.
          Modern browsers provide powerful debugging tools.
        </p>

        <CodeElement
          codeString={`// Console debugging techniques
function processUserData(users) {
    console.log('Processing users:', users); // Basic logging
    
    // Group related logs
    console.group('User Processing');
    
    users.forEach((user, index) => {
        console.log(\`Processing user \${index + 1}:\`, user);
        
        // Conditional logging
        if (user.age < 18) {
            console.warn('Underage user detected:', user.name);
        }
        
        // Table format for objects
        console.table(user);
    });
    
    console.groupEnd();
    
    // Performance timing
    console.time('User validation');
    const validUsers = users.filter(user => user.email && user.name);
    console.timeEnd('User validation');
    
    console.log('Valid users:', validUsers.length);
    return validUsers;
}

// Debugging with breakpoints (use in browser dev tools)
function calculateTotal(items) {
    debugger; // Execution will pause here when dev tools are open
    
    let total = 0;
    for (let item of items) {
        debugger; // Pause on each iteration
        total += item.price * item.quantity;
    }
    
    return total;
}

// Assert for debugging assumptions
function withdraw(amount) {
    console.assert(amount > 0, 'Withdrawal amount must be positive');
    console.assert(amount <= this.balance, 'Insufficient funds');
    
    this.balance -= amount;
}

// Error tracking in production
window.addEventListener('error', function(event) {
    console.error('Global error caught:', {
        message: event.message,
        filename: event.filename,
        line: event.lineno,
        column: event.colno,
        error: event.error
    });
    
    // In production, you might send this to an error tracking service
    // trackError(event.error);
});

// Custom error logging function
function logError(functionName, error, context = {}) {
    const errorInfo = {
        function: functionName,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        context: context
    };
    
    console.error('Application Error:', errorInfo);
    
    // Store error for later analysis
    const errors = JSON.parse(localStorage.getItem('errorLog') || '[]');
    errors.push(errorInfo);
    localStorage.setItem('errorLog', JSON.stringify(errors.slice(-10))); // Keep last 10 errors
}

// Usage example
function processPayment(amount, userId) {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }
        
        // Payment processing logic here
        console.log(\`Processing payment of $\${amount} for user \${userId}\`);
        
    } catch (error) {
        logError('processPayment', error, { amount, userId });
        throw error; // Re-throw if needed
    }
}`}
          styling=""
          paragraphString="Use console methods, breakpoints, and systematic error logging to debug effectively."
        />

        {/* COMPREHENSIVE EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">10.6:</span> Best Practices Example
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Here's a complete example that demonstrates all the best practices
          we've covered:
        </p>

        <CodeElement
          codeString={`// Well-structured JavaScript following best practices
class BookLibrary {
    constructor(containerId) {
        // Validate constructor parameters
        if (!containerId) {
            throw new Error('Container ID is required');
        }
        
        this.container = document.getElementById(containerId);
        if (!this.container) {
            throw new Error(\`Container element with ID '\${containerId}' not found\`);
        }
        
        // Initialize properties
        this.books = [];
        this.filteredBooks = [];
        this.currentFilter = 'all';
        
        // Cache DOM elements
        this._cacheElements();
        
        // Setup event listeners
        this._setupEventListeners();
        
        // Load initial data
        this._loadBooks();
        
        console.log('BookLibrary initialized successfully');
    }
    
    _cacheElements() {
        this.searchInput = this.container.querySelector('#searchInput');
        this.filterSelect = this.container.querySelector('#filterSelect');
        this.booksList = this.container.querySelector('#booksList');
        this.statusMessage = this.container.querySelector('#statusMessage');
        
        // Verify required elements exist
        if (!this.searchInput || !this.booksList) {
            throw new Error('Required DOM elements not found');
        }
    }
    
    _setupEventListeners() {
        // Throttled search input
        this.searchInput.addEventListener('input', 
            this._throttle(this._handleSearch.bind(this), 300)
        );
        
        if (this.filterSelect) {
            this.filterSelect.addEventListener('change', 
                this._handleFilterChange.bind(this)
            );
        }
        
        // Event delegation for book actions
        this.booksList.addEventListener('click', 
            this._handleBookAction.bind(this)
        );
    }
    
    _throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    addBook(bookData) {
        try {
            // Validate book data
            this._validateBookData(bookData);
            
            const book = {
                id: Date.now().toString(),
                title: bookData.title.trim(),
                author: bookData.author.trim(),
                genre: bookData.genre || 'Unknown',
                year: bookData.year || new Date().getFullYear(),
                isRead: false,
                addedDate: new Date().toISOString()
            };
            
            this.books.push(book);
            this._saveBooks();
            this._updateDisplay();
            
            this._showMessage(\`Added "\${book.title}" to library\`, 'success');
            
            return book;
            
        } catch (error) {
            this._logError('addBook', error, { bookData });
            this._showMessage('Failed to add book: ' + error.message, 'error');
            throw error;
        }
    }
    
    _validateBookData(bookData) {
        if (!bookData || typeof bookData !== 'object') {
            throw new Error('Book data must be an object');
        }
        
        if (!bookData.title || typeof bookData.title !== 'string') {
            throw new Error('Book title is required and must be a string');
        }
        
        if (!bookData.author || typeof bookData.author !== 'string') {
            throw new Error('Book author is required and must be a string');
        }
        
        if (bookData.year && (typeof bookData.year !== 'number' || bookData.year < 1000)) {
            throw new Error('Book year must be a valid year number');
        }
    }
    
    _handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase().trim();
        
        this.filteredBooks = this.books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
        
        this._updateDisplay();
    }
    
    _handleFilterChange(event) {
        this.currentFilter = event.target.value;
        this._applyFilter();
        this._updateDisplay();
    }
    
    _applyFilter() {
        switch (this.currentFilter) {
            case 'read':
                this.filteredBooks = this.books.filter(book => book.isRead);
                break;
            case 'unread':
                this.filteredBooks = this.books.filter(book => !book.isRead);
                break;
            default:
                this.filteredBooks = [...this.books];
        }
    }
    
    _updateDisplay() {
        try {
            const booksToShow = this.filteredBooks.length ? this.filteredBooks : this.books;
            
            if (booksToShow.length === 0) {
                this.booksList.innerHTML = '<p class="no-books">No books found</p>';
                return;
            }
            
            // Use DocumentFragment for efficient DOM updates
            const fragment = document.createDocumentFragment();
            
            booksToShow.forEach(book => {
                const bookElement = this._createBookElement(book);
                fragment.appendChild(bookElement);
            });
            
            this.booksList.innerHTML = '';
            this.booksList.appendChild(fragment);
            
        } catch (error) {
            this._logError('_updateDisplay', error);
            this._showMessage('Failed to display books', 'error');
        }
    }
    
    _createBookElement(book) {
        const bookDiv = document.createElement('div');
        bookDiv.className = \`book-item \${book.isRead ? 'read' : 'unread'}\`;
        bookDiv.dataset.bookId = book.id;
        
        bookDiv.innerHTML = \`
            <div class="book-info">
                <h3 class="book-title">\${this._escapeHtml(book.title)}</h3>
                <p class="book-author">by \${this._escapeHtml(book.author)}</p>
                <span class="book-genre">\${this._escapeHtml(book.genre)}</span>
                <span class="book-year">(\${book.year})</span>
            </div>
            <div class="book-actions">
                <button class="toggle-read-btn" data-action="toggleRead">
                    \${book.isRead ? 'Mark Unread' : 'Mark Read'}
                </button>
                <button class="delete-btn" data-action="delete">Delete</button>
            </div>
        \`;
        
        return bookDiv;
    }
    
    _escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    _handleBookAction(event) {
        const action = event.target.dataset.action;
        if (!action) return;
        
        const bookElement = event.target.closest('.book-item');
        const bookId = bookElement?.dataset.bookId;
        
        if (!bookId) return;
        
        switch (action) {
            case 'toggleRead':
                this._toggleReadStatus(bookId);
                break;
            case 'delete':
                this._deleteBook(bookId);
                break;
        }
    }
    
    _saveBooks() {
        try {
            localStorage.setItem('libraryBooks', JSON.stringify(this.books));
        } catch (error) {
            this._logError('_saveBooks', error);
            console.warn('Failed to save books to localStorage');
        }
    }
    
    _loadBooks() {
        try {
            const saved = localStorage.getItem('libraryBooks');
            if (saved) {
                this.books = JSON.parse(saved);
                this.filteredBooks = [...this.books];
                this._updateDisplay();
            }
        } catch (error) {
            this._logError('_loadBooks', error);
            console.warn('Failed to load books from localStorage');
        }
    }
    
    _logError(functionName, error, context = {}) {
        const errorInfo = {
            class: 'BookLibrary',
            function: functionName,
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            context: context
        };
        
        console.error('BookLibrary Error:', errorInfo);
    }
    
    _showMessage(text, type = 'info') {
        if (this.statusMessage) {
            this.statusMessage.textContent = text;
            this.statusMessage.className = \`status-message \${type}\`;
            
            setTimeout(() => {
                this.statusMessage.textContent = '';
                this.statusMessage.className = 'status-message';
            }, 3000);
        }
    }
}

// Usage with proper error handling
document.addEventListener('DOMContentLoaded', function() {
    try {
        const library = new BookLibrary('bookLibraryContainer');
        
        // Example of adding a book
        library.addBook({
            title: 'Clean Code',
            author: 'Robert C. Martin',
            genre: 'Programming',
            year: 2008
        });
        
    } catch (error) {
        console.error('Failed to initialize BookLibrary:', error);
        // Show user-friendly error message
        alert('Sorry, the book library could not be loaded. Please refresh the page.');
    }
});`}
          styling=""
          paragraphString="This example demonstrates proper class structure, error handling, performance optimization, and maintainable code."
        />

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

        <NavButtons previous="/lessons/js/9" next="/lessons/js/11" />
      </div>
    </>
  );
};
