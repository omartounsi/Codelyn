import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { CLI1 } from "./1";
import { CLI2 } from "./2";
import { CLI3 } from "./3";
import { CLI4 } from "./4";
import { CLI5 } from "./5";
import { InteractiveTerminal } from "../../tools/InteractiveTerminal";
import { IoMenu, IoArrowBack, IoFlag, IoHelpCircle } from "react-icons/io5";

export const CLILesson = () => {
  const id = useParams();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [commandStep, setCommandStep] = useState(0);
  const [lessonCommands, setLessonCommands] = useState<string[]>([]);

  const lessonIndex = id.lessonId ? Number(id.lessonId) - 1 : 0;
  const rightPaneRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { icon: IoArrowBack, label: "Back to Course", action: "back" },
    { icon: IoFlag, label: "Report Issue", action: "report" },
    { icon: IoHelpCircle, label: "Get Help", action: "help" },
  ];

  // SCROLL TO TOP AND FOCUS ON ROUTE
  useEffect(() => {
    rightPaneRef.current?.scrollTo({ top: 0, behavior: "auto" });
    rightPaneRef.current?.focus();
  }, [id.lessonId]);

  // CLOSE MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleCommandExecute = (command: string, _output: string) => {
    // Check if the command matches the expected command for this step
    if (lessonCommands.length > 0 && commandStep < lessonCommands.length) {
      if (
        command.trim().toLowerCase() ===
        lessonCommands[commandStep].toLowerCase()
      ) {
        setCommandStep((prev) => prev + 1);
      }
    }
  };

  const renderLessonContent = () => {
    switch (lessonIndex) {
      case 0:
        return <CLI1 onCommandsChange={setLessonCommands} />;
      case 1:
        return <CLI2 onCommandsChange={setLessonCommands} />;
      case 2:
        return <CLI3 onCommandsChange={setLessonCommands} />;
      case 3:
        return <CLI4 onCommandsChange={setLessonCommands} />;
      case 4:
        return <CLI5 onCommandsChange={setLessonCommands} />;
      default:
        return <CLI1 onCommandsChange={setLessonCommands} />;
    }
  };

  return (
    <>
      {/* Burger Menu */}
      <div ref={menuRef} className="fixed z-50 bottom-4 left-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center w-10 h-10 text-3xl transition-all duration-200 border rounded-full shadow-lg bg-neutral-800/90 opacity-40 hover:opacity-100 backdrop-blur-sm border-neutral-600 text-neutral-200 hover:text-white hover:bg-neutral-700/90 hover:scale-105"
        >
          <IoMenu className="w-4 h-4" />
        </button>

        {/* Menu Pill */}
        {menuOpen && (
          <div className="absolute bottom-12 left-0 bg-neutral-800/95 backdrop-blur-sm border border-neutral-600 rounded-2xl shadow-xl py-2 px-1 min-w-[200px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setMenuOpen(false);
                  // Handle menu actions
                }}
                className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 text-neutral-200 hover:text-white hover:bg-neutral-700/50 rounded-xl group"
              >
                <item.icon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid w-full h-screen grid-cols-12 bg-zinc-900 text-neutral-300 pt-14">
        {/* LEFT SIDE - Terminal */}
        <div className="flex items-center justify-center col-span-6 p-8">
          {/* TERMINAL CONTAINER */}
          <div className="w-full h-[70vh] max-h-[600px] min-h-[400px] border border-neutral-700 rounded-lg bg-zinc-950 overflow-hidden">
            <InteractiveTerminal
              onCommandExecute={handleCommandExecute}
              expectedCommands={lessonCommands}
              currentStep={commandStep}
            />
          </div>
        </div>

        {/* RIGHT SIDE - Lesson Content */}
        <div
          ref={rightPaneRef}
          className="relative flex flex-col w-full h-auto col-span-6 gap-10 overflow-y-scroll border border-dashed scrollbar-custom border-neutral-600 p-14 focus:outline-0"
          style={{
            backgroundColor: "",
            backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
            backgroundSize: "20px 20px",
          }}
        >
          {renderLessonContent()}
        </div>
      </div>
    </>
  );
};
