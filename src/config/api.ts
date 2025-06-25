export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";
export const UPLOADS_BASE_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:3000";

export default {
  API_BASE_URL,
  UPLOADS_BASE_URL,
};
