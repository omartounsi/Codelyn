import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";

export const HTML8 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 8:</span> Semantic
        HTML
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.1: </span>
          What is Semantic HTML?
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Semantic HTML means using HTML elements that have meaning beyond just
          how they look. Instead of using generic div elements everywhere, we
          use specific elements that describe the content's purpose.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          This makes your website more accessible to screen readers, better for
          SEO, and easier for other developers to understand and maintain.
        </p>

        {/* PAGE STRUCTURE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.2: </span>
          Page Structure Elements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML5 introduced several elements specifically for page structure.
          These replace generic div elements with meaningful containers.
        </p>
        <div className="flex flex-col gap-6">
          <CodeElement
            codeString={`<header>
  <h1>My Website</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
  </nav>
</header>`}
            styling="whitespace-pre"
            paragraphString="The <header> element contains introductory content and navigation."
          />
          <CodeElement
            codeString={`<main>
  <h2>Main Content</h2>
  <p>The primary content of the page goes here.</p>
</main>`}
            styling="whitespace-pre"
            paragraphString="The <main> element contains the primary content of the page."
          />
          <CodeElement
            codeString={`<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>`}
            styling="whitespace-pre"
            paragraphString="The <footer> element contains information about the page or section."
          />
        </div>

        {/* CONTENT SECTIONING */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.3: </span>
          Content Sectioning
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          These elements help organize your content into logical sections,
          making it easier to understand and navigate.
        </p>
        <div className="flex flex-col gap-6">
          <CodeElement
            codeString={`<section>
  <h2>About Us</h2>
  <p>Information about our company.</p>
</section>`}
            styling="whitespace-pre"
            paragraphString="The <section> element represents a standalone section of content."
          />
          <CodeElement
            codeString={`<article>
  <h2>Blog Post Title</h2>
  <p>The content of the blog post...</p>
</article>`}
            styling="whitespace-pre"
            paragraphString="The <article> element represents independent, self-contained content."
          />
          <CodeElement
            codeString={`<aside>
  <h3>Related Links</h3>
  <p>Additional information or sidebar content.</p>
</aside>`}
            styling="whitespace-pre"
            paragraphString="The <aside> element contains content that's related but separate from main content."
          />
        </div>

        {/* TEXT SEMANTICS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.4: </span>
          Text Semantics
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          These elements give meaning to specific pieces of text, helping both
          browsers and users understand the content better.
        </p>
        <div className="flex flex-col gap-6">
          <CodeElement
            codeString={`<strong>This text is important</strong>`}
            paragraphString="The <strong> element indicates text of strong importance."
          />
          <CodeElement
            codeString={`<em>This text is emphasized</em>`}
            paragraphString="The <em> element indicates text that should be emphasized."
          />
          <CodeElement
            codeString={`<mark>This text is highlighted</mark>`}
            paragraphString="The <mark> element highlights text for reference purposes."
          />
          <CodeElement
            codeString={`<time dateTime="2024-01-15">January 15, 2024</time>`}
            paragraphString="The <time> element represents a specific period in time."
          />
        </div>

        {/* INTERACTIVE ELEMENTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.5: </span>
          Interactive Elements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML provides semantic elements for interactive content that users can
          engage with.
        </p>
        <CodeElement
          codeString={`<details>
  <summary>Click to expand</summary>
  <p>This content is hidden until the user clicks the summary.</p>
</details>`}
          styling="whitespace-pre"
          paragraphString="The <details> and <summary> elements create expandable content sections."
        />

        {/* COMPLETE EXAMPLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">8.6: </span>
          Complete Semantic Structure
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Here's how all these semantic elements work together to create a
          well-structured, meaningful webpage.
        </p>
        <CodeElement
          codeString={`<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#posts">Posts</a>
  </nav>
</header>

<main>
  <article>
    <h2>My First Blog Post</h2>
    <p>This is <strong>really important</strong> content!</p>
    <time dateTime="2024-01-15">January 15, 2024</time>
  </article>
  
  <aside>
    <h3>About the Author</h3>
    <p>Information about me...</p>
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Blog</p>
</footer>`}
          styling="whitespace-pre"
          paragraphString="This example shows how semantic elements create a clear, meaningful document structure."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try this complete example in the editor and see how semantic HTML
          creates better structure than using div elements everywhere!
        </p>

        {/* NAVIGATION */}
        <NavButtons previous="/lessons/html/7" next="/lessons/html/9" />
      </div>
    </>
  );
};
