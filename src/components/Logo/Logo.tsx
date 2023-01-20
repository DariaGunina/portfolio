import Link from "next/link";
import LogoImg from "../../assets/logo.svg";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link href="/">
      <div className={styles.container}>
        <div className={styles.section}>
          <LogoImg className={styles.image} />
        </div>
      </div>
    </Link>
  );
};
