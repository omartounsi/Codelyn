import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { LoadingSpinner } from "../../tools/loadingspinner";
import { CreateUserModal } from "./createuser";
import { API_BASE_URL, UPLOADS_BASE_URL } from "../../../config/api";
import {
  IoSearch,
  IoEllipsisVertical,
  IoAdd,
  IoPersonCircle,
  IoCheckmarkCircle,
  IoClose,
  IoPerson,
  IoShield,
} from "react-icons/io5";
import axios from "axios";

type User = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: "viewer" | "student" | "admin";
  isSubscribed: boolean;
  subscriptionDate?: string;
  createdAt: string;
  profilePicture?: string | null;
  overallProgress?: number; // Overall completion percentage across all courses
};

export const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const { token } = useAuth();

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUsers();
    }
  }, [token]);

  // Filter users based on search term
  useEffect(() => {
    let filtered = users;

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        let valueA: any;
        let valueB: any;

        switch (sortBy) {
          case "user":
            valueA = `${a.first_name} ${a.last_name}`.toLowerCase();
            valueB = `${b.first_name} ${b.last_name}`.toLowerCase();
            break;
          case "role":
            valueA = a.role.toLowerCase();
            valueB = b.role.toLowerCase();
            break;
          case "created":
            valueA = new Date(a.createdAt).getTime();
            valueB = new Date(b.createdAt).getTime();
            break;
          case "subscription":
            valueA = a.isSubscribed ? 1 : 0;
            valueB = b.isSubscribed ? 1 : 0;
            break;
          case "progress":
            valueA = a.overallProgress || 0;
            valueB = b.overallProgress || 0;
            break;
          default:
            return 0;
        }

        if (valueA < valueB) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredUsers(filtered);
  }, [searchTerm, users, sortBy, sortOrder]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenuId && !(event.target as Element).closest(".dropdown-menu")) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  // Handle user actions
  const handleDeleteUser = async (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${API_BASE_URL}/admin/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(users.filter((user) => user._id !== userId));
        setOpenMenuId(null);
      } catch (err: any) {
        alert(err.response?.data?.message || "Failed to delete user");
      }
    }
  };

  const handleToggleSubscription = async (
    userId: string,
    currentStatus: boolean
  ) => {
    try {
      await axios.patch(
        `${API_BASE_URL}/admin/users/${userId}/subscription`,
        { isSubscribed: !currentStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(
        users.map((user) =>
          user._id === userId
            ? {
                ...user,
                isSubscribed: !currentStatus,
                subscriptionDate: !currentStatus
                  ? new Date().toISOString()
                  : undefined,
              }
            : user
        )
      );
      setOpenMenuId(null);
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to update subscription");
    }
  };

  const handleChangeRole = async (
    userId: string,
    newRole: "viewer" | "student" | "admin"
  ) => {
    try {
      await axios.patch(
        `${API_BASE_URL}/admin/users/${userId}/role`,
        { role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
      setOpenMenuId(null);
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to update role");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "student":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const refreshUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (err) {
      console.error("Failed to refresh users");
    }
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      // If clicking the same column, toggle order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If clicking a new column, set it as active with ascending order
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const getSortIcon = (column: string) => {
    if (sortBy !== column) return null;
    return sortOrder === "asc" ? " ↑" : " ↓";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="p-6 text-center text-red-400 border border-red-800 rounded-lg bg-red-900/20">
          <p className="text-lg font-semibold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-8 overflow-auto">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tighter text-neutral-50">
              User Management
            </h1>
            <p className="text-neutral-400">
              Manage all users, their roles, and subscriptions
            </p>
          </div>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex items-center justify-center w-12 h-12 gap-2 font-medium text-black transition-colors duration-200 border rounded-full cursor-pointer bg-neutral-100 border-neutral-700 hover:bg-neutral-300"
          >
            <IoAdd className="w-10 h-10" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-120">
            <IoSearch className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-10 pr-4 transition-colors border rounded-full text-md bg-neutral-800/50 border-neutral-700/40 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:border-orange-100"
            />
          </div>
        </div>
        {/* Stats Cards */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full border-neutral-700 bg-neutral-800/50">
            <IoPersonCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-neutral-300">Total Users:</span>
            <span className="font-bold text-neutral-50">{users.length}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full border-neutral-700 bg-neutral-800/50">
            <IoShield className="w-5 h-5 text-red-400" />
            <span className="text-sm text-neutral-300">Admins:</span>
            <span className="font-bold text-neutral-50">
              {users.filter((u) => u.role === "admin").length}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full border-neutral-700 bg-neutral-800/50">
            <IoPerson className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-neutral-300">Students:</span>
            <span className="font-bold text-neutral-50">
              {users.filter((u) => u.role === "student").length}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full border-neutral-700 bg-neutral-800/50">
            <IoCheckmarkCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm text-neutral-300">Subscribed:</span>
            <span className="font-bold text-neutral-50">
              {users.filter((u) => u.isSubscribed).length}
            </span>
          </div>
        </div>

        {/* Users List */}
        <div className="overflow-hidden border border-neutral-700 rounded-xl bg-neutral-800/30">
          <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium border-b border-neutral-700 bg-neutral-800/50 text-neutral-300">
            <div
              className={`col-span-3 cursor-pointer hover:text-neutral-100 transition-colors select-none ${
                sortBy === "user" ? "text-orange-400" : ""
              }`}
              onClick={() => handleSort("user")}
            >
              User{getSortIcon("user")}
            </div>
            <div
              className={`col-span-2 cursor-pointer hover:text-neutral-100 transition-colors select-none ${
                sortBy === "role" ? "text-orange-400" : ""
              }`}
              onClick={() => handleSort("role")}
            >
              Role{getSortIcon("role")}
            </div>
            <div
              className={`col-span-2 cursor-pointer hover:text-neutral-100 transition-colors select-none ${
                sortBy === "created" ? "text-orange-400" : ""
              }`}
              onClick={() => handleSort("created")}
            >
              Created{getSortIcon("created")}
            </div>
            <div
              className={`col-span-2 cursor-pointer hover:text-neutral-100 transition-colors select-none ${
                sortBy === "subscription" ? "text-orange-400" : ""
              }`}
              onClick={() => handleSort("subscription")}
            >
              Subscription{getSortIcon("subscription")}
            </div>
            <div
              className={`col-span-2 cursor-pointer hover:text-neutral-100 transition-colors select-none ${
                sortBy === "progress" ? "text-orange-400" : ""
              }`}
              onClick={() => handleSort("progress")}
            >
              Progress{getSortIcon("progress")}
            </div>
            <div className="col-span-1">Actions</div>
          </div>

          <div className="divide-y divide-neutral-700">
            {filteredUsers.length === 0 ? (
              <div className="p-8 text-center text-neutral-400">
                {searchTerm
                  ? "No users found matching your search."
                  : "No users found."}
              </div>
            ) : (
              filteredUsers.map((user) => (
                <div
                  key={user._id}
                  className="grid grid-cols-12 gap-4 p-4 transition-colors hover:bg-neutral-800/50"
                >
                  {/* User Info */}
                  <div className="flex items-center col-span-3 gap-3">
                    {user.profilePicture ? (
                      <img
                        src={`${UPLOADS_BASE_URL}${user.profilePicture}`}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="object-cover w-10 h-10 rounded-full border-2 border-neutral-600"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-red-400">
                        {user.first_name[0]}
                        {user.last_name[0]}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-neutral-200">
                        {user.first_name} {user.last_name}
                      </p>
                      <p className="text-sm text-neutral-400">{user.email}</p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex items-center col-span-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(user.role)}`}
                    >
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </div>

                  {/* Created Date */}
                  <div className="flex items-center col-span-2">
                    <p className="text-neutral-300">
                      {formatDate(user.createdAt)}
                    </p>
                  </div>

                  {/* Subscription */}
                  <div className="flex items-center col-span-2">
                    <div className="flex items-center gap-2">
                      {user.isSubscribed ? (
                        <>
                          <IoCheckmarkCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-green-400">Active</span>
                        </>
                      ) : (
                        <>
                          <IoClose className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-red-400">Inactive</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="flex items-center col-span-2">
                    <div className="flex items-center w-full gap-3">
                      <div className="flex-1">
                        <div className="w-full h-2 overflow-hidden rounded-full bg-neutral-700">
                          <div
                            className="h-full transition-all duration-700 ease-out bg-gradient-to-r from-blue-500 to-green-500"
                            style={{ width: `${user.overallProgress || 0}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-neutral-400 min-w-[35px]">
                        {user.overallProgress || 0}%
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="relative flex items-center justify-end col-span-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenuId(
                          openMenuId === user._id ? null : user._id
                        );
                      }}
                      className="p-2 transition-colors rounded-full hover:bg-neutral-700"
                    >
                      <IoEllipsisVertical className="w-4 h-4 text-neutral-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {openMenuId === user._id && (
                      <div className="absolute right-0 z-50 w-48 border rounded-lg shadow-xl dropdown-menu top-8 bg-neutral-800 border-neutral-700">
                        <div className="py-1">
                          <button
                            onClick={() =>
                              handleToggleSubscription(
                                user._id,
                                user.isSubscribed
                              )
                            }
                            className="w-full px-4 py-2 text-sm text-left transition-colors text-neutral-200 hover:bg-neutral-700"
                          >
                            {user.isSubscribed
                              ? "Deactivate Subscription"
                              : "Activate Subscription"}
                          </button>
                          {user.role !== "admin" && (
                            <button
                              onClick={() =>
                                handleChangeRole(user._id, "admin")
                              }
                              className="w-full px-4 py-2 text-sm text-left transition-colors text-neutral-200 hover:bg-neutral-700"
                            >
                              Make Admin
                            </button>
                          )}
                          {user.role !== "student" && (
                            <button
                              onClick={() =>
                                handleChangeRole(user._id, "student")
                              }
                              className="w-full px-4 py-2 text-sm text-left transition-colors text-neutral-200 hover:bg-neutral-700"
                            >
                              Make Student
                            </button>
                          )}
                          {user.role !== "viewer" && (
                            <button
                              onClick={() =>
                                handleChangeRole(user._id, "viewer")
                              }
                              className="w-full px-4 py-2 text-sm text-left transition-colors text-neutral-200 hover:bg-neutral-700"
                            >
                              Make Viewer
                            </button>
                          )}
                          <div className="my-1 border-t border-neutral-700"></div>
                          <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="w-full px-4 py-2 text-sm text-left text-red-400 transition-colors hover:bg-red-900/20"
                          >
                            Delete User
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="mt-4 text-sm text-neutral-400">
            Showing {filteredUsers.length} of {users.length} users
          </div>
        )}
      </div>

      {/* Create User Modal */}
      <CreateUserModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onUserCreated={refreshUsers}
      />
    </div>
  );
};
