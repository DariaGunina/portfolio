import { ImageProps } from "next/image";
import DefaultImage from "next/image";

interface IProps extends ImageProps {
  className?: string;
  image: string;
  imageClassName?: string;
}

export const Image = ({ image, alt, className, imageClassName }: IProps) => (
  <div className={className}>
    <DefaultImage className={imageClassName} src={image} alt={alt} />
  </div>
);
