import { useProgress } from "./context/ProgressContext";
import { useAuth } from "./context/AuthContext";

export const DebugProgress = () => {
  const { state, markLessonComplete, isLessonCompleted } = useProgress();
  const { user } = useAuth();

  const testCSSProgress = async () => {
    console.log("=== CSS PROGRESS TEST ===");
    console.log("User:", user);
    console.log("Current state:", state);
    console.log(
      "CSS Course:",
      state.courses.find((c) => c.courseId === "css")
    );
    console.log("Is CSS Lesson 1 completed?", isLessonCompleted("css", 1));

    if (user) {
      console.log("Marking CSS Lesson 1 as complete...");
      await markLessonComplete("css", 1);
      console.log("After marking complete:");
      console.log(
        "CSS Course:",
        state.courses.find((c) => c.courseId === "css")
      );
      console.log("Is CSS Lesson 1 completed?", isLessonCompleted("css", 1));
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <h2>Progress Debug</h2>
      <button
        onClick={testCSSProgress}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        Test CSS Progress
      </button>
      <pre className="text-sm mt-4">{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
