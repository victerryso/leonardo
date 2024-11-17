"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";

export type ColorModeProviderProps = ThemeProviderProps;

const ColorModeProvider = (props: ColorModeProviderProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
);

const Provider = (props: ColorModeProviderProps) => (
  <ChakraProvider value={defaultSystem}>
    <ColorModeProvider {...props} />
  </ChakraProvider>
);

export default Provider;
