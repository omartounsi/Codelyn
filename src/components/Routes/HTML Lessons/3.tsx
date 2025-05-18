import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";

export const HTML3 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 3:</span> Links
        and Images:
      </h1>
      <div className="flex flex-col gap-7">
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.1: </span>
          Anchor Tags and Hyperlinks
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          You often see links in webpages. In fact they are a crucial part of a
          website, it's the main way of navigating between the different pages.
          Have you ever wondered how they work behind the scenes? Now's your
          chance.
        </p>
        <CodeElement
          codeString="www.google.com"
          styling="text-violet-500"
          paragraphString="The <a>...</a> wraps an element that we want to turn into a link. How do we tell it which link we're navigating to? we had an 'href' attribute and set it to the new link."
        />
        <CodeElement
          codeString={`<a href='www.google.com'>\n  Click Me\n</a>`}
          styling="whitespace-pre"
          paragraphString="Here, we effectively create a link with the text 'Click Me' that takes us to www.google.com when clicked"
        />
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          Try replacing the '#' inside the href attribute with one of your
          favorite links and then click on the link. You can also change the
          text.
        </p>
      </div>
      <NavButtons />
    </>
  );
};
