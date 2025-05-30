import { LoadingSpinner } from "./loadingspinner";

export const LoadingModal = () => {
  return (
    <div className="absolute w-full h-screen z-100 backdrop-blur-sm bg-zinc-950">
      <div className="absolute flex items-center justify-center w-24 h-24 -translate-x-1/2 -translate-y-1/2 border border-dashed border-neutral-800 top-1/2 left-1/2 transfrom rounded-xl bg-neutral-900">
        <LoadingSpinner />
      </div>
    </div>
  );
};
