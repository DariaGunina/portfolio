import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery, { PhotoProps } from "react-photo-gallery";

import styles from "./PhotoGallery.module.css";

interface Props {
  photos: {
    urlsPreview: PhotoProps[];
    urlsFull: PhotoProps[];
  };
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
      <div className={styles.gallery}>
        <Gallery
          photos={photos.urlsPreview}
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
              views={photos.urlsFull.map((photo, index) => ({
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
