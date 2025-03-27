import "./globals.css";
import type { AppProps } from "next/app";
import { ThemeProviderWrapper as ThemeProvider } from "@/components/theme-provider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}