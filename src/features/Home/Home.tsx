import { RepresentationSection } from "../RepresentationSection";
import { PortfolioSection } from "../PortfolioSection";
import { AlbumsSection } from "../AlbumsSection";
import { StepsSection } from "../StepsSection";
import { IImage, IInformation, IPhoto } from "../../interface";

import styles from "./Home.module.css";

interface Props {
  photos: IPhoto[];
  gallery: IImage[];
  information: IInformation[];
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
