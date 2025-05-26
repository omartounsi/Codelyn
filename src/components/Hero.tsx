export const Hero = () => {
  return (
    <div
      style={{
        backdropFilter: "blur(2px)",
        // boxShadow: "10px 10px 10px rgb(31, 48, 64, 0.9)",
        backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
      className="flex items-center w-full pl-5 border justify-evenly rounded-xl border-neutral-100/30 h-72 text-neutral-100"
    >
      <div className="flex flex-col justify-center h-full ">
        <h1
          style={{
            textShadow: `10px 10px 15px rgb(23, 36, 48, 0.4)`,
          }}
          className="font-bold tracking-tighter text-center text-7xl leading-tighter text-neutral-100/90"
        >
          Learn the web,
          <br /> try the web.
        </h1>
        <p className="mx-auto cursor-pointer hover:underline-offset-1 hover:underline ">
          Already a member? Sign in
        </p>
      </div>
      <div className="">
        <p className="max-w-md text-base font-light text-foreground sm:text-lg text-neutral-100">
          From zero to your first website—right in your browser. A guided path
          to mastering the web, with real coding and instant results.
        </p>
        {/* buttons */}
        <div className="flex gap-1 mt-2">
          <button className="bg-neutral-100 text-neutral-900 text-[14px] rounded-sm px-3 py-1.5 cursor-pointer">
            Get Started
          </button>
          <button className=" text-neutral-100 text-[14px] rounded-sm px-2 py-1 hover:bg-neutral-800 cursor-pointer transition-colors">
            Browse Lessons
          </button>
        </div>
      </div>
    </div>
  );
};
