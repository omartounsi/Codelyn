import { useState, useRef, useEffect } from "react";
import { IoTerminal, IoArrowForward } from "react-icons/io5";

interface TerminalProps {
  onCommandExecute?: (command: string, output: string) => void;
  expectedCommands?: string[];
  currentStep?: number;
  readOnly?: boolean;
}

interface FileSystemItem {
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileSystemItem[];
}

// Simulated file system
const initialFileSystem: FileSystemItem = {
  name: "root",
  type: "directory",
  children: [
    {
      name: "Documents",
      type: "directory",
      children: [
        {
          name: "resume.txt",
          type: "file",
          content: "My awesome resume content",
        },
        {
          name: "projects",
          type: "directory",
          children: [
            {
              name: "website",
              type: "directory",
              children: [
                {
                  name: "index.html",
                  type: "file",
                  content: "<!DOCTYPE html>...",
                },
                {
                  name: "style.css",
                  type: "file",
                  content: "body { margin: 0; }",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Downloads",
      type: "directory",
      children: [
        { name: "image.jpg", type: "file", content: "Binary image data" },
      ],
    },
    {
      name: "Desktop",
      type: "directory",
      children: [
        { name: "notes.txt", type: "file", content: "Important notes here" },
      ],
    },
  ],
};

export const InteractiveTerminal = ({
  onCommandExecute,
  expectedCommands = [],
  currentStep = 0,
  readOnly = false,
}: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    Array<{ type: "command" | "output"; content: string }>
  >([
    {
      type: "output",
      content:
        "Welcome to the interactive terminal! Type 'help' to get started.",
    },
  ]);
  const [currentPath, setCurrentPath] = useState(["root"]);
  const [fileSystem] = useState(initialFileSystem);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current && !readOnly) {
      inputRef.current.focus();
    }
  }, [readOnly]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const getCurrentDirectory = (): FileSystemItem | null => {
    let current = fileSystem;
    for (let i = 1; i < currentPath.length; i++) {
      const found = current.children?.find(
        (item) => item.name === currentPath[i]
      );
      if (!found || found.type !== "directory") return null;
      current = found;
    }
    return current;
  };

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();
    const parts = trimmedCommand.split(" ");
    const cmd = parts[0];
    const args = parts.slice(1);

    setHistory((prev) => [
      ...prev,
      { type: "command", content: `$ ${command}` },
    ]);

    let output = "";

    switch (cmd) {
      case "help":
        output = `Available commands:\\n\\n  ls          - list files and directories\\n  cd <dir>    - change directory\\n  pwd         - show current directory\\n  cat <file>  - display file contents\\n  mkdir <dir> - create a new directory\\n  touch <file>- create a new file\\n  clear       - clear the terminal\\n  help        - show this help message\\n\\nType any command to get started!`;
        break;

      case "ls":
        const currentDir = getCurrentDirectory();
        if (currentDir && currentDir.children) {
          const items = currentDir.children.map((item) => {
            const icon = item.type === "directory" ? "📁" : "📄";
            return `${icon} ${item.name}`;
          });
          output = items.length > 0 ? items.join("\\n") : "Directory is empty";
        } else {
          output = "Error: Cannot access directory";
        }
        break;

      case "pwd":
        output = "/" + currentPath.slice(1).join("/");
        break;

      case "cd":
        if (args.length === 0) {
          setCurrentPath(["root"]);
          output = "Changed to home directory";
        } else if (args[0] === "..") {
          if (currentPath.length > 1) {
            setCurrentPath((prev) => prev.slice(0, -1));
            output = `Changed to /${currentPath.slice(1, -1).join("/")}`;
          } else {
            output = "Already at root directory";
          }
        } else {
          const currentDir = getCurrentDirectory();
          const targetDir = currentDir?.children?.find(
            (item) =>
              item.name.toLowerCase() === args[0] && item.type === "directory"
          );
          if (targetDir) {
            setCurrentPath((prev) => [...prev, targetDir.name]);
            output = `Changed to /${[...currentPath.slice(1), targetDir.name].join("/")}`;
          } else {
            output = `cd: ${args[0]}: No such directory`;
          }
        }
        break;

      case "cat":
        if (args.length === 0) {
          output = "cat: missing file operand";
        } else {
          const currentDir = getCurrentDirectory();
          const file = currentDir?.children?.find(
            (item) =>
              item.name.toLowerCase() === args[0] && item.type === "file"
          );
          if (file && file.content) {
            output = file.content;
          } else {
            output = `cat: ${args[0]}: No such file`;
          }
        }
        break;

      case "mkdir":
        if (args.length === 0) {
          output = "mkdir: missing operand";
        } else {
          output = `Directory '${args[0]}' created successfully`;
        }
        break;

      case "touch":
        if (args.length === 0) {
          output = "touch: missing file operand";
        } else {
          output = `File '${args[0]}' created successfully`;
        }
        break;

      case "clear":
        setHistory([]);
        return;

      case "":
        break;

      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { type: "output", content: output }]);

    if (onCommandExecute) {
      onCommandExecute(command, output);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !readOnly) {
      executeCommand(input);
      setInput("");
    }
  };

  const getPrompt = () => {
    const pathStr =
      currentPath.length === 1 ? "~" : `~/${currentPath.slice(1).join("/")}`;
    return `user@codelyn:${pathStr}$`;
  };

  return (
    <div className="flex flex-col h-full font-mono text-sm bg-black border rounded-lg border-neutral-700">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b rounded-t-lg bg-neutral-800 border-neutral-700">
        <IoTerminal className="w-4 h-4 text-green-400" />
        <span className="text-neutral-300">Terminal</span>
        <div className="flex gap-1 ml-auto">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 p-4 space-y-1 overflow-y-auto text-green-400 bg-black scrollbar-thin scrollbar-thumb-neutral-600"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div
            key={index}
            className={
              entry.type === "command" ? "text-white" : "text-green-400"
            }
          >
            {entry.content.split("\\n").map((line, lineIndex) => (
              <div key={lineIndex}>{line}</div>
            ))}
          </div>
        ))}

        {/* Current Input Line */}
        {!readOnly && (
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2 text-blue-400">{getPrompt()}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 text-white bg-transparent outline-none"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        )}
      </div>

      {/* Expected Command Hint */}
      {expectedCommands.length > 0 && currentStep < expectedCommands.length && (
        <div className="px-4 py-2 border-t rounded-b-lg bg-neutral-900 border-neutral-700">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <IoArrowForward className="w-3 h-3" />
            <span>
              Expected:{" "}
              <code className="text-blue-400">
                {expectedCommands[currentStep]}
              </code>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
