import { IoIosArrowForward } from "react-icons/io";

export const FAQ = () => {
  return (
    <div
      style={{ boxShadow: "10px 10px 10px rgb(23, 36, 48, 0.9)" }}
      className="flex items-center justify-center w-full h-full p-6 border border-neutral-100/30 rounded-xl"
    >
      <div className="flex flex-col p-10 border bg-red-400590 border-neutral-100/10 rounded-xl bg-slate-900">
        <h1 className="my-10 font-bold tracking-tighter text-center text-7xl leading-tighter text-neutral-100/90">
          FAQ.
        </h1>
        {/* QUESTIONS */}
        <div className="w-[80%] h-[90%] mx-auto p-4 flex flex-col gap-10">
          {/* 1 QUESTION */}
          <div className="flex flex-col justify-center w-full h-auto gap-2 px-16 py-10 transition-all border-b border-dashed rounded-full select-none border-neutral-200/40 hover:bg-slate-950 hover:scale-105 will-change-transform">
            <p className="flex items-center max-w-2xl text-xl font-light text-neutral-100">
              <IoIosArrowForward /> Do I need prior experience in coding?
            </p>
            <p className="px-4 text-lg text-neutral-400">
              Not at all. This platform is designed for complete beginners.
              You'll start with the very basics—like how HTML works—and build up
              from there.
            </p>
          </div>

          {/* 2 QUESTION */}
          <div className="flex flex-col justify-center w-full h-auto gap-2 px-16 py-10 transition-all border-b border-dashed rounded-full select-none border-neutral-200/40 hover:bg-slate-950 hover:scale-105 will-change-transform">
            <p className="flex items-center max-w-2xl text-xl font-light text-foreground text-neutral-100">
              <IoIosArrowForward /> Do I need to install anything?
            </p>
            <p className="px-4 text-lg text-neutral-400">
              Nope. Everything runs in your browser. Just open a lesson and
              start coding instantly—no setup, no downloads.
            </p>
          </div>

          {/* 1 QUESTION */}
          <div className="flex flex-col justify-center w-full h-auto gap-2 px-16 py-10 transition-all border-b border-dashed rounded-full select-none border-neutral-200/40 hover:bg-slate-950 hover:scale-105 will-change-transform">
            <p className="flex items-center max-w-2xl text-xl font-light text-foreground text-neutral-100">
              <IoIosArrowForward /> How long does it to finish?
            </p>
            <p className="px-4 text-lg text-neutral-400">
              It depends on your pace. Codelyn is self-paced. You are free to
              resume your lessons whenever you feel like it and Codelyn helps
              you track your progress throughout your journey.
            </p>
          </div>

          {/* 1 QUESTION */}
          <div className="flex flex-col justify-center w-full h-auto gap-2 px-16 py-10 transition-all border-b border-dashed rounded-full select-none border-neutral-200/40 hover:bg-slate-950 hover:scale-105 will-change-transform">
            <p className="flex items-center max-w-2xl text-xl font-light text-foreground text-neutral-100">
              <IoIosArrowForward /> Is this platform free?
            </p>
            <p className="px-4 text-lg text-neutral-400">
              You can start learning for free. Some advanced content or features
              might be part of a future premium plan, but the core learning path
              is free.
            </p>
          </div>

          {/* 1 QUESTION */}
          <div className="flex flex-col justify-center w-full h-auto gap-2 px-16 py-10 transition-all border-b border-dashed rounded-full select-none border-neutral-200/40 hover:bg-slate-950 hover:scale-105 will-change-transform">
            <p className="flex items-center max-w-2xl text-xl font-light text-foreground text-neutral-100">
              <IoIosArrowForward /> What will I actually build?
            </p>
            <p className="px-4 text-lg text-neutral-400">
              You'll build small, real websites and components along the
              way—everything from basic pages to styled layouts and interactive
              elements using JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
