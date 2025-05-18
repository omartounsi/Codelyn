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
    <div className="flex flex-col justify-center border p-4 border-neutral-800 rounded-lg gap-1">
      <code
        className={`w-full h-auto py-1 px-3 border border-neutral-800 bg-neutral-800/40 ${styling}`}
      >
        {codeString}
      </code>
      <p className="max-w-2xl text-xl font-light text-foreground  text-neutral-100 px-3">
        {paragraphString}
      </p>
    </div>
  );
};
