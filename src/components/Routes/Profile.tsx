import { useAuth } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "../tools/loadingspinner";
import { ProfilePictureUpload } from "../tools/ProfilePictureUpload";
import { UPLOADS_BASE_URL } from "../../config/api";
import {
  IoCheckmarkCircle,
  IoClose,
  IoCalendar,
  IoShield,
  IoCamera,
} from "react-icons/io5";

type UserStats = {
  totalLessonsCompleted: number;
  totalCoursesStarted: number;
  totalCoursesCompleted: number;
  averageProgress: number;
  longestStreak: number;
  currentStreak: number;
  totalTimeSpent: number; // in minutes
  lastActiveDate: string;
  favoriteLanguage: string;
  achievements: string[];
};

export const Profile = () => {
  const { user, isAuthenticated } = useAuth();
  const { state: progressState, getAllProgress } = useProgress();
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [currentProfilePicture, setCurrentProfilePicture] = useState<
    string | null
  >(user?.profilePicture || null);

  useEffect(() => {
    if (isAuthenticated && user) {
      calculateUserStats();
    }
  }, [isAuthenticated, user, progressState]);

  const calculateUserStats = () => {
    try {
      const allProgress = getAllProgress();
      const courses = Object.keys(allProgress);

      let totalLessonsCompleted = 0;
      let totalCoursesStarted = courses.length;
      let totalCoursesCompleted = 0;
      let totalProgress = 0;

      courses.forEach((courseId) => {
        const courseProgress = allProgress[courseId];
        if (courseProgress) {
          totalLessonsCompleted += courseProgress.completedLessons.length;
          totalProgress += courseProgress.progress || 0;
          if (courseProgress.progress === 100) {
            totalCoursesCompleted++;
          }
        }
      });

      const averageProgress =
        courses.length > 0 ? totalProgress / courses.length : 0;

      // Mock some additional stats (in a real app, these would come from the backend)
      const stats: UserStats = {
        totalLessonsCompleted,
        totalCoursesStarted,
        totalCoursesCompleted,
        averageProgress: Math.round(averageProgress),
        longestStreak: Math.floor(Math.random() * 30) + 1,
        currentStreak: Math.floor(Math.random() * 7) + 1,
        totalTimeSpent: totalLessonsCompleted * 15, // Assume 15 min per lesson
        lastActiveDate: new Date().toISOString(),
        favoriteLanguage:
          totalLessonsCompleted > 5 ? "HTML" : "Getting Started",
        achievements: [
          totalLessonsCompleted >= 5 && "First Steps",
          totalLessonsCompleted >= 10 && "Learning Momentum",
          totalCoursesCompleted >= 1 && "Course Master",
          averageProgress >= 50 && "Progress Champion",
        ].filter(Boolean) as string[],
      };

      setUserStats(stats);
      setLoading(false);
    } catch (error) {
      console.error("Error calculating user stats:", error);
      setLoading(false);
    }
  };

  const formatTimeSpent = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const handlePictureUpdate = (newProfilePictureUrl: string | null) => {
    setCurrentProfilePicture(newProfilePictureUrl);
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-6 text-center border rounded-xl border-neutral-700 bg-neutral-800/50">
          <p className="text-neutral-400">
            Please log in to view your profile.
          </p>
        </div>
      </div>
    );
    if (!isAuthenticated || !user) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-6 text-center border rounded-xl border-neutral-700 bg-neutral-800/50">
            <p className="text-neutral-400">
              Please log in to view your profile.
            </p>
          </div>
        </div>
      );
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
      className="grid w-full h-auto min-h-screen grid-cols-12 bg-zinc-900 text-neutral-300 pt-14 font-inter"
    >
      <div className="col-span-1 border-r border-neutral-600"></div>

      <div
        style={{
          backdropFilter: "blur(2px)",
        }}
        className="flex flex-col col-span-10 p-10 "
      >
        <div className="grid h-[98%] grid-cols-12 grid-rows-2 gap-2 border border-neutral-700/40 p-4">
          {/* Header Section */}
          <div className="flex flex-col items-center col-span-4 row-span-2 p-12 justify-evenly rounded-2xl ">
            {/* Left Side - User Info */}
            <div className="flex flex-col items-center ">
              <div className="relative mb-6 group">
                {currentProfilePicture ? (
                  <img
                    src={`${UPLOADS_BASE_URL}${currentProfilePicture}`}
                    alt="Profile"
                    className="object-cover transition-all duration-300 rounded-full shadow-2xl w-28 h-28 ring-4 ring-blue-500/20 shadow-blue-500/20 group-hover:ring-blue-500/40"
                  />
                ) : (
                  <div className="flex items-center justify-center text-4xl font-black text-white transition-all duration-300 rounded-full shadow-2xl w-28 h-28 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 ring-4 ring-orange-500/20 shadow-orange-500/20 group-hover:ring-orange-500/40">
                    {user.first_name[0]}
                    {user.last_name[0]}
                  </div>
                )}

                {/* Camera overlay button */}
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="absolute bottom-0 right-0 flex items-center justify-center w-10 h-10 text-white transition-all duration-200 transform rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:scale-110 ring-2 ring-white/20"
                >
                  <IoCamera className="w-5 h-5" />
                </button>
              </div>

              <h1 className="mb-2 text-5xl font-black leading-tight tracking-tighter ">
                {user.first_name} {user.last_name}
              </h1>
              <p className="text-lg font-medium text-neutral-400">
                {user.email}
              </p>
            </div>

            {/* Right Side - Key Stats */}
            <div className="max-w-md">
              <div className="flex gap-2 mb-6 select-none">
                {/* Role Badge */}
                <div
                  className={`flex items-center gap-2 px-3 py-2 border rounded-full shadow-lg transition-all duration-200 flex-shrink-0 hover:scale-105 ${
                    user.role === "admin"
                      ? "border-red-500/40 bg-gradient-to-r from-red-500/10 to-red-600/20 shadow-red-500/20"
                      : user.role === "student"
                        ? "border-blue-500/40 bg-gradient-to-r from-blue-500/10 to-blue-600/20 shadow-blue-500/20"
                        : "border-gray-500/40 bg-gradient-to-r from-gray-500/10 to-gray-600/20 shadow-gray-500/20"
                  }`}
                >
                  <IoShield
                    className={`w-3 h-3 ${
                      user.role === "admin"
                        ? "text-red-400"
                        : user.role === "student"
                          ? "text-blue-400"
                          : "text-gray-400"
                    }`}
                  />
                  <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">
                    {user.role}
                  </span>
                </div>

                {/* Subscription Status */}
                <div
                  className={`flex items-center gap-2 px-3 py-2 border rounded-full shadow-lg transition-all duration-200 hover:scale-105 flex-shrink-0 ${
                    user.isSubscribed
                      ? "border-green-500/40 bg-gradient-to-r from-green-500/10 to-green-600/20 shadow-green-500/20"
                      : "border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-yellow-600/20 shadow-yellow-500/20"
                  }`}
                >
                  {user.isSubscribed ? (
                    <>
                      <IoCheckmarkCircle className="w-3 h-3 text-green-400" />
                      <span className="text-xs font-semibold tracking-wide text-green-300 uppercase">
                        Pro
                      </span>
                    </>
                  ) : (
                    <>
                      <IoClose className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs font-semibold tracking-wide text-yellow-300 uppercase">
                        Free
                      </span>
                    </>
                  )}
                </div>

                {/* Member Since */}
                <div className="flex items-center flex-shrink-0 gap-2 px-3 py-2 transition-all duration-200 border rounded-full shadow-lg border-neutral-700/40 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 hover:scale-105">
                  <IoCalendar className="w-3 h-3 text-purple-400" />
                  <span className="text-xs font-semibold tracking-wide uppercase text-neutral-300">
                    Member
                  </span>
                </div>
              </div>

              <p className="text-base font-medium leading-relaxed text-neutral-400">
                Welcome to your learning journey! Track your progress, view
                achievements, and continue building your web development skills.
              </p>
            </div>
          </div>
          {/* OVERALL */}
          <div
            style={{
              backdropFilter: "blur(8px)",
              background:
                "linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)",
              border: "1px solid rgba(148, 163, 184, 0.1)",
            }}
            className="flex flex-col col-span-6 p-8 border shadow-2xl rounded-2xl shadow-black/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 shadow-blue-500/30 "></div>
              <h1 className="mb-2 text-4xl font-black leading-tight tracking-tighter ">
                Overall Progress
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative mb-4 overflow-hidden w-34 h-34">
                <svg
                  className="absolute inset-0 w-full h-full transition-transform duration-300 transform "
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(64, 64, 64, 0.3)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeLinecap="round"
                    strokeDashoffset={`${283 - ((userStats?.averageProgress || 0) / 100) * 283}`}
                    transform="rotate(-90, 50, 50)"
                    className="transition-all duration-1000 ease-out drop-shadow-lg"
                  />
                  <defs>
                    <linearGradient
                      id="progressGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white drop-shadow-lg">
                    {userStats?.averageProgress || 0}%
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-neutral-400">
                Complete Progress
              </p>
            </div>
          </div>
          {/* Lessons Completed */}
          <div
            style={{
              backdropFilter: "blur(8px)",
              background:
                "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.2) 100%)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
            className="flex flex-col col-span-2 p-6 shadow-2xl rounded-2xl shadow-black/20"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-3 h-3 rounded-full shadow-lg bg-gradient-to-r from-green-400 to-green-600 shadow-green-500/30 animate-pulse"></div> */}
              {/* <h1 className="mb-2 text-4xl font-black leading-tight tracking-tighter ">
                Lessons
              </h1> */}
            </div>
            <div className="my-auto text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text drop-shadow-lg">
                {userStats?.totalLessonsCompleted || 0}
              </div>
              <div className="text-sm font-semibold text-green-300">
                Completed Lessons
              </div>
            </div>
          </div>
          {/* Course Progress */}
          <div
            style={{
              backdropFilter: "blur(8px)",
              background:
                "linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(249, 115, 22, 0.2) 100%)",
              border: "1px solid rgba(251, 146, 60, 0.2)",
            }}
            className="flex flex-col h-full col-span-2 p-6 shadow-2xl rounded-2xl shadow-black/20"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-3 h-3 rounded-full shadow-lg bg-gradient-to-r from-orange-400 to-orange-600 shadow-orange-500/30 animate-pulse"></div>
              <h1 className="mb-2 text-4xl font-black leading-tight tracking-tighter ">
                Courses
              </h1> */}
            </div>
            <div className="my-auto text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text drop-shadow-lg">
                {userStats?.totalCoursesCompleted || 0}/
                {userStats?.totalCoursesStarted || 0}
              </div>
              <div className="text-sm font-semibold text-orange-300">
                Courses Finished
              </div>
            </div>
          </div>

          {/* Time Spent */}
          <div
            style={{
              backdropFilter: "blur(8px)",
              background:
                "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(126, 34, 206, 0.2) 100%)",
              border: "1px solid rgba(147, 51, 234, 0.2)",
            }}
            className="flex flex-col col-span-6 p-6 shadow-2xl rounded-2xl shadow-black/20"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="w-3 h-3 rounded-full shadow-lg bg-gradient-to-r from-purple-400 to-purple-600 shadow-purple-500/30 animate-pulse"></div>
              <h3 className="text-lg font-bold tracking-tight text-neutral-100">
                Time Spent
              </h3> */}
            </div>
            <div className="my-auto text-center">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text drop-shadow-lg">
                {formatTimeSpent(userStats?.totalTimeSpent || 0)}
              </div>
              <div className="text-sm font-semibold text-purple-300">
                Time spent learning
              </div>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-4 gap-6 mb-8"></div>
      </div>

      <div className="col-span-1 border-l border-neutral-600"></div>

      {/* Profile Picture Upload Modal */}
      <ProfilePictureUpload
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onPictureUpdate={handlePictureUpdate}
      />
    </div>
  );
};
