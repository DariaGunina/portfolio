import styles from "./Step.module.css";

interface Props {
  title: string;
  text?: string;
  step: number;
}

export const Step = ({ step, title, text }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.step}>{step}</div>
      <div className={styles.box}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
