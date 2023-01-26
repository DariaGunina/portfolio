import Link from "next/link";
import { PhotoGallery } from "../../components/PhotoGallery";
import ArrowIcon from "../../assets/arrow.svg";
import { HOME } from "../../routs";
import { photosGalleryAdapter } from "../../utils/utils";
import { IImage } from "../../interface";

import styles from "./Album.module.css";

interface Props {
  photos: IImage[];
}

export const Album = ({ photos }: Props) => {
  const images = photosGalleryAdapter(photos);

  return (
    <div className={styles.container}>
      <Link href={HOME}>
        <div className={styles.box}>
          <ArrowIcon className={styles.icon} />
          <p className={styles.name}>На главную</p>
        </div>
      </Link>
      <PhotoGallery photos={images} />
    </div>
  );
};
