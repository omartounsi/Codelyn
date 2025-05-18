import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";

export const HTML2 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 2:</span> Text and
        Headings:
      </h1>
      <div className="flex flex-col gap-7">
        {/* WHAT IS HTML */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.1: </span>
          Paragraphs and Line Breaks:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          We already saw a paragraph element in the previous lesson. It's a way
          to display a block of text. By default, a paragraph element has
          relatively small text font and light-ish weight. Similarly, other text
          display elements have default font size and weight.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          Other tags have different use cases, one of the more commonly used
          ones is the heading
        </p>
        {/* HEADINGS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.2: </span>
          Headings
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          Headings are meant to display more eye-catching/important information.
          A title, an event, a discount...
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          You may think to yourself, some news and events are more impotant than
          others, therefore they probably deserve to grab the most attention.
          That's why headings come in different sizes. They go from 1-6. If you
          check out the editor, you'll get a clear idea of how they work. Try
          changing them.
        </p>
        {/* EMPH */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.3: </span>
          Emphasis Tags:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 ">
          Emphais tags are use to decorate or "emphasize" already existing text.
          Let's look at some examples:
        </p>
        <CodeElement
          codeString="This sentence is underlined"
          styling="underline"
          paragraphString="The <u>...</u> tag is used to underline the text that it wraps."
        />
        <CodeElement
          codeString="This sentence is bold"
          styling="font-extrabold"
          paragraphString="The <b>...</b> tag is used to make the text appear bold. It's useful for highlighting important information."
        />
        <CodeElement
          codeString="This sentence is in italic"
          styling="italic"
          paragraphString="The <i>...</i> tag is used to make the text appear in italic."
        />
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 ">
          Bonus tag:
        </p>
        <CodeElement
          codeString={`This is text 1\n<br> \nThis is text 2`}
          styling="whitespace-pre"
          paragraphString="The <br> tag is use to insert a new line between elements. You should note that <br> is a self-closing tag, which means you don't need to add another </br> tag after it. You use it once and it adds a line"
        />
        {/* Semanticskinda */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">2.4: </span>
          Semantic Tags:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 ">
          First of all, what's a "semantic"? Semantic tags in HTML are elements
          that clearly describe their meaning and purpose—both to developers and
          browsers, including assistive technologies like screen reader. We will
          look at semantics more in detail later but for now, we can look at a
          few examples
        </p>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 ">
                Tag
              </th>
              <th className="border border-neutral-600 border-dashed max-w-2xl text-xl font-medium text-foreground text-neutral-100 p-2 w-auto">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                &lt;header&gt;
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Intro or top section of a page or section
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                &lt;nav&gt;
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Navigation links
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                &lt;main&gt;
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Main content of the page
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                &lt;section&gt;
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Thetmatic grouping of content
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                &lt;article&gt;
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                Self-contained content, like a blog postm a news article...
              </td>
            </tr>
            <tr className="text-center">
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                &lt;footer&gt;
              </td>
              <td className="border border-neutral-600 border-dashed max-w-2xl text-xl font-light text-foreground text-neutral-100 p-2">
                The bottom-most section of a page or section
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 -mb-3">
          Mini challenge:
        </h3>
        <div className="flex flex-col gap-1">
          <li className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
            Try to create a short poem with paragraphs and line breaks
          </li>
          <li className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 ">
            Emphasize words in a sample paragraph{" "}
          </li>
        </div>
      </div>
      <NavButtons />
    </>
  );
};
