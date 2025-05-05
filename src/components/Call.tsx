export const Call = () => {
  return (
    <div className="w-full h-100 flex justify-center items-end border-b border-dashed border-neutral-800">
      <div className="w-[80%] h-60 border border-b-0 border-neutral-500 rounded-t-4xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1] text-neutral-50">
          Start your first lesson now
        </h1>
        <a
          className="group mb-2 inline-flex items-center gap-2 px-0.5 text-sm font-medium"
          href="#"
        >
          <span className="underline-offset-4 group-hover:underline">
            Chapter 1: HTML Fundamentals
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right ml-1 h-4 w-4"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5 L19 12 L12 19"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
