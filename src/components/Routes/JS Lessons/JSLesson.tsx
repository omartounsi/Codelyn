import { Editor } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import { useParams, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { JS1 } from "./1";
import { JS2 } from "./2";
import { JS3 } from "./3";
import { JS4 } from "./4";
import { JS5 } from "./5";
import { JS6 } from "./6";
import { JS7 } from "./7";
import { JS8 } from "./8";
import { JS9 } from "./9";
import { JS10 } from "./10";
import { JS11 } from "./11";
import { JS12 } from "./12";
import { defaultJSs } from "../../tools/defaultjss";
import {
  IoMenu,
  IoArrowBack,
  IoFlag,
  IoHelpCircle,
  IoCode,
} from "react-icons/io5";

export const JSLesson = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  //
  const lessonIndex = id.lessonId ? Number(id.lessonId) - 1 : 0;
  const [html, setHtml] = useState<string>(defaultJSs[lessonIndex]);

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const rightPaneRef = useRef<HTMLDivElement>(null);

  function handleChange(value: string) {
    setHtml(value!);
  }

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

  // UPDATE EDITOR ON ROUTING CHANGE
  useEffect(() => {
    setHtml(defaultJSs[lessonIndex]);
    if (editorRef.current) {
      editorRef.current.setValue(defaultJSs[lessonIndex]);
    }
  }, [lessonIndex]);

  //DEBOUNCE FUNCTION
  useEffect(() => {
    if (!iframeRef.current) return;

    //if prev timeout:
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    //new timer
    timeoutRef.current = setTimeout(() => {
      iframeRef.current!.srcdoc = html;
    }, 500);

    //cleanup
    return () => clearTimeout(timeoutRef.current!);
  }, [html]);

  function handleReset() {
    setHtml(defaultJSs[lessonIndex]);
    if (editorRef.current) {
      editorRef.current.setValue(defaultJSs[lessonIndex]);
    }
  }

  const menuItems = [
    {
      icon: IoArrowBack,
      label: "Back to Course",
      action: () => navigate("/lessons/js"),
    },
    {
      icon: IoFlag,
      label: "Report Course",
      action: () => console.log("Report course"), // Placeholder
    },
    {
      icon: IoHelpCircle,
      label: "Ask AI for Help",
      action: () => console.log("Ask AI for help"), // Placeholder
    },
    {
      icon: IoCode,
      label: "Go to Projects",
      action: () => console.log("Go to projects"), // Placeholder
    },
  ];

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
                  item.action();
                  setMenuOpen(false);
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
      <div className="grid w-full h-screen grid-cols-12 bg-zinc-950 text-neutral-300 pt-14 ">
        {/* LEFT */}
        <div className="grid col-span-6 grid-rows-12">
          {/* EDITOR HEADER */}
          <div className="flex items-center row-span-1 gap-1 pl-1 pr-4">
            <p className="flex items-center h-8 px-4 border rounded-full opacity-100 select-none">
              index.html
            </p>
            <p
              onClick={handleReset}
              className="flex items-center h-8 px-4 ml-auto transition-opacity border rounded-full cursor-pointer select-none opacity-40 hover:opacity-100"
            >
              Reset
            </p>
          </div>{" "}
          {/* EDITOR */}
          <div className="row-span-6 border-b border-neutral-700">
            <Editor
              height="100%"
              language="html"
              value={html}
              onChange={(value) => handleChange(value!)}
              onMount={(editor, monaco) => {
                editorRef.current = editor;

                // Define custom dark theme
                monaco.editor.defineTheme("customDarkTheme", {
                  base: "vs-dark",
                  inherit: true,
                  rules: [
                    {
                      token: "comment",
                      foreground: "#aaaaaa",
                      fontStyle: "italic",
                    },
                    { token: "keyword", foreground: "#B9B28A" }, // let, const, function
                    { token: "string", foreground: "#EDF1D6" }, // strings
                    { token: "number", foreground: "#ffaa00" }, // numbers
                    { token: "variable", foreground: "#ffffff" }, // variables
                    { token: "type.identifier.js", foreground: "#ffffff" },

                    // HTML
                    { token: "tag", foreground: "#9DC08B" }, // HTML tags
                    { token: "keyword.control.html", foreground: "#ffffff" },
                    { token: "attribute.name", foreground: "#ffffff" }, // HTML attributes
                    { token: "attribute.value", foreground: "#ffffff" },

                    // CSS
                    {
                      token: "control.css",
                      foreground: "#B9B28A",
                    },
                    {
                      token: "property.css",
                      foreground: "#ffffff",
                    },
                  ],
                  colors: {
                    // Main editor colors
                    "editor.background": "#0a0a0a",
                    "editor.foreground": "#f9fafb", // gray-50

                    // Cursor
                    "editorCursor.foreground": "#f9fafb", // gray-50

                    // Line highlight - slightly lighter than background
                    "editor.lineHighlightBackground": "#1f2937", // gray-800

                    // Selection
                    "editor.selectionBackground": "#374151", // gray-700
                    "editor.inactiveSelectionBackground": "#374151cc", // gray-700 with opacity

                    // Line numbers
                    "editorLineNumber.foreground": "#6b7280", // gray-500
                    "editorLineNumber.activeForeground": "#e5e7eb", // gray-200

                    // Gutter
                    "editorGutter.background": "#1a1a1a", // gray-900

                    // Whitespace
                    "editorWhitespace.foreground": "#4b5563", // gray-600

                    // Indentation guides
                    "editorIndentGuide.background": "#374151", // gray-700
                    "editorIndentGuide.activeBackground": "#4b5563", // gray-600

                    // Rulers
                    "editorRuler.foreground": "#374151", // gray-700

                    // Bracket matching
                    "editorBracketMatch.background": "#4b556366", // gray-600 with opacity
                    "editorBracketMatch.border": "#6b7280", // gray-500

                    // Overview ruler
                    "editorOverviewRuler.border": "#1f2937", // gray-800

                    // Scrollbar
                    "scrollbarSlider.background": "#4b556333", // gray-600 with low opacity
                    "scrollbarSlider.hoverBackground": "#4b556366", // gray-600 with medium opacity
                    "scrollbarSlider.activeBackground": "#4b5563cc", // gray-600 with high opacity
                  },
                });

                // Set the custom theme
                monaco.editor.setTheme("customDarkTheme");
              }}
              theme="customDarkTheme"
              options={{
                fontFamily: "IBM Plex Mono",
                fontSize: 15,
                minimap: {
                  enabled: false,
                },
                lineDecorationsWidth: 6,
                lineNumbersMinChars: 3,
                wordWrap: "on",
                scrollBeyondLastLine: false,
                scrollbar: {
                  vertical: "hidden",
                },
                overviewRulerLanes: 0,
                suggestOnTriggerCharacters: true,
                quickSuggestions: true,
                automaticLayout: true,
                formatOnType: true,
                tabCompletion: "on",
              }}
            />
          </div>
          {/* PREVIEW */}
          <div className="row-span-5">
            <iframe
              ref={iframeRef}
              className="w-full h-full bg-white"
              title="Preview"
              sandbox="allow-scripts"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={rightPaneRef}
          className="relative flex flex-col w-full h-auto col-span-6 gap-10 overflow-y-scroll border border-dashed scrollbar-custom border-neutral-600 p-14 focus:outline-0"
          style={{
            backgroundColor: "#09090b",
            backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
    `,
            backgroundSize: "20px 20px",
          }}
        >
          {id.lessonId === "1" ? (
            <JS1 />
          ) : id.lessonId === "2" ? (
            <JS2 />
          ) : id.lessonId === "3" ? (
            <JS3 />
          ) : id.lessonId === "4" ? (
            <JS4 />
          ) : id.lessonId === "5" ? (
            <JS5 />
          ) : id.lessonId === "6" ? (
            <JS6 />
          ) : id.lessonId === "7" ? (
            <JS7 />
          ) : id.lessonId === "8" ? (
            <JS8 />
          ) : id.lessonId === "9" ? (
            <JS9 />
          ) : id.lessonId === "10" ? (
            <JS10 />
          ) : id.lessonId === "11" ? (
            <JS11 />
          ) : id.lessonId === "12" ? (
            <JS12 />
          ) : (
            <>Not Found</>
          )}
        </div>
      </div>
    </>
  );
};
