import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import styles from "../styles/styles.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Портфолио</title>
        <meta name="description" content="" />
      </Head>

      <main className={styles.container}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
