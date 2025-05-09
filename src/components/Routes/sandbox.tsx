import { Editor } from "@monaco-editor/react";
import { Document } from "../html";
import { useEffect, useRef, useState } from "react";
import type * as monaco from "monaco-editor";

export const Sandbox = () => {
  const [html, setHtml] = useState<string>(Document);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(value: string) {
    setHtml(value);
    console.log(html);
  }
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
    editorRef.current?.setValue(Document);
  }

  return (
    <div className="h-screen w-full bg-neutral-950 grid grid-cols-12 ">
      {/* LEFT */}
      <div className="col-span-6 text-white text-3xl mt-14 p-3 border-r border-dashed border-neutral-800 h-[92%]">
        <div className="w-full h-full border border-neutral-700 border-dashed rounded-xl p-8 flex flex-col gap-3">
          <div className="">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-neutral-50">
              Welcome to the Sandbox
            </h1>
            <p className="max-w-2xl text-sm font-light text-foreground sm:text-lg text-neutral-400">
              Try out the editor for yourself
            </p>
          </div>
          <div className="w-full h-[90%] border rounded-xl overflow-hidden">
            <Editor
              theme="customDarkTheme"
              defaultLanguage="html"
              defaultValue={Document}
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
      <div className="col-span-6 bg-white mt-14 relative">
        <div className="absolute top-5 left-5 border border-neutral-600 text-neutral-600 px-4 rounded-full hover:opacity-0 transition-[opacity] select-none">
          Live Preview: index.html
        </div>
        <button
          onClick={handleReset}
          className="absolute right-5 top-5 border px-4 rounded-full cursor-pointer opacity-40 hover:opacity-100 transition-[opacity] select-none border-neutral-600 text-neutral-600"
        >
          Reset
        </button>
        <iframe
          ref={iframeRef}
          srcDoc={Document}
          className="w-full h-full "
        ></iframe>
      </div>
    </div>
  );
};
