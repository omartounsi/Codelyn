import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  isSubscribed: boolean;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) => Promise<void>;
  createUserAsAdmin: (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: string
  ) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {
    throw new Error("ERROR");
  },
  register: async () => {
    throw new Error("ERROR");
  },
  createUserAsAdmin: async () => {
    throw new Error("ERROR");
  },
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("this hook must be used within authprovider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  //AXIOS SETUP
  //default url
  axios.defaults.baseURL = "http://localhost:3000/api";

  //set auth token for all requests if available / formatting the headers or removing them
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]); //common is used to include every http header method

  //checking for token for autologin / load user on mount or token change
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      } //no token: logged out
      try {
        const res = await axios.get("/auth/verify");
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsAuthenticated(true); //logged - user data loaded
      } catch (err) {
        console.error("Token validation failed:", err);
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
      } //reset everything in case of error
      setLoading(false); //no longer loading
    };
    loadUser();
  }, [token]);

  //REGISTER
  const register = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await axios.post("/auth/register", {
        first_name,
        last_name,
        email,
        password,
      }); //posting form to api
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); //retrieving token from api and saving it in local
      setToken(res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (err) {
      throw new Error("REGISTRATION FAILED");
    }
  };

  //LOGIN
  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user)); //same principle as registering and loggin in
      setToken(res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (err: any) {
      const message = err.response?.data?.message || "Login failed";
      throw new Error(message);
    }
  };

  //CREATE USER AS ADMIN
  const createUserAsAdmin = async (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: string
  ) => {
    try {
      const res = await axios.post("/admin/create-user", {
        first_name,
        last_name,
        email,
        password,
        role,
      });
      return res.data;
    } catch (err: any) {
      const message = err.response?.data?.message || "Failed to create user";
      throw new Error(message);
    }
  };

  //   LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/");
    setIsAuthenticated(false);
  }; //remove token and reset states

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        login,
        register,
        createUserAsAdmin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
