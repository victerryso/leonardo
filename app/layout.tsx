"use client";

import ChakraProvider from "@/app/components/chakra-provider";
import AuthContext, {
  DEFAULT_AUTH,
  isAuthenticated,
} from "./contexts/auth-context";
import { useEffect, useState } from "react";
import { getAuthFromLocalStorage } from "./lib/local-storage";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import { ROUTES } from "./constants";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const pathname = usePathname();
  const [auth, setAuth] = useState(DEFAULT_AUTH);
  const [isReady, toggleReady] = useState(false);

  // Get auth from the local storage and save it to the auth context
  useEffect(() => {
    const auth = getAuthFromLocalStorage();

    setAuth(auth);
    toggleReady(true);
  }, []);

  // If the user isn't authenticated, redirect them to the register path
  useEffect(() => {
    const isRegisterPath = pathname === ROUTES.REGISTER;

    if (isReady && !isAuthenticated(auth) && !isRegisterPath) {
      redirect(ROUTES.REGISTER);
    }
  }, [auth, isReady, pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider>
          <AuthContext.Provider value={{ auth, setAuth }}>
            {isReady && children}
          </AuthContext.Provider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
