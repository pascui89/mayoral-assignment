"use client";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

interface Props extends ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProviderWrapper({ children, ...props }: Props) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}