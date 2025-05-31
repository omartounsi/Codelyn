import { ToastContainer, toast } from "react-toastify";

export const ErrorToast = ({ notify }: { notify: () => void }) => {
  return (
    <div className="absolute w-40 h-40 bg-zinc-900/15">
      <button onClick={notify}>Notify !</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
