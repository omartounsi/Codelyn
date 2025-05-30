import { useState } from "react";
import { Overview } from "./overview";

const adminTabs = [
  { id: 1, name: "Overview" },
  { id: 2, name: "User Management" },
  { id: 3, name: "Course Management" },
  { id: 4, name: "Lesson Management" },
  { id: 5, name: "Project Management" },
  { id: 6, name: "Code Environment" },
  { id: 7, name: "Platform Settings" },
  { id: 8, name: "Feedback & Reports" },
  { id: 9, name: "Security Tools" },
  { id: 10, name: "Content Moderation" },
];

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div
      style={{
        backgroundColor: "",
        backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
      className="flex items-center justify-center w-full h-screen text-white bg-zinc-900 pt-14 "
    >
      <div className="w-[90%] h-[90%] border rounded-xl grid grid-cols-12 gap-1 border-neutral-800 p-2">
        {/* SELECTOR */}
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="flex flex-col items-center col-span-2 border border-neutral-700 rounded-tl-xl rounded-bl-xl bg-zinc-950/10"
        >
          <h1 className="flex items-center justify-center h-14 text-3xl font-bold leading-tight tracking-tighter w-[90%] my-4 rounded-full border-neutral-700 text-neutral-200">
            Dashboard
          </h1>
          <ul className="flex flex-col items-start gap-2 px-3 font-light">
            {adminTabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center w-auto px-4 py-2 rounded-full select-none  min-h-10  will-change-auto border border-transparent hover:border-neutral-800 hover:bg-neutral-900 transition-all  ${activeTab === tab.id ? "bg-neutral-200 text-neutral-900 font-medium hover:border-transparent hover:text-neutral-200" : ""}`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENT */}
        <div
          style={{
            backdropFilter: "blur(2px)",
          }}
          className="h-auto col-span-10 overflow-auto border border-neutral-700 rounded-tr-xl rounded-br-xl"
        >
          {activeTab === 1 ? <Overview /> : <></>}
        </div>
      </div>
    </div>
  );
};
