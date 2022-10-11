import Link from "next/link";
import { Image } from "../../components/Image";
import { Title } from "../../components/Title";
import { alboms } from "../../constants";
import { ALBOM_PAGE } from "../../routs";

import styles from "./AlbumsSection.module.css";

export const AlbumsSection = () => {
  return (
    <>
      <Title title="Альбомы" />
      <Link href={ALBOM_PAGE}>
        <div className={styles.container}>
          {alboms.map((item) => (
            <div key={item.text}>
              <Image
                imageClassName={styles.image}
                className={styles.imageWrapper}
                image={item.photo}
                alt="img"
              />
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};
