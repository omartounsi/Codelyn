import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";
import { useState } from "react";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const HTML1 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("html", 1);

  const handleMarkComplete = () => {
    markLessonComplete("html", 1);
  };
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

        {/* MARK AS COMPLETE BUTTON */}
        <div className="flex items-center gap-4 p-4 mt-6 border bg-neutral-800/50 rounded-xl border-neutral-700">
          <div className="flex-1">
            <h4 className="mb-1 text-lg font-semibold text-neutral-200">
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
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const answers = [
    { id: 1, text: "A. Display content" },
    { id: 2, text: "B. Hold metadata" },
    { id: 3, text: "C. Create links" },
    { id: 4, text: "D. Add CSS styles" },
  ];

  const correctAnswerId = 2;

  const handleAnswer = (answerId: number) => {
    setSelectedAnswer(answerId);
    setShowResult(true);
  };

  const getAnswerStatus = (answerId: number) => {
    if (!showResult) return "default";
    if (selectedAnswer === answerId) {
      return answerId === correctAnswerId ? "correct" : "incorrect";
    }
    if (answerId === correctAnswerId) return "reveal-correct";
    return "default";
  };

  const getAnswerStyles = (status: string) => {
    switch (status) {
      case "correct":
        return {
          container: "bg-green-500/20 border-green-500",
          square: "bg-green-500 border-green-500",
          icon: "✓",
        };
      case "incorrect":
        return {
          container: "bg-red-500/20 border-red-500",
          square: "bg-red-500 border-red-500",
          icon: "✗",
        };
      case "reveal-correct":
        return {
          container: "bg-green-500/10 border-green-500/50",
          square: "bg-green-500 border-green-500",
          icon: "✓",
        };
      default:
        return {
          container: "bg-neutral-900/30",
          square: "bg-neutral-900 border-neutral-700",
          icon: "",
        };
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
          {answers.map((answer) => {
            const status = getAnswerStatus(answer.id);
            const styles = getAnswerStyles(status);

            return (
              <div
                key={answer.id}
                onClick={() => handleAnswer(answer.id)}
                className={`flex items-center gap-3 px-2 transition-transform duration-300 ease-in-out border rounded-lg cursor-pointer border-neutral-700 h-14 hover:scale-105 will-change-transform ${styles.container}`}
              >
                <div
                  className={`w-10 h-10 border rounded-xl flex items-center justify-center ${styles.square}`}
                >
                  {(selectedAnswer === answer.id ||
                    status === "reveal-correct") &&
                    styles.icon}
                </div>
                <p className="max-w-2xl text-lg font-light text-foreground text-neutral-100">
                  {answer.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Result feedback */}
        {showResult && (
          <div
            className={`mt-4 p-4 rounded-lg border ${
              selectedAnswer === correctAnswerId
                ? "bg-green-500/10 border-green-500/30"
                : "bg-red-500/10 border-red-500/30"
            }`}
          >
            <p
              className={`text-lg font-medium ${
                selectedAnswer === correctAnswerId
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {selectedAnswer === correctAnswerId
                ? "✓ Correct! The head section holds metadata for the page."
                : "✗ Incorrect. The head section holds metadata, not visible content."}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
