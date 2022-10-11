import { useRouter } from "next/router";
import { PhotoGallery } from "../../components/PhotoGallery";
import { Header } from "../Header";
import { photos } from "../../constants";

import styles from "./Album.module.css";

export const Album = () => {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <div className={styles.container}>
      <Header />
      <PhotoGallery photos={photos} />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleClick}>
          Назад
        </button>
      </div>
    </div>
  );
};
