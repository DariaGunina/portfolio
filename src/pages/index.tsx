import { Home } from "../features/Home";
import { client } from "../lib/client";
import { Header } from "../features/Header";
import { Footer } from "../features/Footer/Footer";
import { IImage, IInformation, IPhoto } from "../interface";

interface Props {
  photos: IPhoto[];
  gallery: IImage[];
  information: IInformation[];
}

const App = ({ photos, gallery, information }: Props) => (
  <>
    <Header />
    <Home photos={photos} gallery={gallery} information={information} />
    <Footer information={information} />
  </>
);

export const getServerSideProps = async () => {
  const photos = await client.fetch(`*[_type == "photos"]{
    title,
    preview,
    _id
  }`);

  const gallery = await client.fetch(`*[_type == "gallery"]{
    images,
  }`);

  const information = await client.fetch(`*[_type == "information"]{
    phone,
    greetings,
    textGreetings,
    selfRepresentation,
    mail,
    steps,
    city,
    region
  }`);

  return {
    props: { photos, gallery, information },
  };
};

export default App;
