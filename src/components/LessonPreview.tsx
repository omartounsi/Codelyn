import { IoCode } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const chapters = [
  { id: 1, title: "What is HTML?" },
  { id: 2, title: "Hands On" },
  { id: 3, title: "Attributes" },
  { id: 4, title: "Commonly used tags" },
  { id: 5, title: "Lists" },
  { id: 6, title: "Tables" },
  { id: 7, title: "Divisions and Spans" },
  { id: 8, title: "Semantics" },
  { id: 100, title: "Structuring" },
];

export const LessonPreview = () => {
  return (
    <div className="flex items-start justify-center max-w-full h-180 ">
      {/* LEFT */}
      <div className="flex flex-col items-center w-[28%]">
        {/* CARD */}
        <div
          style={{
            backdropFilter: "blur(4px)",
          }}
          className="flex flex-col w-full gap-8 p-10 mt-10 border shadow-md shadow-slate-900 h-170 border-neutral-100/30 rounded-xl bg-slate-700 "
        >
          {/* LOGO? */}
          <div className="w-40 h-40 bg-neutral-100 mx-auto rounded-full grid place-content-center text-neutral-800 text-5xl hover:scale-x-[-1] transition-transform duration-300">
            <IoCode />
          </div>
          {/* Title */}
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50">
            {" "}
            HTML Fundamentals
          </h1>
          {/* DESCRIPTION */}
          <p>
            In this lesson, you'll learn the building blocks of every web page.
            We'll introduce you to HTML (HyperText Markup Language) — the
            standard language used to structure content on the web. By the end
            of this module, you'll be able to create simple pages using
            essential elements like headings, paragraphs, links, images, and
            lists.
          </p>
          {/* BUTTONS? */}
          <div className="flex items-center justify-center">
            <button className="font-bold transition-colors cursor-pointer text-neutral-300 font-[Quicksand] hover:text-neutral-100 sborder-neutral-800">
              Start Lesson
            </button>
          </div>
        </div>
      </div>
      <div className="h-160 mx-5 my-auto w-[1px] border  border-slate-800 "></div>
      {/* RIGHT */}
      <div className="flex flex-col items-center w-[60%] ">
        {/* CARD */}
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="flex flex-col w-full p-10 mt-10 overflow-y-scroll border shadow-md shadow-slate-900 max-h-170 border-neutral-100/30 rounded-xl bg-slate-700 scrollbar-custom"
        >
          {/* TITLE */}
          <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50">
            Chapters
          </h1>
          {/* CHAPTERS */}
          <div className="flex flex-col h-full gap-2">
            {/* 1 CHAPTER */}
            <div className="flex items-center gap-2 px-4 mt-3 transition-transform duration-300 border border-neutral-200/30 min-h-16 rounded-xl hover:scale-105 bg-slate-900/30">
              <div className="flex items-center justify-center text-black bg-white rounded-full h-7 w-7">
                <IoCheckmark />
              </div>
              <p className="max-w-2xl font-light text-foreground text-neutral-300">
                {" "}
                What is the Internet?
              </p>
              <div className="ml-auto">
                <BsThreeDots />
              </div>
            </div>

            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="flex items-center gap-2 px-4 transition-transform duration-300 border border-neutral-100/50 min-h-16 rounded-xl hover:scale-105"
              >
                <div className="flex items-center justify-center text-white border border-white rounded-full h-7 w-7">
                  <IoCheckmark />
                </div>
                <p className="max-w-2xl font-light text-foreground text-neutral-300">
                  {" "}
                  {chapter.title}
                </p>
                <div className="ml-auto">
                  <BsThreeDots />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
