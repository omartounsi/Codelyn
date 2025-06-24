import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { useAuth } from "./AuthContext";

// Types
export interface CourseProgress {
  courseId: string;
  courseName: string;
  progress: number; // 0-100%
  completedLessons: number[];
  totalLessons: number;
  lastAccessedLesson: number;
  completedAt?: Date;
}

export interface LessonProgress {
  courseId: string;
  lessonId: number;
  isCompleted: boolean;
  completedAt?: Date;
  timeSpent: number; // minutes
  attempts: number;
}

export interface ProgressState {
  overallProgress: number;
  courses: CourseProgress[];
  lessons: LessonProgress[];
  isLoading: boolean;
  error: string | null;
}

// API base URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// Actions
type ProgressAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | {
      type: "SET_PROGRESS";
      payload: Omit<ProgressState, "isLoading" | "error">;
    }
  | {
      type: "MARK_LESSON_COMPLETE";
      payload: { courseId: string; lessonId: number };
    }
  | { type: "UPDATE_COURSE_PROGRESS"; payload: CourseProgress }
  | { type: "UPDATE_OVERALL_PROGRESS"; payload: number }
  | { type: "SYNC_FROM_SERVER"; payload: any };

// Initial state
const initialState: ProgressState = {
  overallProgress: 0,
  courses: [
    {
      courseId: "html",
      courseName: "HTML Fundamentals",
      progress: 0,
      completedLessons: [],
      totalLessons: 9,
      lastAccessedLesson: 1,
    },
    {
      courseId: "css",
      courseName: "CSS Styling",
      progress: 0,
      completedLessons: [],
      totalLessons: 9,
      lastAccessedLesson: 1,
    },
    {
      courseId: "javascript",
      courseName: "JavaScript Fundamentals",
      progress: 0,
      completedLessons: [],
      totalLessons: 12,
      lastAccessedLesson: 1,
    },
    {
      courseId: "cli",
      courseName: "Command Line Interface",
      progress: 0,
      completedLessons: [],
      totalLessons: 5,
      lastAccessedLesson: 1,
    },
  ],
  lessons: [],
  isLoading: false,
  error: null,
};

// Reducer
const progressReducer = (
  state: ProgressState,
  action: ProgressAction
): ProgressState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "SET_PROGRESS":
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null,
      };

    case "MARK_LESSON_COMPLETE": {
      const { courseId, lessonId } = action.payload;

      // Update lessons array
      const updatedLessons = state.lessons.map((lesson) =>
        lesson.courseId === courseId && lesson.lessonId === lessonId
          ? { ...lesson, isCompleted: true, completedAt: new Date() }
          : lesson
      );

      // If lesson doesn't exist, add it
      const lessonExists = state.lessons.some(
        (lesson) => lesson.courseId === courseId && lesson.lessonId === lessonId
      );

      if (!lessonExists) {
        updatedLessons.push({
          courseId,
          lessonId,
          isCompleted: true,
          completedAt: new Date(),
          timeSpent: 0,
          attempts: 1,
        });
      }

      // Update courses array
      const updatedCourses = state.courses.map((course) => {
        if (course.courseId === courseId) {
          const newCompletedLessons = course.completedLessons.includes(lessonId)
            ? course.completedLessons
            : [...course.completedLessons, lessonId].sort((a, b) => a - b);

          const newProgress = Math.round(
            (newCompletedLessons.length / course.totalLessons) * 100
          );

          return {
            ...course,
            completedLessons: newCompletedLessons,
            progress: newProgress,
            completedAt: newProgress === 100 ? new Date() : course.completedAt,
          };
        }
        return course;
      });

      // Calculate new overall progress
      const totalLessons = updatedCourses.reduce(
        (sum, course) => sum + course.totalLessons,
        0
      );
      const totalCompleted = updatedCourses.reduce(
        (sum, course) => sum + course.completedLessons.length,
        0
      );
      const newOverallProgress = Math.round(
        (totalCompleted / totalLessons) * 100
      );

      return {
        ...state,
        lessons: updatedLessons,
        courses: updatedCourses,
        overallProgress: newOverallProgress,
      };
    }

    case "UPDATE_COURSE_PROGRESS":
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.courseId === action.payload.courseId ? action.payload : course
        ),
      };

    case "UPDATE_OVERALL_PROGRESS":
      return {
        ...state,
        overallProgress: action.payload,
      };

    case "SYNC_FROM_SERVER":
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};

// Context
interface ProgressContextType {
  state: ProgressState;
  markLessonComplete: (courseId: string, lessonId: number) => Promise<void>;
  updateLastAccessedLesson: (courseId: string, lessonId: number) => void;
  getCourseProgress: (courseId: string) => CourseProgress | undefined;
  getAllProgress: () => Record<string, CourseProgress>;
  getLessonProgress: (
    courseId: string,
    lessonId: number
  ) => LessonProgress | undefined;
  isLessonCompleted: (courseId: string, lessonId: number) => boolean;
  refreshProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

// Provider
interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);
  const { user } = useAuth();

  // Utility functions
  const getCourseProgress = (courseId: string): CourseProgress | undefined => {
    return state.courses.find((course) => course.courseId === courseId);
  };

  const getLessonProgress = (
    courseId: string,
    lessonId: number
  ): LessonProgress | undefined => {
    return state.lessons.find(
      (lesson) => lesson.courseId === courseId && lesson.lessonId === lessonId
    );
  };

  const isLessonCompleted = (courseId: string, lessonId: number): boolean => {
    const course = getCourseProgress(courseId);
    return course?.completedLessons.includes(lessonId) || false;
  };

  const getAllProgress = (): Record<string, CourseProgress> => {
    const progressMap: Record<string, CourseProgress> = {};
    state.courses.forEach((course) => {
      progressMap[course.courseId] = course;
    });
    return progressMap;
  };

  // Helper function to get auth token
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  // API functions
  const fetchProgressFromServer = async (): Promise<void> => {
    if (!user) return;

    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const response = await fetch(`${API_BASE_URL}/progress`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch progress");
      }

      const result = await response.json();

      if (result.success && result.data) {
        const serverData = result.data;

        // Transform server data to match our state structure
        const updatedCourses = initialState.courses.map((course) => {
          const serverCourse = serverData[course.courseId];
          if (serverCourse) {
            return {
              ...course,
              progress: serverCourse.progress || 0,
              completedLessons: serverCourse.completedLessons || [],
              lastAccessedLesson: serverCourse.lastAccessed || 1,
              completedAt: serverCourse.completionDate
                ? new Date(serverCourse.completionDate)
                : undefined,
            };
          }
          return course;
        });

        // Calculate overall progress
        const totalLessons = updatedCourses.reduce(
          (sum, course) => sum + course.totalLessons,
          0
        );
        const totalCompleted = updatedCourses.reduce(
          (sum, course) => sum + course.completedLessons.length,
          0
        );
        const overallProgress = Math.round(
          (totalCompleted / totalLessons) * 100
        );

        dispatch({
          type: "SET_PROGRESS",
          payload: {
            overallProgress,
            courses: updatedCourses,
            lessons: [],
          },
        });
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
      dispatch({ type: "SET_ERROR", payload: "Failed to load progress data" });
    }
  };

  const markLessonComplete = async (
    courseId: string,
    lessonId: number
  ): Promise<void> => {
    if (!user) return;

    try {
      // Optimistic update first
      dispatch({
        type: "MARK_LESSON_COMPLETE",
        payload: { courseId, lessonId },
      });

      // Then sync with server
      const response = await fetch(`${API_BASE_URL}/progress/complete`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ courseType: courseId, lessonId }),
      });

      if (!response.ok) {
        throw new Error("Failed to update progress");
      }

      // Refresh progress from server to ensure consistency
      await fetchProgressFromServer();
    } catch (error) {
      console.error("Error marking lesson complete:", error);
      // Refresh progress to rollback optimistic update
      await fetchProgressFromServer();
    }
  };

  const updateLastAccessedLesson = (
    courseId: string,
    lessonId: number
  ): void => {
    const course = getCourseProgress(courseId);
    if (course) {
      const updatedCourse = { ...course, lastAccessedLesson: lessonId };
      dispatch({ type: "UPDATE_COURSE_PROGRESS", payload: updatedCourse });
    }
  };

  const refreshProgress = async (): Promise<void> => {
    await fetchProgressFromServer();
  };

  // Load progress on mount and when user changes
  useEffect(() => {
    if (user) {
      fetchProgressFromServer();
    } else {
      // Reset to initial state when user logs out
      dispatch({
        type: "SET_PROGRESS",
        payload: {
          overallProgress: 0,
          courses: initialState.courses,
          lessons: [],
        },
      });
    }
  }, [user]);

  const contextValue: ProgressContextType = {
    state,
    markLessonComplete,
    updateLastAccessedLesson,
    getCourseProgress,
    getAllProgress,
    getLessonProgress,
    isLessonCompleted,
    refreshProgress,
  };

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  );
};

// Hook
export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
