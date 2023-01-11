import { Logo } from "../../components/Logo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};
