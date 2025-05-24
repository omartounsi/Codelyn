import { LoadingSpinner } from "./loadingspinner";

export const LoadingModal = () => {
  return (
    <div className="h-screen w-full border border-white absolute z-100 backdrop-blur-sm bg-zinc-950">
      <div className="w-24 h-24 absolute border border-neutral-800 border-dashed top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-xl bg-neutral-900">
        <LoadingSpinner />
      </div>
    </div>
  );
};
