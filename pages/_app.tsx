import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import "@splidejs/react-splide/css";
import "highlight.js/styles/atom-one-dark.css";
import NextNProgress from "nextjs-progressbar";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

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
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    // headers: {
    //   Authorization: `Bearer: ${process.env.RANDOM_HASH as string}`,
    //   "Content-Type": "application/json",
    // },
    cache: new InMemoryCache(),
  });

  return (
    <>
      <NextNProgress
        // transformCSS={(css) => <style>{css}</style>}
        color="linear-gradient(101deg, #004dca, #649fff)"
        height={5}
        options={{ showSpinner: false }}
      />
      <ApolloProvider client={client}>
        <main className={`${montserrat.variable} font-sans relative`}>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
