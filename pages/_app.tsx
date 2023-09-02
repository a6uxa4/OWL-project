import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>  
  );
}
