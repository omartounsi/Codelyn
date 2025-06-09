import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const HTML9 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("html", 9);

  const handleMarkComplete = () => {
    markLessonComplete("html", 9);
  };

  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 9:</span> HTML
        Structure Best Practices
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.1: </span>
          Introduction to Best Practices
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Now that you've learned the fundamentals of HTML, let's explore the
          best practices that will make your code clean, maintainable, and
          professional. These practices will help you write better HTML from the
          start.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Following these guidelines will make your websites more accessible,
          faster to load, and easier for other developers to understand and work
          with.
        </p>

        {/* DOCUMENT STRUCTURE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.2: </span>
          Proper Document Structure
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Every HTML document should follow a consistent structure. This
          includes the proper DOCTYPE, html element with language attribute, and
          organized head and body sections.
        </p>
        <CodeElement
          codeString={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <header>
    <!-- Navigation content -->
  </header>
  
  <main>
    <!-- Main content -->
  </main>
  
  <footer>
    <!-- Footer content -->
  </footer>
</body>
</html>`}
          styling="whitespace-pre"
          paragraphString="This structure provides a solid foundation for any webpage with proper metadata and semantic layout."
        />

        {/* ACCESSIBILITY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.3: </span>
          Accessibility Best Practices
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Making your website accessible means everyone can use it, including
          people with disabilities. This involves proper alt text, form labels,
          and semantic HTML elements.
        </p>
        <div className="flex flex-col gap-6">
          <CodeElement
            codeString={`<!-- Good: Descriptive alt text -->
<img src="dog.jpg" alt="Golden retriever playing fetch in a sunny park">

<!-- Good: Proper form labels -->
<label for="email">Email Address (required)</label>
<input type="email" id="email" name="email" required>

<!-- Good: Skip navigation for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>`}
            styling="whitespace-pre"
            paragraphString="These examples show how to make your content accessible to all users."
          />
        </div>

        {/* PERFORMANCE AND SEO */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.4: </span>
          Performance and SEO
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Well-structured HTML improves both website performance and search
          engine optimization. Use proper heading hierarchy, descriptive titles,
          and efficient markup.
        </p>
        <CodeElement
          codeString={`<!-- Good: Proper heading hierarchy -->
<h1>Main Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
  <h2>Another Section</h2>

<!-- Good: Descriptive meta tags -->
<meta name="description" content="Learn HTML fundamentals with practical examples">
<meta name="keywords" content="HTML, web development, tutorial">`}
          styling="whitespace-pre"
          paragraphString="Proper heading hierarchy and meta tags help search engines understand your content."
        />

        {/* CODE ORGANIZATION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.5: </span>
          Code Organization
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Keep your HTML clean and organized with proper indentation, meaningful
          class names, and logical structure. This makes your code easier to
          read and maintain.
        </p>
        <CodeElement
          codeString={`<!-- Good: Clean, organized structure -->
<section class="hero-section">
  <div class="container">
    <h1 class="hero-title">Welcome to Our Site</h1>
    <p class="hero-description">
      Discover amazing content and features.
    </p>
    <button class="cta-button">Get Started</button>
  </div>
</section>`}
          styling="whitespace-pre"
          paragraphString="Use meaningful class names and consistent indentation to keep your code organized."
        />

        {/* VALIDATION AND CONCLUSION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">9.6: </span>
          Validation and Moving Forward
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Always validate your HTML code to catch errors early. The W3C HTML
          validator is a great tool for this. Remember, learning HTML is just
          the beginning of your web development journey!
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You've now completed all the HTML fundamentals! You know how to create
          structure, add content, build forms, and follow best practices. Next,
          you'll want to learn CSS to style your HTML and make it beautiful.
        </p>
        <CodeElement
          codeString={`<!-- Congratulations! You can now create: -->
- Well-structured web pages
- Accessible content for all users  
- Forms that collect user input
- Semantic HTML that search engines love
- Clean, maintainable code

<!-- Next steps in your web development journey: -->
1. Learn CSS for styling and layout
2. Explore JavaScript for interactivity  
3. Study responsive design principles
4. Practice building complete projects`}
          styling="whitespace-pre"
          paragraphString="You've mastered HTML fundamentals! Keep practicing and building projects to strengthen your skills."
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
                : "bg-blue-500 hover:bg-blue-600 text-white hover:scale-105"
            }`}
          >
            <IoCheckmarkCircle className="w-5 h-5" />
            {lessonCompleted ? "Completed" : "Mark Complete"}
          </button>
        </div>

        {/* NAVIGATION */}
        <NavButtons previous="/lessons/html/8" next={null} />
      </div>
    </>
  );
};
