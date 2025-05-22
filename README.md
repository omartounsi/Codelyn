# Codelyn - Interactive Web Development Learning Platform

## Overview

Codelyn is an immersive platform designed to help aspiring developers master web development through structured lessons, interactive projects, and a real-time coding environment. With a focus on hands-on learning, Codelyn provides a comprehensive path from beginner to proficient web developer.

## Key Features

### 1. **User Authentication System**

- Secure registration and login with JWT-based authentication
- Persistent sessions with localStorage token management
- Protected routes for authenticated content
- Form validation with helpful error messages

### 2. **Structured Learning Path**

- **Core Lessons**: Progressive modules covering HTML, CSS, JavaScript, and DOM manipulation
- **Bonus Content**: Advanced topics including Git, command-line usage, SASS, and Tailwind CSS
- **Progress Tracking**: Visual indicators showing completion status across all learning materials

### 3. **Interactive Projects**

- Hands-on projects that reinforce lesson concepts
- Real-world applications to build practical skills
- Project-specific guidance and requirements

### 4. **Live Coding Environment**

- Built-in code editor powered by Monaco Editor (same engine as VS Code)
- Real-time preview of HTML, CSS, and JavaScript code
- Custom dark theme for reduced eye strain during extended coding sessions
- Code reset functionality for experimentation

### 5. **Modern UI/UX**

- Responsive design that works across devices
- Custom grid layouts with Tailwind CSS
- Subtle animations and transitions for an engaging experience
- Accessibility-focused interface elements

## Technical Architecture

### Frontend

- **Framework**: React with TypeScript
- **Routing**: React Router with protected routes
- **State Management**: Context API for global state (authentication, user data)
- **Styling**: Tailwind CSS with custom configurations
- **Code Editor**: Monaco Editor integration

### Backend

- **Server**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT token generation and verification
- **API**: RESTful endpoints with proper error handling

### Security Features

- Password hashing with bcrypt
- Token-based authentication flow
- Input validation and sanitization
- Secure HTTP-only cookies option

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up environment variables
4. Start the development server with `npm run dev`
5. Visit `http://localhost:5173` in your browser

## License

This project is licensed under the MIT License - see the LICENSE file for details.
