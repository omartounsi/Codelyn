export const HTML1 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 1:</span>{" "}
        Introduction to HTML:
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT IS HTML */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.1: </span>
          What is HTML?:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          HTML stands for{" "}
          <span className="font-bold underline">HyperText Markup Language</span>
          . It's the standard language used to create and structure content on
          the web. HyperText refers to links that connect web pages. Markup
          Language means you use{" "}
          <span className="text-[#6da150] font-bold">tags</span> to "mark" parts
          of the content as headings, paragraphs, images, etc.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          Think of HTML as the skeleton of a webpage — it tells the browser what
          content to show and how it's organized, but not how it looks (that's
          CSS).
        </p>

        {/* THE ROLE  */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.2: </span>
          The Role of HTML in Web Development:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 -mb-4">
          Web development typically has 3 core pillars:
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Language
              </th>
              <th className="border border-neutral-600 border-dashed max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 w-auto">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                HTML
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Structure (what's on the page)
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                CSS
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Style (how it looks)
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                JavaScript
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Behavior (how it works)
              </td>
            </tr>
          </tbody>
        </table>
        <li className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          HTML comes first. It gives the foundation upon which everything else
          is built.
        </li>

        {/* STRUCT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.3: </span>
          The Basic Structure of an HTML Document
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
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
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          HTML is made of tags, and tags create elements.
        </p>

        <div className="flex flex-col gap-2 max-w-[50%] mx-auto">
          <CodeElement codeString={`<p>This is a paragraph.</p>`} />
          <CodeElement codeString={`<p> is an opening tag.`} />
          <CodeElement codeString={`</p> is a closing tag.`} />
        </div>

        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          <span className="font-medium  text-neutral-50 ">Note :</span> Most
          elements come in pairs: opening and closing. Some are self-closing
          (like &lt;img /&gt;, but well cover those later).
        </p>

        {/* TEST */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">1.5: </span>
          Real Example: A Mini Web Page
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          As you can see in the editor on the left, we already have a heading
          (The large text) and a small paragraph. Switch over to the editor tab.
          Try changing the value between the &lt;h1&gt; and &lt;p&gt; tags.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          You should already see the result of your changes in the index.html
          file.
        </p>

        {/* SUMMARY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 mb-2">
          Summary:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          HTML gives structure to web content. It uses tags to define elements.
          Every page starts with a standard structure. Tags are usually paired
          with opening and closing versions.
        </p>
        {/* QUIZ */}
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 mb-2">
            Quiz (Optional):
          </h3>
          <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
            Question: What's the purpose of the head section in HTML?
          </p>
          <div className="w-full h-auto rounded-lg  flex flex-col gap-2">
            {/* ANSWER1 */}
            <div className="flex items-center px-2 rounded-lg border border-neutral-700 h-14 gap-3 bg-neutral-900/30 hover:scale-105 transition-transform duration-300 ease-in-out will-change-transform cursor-pointer ">
              {/* SQUARE */}
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-xl"></div>
              {/* ANSWER */}
              <p className="max-w-2xl text-lg font-light text-foreground  text-neutral-100">
                A. Display content
              </p>
            </div>

            {/* ANSWER2 */}
            <div className="flex items-center px-2 rounded-lg border border-neutral-700 h-14 gap-3 bg-neutral-900/30 hover:scale-105 transition-transform duration-300 ease-in-out will-change-transform cursor-pointer ">
              {/* SQUARE */}
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-xl"></div>
              {/* ANSWER */}
              <p className="max-w-2xl text-lg font-light text-foreground  text-neutral-100">
                B. Hold metadata
              </p>
            </div>

            {/* ANSWER3 */}
            <div className="flex items-center px-2 rounded-lg border border-neutral-700 h-14 gap-3 bg-neutral-900/30 hover:scale-105 transition-transform duration-300 ease-in-out will-change-transform cursor-pointer ">
              {/* SQUARE */}
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-xl"></div>
              {/* ANSWER */}
              <p className="max-w-2xl text-lg font-light text-foreground  text-neutral-100">
                C. Create links
              </p>
            </div>

            {/* ANSWER4 */}
            <div className="flex items-center px-2 rounded-lg border border-neutral-700 h-14 gap-3 bg-neutral-900/30 hover:scale-105 transition-transform duration-300 ease-in-out will-change-transform cursor-pointer ">
              {/* SQUARE */}
              <div className="w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-xl"></div>
              {/* ANSWER */}
              <p className="max-w-2xl text-lg font-light text-foreground  text-neutral-100">
                D. Add CSS styles
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type CodeElementProps = {
  codeString: string;
  paragraphString?: string;
};

const CodeElement = ({ codeString, paragraphString }: CodeElementProps) => {
  return (
    <div className="flex flex-col justify-center border p-4 border-neutral-800 rounded-lg gap-1">
      <code className="w-full h-auto py-1 px-3 border border-neutral-800 bg-neutral-800/40">
        {codeString}
      </code>
      <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 px-3">
        {paragraphString}
      </p>
    </div>
  );
};
