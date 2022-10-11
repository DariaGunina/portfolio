import { useState, useCallback } from "react";
import { PhotoGallery } from "../../components/PhotoGallery";
import { Title } from "../../components/Title";
import { photos } from "../../constants";

export const PortfolioSection = () => {
  return (
    <>
      <Title title="Фото" />
      <PhotoGallery photos={photos} />
    </>
  );
};
