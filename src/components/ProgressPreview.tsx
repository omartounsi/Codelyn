export const ProgressPreview = () => {
  return (
    <div
      style={{
        boxShadow: "10px 10px 15px rgb(23, 36, 48, 0.8)",
      }}
      className="flex flex-col justify-center w-full gap-4 p-20 border h-60 rounded-xl bg-neutral-200 border-neutral-100/30"
    >
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold tracking-tighter leading-tighter text-neutral-800">
          Track your progress, everywhere.
        </h1>
        {/* DESCRIPTIO */}
        <p className="max-w-2xl text-lg font-light text-foreground text-neutral-700">
          Watch the numbers go up as you progress through your lessons.
        </p>
      </div>
      {/* PROGRESS BAR */}
      <div className="flex flex-col gap-2">
        <div className="w-[99%] h-2 bg-neutral-800 border-neutral-500 overflow-hidden rounded-full relative">
          <div className="absolute h-2 w-[32%] bg-neutral-200 rounded-full left-0 z-10 border border-neutral-500"></div>
        </div>
        <div className="flex justify-between w-full font-[IBM_Plex_Mono] text-neutral-700">
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
