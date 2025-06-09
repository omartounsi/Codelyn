import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";
import { useProgress } from "../../../context/ProgressContext";
import { IoCheckmarkCircle } from "react-icons/io5";

export const HTML3 = () => {
  const { markLessonComplete, isLessonCompleted } = useProgress();
  const lessonCompleted = isLessonCompleted("html", 3);

  const handleMarkComplete = () => {
    markLessonComplete("html", 3);
  };
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 3:</span> Links
        and Images:
      </h1>
      <div className="flex flex-col gap-7">
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          Attributes:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          In order to fully understand these next two tags, we need to explain
          what attributes are in HTML.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          <span className="font-bold">Attributes</span> allow us to configure
          our tags even further. They are placed <i>inside</i> the opening tag
          of any element. In the upcoming section, we will get to understand how
          the Anchor tag element works and how it takes in an "href" attribute
          that allows us to set it's redirection link.
        </p>
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
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.2: </span>
          Images
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          Images are much like the Break Line tag, it's a self-closing tag, we
          do not need to add anything after the inital tag. Images can take in
          two attributes: A Source: that defines the source of the image we want
          to load, and an Alternative, which is description of the image we want
          to load, used either for a placeholder for when the image doesn't load
          or for accessability reasons.
        </p>
        <CodeElement
          codeString="<img src='...' alt='An image of a cat'>"
          paragraphString="This is example code of how an image element would look "
        />
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          Example:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100">
          Below is the code of an image element. Try copying it in the editor
          and see what happens:
        </p>
        <CodeElement codeString="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfExcN4DTdnCBDZxauDDs8wBG3oT4KuQiEwg&s' alt='An image of a cat'>" />

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
      </div>{" "}
      <NavButtons previous="/lessons/html/2" next="/lessons/html/4" />
    </>
  );
};
