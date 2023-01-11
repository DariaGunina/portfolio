import { RepresentationSection } from "../RepresentationSection";
import { PortfolioSection } from "../PortfolioSection";
import { AlbumsSection } from "../AlbumsSection";
import { StepsSection } from "../StepsSection";

import styles from "./Home.module.css";

interface Props {
  photos: [{ _id: number; preview: string; title: string }];
  gallery: [];
  information: [
    {
      phone: string;
      greetings: string;
      textGreetings: string;
      selfRepresentation: string;
      mail: string;
      steps: [
        {
          title: string;
          text: string;
          key: number;
        }
      ];
      city: string;
      region: string;
    }
  ];
}

export const Home = ({ photos, gallery, information }: Props) => {
  return (
    <div className={styles.container}>
      <RepresentationSection information={information} />
      <PortfolioSection gallery={gallery} />
      <AlbumsSection photos={photos} />
      <StepsSection information={information} />
    </div>
  );
};
