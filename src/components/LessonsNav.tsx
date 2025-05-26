import { useState, useRef, useEffect } from "react";

// Define course topics
const topics = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GraphQL",
  "Redux",
  "Testing",
  "Accessibility",
];

export const LessonsNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      scrollContainer.classList.add("cursor-grabbing");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove("cursor-grabbing");
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5; //scrollspeed
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full my-2 overflow-hidden border rounded-full shadow-md select-none shadow-neutral-800 bg-neutral-100 h-14">
      <div className="absolute inset-y-0 left-0 z-10 w-12 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute inset-y-0 right-0 z-10 w-12 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

      <ul
        ref={scrollContainerRef}
        className="flex items-center h-full gap-4 px-12 overflow-x-auto  .scrollbar-hide whitespace-nowrap scrollbar-hide cursor-grab"
        style={{ scrollBehavior: "smooth" }}
      >
        {topics.map((topic, index) => (
          <li
            key={topic}
            onClick={() => setActiveTab(index)}
            className={`flex items-center px-6 py-4 border rounded-full h-7 whitespace-nowrap transition-all duration-300 ${
              activeTab === index
                ? "bg-neutral-800 text-white border-neutral-800"
                : "text-neutral-600 hover:text-neutral-800 border-neutral-200 hover:border-neutral-400"
            }`}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};
