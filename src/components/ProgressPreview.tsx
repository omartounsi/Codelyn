export const ProgressPreview = () => {
  return (
    <div className="h-50 w-full flex flex-col p-5 justify-center gap-4 border-b border-dashed border-neutral-800">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-50">
          Track your progress, everywhere.
        </h1>
        {/* DESCRIPTIO */}
        <p className="max-w-2xl text-sm font-light text-foreground  text-neutral-400">
          Watch the numbers go up as you progress through your lessons.
        </p>
      </div>
      {/* PROGRESS BAR */}
      <div className="flex flex-col gap-2">
        <div className="w-[99%] h-2 bg-black border  border-neutral-800 overflow-hidden rounded-full relative">
          <div className="absolute h-2 w-[32%] bg-neutral-200 rounded-full left-0"></div>
        </div>
        <div className="flex justify-between w-full font-[IBM_Plex_Mono]">
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm">|</p>
            <p>0</p>
          </div>
          <div className="mr-[35%] flex flex-col items-center gap-1">
            <p className="text-sm">|</p>
            <p>32</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm">|</p>
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
};
