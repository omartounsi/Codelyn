import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { API_BASE_URL, UPLOADS_BASE_URL } from "../../config/api";
import axios from "axios";
import {
  IoCamera,
  IoTrash,
  IoClose,
  IoCheckmarkCircle,
  IoCloudUpload,
} from "react-icons/io5";

interface ProfilePictureUploadProps {
  isOpen: boolean;
  onClose: () => void;
  onPictureUpdate: (newProfilePictureUrl: string | null) => void;
}

export const ProfilePictureUpload = ({
  isOpen,
  onClose,
  onPictureUpdate,
}: ProfilePictureUploadProps) => {
  const { user, token, updateUser } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      setSelectedFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !token) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("profilePicture", selectedFile);

      const response = await axios.post(
        `${API_BASE_URL}/profile/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const result = response.data;

      if (result.success) {
        // Update the user context with new profile picture
        if (user) {
          const updatedUser = {
            ...user,
            profilePicture: result.profilePictureUrl,
          };
          updateUser(updatedUser);
        }
        onPictureUpdate(result.profilePictureUrl);

        // Reset state and close modal
        setSelectedFile(null);
        setPreview(null);
        onClose();
      } else {
        alert(result.message || "Failed to upload profile picture");
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      alert("Failed to upload profile picture");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!token) return;

    setUploading(true);
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/profile/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = response.data;

      if (result.success) {
        // Update the user context
        if (user) {
          const updatedUser = {
            ...user,
            profilePicture: null,
          };
          updateUser(updatedUser);
        }
        onPictureUpdate(null);
        onClose();
      } else {
        alert(result.message || "Failed to delete profile picture");
      }
    } catch (error) {
      console.error("Error deleting profile picture:", error);
      alert("Failed to delete profile picture");
    } finally {
      setUploading(false);
    }
  };

  const resetSelection = () => {
    setSelectedFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        style={{ backdropFilter: "blur(2px)" }}
        className="w-full max-w-md p-6 border rounded-xl border-neutral-700 bg-neutral-800"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-neutral-200">
            Profile Picture
          </h2>
          <button
            onClick={onClose}
            className="p-2 transition-colors rounded-full hover:bg-neutral-700"
          >
            <IoClose className="w-5 h-5 text-neutral-400" />
          </button>
        </div>

        {/* Current/Preview Image */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-24 h-24 rounded-full"
              />
            ) : user?.profilePicture ? (
              <img
                src={`${UPLOADS_BASE_URL}${user.profilePicture}`}
                alt="Current profile"
                className="object-cover w-24 h-24 rounded-full"
              />
            ) : (
              <div className="flex items-center justify-center w-24 h-24 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-orange-500 to-red-400">
                {user?.first_name?.[0]}
                {user?.last_name?.[0]}
              </div>
            )}
          </div>

          {selectedFile && (
            <div className="text-center">
              <p className="text-sm text-neutral-300">{selectedFile.name}</p>
              <p className="text-xs text-neutral-400">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
        </div>

        {/* File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Action Buttons */}
        <div className="space-y-3">
          {!selectedFile ? (
            <>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                <IoCamera className="w-4 h-4" />
                Choose New Picture
              </button>

              {user?.profilePicture && (
                <button
                  onClick={handleDelete}
                  disabled={uploading}
                  className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-red-500 rounded-lg hover:bg-red-600 disabled:opacity-50"
                >
                  <IoTrash className="w-4 h-4" />
                  {uploading ? "Deleting..." : "Remove Picture"}
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600 disabled:opacity-50"
              >
                {uploading ? (
                  <>
                    <IoCloudUpload className="w-4 h-4 animate-pulse" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <IoCheckmarkCircle className="w-4 h-4" />
                    Upload Picture
                  </>
                )}
              </button>

              <button
                onClick={resetSelection}
                disabled={uploading}
                className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm transition-colors duration-200 border rounded-lg border-neutral-600 text-neutral-300 hover:bg-neutral-700 disabled:opacity-50"
              >
                <IoClose className="w-4 h-4" />
                Cancel
              </button>
            </>
          )}
        </div>

        {/* Help Text */}
        <div className="mt-4 text-xs text-center text-neutral-400">
          <p>Supported formats: JPG, PNG, GIF</p>
          <p>Maximum size: 5MB</p>
        </div>
      </div>
    </div>
  );
};
