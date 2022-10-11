import Link from "next/link";
import LogoImg from "../../assets/logo.svg";
import { Title } from "../Title";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.container}>
        <LogoImg className={styles.image} />
        <h1 className={styles.title}>Фотограф</h1>
      </div>
    </Link>
  );
};
