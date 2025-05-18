import { Editor } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import { useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { HTML1 } from "./1";
import { HTML2 } from "./2";
import { defaultHtmls } from "../../tools/defaulthtmls";
import { HTML3 } from "./3";

export const HTMLLesson = () => {
  const id = useParams();
  const [activeTab, setActiveTab] = useState<number>(0);

  //
  const lessonIndex = id.lessonId ? Number(id.lessonId) - 1 : 0;
  const [html, setHtml] = useState<string>(defaultHtmls[lessonIndex]);

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rightPaneRef = useRef<HTMLDivElement>(null);

  function handleChange(value: string) {
    setHtml(value);
    console.log(html);
  }

  // SCROLL TO TOP AND FOCUS ON ROUTE
  useEffect(() => {
    rightPaneRef.current?.scrollTo({ top: 0, behavior: "auto" });
    rightPaneRef.current?.focus();
  }, [id.lessonId]);

  // UOADATE EDITOR ON ROUTING CHANGE
  useEffect(() => {
    setHtml(defaultHtmls[lessonIndex]);
    if (editorRef.current) {
      editorRef.current.setValue(defaultHtmls[lessonIndex]);
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
    editorRef.current?.setValue(defaultHtmls[lessonIndex]);
  }

  return (
    <div className="bg-zinc-950 h-screen w-full grid grid-cols-12 text-neutral-300 pt-14 ">
      {/* LEFT */}
      <div className="col-span-6 grid grid-rows-12">
        {/* TABS */}
        <div className="row-span-1 flex items-center gap-1 pr-4 pl-1">
          <p
            onClick={() => setActiveTab(0)}
            className={`border h-8 px-4 rounded-full flex items-center opacity-40 hover:opacity-100 transition-opacity select-none ${
              activeTab === 0 ? "opacity-100" : ""
            }`}
          >
            index.html
          </p>
          <p
            onClick={() => setActiveTab(1)}
            className={`border h-8 px-4 rounded-full flex items-center opacity-40 hover:opacity-100 transition-opacity select-none ${
              activeTab === 1 ? "opacity-100" : ""
            }`}
          >
            Editor
          </p>
          <p
            onClick={handleReset}
            className={`border h-8 px-4 rounded-full flex items-center opacity-40 hover:opacity-100 transition-opacity select-none ml-auto`}
          >
            Reset
          </p>
        </div>
        <div className="row-span-11 relative">
          <iframe
            ref={iframeRef}
            sandbox=" allow-scripts"
            className={`w-full h-full absolute inset-0  ${
              activeTab === 0 ? "z-10 bg-white" : "z-0"
            }`}
          ></iframe>

          <div
            className={`w-full h-full absolute inset-0  ${
              activeTab === 1 ? "z-10" : "z-0"
            }`}
          >
            <Editor
              height="100%"
              width="100%"
              theme="customDarkTheme"
              defaultLanguage="html"
              defaultValue={defaultHtmls[lessonIndex]}
              onChange={(value) => handleChange(value || "")}
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
              onMount={(editor, monaco) => {
                editorRef.current = editor;
                monaco.editor.defineTheme("customDarkTheme", {
                  base: "vs-dark",
                  inherit: true,
                  rules: [
                    {
                      token: "comment",
                      foreground: "#aaaaaa",
                      fontStyle: "italic",
                    },
                    { token: "keyword", foreground: "#B9B28A" }, //let const
                    { token: "string", foreground: "#EDF1D6" }, //
                    { token: "number", foreground: "#ffaa00" },
                    { token: "variable", foreground: "#ffffff" },
                    { token: "type.identifier.js", foreground: "#ffffff" },

                    // HTML
                    { token: "tag", foreground: "#9DC08B" },
                    { token: "keyword.control.html", foreground: "#ffffff" },
                    { token: "attribute.name", foreground: "#ffffff" },
                    { token: "attribute.value", foreground: "#ffffff" },

                    //css
                    {
                      token: "control.css",
                      foreground: "#B9B28A",
                    },
                    {
                      token: "property.css",
                      foreground: "#000000", // pick your color in HEX
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
                monaco.editor.setTheme("customDarkTheme");
              }}
            />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div
        ref={rightPaneRef}
        className="scrollbar-custom col-span-6 border border-dashed border-neutral-600 h-auto w-full overflow-y-scroll p-14 flex flex-col gap-10 relative focus:outline-0"
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
          <HTML1 />
        ) : id.lessonId === "2" ? (
          <HTML2 />
        ) : id.lessonId === "3" ? (
          <HTML3 />
        ) : (
          <>Not Found</>
        )}
      </div>
    </div>
  );
};
