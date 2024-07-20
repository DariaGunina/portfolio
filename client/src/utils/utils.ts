import { IImage } from "../interface";
import { urlFor } from "../lib/client";

export const photosGalleryAdapter = (photos: { images: IImage[]; }[]) => {
  const urlsFull = photos[0].images.map(image => urlFor(image).url());
  const urlsPreview = photos[0].images.map(image => urlFor(image).width(800).url());
  const urlsFullResult = urlsFull.map(url => ({
    src: url,
    width: 0,
    height: 0,
  }))
  const urlsPreviewResult = urlsPreview.map(url => ({
    src: url,
    width: 0,
    height: 0,
  }))

  return {
    urlsFull: urlsFullResult,
    urlsPreview: urlsPreviewResult,
  }
}