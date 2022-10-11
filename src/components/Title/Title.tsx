import styles from "./Title.module.css";

interface Props {
  title: string;
}

export const Title = ({ title }: Props) => (
  <p className={styles.title}>{title}</p>
);
