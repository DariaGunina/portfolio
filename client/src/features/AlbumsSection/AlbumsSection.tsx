import Link from "next/link";
import React from "react";
import { Title } from "../../components/Title";
import { IPhoto } from "../../interface";
import { urlFor } from "../../lib/client";
import { ALBUM_PAGE } from "../../routs";

import styles from "./AlbumsSection.module.css";
interface Props {
  photos: IPhoto[];
}

export const AlbumsSection = ({ photos }: Props) => {
  return (
    <>
      <Title name="Альбомы" />
      <div className={styles.container}>
        {photos.map((item) => (
          <Link href={`${ALBUM_PAGE}/${item._id}`} key={item._id}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={urlFor(item.preview).height(400).width(400).url()}
                alt="img"
              />
              <p className={styles.text}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
