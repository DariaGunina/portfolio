import Head from "next/head";
import { Header } from "../Header";
import { RepresentationSection } from "../RepresentationSection";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <Head>
        <title>TODO</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.container}>
        <Header />
        <RepresentationSection />
      </main>
    </>
  );
};
