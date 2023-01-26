import { Album } from "../../features/Album";
import { Footer } from "../../features/Footer";
import { Header } from "../../features/Header";
import { IImage, IInformation } from "../../interface";
import { client } from "../../lib/client";

interface Props {
  photos: IImage[];
  information: IInformation[];
}

const AlbumPage = ({ photos, information }: Props) => {
  return (
    <>
      <Header />
      <Album photos={photos} />
      <Footer information={information} />
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const {
    query: { id },
  } = ctx;

  const photos = await client.fetch(`*[_type == "photos" && _id == "${id}"]{
    title,
    images
  }`);

  const information = await client.fetch(`*[_type == "information"]{
    phone,
    mail,
    city,
    region
  }`);

  return {
    props: { photos, information },
  };
};

export default AlbumPage;
