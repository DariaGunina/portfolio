import cx from "classnames";
import VKImage from "../../assets/vk.svg";
import TelegramImage from "../../assets/telegram.svg";
import WatsAppImage from "../../assets/whatsapp.svg";

import styles from "./GroupIcons.module.css";

interface Props {
  isDifferentIcon?: boolean;
}

export const GroupIcons = ({ isDifferentIcon }: Props) => {
  return (
    <div className={styles.icons}>
      <a href="https://vk.com/vikabeleva">
        <VKImage
          className={cx(styles.icon, {
            [styles.differentIcon]: isDifferentIcon,
          })}
        />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=89954221407">
        <WatsAppImage
          className={cx(styles.icon, {
            [styles.differentIcon]: isDifferentIcon,
          })}
        />
      </a>
      <a href="tg://resolve?domain=vikabeleva">
        <TelegramImage
          className={cx(styles.icon, {
            [styles.differentIcon]: isDifferentIcon,
          })}
        />
      </a>
    </div>
  );
};
