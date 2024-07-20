import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery, { PhotoProps } from "react-photo-gallery";

import styles from "./PhotoGallery.module.css";

interface Props {
  urlsPreview: PhotoProps[];
  urlsFull: PhotoProps[];
}

interface PhotoForGallery {
  index: number;
  next: PhotoProps | null;
  photo: PhotoProps;
  previous: PhotoProps | null;
}

export const PhotoGallery = ({ urlsPreview, urlsFull }: Props) => {
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
      <div className={styles.gallery}>
        <Gallery
          photos={urlsPreview}
          onClick={openLightBox}
          direction="row"
        />
      </div>
      {/* @ts-ignore */}
      <ModalGateway>
        {isViewerOpen ? (
          <Modal onClose={closeLightBox}>
            <Carousel
              currentIndex={currentImageId}
              views={urlsFull.map((photo: PhotoProps, index: number) => ({
                source: photo.src,
                key: { index },
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};
