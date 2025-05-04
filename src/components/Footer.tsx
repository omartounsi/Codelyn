import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full h-100 grid grid-cols-12 border-b border-dashed border-neutral-800">
      {/* COL 1 */}
      <div className="col-span-3 border-r border-dashed border-neutral-800 flex flex-col px-10 py-10 ">
        <span className="font-[IBM_Plex_Mono] font-light text-xl m">
          Codelyn_
        </span>
        <p className="text-sm font-light text-foreground  text-neutral-500 mt-4 ">
          A hands-on learning platform designed to teach you the fundamentals of
          web development from the ground up. Whether you're just starting out
          or brushing up on the basics, our interactive lessons, live code
          editor, and real-time feedback help you learn by doing. No
          installations, no prerequisites—just open your browser and start
          building. Learn HTML, CSS, and JavaScript at your own pace, and gain
          the confidence to create websites from scratch.
        </p>
      </div>

      {/* COL 2 */}
      <div className="col-span-3 border-r border-dashed border-neutral-800 flex flex-col px-10 py-10 gap-3">
        <div className="flex flex-col ">
          <span className="font-[IBM_Plex_Mono] font-light text-xl m">
            Quick Links
          </span>
          <ul className="text-md font-light text-foreground  text-neutral-500 mt-4 flex flex-col gap-1">
            <li className="">
              <a href="#">Home</a>
            </li>
            <li className="">
              <a href="#">Profiles</a>
            </li>
            <li className="">
              <a href="#">Lessons</a>
            </li>
            <li className="">
              <a href="#">Sandbox</a>
            </li>
            <li className="">
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <span className="font-[IBM_Plex_Mono] font-light text-xl m">
            Legal
          </span>
          <ul className="text-md font-light text-foreground  text-neutral-500 mt-4 flex flex-col gap-1">
            <li className="">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="">
              <a href="#">Terms of Service</a>
            </li>
            <li className="">
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* COL 3 */}
      <div className="col-span-6 border-neutral-800 flex flex-col px-10 py-4 justify-evenly">
        {/* 1 */}
        <div className="flex flex-col gap-1">
          <span className="font-[IBM_Plex_Mono] font-light text-xl ">
            Socials
          </span>
          <div className="flex text-3xl gap-2">
            <FaGithubSquare />
            <FaSquareXTwitter />
            <IoLogoDiscord />
            <FaLinkedin />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-1">
          <span className="font-[IBM_Plex_Mono] font-light text-xl m">
            Newsletter
          </span>
          <input
            type="text"
            placeholder=""
            className="rounded-sm w-full px-1 border border-neutral-800 placeholder:text-sm"
          />
        </div>
        {/* 3s */}
        <div className="flex flex-col">
          <span className="font-[IBM_Plex_Mono] font-light text-xl m">
            Contact
          </span>
          <p className="text-sm font-light text-foreground  text-neutral-500">
            Email: <span className="underline">tounsiomat@gmail.com</span>
          </p>
          <p className="text-sm font-light text-foreground  text-neutral-500">
            Phone: <span className="underline">+216 55 88 43 91</span>
          </p>
        </div>
      </div>
    </div>
  );
};
