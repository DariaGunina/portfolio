import cx from "classnames";

import styles from "./Contact.module.css";

interface Props {
  isDifferentText?: boolean;
  phone: string;
}

export const Contact = ({ isDifferentText, phone }: Props) => {
  return (
    <a
      href="tel:89375679999"
      className={cx(styles.text, {
        [styles.differentText]: isDifferentText,
      })}
    >
      {phone}
    </a>
  );
};
