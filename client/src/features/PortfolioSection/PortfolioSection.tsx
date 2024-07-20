import { PhotoGallery } from "../../components/PhotoGallery";
import { Title } from "../../components/Title";
import { IImage } from "../../interface";
import { photosGalleryAdapter } from "../../utils/utils";

interface Props {
  gallery: IImage[];
}

export const PortfolioSection = ({ gallery }: Props) => {
  const { urlsPreview, urlsFull } = photosGalleryAdapter(gallery)
  return (
    <>
      <Title name="Фото" />
      <PhotoGallery urlsFull={urlsFull} urlsPreview={urlsPreview} />
    </>)
};
