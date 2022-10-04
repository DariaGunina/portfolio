import { StaticImageData } from "next/image";
import DefaultImage from "next/image";

interface IProps {
  image: StaticImageData;
  alt?: string;
  className?: string;
  imageClassName?: string;
}

export const Image = ({ image, alt, className, imageClassName }: IProps) => (
  <div className={className}>
    <DefaultImage className={imageClassName} src={image} alt={alt} />
  </div>
);
