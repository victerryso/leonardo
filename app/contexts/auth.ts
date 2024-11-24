/* eslint-disable */
import { createContext } from "react";

export type Auth = {
  jobTitle: string;
  username: string;
};

export const DEFAULT_AUTH: Auth = {
  jobTitle: "",
  username: "",
};

const AuthContext = createContext({
  auth: DEFAULT_AUTH,
  setAuth: (_: any) => {},
});

// Check if user is registered
export const isRegistered = (auth: Auth) => {
  return Boolean(auth.username);
};

export default AuthContext;
