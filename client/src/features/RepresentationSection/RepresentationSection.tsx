import Image from "next/image";
import { Title } from "../../components/Title";
import avatar from "../../assets/avatar.jpg";
import { ContactsSection } from "../ContactsSection";
import { IInformation } from "../../interface";

import styles from "./RepresentationSection.module.css";

interface Props {
  information: IInformation[];
}

export const RepresentationSection = ({ information }: Props) => {
  return (
    <>
      {information.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.container}>
              <div className={styles.content}>
                <p className={styles.title}>{item.greetings}</p>
                <p className={styles.text}>{item.textGreetings}</p>
              </div>
              <ContactsSection phone={item.phone} />
            </div>
            <Title name="Обо мне" />
            <div className={styles.block}>
              <div className={styles.infoBlock}>
                <p className={styles.name}>Несколько слов обо мне</p>
                <p className={styles.info}>{item.selfRepresentation}</p>
              </div>
              <div className={styles.image}>
                <Image width={400} height={600} src={avatar} alt="img" />
                <p className={styles.captionPhoto}>С любовью ...</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
