import Image from "next/image";
import { Title } from "../../components/Title";
import { Step } from "../Step";
import ImageCamera from "../../assets/camera.jpg";
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
        <div className={styles.box}>
          <div className={styles.image}>
            <Image src={ImageCamera} alt="image" width={500} height={380} />
          </div>
          <div className={styles.text}>
            {steps.map((item, i) => {
              return (
                <Step
                  step={i + 1}
                  title={item.title}
                  text={item.text}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
