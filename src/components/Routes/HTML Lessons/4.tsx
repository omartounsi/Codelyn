import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";

export const HTML4 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 4:</span> Lists
        and Navigation:
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION TO LISTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.1: </span>
          Introduction to Lists:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Lists are one of the most fundamental ways to organize information on
          the web. Whether you're displaying a shopping list, navigation menu,
          or table of contents, HTML provides specific elements to structure
          this information clearly.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML offers two main types of lists: ordered lists (numbered) and
          unordered lists (bulleted). Both use list items to contain individual
          pieces of information.
        </p>

        {/* UNORDERED LISTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.2: </span>
          Unordered Lists (Bullet Points):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Unordered lists display items with bullet points. They're perfect for
          when the order of items doesn't matter, like a shopping list or
          features of a product.
        </p>
        <CodeElement
          codeString={`<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>`}
          styling="whitespace-pre"
          paragraphString="The <ul>...</ul> creates an unordered list, and each <li>...</li> creates a list item with a bullet point."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try adding this to the editor and see how it displays. You can add as
          many list items as you want!
        </p>

        {/* ORDERED LISTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.3: </span>
          Ordered Lists (Numbered):
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Ordered lists display items with numbers. These are great for
          step-by-step instructions, rankings, or any sequence where order
          matters.
        </p>
        <CodeElement
          codeString={`<ol>\n  <li>Step one</li>\n  <li>Step two</li>\n  <li>Step three</li>\n</ol>`}
          styling="whitespace-pre"
          paragraphString="The <ol>...</ol> creates an ordered list. The browser automatically numbers each <li> item starting from 1."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Notice how we use the same{" "}
          <span className="text-[#6da150] font-bold">&lt;li&gt;</span> tags for
          both ordered and unordered lists - only the container changes!
        </p>

        {/* NESTED LISTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.4: </span>
          Nested Lists:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          You can put lists inside other lists to create hierarchical
          structures. This is useful for things like course outlines or category
          breakdowns.
        </p>
        <CodeElement
          codeString={`<ul>\n  <li>Web Development\n    <ul>\n      <li>Frontend</li>\n      <li>Backend</li>\n    </ul>\n  </li>\n  <li>Mobile Development</li>\n</ul>`}
          styling="whitespace-pre"
          paragraphString="You can nest any type of list inside another. Here we have an unordered list with a nested unordered list inside the first item."
        />

        {/* NAVIGATION WITH LISTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.5: </span>
          Navigation Menus:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Lists are commonly used to create navigation menus. By combining lists
          with links (from the previous lesson), you can create organized
          navigation structures.
        </p>
        <CodeElement
          codeString={`<ul>\n  <li><a href="#home">Home</a></li>\n  <li><a href="#about">About</a></li>\n  <li><a href="#contact">Contact</a></li>\n</ul>`}
          styling="whitespace-pre"
          paragraphString="This creates a simple navigation menu. Each list item contains a link, making it easy to style as a horizontal or vertical menu with CSS."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try copying this navigation example into the editor. You'll see how
          the links are organized in a clean list structure.
        </p>

        {/* PRACTICAL EXERCISE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.6: </span>
          Practice Exercise:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try creating your own lists in the editor! Here are some ideas:
        </p>
        <ul className="max-w-2xl text-lg font-light text-neutral-300 ml-6">
          <li>• Your favorite foods (unordered list)</li>
          <li>• Steps to make a sandwich (ordered list)</li>
          <li>• A course outline with nested topics</li>
          <li>• A simple navigation menu for a website</li>
        </ul>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Experiment with mixing ordered and unordered lists to see how they
          work together!
        </p>

        <NavButtons previous="/lessons/html/3" next="/lessons/html/5" />
      </div>
    </>
  );
};
