import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery, { PhotoProps } from "react-photo-gallery";

interface Props {
  photos: { src: string; width: number; height: number; id: string }[];
}

interface PhotoForGallery {
  index: number;
  next: PhotoProps | null;
  photo: PhotoProps;
  previous: PhotoProps | null;
}

export const PhotoGallery = ({ photos }: Props) => {
  const [currentImageId, setCurrentImageId] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openLightBox = useCallback(
    (event: React.MouseEvent, photo: PhotoForGallery) => {
      setCurrentImageId(photo.index);
      setIsViewerOpen(true);
    },
    []
  );

  const closeLightBox = () => {
    setCurrentImageId(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Gallery photos={photos} onClick={openLightBox} direction="row" />
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentImageId}
              views={photos.map((x) => ({
                source: x.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};
