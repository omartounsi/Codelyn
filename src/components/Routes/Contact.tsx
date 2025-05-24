import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { IoReturnUpBack } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const serviceId = "service_9k2u4jk";
const templateId = "template_corkwuk";
const publicKey = "v6QAHh-9Cb7p22E_N";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then(() => {
        toast.success("Email sent", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error sending mail", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
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
      className="h-screen w-full bg-zinc-950 grid place-content-center text-white"
    >
      <div className="absolute h-40 w-40 bg-zinc-900/15">
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
      <div className="h-10 w-10 mb-3">
        <NavLink to="/">
          <IoReturnUpBack className="border h-10 w-10 rounded-full text-4xl  p-1.5 border-neutral-500 text-neutral-300 opacity-40 hover:scale-110 hover:opacity-100 transition-all will-change-transform" />
        </NavLink>
      </div>
      <div
        style={{
          backdropFilter: "blur(2px)",
        }}
        className="h-140 w-140 border border-neutral-800 rounded-xl flex flex-col p-8"
      >
        <h1 className="text-5xl font-bold leading-tight tracking-tighter text-neutral-50">
          Contact
        </h1>
        <form
          ref={formRef}
          className="flex flex-col w-full h-full mt-2 gap-1"
          onSubmit={handleSubmit}
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            // onKeyDown={(e) => handleKeyDown(e)}
            type="text"
            placeholder="Email Address"
            className="border border-neutral-800 rounded-lg min-h-12 px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all"
          />
          <div className="flex justify-between gap-1">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              // onKeyDown={(e) => handleKeyDown(e)}
              type="text"
              name="name"
              placeholder="First Name"
              className="border border-neutral-800 rounded-lg h-12 w-full px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              // onKeyDown={(e) => handleKeyDown(e)}
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="border border-neutral-800 rounded-lg h-12 w-full px-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 focus:scale-105 transition-all"
            />
          </div>
          <div className="relative w-full h-full focus-within:scale-105 transition-all">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              id=""
              placeholder="Write your message here..."
              className="w-full h-full border resize-none overflow-y-scroll border-neutral-800 rounded-lg p-2 placeholder:text-neutral-600 focus:outline-1 focus:outline-neutral-500 placeholder:font-[Quicksand] text-neutral-400 "
            ></textarea>
            <button
              type="submit"
              className="h-10 w-10 mt-3 flex items-center justify-center absolute right-4 bottom-4"
            >
              <IoIosSend className="border h-10 w-10 rounded-full text-4xl p-1.5 border-neutral-500 text-neutral-300 opacity-40 hover:scale-110 hover:opacity-100 transition-all will-change-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
