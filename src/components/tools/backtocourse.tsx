import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

interface BackToCourseProps {
  courseType: "html" | "css" | "cli" | "js" | "javascript";
  courseName: string;
}

export const BackToCourse = ({ courseType }: BackToCourseProps) => {
  return (
    <Link
      to={`/lessons/${courseType}`}
      className="fixed z-50 flex items-center justify-center w-10 h-10 gap-2 transition-all duration-200 border rounded-full shadow-lg bottom-4 left-4 bg-neutral-800/90 opacity-40 hover:opacity-100 backdrop-blur-sm border-neutral-600 text-neutral-200 hover:text-white hover:bg-neutral-700/90 hover:scale-105"
    >
      <IoArrowBack className="w-4 h-4" />
      {/* <span className="text-sm font-medium">Back to {courseName}</span> */}
    </Link>
  );
};
