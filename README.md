# 🚀 Codelyn - Interactive Web Development Learning Platform

<div align="center">

![Codelyn Logo](https://img.shields.io/badge/Codelyn-Learning%20Platform-blue?style=for-the-badge&logo=react)

**An immersive, full-stack learning platform for aspiring web developers**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.7-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [✨ Key Features](#-key-features)
- [🏗️ Technical Architecture](#️-technical-architecture)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📚 API Documentation](#-api-documentation)
- [🎯 Admin Dashboard](#-admin-dashboard)
- [🛡️ Security Features](#️-security-features)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## Overview

Codelyn is a comprehensive, full-stack learning platform designed to help aspiring developers master web development through structured lessons, interactive projects, and real-time coding environments. Built with modern technologies and best practices, it provides a complete educational ecosystem from beginner to advanced levels.

## ✨ Key Features

### 🔐 **Advanced Authentication System**

- **JWT-based Authentication** with secure token management
- **Role-based Access Control** (Admin, Student, Viewer)
- **Persistent Sessions** with localStorage token storage
- **Protected Routes** for authenticated content
- **Password Security** with bcrypt hashing

### 📚 **Comprehensive Learning Path**

- **Progressive Curriculum**: HTML, CSS, JavaScript, DOM manipulation
- **Advanced Topics**: Git, CLI, SASS, Tailwind CSS, React
- **Interactive Lessons** with hands-on coding exercises
- **Real-time Progress Tracking** with persistent lesson completion
- **Visual Progress Indicators** with circular progress bars
- **Project-based Learning** with real-world applications
- **Quick Navigation** with "Back to Course" functionality
- **Interactive Quizzes** with instant feedback and educational responses

### 🎓 **Enhanced Learning Experience**

- **Dynamic Progress System** with MongoDB-backed persistence
- **Chapter Overview Cards** with completion status indicators
- **Dropdown Action Menus** for lesson management (Open/Mark Complete)
- **Circular Progress Visualization** with gradient styling and percentage display
- **Course Statistics** showing completed vs remaining lessons
- **Lesson Completion Tracking** across all course modules
- **Smart Navigation** between lessons and course overviews

### 💻 **Live Coding Environment**

- **Monaco Editor Integration** (VS Code engine)
- **Real-time Preview** for HTML, CSS, and JavaScript
- **Custom Dark Theme** optimized for coding
- **Code Reset & Save** functionality
- **Multi-language Support** with syntax highlighting
- **Fixed Navigation Controls** with "Back to Course" buttons
- **Seamless Lesson Switching** within course modules

### 🎯 **Smart Progress Management**

- **ProgressContext Provider** for centralized state management
- **MongoDB Integration** for persistent progress tracking
- **Real-time Updates** across all lesson components
- **Course Progress Calculation** with completion percentages
- **Lesson Completion Persistence** across browser sessions
- **Visual Feedback** with checkmarks and color-coded indicators

### 📊 **Admin Dashboard**

- **User Management** with role assignment capabilities
- **System Health Monitoring** (CPU, Memory, Database)
- **Real-time Analytics** with interactive charts
- **User Creation Tools** with password generation
- **Dashboard Overview** with key metrics

### 🎨 **Modern UI/UX**

- **Responsive Design** across all devices
- **Tailwind CSS** with custom configurations
- **Framer Motion** animations and transitions
- **Nivo Charts** for data visualization
- **Accessibility-focused** interface design

### 🚀 **Enhanced Lesson Interface**

- **Two-Column Layout** with chapters list and progress tracking
- **Interactive Dropdown Menus** for lesson actions
- **Circular Progress Indicators** with gradient styling
- **Visual Completion Status** with checkmarks and color coding
- **Fixed Navigation Elements** for improved user flow
- **Responsive Chapter Cards** with hover effects and scaling
- **Course Statistics Dashboard** with completed/remaining lesson counts

## 🏗️ Technical Architecture

### **Frontend Stack**

```typescript
React 19.0.0          // UI Framework
TypeScript 5.0+       // Type Safety
React Router 7.6.0    // Client-side Routing
Tailwind CSS 4.1.7    // Utility-first Styling
Framer Motion 12.9.4  // Animations
Monaco Editor 4.7.0   // Code Editor
Nivo Charts 0.99.0    // Data Visualization
Axios 1.9.0           // HTTP Client

// New Core Components
ProgressContext        // Centralized progress state management
BackToCourse          // Fixed navigation component
Quiz System           // Interactive lesson quizzes
Circular Progress     // Visual progress indicators
```

### **Backend Stack**

```javascript
Node.js + Express 5.1.0    // Server Framework
MongoDB + Mongoose 8.15.0   // Database & ODM
JWT 9.0.2                   // Authentication
bcryptjs 3.0.2             // Password Hashing
CORS 2.8.5                 // Cross-Origin Support
dotenv 16.5.0              // Environment Variables
```

### **Development Tools**

```json
Vite 5.0+                  // Build Tool
ESLint                     // Code Linting
TypeScript Compiler        // Type Checking
Nodemon 3.1.10            // Development Server
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0+ and npm
- **MongoDB** 6.0+ (local or Atlas)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/codelyn.git
   cd codelyn
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Environment Configuration**

   Create `server/.env`:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/codelyn

   # Authentication
   JWT_SECRET=your_super_secure_jwt_secret_key_here

   # Server
   PORT=3000
   NODE_ENV=development
   ```

5. **Start the development servers**

   **Backend (Terminal 1):**

   ```bash
   cd server
   node index.js
   ```

   **Frontend (Terminal 2):**

   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api

## 📁 Project Structure

```
codelyn/
├── 📁 public/                    # Static assets
├── 📁 src/                       # Frontend source code
│   ├── 📁 components/            # React components
│   │   ├── 📁 Routes/            # Page components
│   │   │   ├── 📁 dashboard/     # Admin dashboard
│   │   │   ├── 📁 HTML Lessons/  # HTML learning modules
│   │   │   │   ├── 📄 mainHTML.tsx    # Course overview with progress
│   │   │   │   ├── 📄 HTMLLesson.tsx  # Lesson wrapper component
│   │   │   │   └── 📄 1.tsx - 9.tsx   # Individual lessons
│   │   │   ├── 📁 CSS Lessons/   # CSS learning modules
│   │   │   │   ├── 📄 mainCSS.tsx     # Course overview
│   │   │   │   ├── 📄 CSSLesson.tsx   # Lesson wrapper component
│   │   │   │   └── 📄 1.tsx - 9.tsx   # Individual lessons
│   │   │   └── 📄 lessons.tsx    # Lesson catalog
│   │   └── 📁 tools/             # Utility components
│   │       ├── 📄 backtocourse.tsx    # Navigation component
│   │       ├── 📄 codeelement.tsx     # Code display component
│   │       └── 📄 navbuttons.tsx      # Lesson navigation
│   ├── 📁 context/               # React Context providers
│   │   ├── 📄 AuthContext.tsx    # Authentication state
│   │   └── 📄 ProgressContext.tsx # Progress tracking state
│   ├── 📁 assets/                # Images, icons, fonts
│   └── 📄 App.tsx                # Main application
├── 📁 server/                    # Backend source code
│   ├── 📁 config/                # Database configuration
│   ├── 📁 middleware/            # Express middleware
│   ├── 📁 models/                # MongoDB schemas
│   │   ├── 📄 Progress.js        # User progress schema
│   │   ├── 📄 User.js            # User authentication schema
│   │   └── 📄 Course.js          # Course structure schema
│   ├── 📁 routes/                # API route handlers
│   │   ├── 📄 progressRoutes.js  # Progress tracking API
│   │   ├── 📄 authRoutes.js      # Authentication API
│   │   └── 📄 adminRoutes.js     # Admin dashboard API
│   └── 📄 index.js               # Server entry point
├── 📄 package.json               # Frontend dependencies
├── 📄 vite.config.ts             # Vite configuration
├── 📄 tailwind.config.js         # Tailwind CSS config
└── 📄 tsconfig.json              # TypeScript config
```

## 🔧 Configuration

### **Vite Configuration**

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
```

### **Tailwind CSS**

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
    },
  },
};
```

## 📚 API Documentation

### **Authentication Endpoints**

```
POST /api/auth/register      # User registration
POST /api/auth/login         # User login
GET  /api/auth/verify        # Token verification
```

### **Admin Endpoints**

```
GET  /api/admin/dashboard    # Dashboard statistics
POST /api/admin/create-user  # Create user with role
GET  /api/admin/users        # List all users
```

### **Course Endpoints**

```
GET  /api/courses           # Get all courses
GET  /api/courses/:id       # Get specific course
POST /api/courses           # Create new course
```

### **Progress Tracking Endpoints**

```
GET  /api/progress/:userId           # Get user's complete progress
POST /api/progress/complete          # Mark lesson as complete
GET  /api/progress/:userId/:courseType  # Get course-specific progress
PUT  /api/progress/update            # Update lesson progress
```

## 🎯 Admin Dashboard

The admin dashboard provides comprehensive platform management:

- **📊 System Health**: Real-time CPU, memory, and database metrics
- **👥 User Management**: Create users with role assignment (Admin/Student/Viewer)
- **📈 Analytics**: Interactive charts showing user distribution and activity
- **⚡ Quick Actions**: Platform maintenance and management tools
- **📋 Recent Activity**: Monitor new user registrations and system events

### Admin Features:

- **User Creation**: Generate secure passwords and assign roles
- **Role Management**: Control access levels across the platform
- **System Monitoring**: Track server performance and health
- **Data Visualization**: Charts powered by Nivo for clear insights

## 🛡️ Security Features

- **🔐 Password Hashing**: bcrypt with salt rounds for secure storage
- **🎫 JWT Tokens**: Stateless authentication with secure token generation
- **🛡️ Input Validation**: Server-side validation and sanitization
- **🚪 Protected Routes**: Role-based access control throughout the app
- **🔒 CORS Configuration**: Secure cross-origin resource sharing
- **⚡ Rate Limiting**: API endpoint protection (recommended for production)

## 🚀 Deployment

### **Production Build**

```bash
# Frontend
npm run build

# Backend
cd server
NODE_ENV=production node index.js
```

### **Environment Variables (Production)**

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codelyn
JWT_SECRET=production_jwt_secret_256_bits_minimum
PORT=3000
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines:

- Follow TypeScript best practices
- Maintain consistent code formatting
- Write descriptive commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by the Codelyn Team**

[🌐 Website](https://codelyn.dev) • [📧 Contact](mailto:contact@codelyn.dev) • [🐛 Issues](https://github.com/yourusername/codelyn/issues)

</div>
