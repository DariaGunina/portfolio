import { Contact } from "../Contact/Contact";
import { GroupIcons } from "../GroupIcons";

import styles from "./ContactsSection.module.css";

interface Props {
  phone: string;
}

export const ContactsSection = ({ phone }: Props) => {
  return (
    <div className={styles.container}>
      <GroupIcons />
      <Contact phone={phone} />
    </div>
  );
};
