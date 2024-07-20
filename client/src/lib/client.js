import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clientConfig = {
  projectId: "6q3yoh9n",
  dataset: "dev",
};

export const client = sanityClient({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  apiVersion: "v2021-10-21",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
