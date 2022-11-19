import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
