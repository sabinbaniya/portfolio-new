import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import "@splidejs/react-splide/css";
import { useEffect } from "react";
import { parse } from "rss-to-json";

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

const MyApp = ({ Component, pageProps }: AppProps) => {
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sabin-baniya"
  //     );
  //     // const data = JSON.stringify(res);
  //     console.log(await res.json());
  //   })();
  // }, []);
  return (
    <>
      <main className={`${montserrat.variable} font-sans relative`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
