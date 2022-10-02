import { Image } from "../../components/Image";
import avatar from "../../assets/avatar.jpg";

import styles from "./RepresentationSection.module.css";

export const RepresentationSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Привет,
            <br />
            меня зовут Вика
          </h1>
          <p className={styles.text}>Фотограф, увлекающий и увлекающийся</p>
        </div>
      </div>
      <h1 className={styles.header}>Обо мне</h1>
      <div className={styles.block}>
        <div className={styles.infoBlock}>
          <h1 className={styles.name}>Несколько слов обо мне</h1>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={styles.info}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
          <p className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={styles.info}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
        <Image
          imageClassName={styles.image}
          className={styles.imageWrapper}
          image={avatar}
          alt="img"
        />
      </div>
    </>
  );
};
