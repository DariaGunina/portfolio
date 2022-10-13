import Link from "next/link";
import { PhotoGallery } from "../../components/PhotoGallery";
import { Header } from "../Header";
import { photos } from "../../constants";
import ArrowIcon from "../../assets/arrow.svg";
import { HOME } from "../../routs";

import styles from "./Album.module.css";

export const Album = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Link href={HOME}>
        <div className={styles.box}>
          <ArrowIcon className={styles.icon} />
          <p className={styles.name}>На главную</p>
        </div>
      </Link>
      <PhotoGallery photos={photos} />
    </div>
  );
};
