export default {
  name: "photos",
  title: "Photos",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "preview",
      type: "image",
    },
    {
      name: "images",
      type: "array",
      options: {
        layout: "grid",
      },
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
};
