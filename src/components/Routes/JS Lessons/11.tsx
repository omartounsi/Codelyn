import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const JS11 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("javascript", 11);

  const handleMarkComplete = () => {
    markLessonComplete("javascript", 11);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 11:</span> Modern
        JavaScript Features
      </h1>
      <div className="flex flex-col gap-7">
        {/* ES6+ FEATURES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">11.1:</span> ES6+ Modern JavaScript
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Modern JavaScript (ES6/ES2015 and beyond) introduced many powerful
          features that make code more readable, maintainable, and efficient.
          These features are widely supported in modern browsers and are
          essential for contemporary web development.
        </p>

        <CodeElement
          codeString={`// Arrow Functions - Shorter syntax for functions
// Old way
function multiply(a, b) {
    return a * b;
}

// Modern way
const multiply = (a, b) => a * b;

// Arrow functions with multiple statements
const processUser = (user) => {
    const processed = user.name.toUpperCase();
    console.log('Processing:', processed);
    return processed;
};

// Template Literals - Better string interpolation
const name = 'Alice';
const age = 30;

// Old way
const message1 = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Modern way
const message2 = \`Hello, my name is \${name} and I am \${age} years old.\`;

// Multi-line strings
const htmlTemplate = \`
    <div class="user-card">
        <h2>\${name}</h2>
        <p>Age: \${age}</p>
        <p>Status: \${age >= 18 ? 'Adult' : 'Minor'}</p>
    </div>
\`;

// Destructuring - Extract values from objects and arrays
const person = { name: 'Bob', age: 25, city: 'New York' };

// Old way
const personName = person.name;
const personAge = person.age;

// Modern way
const { name: personName, age: personAge, city } = person;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

// Rest/Spread operator
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

// Spread arrays
const allNumbers = [...numbers, ...moreNumbers]; // [1, 2, 3, 4, 5, 6]

// Spread objects
const basicInfo = { name: 'Charlie', age: 28 };
const contactInfo = { email: 'charlie@email.com', phone: '123-456-7890' };
const fullProfile = { ...basicInfo, ...contactInfo };`}
          styling=""
          paragraphString="These modern features make JavaScript more expressive and easier to work with."
        />

        {/* LET, CONST, AND SCOPE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">11.2:</span> Let, Const, and Block Scope
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Modern JavaScript provides better variable declaration with `let` and
          `const`, which have block scope and help prevent common programming
          errors.
        </p>

        <CodeElement
          codeString={`// var vs let vs const
// var: function-scoped, can be redeclared, hoisted
// let: block-scoped, cannot be redeclared, temporal dead zone
// const: block-scoped, cannot be redeclared or reassigned

// ❌ Problems with var
function demonstrateVarProblems() {
    console.log(x); // undefined (hoisted)
    var x = 1;
    
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
    }
    
    console.log(i); // 3 (leaked outside loop)
}

// ✅ Better with let and const
function demonstrateModernDeclarations() {
    // console.log(y); // ReferenceError (temporal dead zone)
    let y = 1;
    
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log(j), 100); // Prints 0, 1, 2
    }
    
    // console.log(j); // ReferenceError (block scoped)
    
    // const for values that won't be reassigned
    const PI = 3.14159;
    const users = [];
    
    // PI = 3.14; // TypeError: Assignment to constant variable
    users.push('Alice'); // OK - array contents can change
    
    // Block scope demonstration
    if (true) {
        let blockVariable = 'I am block scoped';
        const BLOCK_CONSTANT = 'Me too';
        
        console.log(blockVariable); // Works
    }
    
    // console.log(blockVariable); // ReferenceError
}

// Best practices for variable declarations
function bestPractices() {
    // Use const by default
    const config = {
        apiUrl: 'https://api.example.com',
        timeout: 5000
    };
    
    // Use let when you need to reassign
    let currentUser = null;
    let attempts = 0;
    
    // Avoid var in modern JavaScript
    // var should only be used if you specifically need function scope
    
    // Destructure with const/let
    const { apiUrl, timeout } = config;
    let { name, email } = getCurrentUser() || {};
    
    return { apiUrl, timeout, name, email };
}`}
          styling=""
          paragraphString="Use const by default, let when you need to reassign, and avoid var in modern JavaScript."
        />

        {/* ARRAY METHODS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">11.3:</span> Modern Array Methods
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          ES6+ introduced powerful array methods that make data manipulation
          more functional and readable. These methods don't modify the original
          array (immutable approach).
        </p>

        <CodeElement
          codeString={`const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Book', price: 15, category: 'Education' },
    { id: 3, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 4, name: 'Shirt', price: 29, category: 'Clothing' }
];

// map() - Transform each element
const productNames = products.map(product => product.name);
// ['Laptop', 'Book', 'Phone', 'Shirt']

const discountedPrices = products.map(product => ({
    ...product,
    discountedPrice: product.price * 0.9
}));

// filter() - Select elements that match a condition
const electronics = products.filter(product => product.category === 'Electronics');
const affordableItems = products.filter(product => product.price < 100);

// find() - Get the first element that matches
const laptop = products.find(product => product.name === 'Laptop');
const cheapItem = products.find(product => product.price < 50);

// reduce() - Combine all elements into a single value
const totalValue = products.reduce((sum, product) => sum + product.price, 0);

const categoryCounts = products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
}, {});

// some() - Check if any element matches
const hasExpensiveItems = products.some(product => product.price > 500);

// every() - Check if all elements match
const allAffordable = products.every(product => product.price < 1000);

// Chain methods for powerful data processing
const expensiveElectronicsNames = products
    .filter(product => product.category === 'Electronics')
    .filter(product => product.price > 500)
    .map(product => product.name.toUpperCase())
    .sort();

// includes() - Check if array contains a value
const categories = ['Electronics', 'Clothing', 'Education'];
const hasElectronics = categories.includes('Electronics');

// Advanced array methods
const numbers = [1, 2, 3, 4, 5];

// flatMap() - Map and flatten
const doubled = numbers.flatMap(n => [n, n * 2]);
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// Array.from() - Create array from iterable
const letters = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// Practical example: Shopping cart calculations
function calculateCartSummary(cartItems) {
    const summary = cartItems.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;
        
        return {
            totalItems: acc.totalItems + item.quantity,
            subtotal: acc.subtotal + itemTotal,
            categories: acc.categories.includes(item.category) 
                ? acc.categories 
                : [...acc.categories, item.category]
        };
    }, {
        totalItems: 0,
        subtotal: 0,
        categories: []
    });
    
    return {
        ...summary,
        tax: summary.subtotal * 0.08,
        total: summary.subtotal * 1.08
    };
}`}
          styling=""
          paragraphString="Modern array methods enable functional programming patterns and make data manipulation more declarative."
        />

        {/* PROMISES AND ASYNC */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">11.4:</span> Promises and Async/Await
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Modern JavaScript provides elegant ways to handle asynchronous
          operations like API calls, file operations, and timers without
          callback hell.
        </p>

        <CodeElement
          codeString={`// Old way: Callback hell
function fetchUserDataOldWay(userId, callback) {
    setTimeout(() => {
        fetch('/api/users/' + userId)
            .then(response => response.json())
            .then(user => {
                fetch('/api/posts?userId=' + userId)
                    .then(response => response.json())
                    .then(posts => {
                        callback(null, { user, posts });
                    })
                    .catch(error => callback(error));
            })
            .catch(error => callback(error));
    }, 1000);
}

// Modern way: Promises
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate API delay
        setTimeout(() => {
            if (!userId) {
                reject(new Error('User ID is required'));
                return;
            }
            
            // Simulate successful response
            resolve({
                id: userId,
                name: 'John Doe',
                email: 'john@example.com'
            });
        }, 1000);
    });
}

// Using Promises
fetchUserData(123)
    .then(user => {
        console.log('User loaded:', user);
        return fetch(\`/api/posts?userId=\${user.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log('Posts loaded:', posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Even better: async/await
async function loadUserProfile(userId) {
    try {
        console.log('Loading user profile...');
        
        // Wait for user data
        const user = await fetchUserData(userId);
        console.log('User loaded:', user);
        
        // Wait for user's posts
        const postsResponse = await fetch(\`/api/posts?userId=\${userId}\`);
        const posts = await postsResponse.json();
        console.log('Posts loaded:', posts);
        
        // Wait for user's settings
        const settingsResponse = await fetch(\`/api/settings?userId=\${userId}\`);
        const settings = await settingsResponse.json();
        
        return {
            user,
            posts,
            settings
        };
        
    } catch (error) {
        console.error('Failed to load user profile:', error);
        throw error; // Re-throw if needed
    }
}

// Parallel async operations
async function loadDashboardData(userId) {
    try {
        // Start all requests at the same time
        const [userPromise, postsPromise, notificationsPromise] = [
            fetchUserData(userId),
            fetch(\`/api/posts?userId=\${userId}\`).then(r => r.json()),
            fetch(\`/api/notifications?userId=\${userId}\`).then(r => r.json())
        ];
        
        // Wait for all to complete
        const [user, posts, notifications] = await Promise.all([
            userPromise,
            postsPromise,
            notificationsPromise
        ]);
        
        return { user, posts, notifications };
        
    } catch (error) {
        console.error('Failed to load dashboard data:', error);
        throw error;
    }
}

// Error handling with Promise.allSettled
async function loadOptionalData(userId) {
    const requests = [
        fetchUserData(userId),
        fetch(\`/api/posts?userId=\${userId}\`).then(r => r.json()),
        fetch(\`/api/preferences?userId=\${userId}\`).then(r => r.json())
    ];
    
    const results = await Promise.allSettled(requests);
    
    const data = {
        user: null,
        posts: [],
        preferences: {}
    };
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            switch (index) {
                case 0: data.user = result.value; break;
                case 1: data.posts = result.value; break;
                case 2: data.preferences = result.value; break;
            }
        } else {
            console.warn(\`Request \${index} failed:\`, result.reason);
        }
    });
    
    return data;
}

// Usage examples
async function demonstrateAsyncPatterns() {
    try {
        // Sequential loading
        console.log('Loading profile sequentially...');
        const profile = await loadUserProfile(123);
        
        // Parallel loading
        console.log('Loading dashboard in parallel...');
        const dashboard = await loadDashboardData(123);
        
        // Optional loading with error tolerance
        console.log('Loading optional data...');
        const optional = await loadOptionalData(123);
        
        console.log('All data loaded:', { profile, dashboard, optional });
        
    } catch (error) {
        console.error('Application error:', error);
    }
}`}
          styling=""
          paragraphString="Async/await makes asynchronous code look and behave more like synchronous code, improving readability."
        />

        {/* MODULES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60">
          <span className="font-light">11.5:</span> ES6 Modules
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          ES6 modules provide a standardized way to organize and share code
          between files, making applications more maintainable and scalable.
        </p>

        <CodeElement
          codeString={`// utils.js - Exporting utilities
export const PI = 3.14159;

export function calculateArea(radius) {
    return PI * radius * radius;
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Default export
export default function greet(name) {
    return \`Hello, \${name}!\`;
}

// user.js - User class module
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
    
    getDisplayName() {
        return this.name.toUpperCase();
    }
    
    isEmailValid() {
        return this.email.includes('@');
    }
}

export const USER_ROLES = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest'
};

// api.js - API functions
const API_BASE = 'https://api.example.com';

async function makeRequest(endpoint, options = {}) {
    const response = await fetch(\`\${API_BASE}\${endpoint}\`, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    });
    
    if (!response.ok) {
        throw new Error(\`API Error: \${response.status}\`);
    }
    
    return response.json();
}

export const api = {
    getUsers: () => makeRequest('/users'),
    getUser: (id) => makeRequest(\`/users/\${id}\`),
    createUser: (userData) => makeRequest('/users', {
        method: 'POST',
        body: JSON.stringify(userData)
    }),
    updateUser: (id, userData) => makeRequest(\`/users/\${id}\`, {
        method: 'PUT',
        body: JSON.stringify(userData)
    })
};

// main.js - Importing and using modules
// Named imports
import { calculateArea, formatCurrency, PI } from './utils.js';
import { User, USER_ROLES } from './user.js';
import { api } from './api.js';

// Default import
import greet from './utils.js';

// Import all exports
import * as Utils from './utils.js';

// Usage examples
console.log(greet('Alice'));
console.log('Circle area:', calculateArea(5));
console.log('Price:', formatCurrency(99.99));

const user = new User('Bob', 'bob@email.com');
console.log('User:', user.getDisplayName());
console.log('Role:', USER_ROLES.USER);

// Using imported API
async function loadUsers() {
    try {
        const users = await api.getUsers();
        console.log('Loaded users:', users);
    } catch (error) {
        console.error('Failed to load users:', error);
    }
}

// Re-exporting from modules
// components/index.js
export { User, USER_ROLES } from './user.js';
export { api } from './api.js';
export { default as greet } from './utils.js';

// Now you can import everything from one place:
// import { User, api, greet } from './components/index.js';

// Dynamic imports (code splitting)
async function loadFeature() {
    try {
        const { AdvancedFeature } = await import('./advanced-feature.js');
        const feature = new AdvancedFeature();
        feature.initialize();
    } catch (error) {
        console.error('Failed to load advanced feature:', error);
    }
}

// HTML usage (note: type="module" is required)
// <script type="module" src="main.js"></script>`}
          styling=""
          paragraphString="ES6 modules enable better code organization and tree-shaking for optimized bundles."
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

        <NavButtons previous="/lessons/js/10" next="/lessons/js/12" />
      </div>
    </>
  );
};
