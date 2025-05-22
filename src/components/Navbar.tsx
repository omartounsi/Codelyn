import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className="col-span-10 w-full h-14 border-b fixed border-dashed border-neutral-800 grid grid-cols-12 font-[Geist] backdrop-blur-md z-20 bg-black/10">
      <div className=" col-span-1 border-r border-dashed border-neutral-800"></div>
      {/* Main */}
      <div className="col-span-10 text-neutral-400 h-full">
        <div className="flex items-center justify-between h-full px-6">
          <ul className="flex items-center h-full gap-8 text-sm ">
            <li className="text-neutral-100 flex items-center h-full font-[IBM_Plex_Mono] font-light text-xl border-r border-dashed border-neutral-800 pr-3">
              <NavLink to="/">Codelyn_</NavLink>
            </li>
            <li>
              <NavLink to="/lessons">Lessons</NavLink>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <NavLink to="/sandbox">Mini Sandbox</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Help</a>
            </li>
          </ul>
          {!isAuthenticated ? (
            <div className="flex gap-2 text-[14px]">
              <button className="bg-neutral-100 text-neutral-700 h-8 px-4 py-1 rounded-full">
                <NavLink to="/register">Sign Up</NavLink>
              </button>
              <button className=" text-neutral-400 h-8 px-2 py-1 rounded-full border-neutral-600 ">
                <NavLink to="/login">Login</NavLink>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-10 text-[14px]">
              <p>
                Hello,{" "}
                <span className="text-neutral-200">{user?.first_name}</span>{" "}
              </p>
              <button
                className="bg-neutral-100 text-neutral-700 h-8 px-4 py-1 rounded-full cursor-pointer"
                onClick={(e) => handleLogout(e)}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {/* .... */}
      <div className="col-span-1 border-l border-dashed border-neutral-800"></div>
    </div>
  );
};
