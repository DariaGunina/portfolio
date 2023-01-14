export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
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
