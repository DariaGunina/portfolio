import { urlFor } from "../lib/client"

export const photosGalleryAdapter = (photos: { images: []; }[]) => {
  const urls = photos[0].images.map(image => urlFor(image).url());
  return urls.map(url => ({
    src: url,
    width: 0,
    height: 0,
  }))
}