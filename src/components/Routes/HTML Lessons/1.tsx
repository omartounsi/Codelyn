import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useRef, useState } from "react";

export const HTML1 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 1:</span>{" "}
        Introduction to HTML:
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT IS HTML */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.1: </span>
          What is HTML?:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML stands for{" "}
          <span className="font-bold underline">HyperText Markup Language</span>
          . It's the standard language used to create and structure content on
          the web. HyperText refers to links that connect web pages. Markup
          Language means you use{" "}
          <span className="text-[#6da150] font-bold">tags</span> to "mark" parts
          of the content as headings, paragraphs, images, etc.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Think of HTML as the skeleton of a webpage — it tells the browser what
          content to show and how it's organized, but not how it looks (that's
          CSS).
        </p>

        {/* THE ROLE  */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.2: </span>
          The Role of HTML in Web Development:
        </h3>
        <p className="max-w-2xl -mb-4 text-xl font-light text-foreground text-neutral-100">
          Web development typically has 3 core pillars:
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Language
              </th>
              <th className="w-auto max-w-2xl p-2 text-xl font-medium border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="max-w-2xl p-2 text-xl font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                HTML
              </td>
              <td className="max-w-2xl p-2 text-xl font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Structure (what's on the page)
              </td>
            </tr>
            <tr className="text-center">
              <td className="max-w-2xl p-2 text-xl font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                CSS
              </td>
              <td className="max-w-2xl p-2 text-xl font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Style (how it looks)
              </td>
            </tr>
            <tr className="text-center">
              <td className="max-w-2xl p-2 text-xl font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                JavaScript
              </td>
              <td className="max-w-2xl p-2 text-xl font-light border border-dashed border-neutral-600 text-foreground text-neutral-100">
                Behavior (how it works)
              </td>
            </tr>
          </tbody>
        </table>
        <li className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML comes first. It gives the foundation upon which everything else
          is built.
        </li>

        {/* STRUCT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.3: </span>
          The Basic Structure of an HTML Document
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Every HTML document follows a specific structure. On the right is the
          basic template of an "empty" HTML document.
        </p>
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 mb-2">
          Let's break it down:
        </h3>
        {/* BREAKING IT DOWN */}
        <div className="flex flex-col gap-6 ">
          {/* DOCTYPE */}
          <CodeElement
            codeString={`<!DOCTYPE html>`}
            paragraphString="Tells the browser you're using HTML5."
          />

          {/* HTML */}
          <CodeElement
            codeString={`<html>...</html>`}
            paragraphString="The root element. Everything goes inside this."
          />

          {/* HEAD */}
          <CodeElement
            codeString={`<head>...</head>`}
            paragraphString="Metadata for the page (title, links, fonts, etc.)"
          />

          {/* BODY */}
          <CodeElement
            codeString={`<body>...</body>`}
            paragraphString="The content you actually see on the page."
          />
        </div>

        {/* TAGS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.4: </span>
          Tags and Elements
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML is made of tags, and tags create elements.
        </p>

        <div className="flex flex-col gap-2 max-w-[50%] mx-auto">
          <CodeElement codeString={`<p>This is a paragraph.</p>`} />
          <CodeElement codeString={`<p> is an opening tag.`} />
          <CodeElement codeString={`</p> is a closing tag.`} />
        </div>

        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="font-medium text-neutral-50 ">Note :</span> Most
          elements come in pairs: opening and closing. Some are self-closing
          (like &lt;img /&gt;, but well cover those later).
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          <span className="font-medium text-neutral-50 ">Exercice :</span> Try
          replacing the blank in the editor with a few words.
        </p>

        {/* TEST */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.5: </span>
          Real Example: A Mini Web Page
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          As you can see in the editor on the left, we already have a heading
          (The large text) and a small paragraph. Switch over to the editor tab.
          Try changing the value between the &lt;h1&gt; and &lt;p&gt; tags.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You should already see the result of your changes in the index.html
          file.
        </p>

        {/* SUMMARY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 mb-2">
          Summary:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML gives structure to web content. It uses tags to define elements.
          Every page starts with a standard structure. Tags are usually paired
          with opening and closing versions.
        </p>
        {/* QUIZ */}
        <Quiz />
        <h3 className="mb-2 text-xl italic font-light leading-tight tracking-tighter text-white opacity-60">
          Note: you can use the side arrows to navigate betwen the lessons
        </h3>
        {/* NEXT / PREV */}
        <NavButtons previous={null} next="/lessons/html/2" />
      </div>
    </>
  );
};

const Quiz = () => {
  const [right, setRight] = useState(false);
  const rightAnswerRef = useRef(null);

  const handleAnswer = (answer: number) => {
    if (answer === 2) {
      if (rightAnswerRef.current) {
        setRight(true);
      }
    } else {
      setRight(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 mb-2">
          Quiz (Optional):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Question: What's the purpose of the head section in HTML?
        </p>
        <div className="flex flex-col w-full h-auto gap-2 rounded-lg">
          {/* ANSWER1 */}
          <div
            onClick={() => handleAnswer(1)}
            className="flex items-center gap-3 px-2 transition-transform duration-300 ease-in-out border rounded-lg cursor-pointer border-neutral-700 h-14 bg-neutral-900/30 hover:scale-105 will-change-transform "
          >
            {/* SQUARE */}
            <div className="w-10 h-10 border bg-neutral-900 border-neutral-700 rounded-xl"></div>
            {/* ANSWER */}
            <p className="max-w-2xl text-lg font-light text-foreground text-neutral-100">
              A. Display content
            </p>
          </div>

          {/* ANSWER2 */}
          <div
            ref={rightAnswerRef}
            onClick={() => handleAnswer(2)}
            className={`flex items-center gap-3 px-2 transition-transform duration-300 ease-in-out border rounded-lg cursor-pointer border-neutral-700 h-14  hover:scale-105 will-change-transform ${right ? "bg-neutral-800" : "bg-neutral-900/30"}`}
          >
            {/* SQUARE */}
            <div className="w-10 h-10 border bg-neutral-900 border-neutral-700 rounded-xl"></div>
            {/* ANSWER */}
            <p className="max-w-2xl text-lg font-light text-foreground text-neutral-100">
              B. Hold metadata
            </p>
          </div>

          {/* ANSWER3 */}
          <div
            onClick={() => handleAnswer(3)}
            className="flex items-center gap-3 px-2 transition-transform duration-300 ease-in-out border rounded-lg cursor-pointer border-neutral-700 h-14 bg-neutral-900/30 hover:scale-105 will-change-transform "
          >
            {/* SQUARE */}
            <div className="w-10 h-10 border bg-neutral-900 border-neutral-700 rounded-xl"></div>
            {/* ANSWER */}
            <p className="max-w-2xl text-lg font-light text-foreground text-neutral-100">
              C. Create links
            </p>
          </div>

          {/* ANSWER4 */}
          <div
            onClick={() => handleAnswer(4)}
            className="flex items-center gap-3 px-2 transition-transform duration-300 ease-in-out border rounded-lg cursor-pointer border-neutral-700 h-14 bg-neutral-900/30 hover:scale-105 will-change-transform "
          >
            {/* SQUARE */}
            <div className="w-10 h-10 border bg-neutral-900 border-neutral-700 rounded-xl"></div>
            {/* ANSWER */}
            <p className="max-w-2xl text-lg font-light text-foreground text-neutral-100">
              D. Add CSS styles
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
