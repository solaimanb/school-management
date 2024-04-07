// types.ts

export interface User {
  // Define the properties of the user object here
  // For example:
  // id: number;
  // name: string;
  // etc.
}

export interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}