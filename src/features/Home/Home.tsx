import Head from "next/head";
import { Header } from "../Header";
import { RepresentationSection } from "../RepresentationSection";
import { PortfolioSection } from "../PortfolioSection";
import { AlbumsSection } from "../AlbumsSection";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="" />
      </Head>

      <main className={styles.container}>
        <Header />
        <RepresentationSection />
        <PortfolioSection />
        <AlbumsSection />
      </main>
    </>
  );
};
