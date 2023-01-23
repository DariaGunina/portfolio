import { GroupIcons } from "../GroupIcons";
import { Contact } from "../Contact";
import CopyrightImage from "../../assets/copyright.svg";
import { IInformation } from "../../interface";

import styles from "./Footer.module.css";

interface Props {
  information: IInformation[];
}

export const Footer = ({ information }: Props) => {
  return (
    <div className={styles.container}>
      {information.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.info}>
              <div className={styles.box}>
                <p className={styles.title}>Контактная информация</p>
                <Contact isDifferentText phone={item.phone} />
                <p className={styles.text}>{item.mail} </p>
              </div>
              <div className={styles.box}>
                <p className={styles.title}>Полезные ссылки</p>
                <GroupIcons isDifferentIcon />
              </div>
              <div className={styles.box}>
                <p className={styles.title}>Местоположение</p>
                <p className={styles.text}>{item.city}</p>
                <p className={styles.text}>{item.region}</p>
              </div>
            </div>
            <div className={styles.copyright}>
              <CopyrightImage className={styles.copyrightImage} />
              <p className={styles.copyrightText}>
                2022 Created by Daria Gunina
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
