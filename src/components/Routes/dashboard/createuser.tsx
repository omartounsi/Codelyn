import React, { useState } from "react";
import { LoadingSpinner } from "../../tools/loadingspinner";
import { useAuth } from "../../../context/AuthContext";

type CreateUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUserCreated: () => void;
};

export const CreateUserModal = ({
  isOpen,
  onClose,
  onUserCreated,
}: CreateUserModalProps) => {
  const { createUserAsAdmin } = useAuth();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "viewer",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, password });
  };

  //SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await createUserAsAdmin(
        formData.first_name,
        formData.last_name,
        formData.email,
        formData.password,
        formData.role
      );

      setSuccess("User created successfully");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        role: "viewer",
      });

      //TO REFRESH
      onUserCreated();

      //CLOSE AFTER 2 SEC
      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Error creating user");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        backdropFilter: "blur(4px)",
      }}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50"
    >
      <div className="p-8 border rounded-xl w-100 min-h-100 bg-neutral-900/70 border-neutral-700">
        <h3 className="text-3xl font-[Geist] font-bold leading-tight tracking-tighter  text-neutral-200 mb-3">
          Create new user:
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between gap-2">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
              className="w-full h-10 px-2 transition-all duration-100 border rounded-md bg-neutral-800 border-neutral-600 focus:outline-0 focus:scale-105 will-change-transform placeholder:text-neutral-600 text-neutral-300"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
              className="w-full h-10 px-2 transition-all duration-100 border rounded-md bg-neutral-800 border-neutral-600 focus:outline-0 focus:scale-105 will-change-transform placeholder:text-neutral-600 text-neutral-300"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full h-10 px-2 transition-all duration-100 border rounded-md bg-neutral-800 border-neutral-600 focus:outline-0 focus:scale-105 will-change-transform placeholder:text-neutral-600 text-neutral-300"
          />

          <div className="flex gap-2">
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full h-10 px-2 transition-all duration-100 border rounded-md bg-neutral-800 border-neutral-600 focus:outline-0 focus:scale-105 will-change-transform placeholder:text-neutral-600 text-neutral-300"
            />
            <button
              type="button"
              onClick={generatePassword}
              className="px-3 py-2 transition-colors border rounded-full cursor-pointer text-md border-neutral-600 text-neutral-300 hover:bg-neutral-200 hover:text-neutral-900"
            >
              Generate
            </button>
          </div>

          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full h-10 px-2 transition-all duration-100 border rounded-md bg-neutral-800 border-neutral-600 focus:outline-0 focus:scale-105 will-change-transform placeholder:text-neutral-600 text-neutral-300"
          >
            <option value="viewer">Viewer</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          {error && (
            <div className="p-2 text-red-400 border border-red-800 rounded bg-red-900/20">
              {error}
            </div>
          )}

          {success && (
            <div className="p-2 text-green-400 border border-green-800 rounded bg-green-900/20">
              {success}
            </div>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 transition-colors border rounded-lg cursor-pointer border-neutral-600 text-neutral-300 hover:bg-neutral-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-white rounded-lg font-[Geist] text-neutral-800 hover:bg-neutral-900 hover:text-neutral-200 border border-transparent hover:border-neutral-700 transition-colors cursor-pointer disabled:opacity-50 text-md"
            >
              {loading ? <LoadingSpinner /> : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
