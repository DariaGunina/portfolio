import { PhotoGallery } from "../../components/PhotoGallery";
import { Title } from "../../components/Title";
import { IImage } from "../../interface";
import { photosGalleryAdapter } from "../../utils/utils";

interface Props {
  gallery: IImage[];
}

export const PortfolioSection = ({ gallery }: Props) => (
  <>
    <Title name="Фото" />
    <PhotoGallery photos={photosGalleryAdapter(gallery)} />
  </>
);
