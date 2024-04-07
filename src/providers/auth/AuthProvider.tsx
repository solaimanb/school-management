import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContextValue, User } from "@/types/auth/auth";

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

// Create an axios instance with default settings
const api = axios.create({
  baseURL: "/api",
  headers: {
    Authorization: `Bearer ${Cookies.get("access") || ""}`,
  },
});

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    try {
      const response = await api.get<User>("/user");
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Authentication failed:", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<{ access: string }>("/login", {
        email,
        password,
      });

      const { access } = response.data;

      Cookies.set("access", access);
      api.defaults.headers.Authorization = `Bearer ${access}`;
      setIsAuthenticated(true);
      authenticate();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    Cookies.remove("access");
    api.defaults.headers.Authorization = "";
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
