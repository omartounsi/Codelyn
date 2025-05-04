export const Hero = () => {
  return (
    <div className="border-b border-dashed border-neutral-800 w-full h-72  flex flex-col justify-center pl-5  text-neutral-200">
      <a
        className="group mb-2 inline-flex items-center gap-2 px-0.5 text-sm font-medium"
        href="/docs/tailwind-v4"
      >
        X{" "}
        <span className="underline-offset-4 group-hover:underline">
          Sign up on []
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-right ml-1 h-4 w-4"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
      <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50">
        Welcome to []
      </h1>
      <p className="max-w-2xl text-base font-light text-foreground sm:text-lg text-neutral-100">
        A platform specifically designed to teach you the basics of the web,
        from scratch... This collection of lessons includes the fundamentals of
        how the web
      </p>
      {/* buttons */}
      <div className="flex gap-1 mt-2">
        <button className="bg-neutral-100 text-neutral-900 text-[14px] rounded-sm px-3 py-1.5">
          Get Started
        </button>
        <button className=" text-neutral-100 text-[14px] rounded-sm px-2 py-1 hover:bg-neutral-800">
          Browse Lessons
        </button>
      </div>
    </div>
  );
};
