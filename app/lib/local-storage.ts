import { Auth, DEFAULT_AUTH } from "../contexts/auth-context";

const AUTH_KEY = "AUTH";

export const getAuthFromLocalStorage = () => {
  const item = localStorage.getItem(AUTH_KEY);

  if (item) {
    return JSON.parse(item);
  }

  return DEFAULT_AUTH;
};

export const updateAuthInLocalStorage = (auth: Auth) => {
  const item = JSON.stringify(auth);

  localStorage.setItem(AUTH_KEY, item);
};
