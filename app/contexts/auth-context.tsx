/* eslint-disable */
import { createContext } from "react";

export type Auth = {
  jobTitle: string;
  username: string;
};

const AuthContext = createContext({
  auth: null,
  setAuth: (_: any) => {},
});

export default AuthContext;
