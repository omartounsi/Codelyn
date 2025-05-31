type CodeElementProps = {
  codeString: string;
  paragraphString?: string;
  styling?: string;
};

export const CodeElement = ({
  codeString,
  paragraphString,
  styling,
}: CodeElementProps) => {
  return (
    <div className="flex flex-col justify-center gap-1 p-4 border rounded-lg border-neutral-800">
      <code
        className={`w-full h-auto py-1 px-3 border border-neutral-800 bg-neutral-800/40 whitespace-pre-wrap break-words overflow-x-auto ${styling}`}
      >
        {codeString}
      </code>
      <p className="max-w-2xl px-3 text-xl font-light text-foreground text-neutral-100">
        {paragraphString}
      </p>
    </div>
  );
};
