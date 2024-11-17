"use client";

import ApolloProvider from "@/app/components/apollo-provider";
import ChakraProvider from "@/app/components/chakra/provider";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ROUTES } from "./constants";
import AuthContext, {
  Auth,
  DEFAULT_AUTH,
  isAuthenticated,
} from "./contexts/auth";
import { getAuthFromLocalStorage } from "./lib/local-storage";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const pathname = usePathname();
  const [auth, setAuth] = useState<Auth>(DEFAULT_AUTH);
  const [isReady, toggleReady] = useState<boolean>(false);

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
        <ApolloProvider>
          <ChakraProvider>
            <AuthContext.Provider value={{ auth, setAuth }}>
              {isReady && children}
            </AuthContext.Provider>
          </ChakraProvider>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
