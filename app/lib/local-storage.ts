import { Auth, DEFAULT_AUTH } from "../contexts/auth";

const AUTH_KEY = "AUTH";

// Get auth data from local storage
export const getAuthFromLocalStorage = () => {
  const item = localStorage.getItem(AUTH_KEY);

  if (item) {
    return JSON.parse(item);
  }

  return DEFAULT_AUTH;
};

// Set auth data in local storage
export const updateAuthInLocalStorage = (auth: Auth) => {
  const item = JSON.stringify(auth);

  localStorage.setItem(AUTH_KEY, item);
};
