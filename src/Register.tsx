import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { IoCode, IoReturnUpBack } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { LoadingSpinner } from "./components/tools/loadingspinner";

export const Register = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    setError("");

    //validate
    const validation = validateInputs(first_name, last_name, email, password);
    if (!validation.isValid) {
      setError(validation.errors.join(". "));
      return;
    }

    setLoading(true);

    try {
      await register(first_name, last_name, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const suggestPassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const symbols = "-._%*#@!";
    const chars = lowercase + uppercase + numbers + symbols;
    let arr = [];
    for (let i = 0; i < 16; i++) {
      arr[i] = chars[Math.floor(Math.random() * chars.length)];
    }
    const password = arr.join("");
    setPassword(password);
    setShowPassword(true);
  };

  const validateInputs = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    const errors = []; //errors array

    if (!firstName.trim() || !lastName.trim())
      errors.push("First/Last name is required");

    //email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.push("Email is required");
    } else if (!emailRegex.test(email)) {
      errors.push("Pleas enter a valid email address");
    }

    //passwordStreangth
    if (!password) {
      errors.push("Password is required");
    } else if (password.length < 8) {
      errors.push("Password must be at least 8 characters");
    }

    return { isValid: errors.length === 0, errors: errors };
  };

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
      className="flex flex-col items-center justify-center w-full h-screen text-white bg-zinc-950"
    >
      <div className="flex flex-col h-130 w-200">
        <div className="w-10 h-10 mb-3">
          <NavLink to="/">
            <IoReturnUpBack className="border h-10 w-10 rounded-full text-4xl p-1.5 border-neutral-500 text-neutral-300 opacity-40 hover:scale-110 hover:opacity-100 transition-all will-change-transform" />
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
              Sign up
            </h1>
            <div className="flex flex-col items-start gap-2 form">
              <div className="flex justify-around gap-1">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all"
                />
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                  className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all"
                />
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your address"
                className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all w-full"
              />
              <div className="relative w-full transition-all focus-within:scale-105 will-change-transform">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Enter your Password"
                  className="border border-neutral-800 rounded-lg h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 w-full"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute flex items-center w-6 h-6 text-xl -translate-y-1/2 cursor-pointer top-1/2 right-4 text-neutral-500/50"
                >
                  {!showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <p
                onClick={suggestPassword}
                className="text-md text-neutral-700 font-[Quicksand] hover:underline hover:text-neutral-400 transition-all cursor-pointer w-auto"
              >
                Suggest password?
              </p>
              <div className="mx-auto">{loading && <LoadingSpinner />}</div>
              {error && (
                <div className="flex items-center w-full h-auto gap-1 text-md">
                  <p className="px-2 rounded-sm bg-neutral-200 text-neutral-900 text-nowrap">
                    Sign up error
                  </p>
                  <div className="flex flex-col">
                    {error.split(". ").map((err) => (
                      <div className="italic text-neutral-400">- {err}</div>
                    ))}
                  </div>
                </div>
              )}
              <p
                onClick={handleSubmit}
                className="font-[Geist] text-lg text-neutral-800 bg-neutral-200 cursor-pointer hover:text-neutral-300 hover:bg-zinc-950/20 transition-all font-light border border-neutral-400 w-auto px-6 py-2 rounded-full mx-auto  "
              >
                Create Account
              </p>
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
    </div>
  );
};
