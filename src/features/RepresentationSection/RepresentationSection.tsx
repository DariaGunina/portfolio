import { Image } from "../../components/Image";
import avatar from "../../assets/avatar.jpg";

import styles from "./RepresentationSection.module.css";
import { Title } from "../../components/Title";

export const RepresentationSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>Привет,</p>
          <p className={styles.title}>меня зовут Вика</p>
          <p className={styles.text}>Фотограф, увлекающий и увлекающийся</p>
        </div>
      </div>
      <Title name="Обо мне" />
      <div className={styles.block}>
        <div className={styles.infoBlock}>
          <p className={styles.name}>Несколько слов обо мне</p>
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
