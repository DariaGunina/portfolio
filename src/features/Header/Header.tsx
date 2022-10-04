import { Logo } from "../../components/Logo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <a href="tel:89375679999" className={styles.text}>
        тел. 89375679999
      </a>
    </div>
  );
};
