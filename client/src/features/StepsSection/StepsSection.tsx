import Image from "next/image";
import { Title } from "../../components/Title";
import { Step } from "../Step";
import ImageCamera1 from "../../assets/camera.jpg";
import ImageCamera2 from "../../assets/camera2.jpg";
import ImageCamera3 from "../../assets/camera3.jpg";
import { IInformation } from "../../interface";

import styles from "./StepsSection.module.css";

interface Props {
  information: IInformation[];
}

export const StepsSection = ({ information }: Props) => {
  const [steps] = information.map((item) => item.steps);

  return (
    <div className={styles.container}>
      <Title name="Как происходит процесс съемки?" />
      <div className={styles.section}>
        <div className={styles.images}>
          <div className={styles.image1}>
            <Image src={ImageCamera1} alt="image" width={500} height={380} />
          </div>
          <div className={styles.image2}>
            <Image src={ImageCamera2} alt="image" width={500} height={380} />
          </div>
          <div className={styles.image3}>
            <Image src={ImageCamera3} alt="image" width={500} height={380} />
          </div>
        </div>
        <div className={styles.text}>
          {steps.map((item, i) => {
            return (
              <Step step={i + 1} title={item.title} text={item.text} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
