import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { state: progressState } = useProgress();
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
  };
  console.log(user);
  return (
    <div
      style={{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgb(255, 255, 255, 0.02)",
      }}
      className="col-span-10 w-full h-14 border-b fixed border-dashed border-neutral-800 grid grid-cols-12 font-[Geist] z-20"
    >
      <div className="col-span-1 border-r border-dashed border-slate-800"></div>
      {/* Main */}
      <div className="h-full col-span-10 text-neutral-400">
        <div className="flex items-center justify-between h-full px-6">
          <ul className="flex items-center h-full gap-8 text-sm ">
            <li className="text-neutral-100 flex items-center h-full font-[IBM_Plex_Mono] font-light text-xl border-r border-dashed border-neutral-800 pr-3">
              <NavLink to="/">Codelyn_</NavLink>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/curriculum">Curriculum</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </>
            ) : user?.role === "admin" ? (
              <>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/lessons">Lessons</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <a>Projects</a>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/sandbox">Mini Sandbox</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <a>Help</a>
                </li>
              </>
            ) : (
              <>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/lessons">Lessons</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <a>Projects</a>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/sandbox">Mini Sandbox</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li className="transition-colors cursor-pointer hover:text-neutral-200">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </>
            )}
          </ul>
          {!isAuthenticated ? (
            <div className="flex gap-2 text-[14px]">
              <button className="h-8 px-4 py-1 rounded-full bg-neutral-100 text-neutral-700">
                <NavLink to="/register">Sign Up</NavLink>
              </button>
              <button className="h-8 px-2 py-1 rounded-full text-neutral-400 border-neutral-600">
                <NavLink to="/login">Login</NavLink>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 text-[14px] ">
              {/* Progress Meter */}
              <div className="flex items-center gap-3">
                <div className="text-xs text-neutral-400">
                  Progress: {progressState.overallProgress}%
                </div>
                <div className="w-24 h-2 overflow-hidden rounded-full bg-neutral-700">
                  <div
                    className="h-full transition-all duration-700 ease-out bg-gradient-to-r from-blue-500 to-green-500"
                    style={{ width: `${progressState.overallProgress}%` }}
                  />
                </div>
              </div>

              <div className="relative inline-block h-full group">
                <div
                  className={`w-3 h-3 rounded-full ${user?.isSubscribed ? "bg-lime-600" : "bg-yellow-600"} `}
                ></div>
                <div className="absolute w-auto px-4 py-1 mt-3 transform -translate-x-1/2 border rounded-full opacity-0 group-hover:opacity-100 left-1/2 whitespace-nowrap bg-neutral-200 text-neutral-800">
                  {user?.isSubscribed ? (
                    <p className="select-none">Your subscribtion is active!</p>
                  ) : (
                    <p>Not subbed </p>
                  )}
                </div>
              </div>

              {/* User Profile Picture */}
              <div className="flex items-center gap-3">
                {user?.profilePicture ? (
                  <img
                    src={`http://localhost:3000${user.profilePicture}`}
                    alt="Profile"
                    className="object-cover w-8 h-8 border-2 rounded-full cursor-pointer border-neutral-600"
                    onClick={() => navigate("/profile")}
                  />
                ) : (
                  <></>
                )}
                <p>
                  Hello,{" "}
                  <span className="text-neutral-200">
                    {user?.first_name}
                  </span>{" "}
                </p>
              </div>
              <button
                className="h-8 px-4 py-1 rounded-full cursor-pointer bg-neutral-100 text-neutral-700"
                onClick={(e) => handleLogout(e)}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {/* .... */}
      <div className="col-span-1 border-l border-dashed border-slate-800"></div>
    </div>
  );
};
