import { IoIosArrowForward } from "react-icons/io";

export const FAQ = () => {
  return (
    <div className=" w-full h-400 flex items-center justify-center border-b border-dashed border-neutral-800">
      <div className="w-[95%] h-[90%] bg-neutral-950 border border-neutral-800 rounded-xl flex flex-col p-10">
        <h1 className="text-6xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-50 mx-auto mt-20">
          FAQ.
        </h1>
        {/* QUESTIONS */}
        <div className="w-[80%] h-[90%] mx-auto p-4 flex flex-col gap-10">
          {/* 1 QUESTION */}
          <div className="w-full h-auto py-10 flex flex-col gap-2 justify-center border-b border-dashed border-neutral-700 rounded-full px-16 hover:scale-105 transition-transform">
            <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 flex items-center">
              <IoIosArrowForward /> Do I need prior experience in coding?
            </p>
            <p className="text-lg px-4 text-neutral-400">
              Not at all. This platform is designed for complete beginners.
              You'll start with the very basics—like how HTML works—and build up
              from there.
            </p>
          </div>

          {/* 1 QUESTION */}
          <div className="w-full h-auto py-10 flex flex-col gap-2 justify-center border-b border-dashed border-neutral-700 rounded-full px-16 hover:scale-105 transition-transform">
            <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 flex items-center">
              <IoIosArrowForward /> Do I need to install anything?
            </p>
            <p className="text-lg px-4 text-neutral-400">
              Nope. Everything runs in your browser. Just open a lesson and
              start coding instantly—no setup, no downloads.
            </p>
          </div>

          {/* 1 QUESTION */}
          <div className="w-full h-auto py-10 flex flex-col gap-2 justify-center border-b border-dashed border-neutral-700 rounded-full px-16 hover:scale-105 transition-transform">
            <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 flex items-center">
              <IoIosArrowForward /> How long does it to finish?
            </p>
            <p className="text-lg px-4 text-neutral-400">
              It depends on your pace. Codelyn is self-paced. You are free to
              resume your lessons whenever you feel like it and Codelyn helps
              you track your progress throughout your journey.
            </p>
          </div>

          {/* 1 QUESTION */}
          <div className="w-full h-auto py-10 flex flex-col gap-2 justify-center border-b border-dashed border-neutral-700 rounded-full px-16 hover:scale-105 transition-transform">
            <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 flex items-center">
              <IoIosArrowForward /> Is this platform free?
            </p>
            <p className="text-lg px-4 text-neutral-400">
              You can start learning for free. Some advanced content or features
              might be part of a future premium plan, but the core learning path
              is free.
            </p>
          </div>

          {/* 1 QUESTION */}
          <div className="w-full h-auto py-10 flex flex-col gap-2 justify-center border-b border-dashed border-neutral-700 rounded-full px-16 hover:scale-105 transition-transform">
            <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 flex items-center">
              <IoIosArrowForward /> What will I actually build?
            </p>
            <p className="text-lg px-4 text-neutral-400">
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
