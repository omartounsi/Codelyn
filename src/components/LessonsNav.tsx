export const LessonsNav = () => {
  return (
    <div className="h-14 w-full border-b border-dashed border-neutral-800">
      <ul className="h-full flex items-center gap-20 justify-center text-sm text-neutral-400">
        <li className="bg-neutral-900 h-7 flex items-center px-4 rounded-full text-neutral-50">
          HTML
        </li>
        <li className="h-7 flex items-center px-4 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors select-none">
          CSS
        </li>
        <li className="h-7 flex items-center px-4 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors select-none">
          JavaScript I
        </li>
        <li className="h-7 flex items-center px-4 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors select-none">
          JavaScript II
        </li>
        <li className="h-7 flex items-center px-4 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors select-none">
          Git
        </li>
        <li className="h-7 flex items-center px-4 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors select-none">
          React I
        </li>
        <li className="h-7 flex items-center px-4 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors select-none">
          React II
        </li>
        <li className="h-7 flex items-center px-4 rounded-full hover:bg-neutral-900 hover:text-neutral-50 transition-colors select-none">
          React III
        </li>
      </ul>
    </div>
  );
};
