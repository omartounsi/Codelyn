import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { NavLink } from "react-router";

export const Register = () => {
  return (
    <div
      style={{
        backgroundColor: "#09090b",
        backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
        backgroundSize: "20px 20px",
      }}
      className="h-screen w-full bg-zinc-950 grid place-content-center text-white"
    >
      <NavLink to="/">
        <p>BACK</p>
      </NavLink>
      <div className="h-120 w-200 grid grid-cols-3 gap-1">
        <div className="col-span-1 w-full h-full flex items-center justify-center flex-col rounded-lg bg-white">
          <div
            style={{
              boxShadow: "1px 1px 10px rgb(0,0,0,0.5)",
            }}
            className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-[48px] opacity-80"
          >
            <IoCode />
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className=" col-span-2 rounded-lg flex flex-col gap-6 bg-neutral-900/20 border border-neutral-800 p-8 "
        >
          <h1 className="text-5xl font-bold leading-tight tracking-tighter text-neutral-50">
            Sign up
          </h1>
          <div className="form flex flex-col gap-2">
            <div className="flex justify-around">
              <input
                type="text"
                placeholder="First Name"
                className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand]"
              />
            </div>
            <input
              type="text"
              placeholder="Enter your address"
              className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand]"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand]"
            />
            <p className="text-md text-neutral-700 font-[Quicksand] hover:underline hover:text-neutral-400 transition-all cursor-pointer w-auto">
              Forgot password?
            </p>
            <button className="font-[Geist] text-xl text-neutral-600 cursor-pointer hover:text-neutral-200 transition-all font-medium">
              Login
            </button>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="h-[1px] w-[100%] bg-neutral-600"></div>
            <p className="mx-2 font-[Quicksand] text-neutral-600">OR</p>
            <div className="h-[1px] w-[100%] bg-neutral-600"></div>
          </div>
          <div className="flex justify-center gap-2 h-14">
            <div className="border border-neutral-600 text-neutral-100 w-14 h-14 flex items-center justify-center text-3xl opacity-40 rounded-sm hover:opacity-100 transition-all cursor-pointer">
              <FaGoogle />
            </div>
            <div className="border border-neutral-600 text-neutral-100 w-14 h-14 flex items-center justify-center text-3xl opacity-40 rounded-sm hover:opacity-100 transition-all cursor-pointer">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
