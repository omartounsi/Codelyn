import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoCode, IoReturnUpBack } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { LoadingModal } from "./components/tools/loadingmodal";
import { toast, ToastContainer } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  if (loading) return <LoadingModal />;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    //validate
    const validation = validateInputs(email, password);
    if (!validation.isValid) {
      toast.error(validation.errors.join(". "), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setError(validation.errors.join(". "));

      return;
    }

    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const validateInputs = (email: string, password: string) => {
    const errors = []; //errors array

    if (!(email.trim() && password.trim()))
      errors.push("Email and password are required");
    return { isValid: errors.length === 0, errors: errors };
  };

  return (
    <div
      style={{
        backgroundColor: "#09090b",
        backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
      className="grid w-full h-screen text-white bg-zinc-950 place-content-center"
    >
      <ErrorToast />
      <div className="w-10 h-10 mb-3">
        <NavLink to="/">
          <IoReturnUpBack className="border h-10 w-10 rounded-full text-4xl  p-1.5 border-neutral-500 text-neutral-300 opacity-40 hover:scale-110 hover:opacity-100 transition-all will-change-transform" />
        </NavLink>
      </div>
      <div className="grid grid-cols-3 gap-1 h-120 w-200">
        <div className="flex flex-col items-center justify-center w-full h-full col-span-1 bg-white rounded-lg">
          <div
            style={{
              boxShadow: "1px 1px 10px rgb(0,0,0,0.5)",
            }}
            className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-[48px] opacity-80 hover:scale-110 transition-transform will-change-transform duration-300"
          >
            <IoCode />
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="flex flex-col col-span-2 gap-6 p-8 border rounded-lg bg-neutral-900/20 border-neutral-800"
        >
          <h1 className="text-5xl font-bold leading-tight tracking-tighter text-neutral-50">
            Login
          </h1>
          <div className="flex flex-col gap-3 form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              type="text"
              placeholder="Enter your address"
              className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              type="password"
              placeholder="Enter your Password"
              className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all"
            />
            <p className="text-md text-neutral-700 font-[Quicksand] hover:underline hover:text-neutral-400 transition-all cursor-pointer w-auto">
              Forgot password?
            </p>
            {/* {error && (
              <div className="flex items-center gap-1 text-md">
                <p className="px-2 rounded-sm bg-neutral-200 text-neutral-900">
                  login error
                </p>
                <p className="italic text-center text-neutral-400 ">
                  - {error}
                </p>
              </div>
            )} */}
            <button
              onClick={handleSubmit}
              className="font-[Geist] text-xl text-neutral-600 cursor-pointer hover:text-neutral-200 transition-all font-light"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="h-[1px] w-[100%] bg-neutral-600"></div>
            <p className="mx-2 font-[Quicksand] text-neutral-600">OR</p>
            <div className="h-[1px] w-[100%] bg-neutral-600"></div>
          </div>
          <div className="flex justify-center gap-2 h-14">
            <div className="flex items-center justify-center text-3xl transition-all border rounded-sm cursor-pointer border-neutral-600 text-neutral-100 w-14 h-14 opacity-40 hover:opacity-100">
              <FaGoogle />
            </div>
            <div className="flex items-center justify-center text-3xl transition-all border rounded-sm cursor-pointer border-neutral-600 text-neutral-100 w-14 h-14 opacity-40 hover:opacity-100">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ErrorToast = () => {
  return (
    <div className="absolute w-40 h-40">
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
