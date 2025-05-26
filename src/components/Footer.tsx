import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="grid w-full grid-cols-12 gap-2 px-4 h-110">
      {/* COL 1 */}
      <div
        style={{}}
        className="flex flex-col shadow-md shadow-neutral-900 col-span-3 p-10 border h-[90%] w-full  mx-auto my-auto rounded-xl justify-evenly border-neutral-100/30"
      >
        <span className="font-[IBM_Plex_Mono] font-light text-4xl">
          Codelyn_
        </span>
        <p className="mt-4 text-sm font-light max-w-50 text-foreground text-neutral-300">
          A hands-on learning platform designed to teach you the fundamentals of
          web development from the ground up. Whether you're just starting out
          or brushing up on the basics, our interactive lessons, live code
          editor, and real-time feedback help you learn by doing. No
          installations, no prerequisites—just open your browser and start
          building. Get signed up today.
        </p>
      </div>

      {/* COL 2 */}
      <div
        style={{}}
        className="flex shadow-md shadow-neutral-900 flex-col col-span-3 p-10 border h-[90%] w-[96%]  mx-auto my-auto rounded-xl justify-evenly border-neutral-100/30"
      >
        <div className="flex flex-col">
          <span className="font-[IBM_Plex_Mono] font-light text-3xl text-neutral-300">
            Quick Links
          </span>
          <ul className="flex flex-col items-start gap-1 mt-4 font-light text-md text-foreground text-neutral-400">
            <li className="hover:underline">
              <a href="#">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#">Profiles</a>
            </li>
            <li className="hover:underline">
              <a href="#">Lessons</a>
            </li>

            <li className="hover:underline">
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-4">
          <span className="font-[IBM_Plex_Mono] font-light text-3xl">
            Legal
          </span>
          <ul className="flex flex-col items-start gap-1 mt-4 font-light text-md text-foreground text-neutral-400">
            <li className="hover:underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="hover:underline">
              <a href="#">Terms of Service</a>
            </li>
            <li className="hover:underline">
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* COL 3 */}
      <div className="flex shadow-md shadow-neutral-900 flex-col col-span-6 px-6 border h-[90%] w-full  mx-auto my-auto rounded-xl justify-evenly border-neutral-100/30">
        {/* 1 */}
        <div className="flex flex-col gap-1">
          <span className="font-[IBM_Plex_Mono] font-light text-3xl ">
            Socials
          </span>
          <div className="flex gap-2 text-3xl">
            <FaGithubSquare />
            <FaSquareXTwitter />
            <IoLogoDiscord />
            <FaLinkedin />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-1">
          <span className="font-[IBM_Plex_Mono] font-light text-3xl">
            Newsletter
          </span>
          <input
            type="text"
            placeholder=""
            className="w-full px-1 border rounded-sm border-slate-600 placeholder:text-sm"
          />
        </div>
        {/* 3s */}
        <div className="flex flex-col ">
          <span className="font-[IBM_Plex_Mono] font-light text-3xl ">
            Contact
          </span>
          <p className="font-light text-md text-foreground text-neutral-500">
            Email: <span className="underline">tounsiomat@gmail.com</span>
          </p>
          <p className="font-light text-md text-foreground text-neutral-500">
            Phone: <span className="underline">+216 55 88 43 91</span>
          </p>
        </div>
      </div>
    </div>
  );
};
