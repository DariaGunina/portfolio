import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

import styles from "../styles/styles.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Фотограф Урюпинск | Beleva.ru </title>
        <meta
          name="description"
          content="Профессиональный фотограф из Урюпинска - Виктория Белева. Провожу индивидуальные, семейные, детские, свадебные фотосессии. Звоните по телефону +7(995)4221407"
        />
      </Head>

      <main className={styles.container}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
