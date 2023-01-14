import Link from "next/link";
import React from "react";
import { Title } from "../../components/Title";
import { urlFor } from "../../lib/client";
import { ALBUM_PAGE } from "../../routs";

import styles from "./AlbumsSection.module.css";
interface Props {
  photos: [
    {
      _id: number;
      preview: string;
      title: string;
    }
  ];
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
                src={urlFor(item.preview).height(200).width(200).url()}
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
