import { PhotoGallery } from "../../components/PhotoGallery";
import { Title } from "../../components/Title";
import { photosGalleryAdapter } from "../../utils/utils";

interface Props {
  gallery: [];
}

export const PortfolioSection = ({ gallery }: Props) => {
  const images = photosGalleryAdapter(gallery);

  return (
    <>
      <Title name="Фото" />
      <PhotoGallery photos={images} />
    </>
  );
};
