import { Editor } from "@monaco-editor/react";
import { Document } from "./tools/html";
import { useEffect, useRef, useState } from "react";

export const EditorPreview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [html, setHtml] = useState<string>(Document);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //SCROLL FIX
  const [isIFrameActive, setIsIframeActive] = useState<Boolean>(false);

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

  return (
    <div
      style={{
        boxShadow: "10px 10px 15px rgb(23, 36, 48, 0.9)",
      }}
      className="flex flex-col w-full h-auto gap-10 p-10 overflow-hidden border rounded-xl border-neutral-100/30"
    >
      <div className="flex flex-col items-start p-10 border rounded-xl border-neutral-100/30 bg-[#1b2d3f]/40">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-50">
          An interactive experience
        </h1>
        <p className="max-w-2xl text-lg font-light text-foreground text-neutral-100">
          Write, edit and visualize your HTML, CSS and JavaScript in real-time
          with our advanced code editor. Perfect for learning, prototyping, or
          quickly testing web ideas without switching between applications.
        </p>
      </div>
      <div className="h-180 w-[100%] flex justify-evenly items-center ">
        <div className="flex w-full h-full overflow-hidden border border-neutral-100/30 rounded-xl">
          {/* EDITOR */}
          <div className="h-full w-[50%]  overflow-hidden ">
            <Editor
              height="100%"
              width="100%"
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
              onMount={(_, monaco) => {
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

          {/* OUTPUT */}
          <div
            onMouseEnter={() => setIsIframeActive(true)}
            onMouseLeave={() => setIsIframeActive(false)}
            className="w-[50%] h-full border overflow-hidden "
          >
            <iframe
              ref={iframeRef}
              srcDoc={Document}
              sandbox="allow-scripts"
              className={` h-full w-full bg-neutral-100 ${
                isIFrameActive ? "pointer-events-auto" : "pointer-events-none"
              }`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
