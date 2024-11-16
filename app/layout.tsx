"use client";

import ChakraProvider from "@/app/components/chakra-provider";
import AuthContext from "./contexts/auth-context";
import { useEffect, useState } from "react";
import { getAuthFromLocalStorage } from "./lib/local-storage";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const auth = getAuthFromLocalStorage();

    setAuth(auth);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider>
          <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
          </AuthContext.Provider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
