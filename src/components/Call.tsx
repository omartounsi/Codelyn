export const Call = () => {
  return (
    <div className="flex items-center justify-center w-full border-b border-dashed h-100 border-neutral-800">
      <div
        style={{
          boxShadow: "10px 10px 15px rgb(23, 36, 48, 0.9)",
        }}
        className="w-[80%] h-60 border border-b-0 border-neutral-500 rounded-4xl flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl font-bold leading-tight tracking-tighter  lg:leading-[1.1] text-neutral-50">
          Start your first lesson now
        </h1>
        <a
          className="group mb-2 inline-flex items-center gap-2 px-0.5 text-sm font-medium"
          href="#"
        >
          <span className="text-lg italic underline-offset-4 group-hover:underline">
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
            className="w-4 h-4 ml-1 lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5 L19 12 L12 19"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
