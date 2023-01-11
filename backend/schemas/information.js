export default {
  name: "information",
  title: "Information",
  type: "document",
  fields: [
    {
      name: "phone",
      type: "string",
    },
    {
      name: "greetings",
      type: "string",
    },
    {
      name: "textGreetings",
      type: "string",
    },
    {
      name: "selfRepresentation",
      type: "text",
    },
    {
      name: "mail",
      type: "string",
    },
    {
      name: "steps",
      type: "array",
      of: [
        {
          type: "document",
          fields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "links",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "links",
      },
    },
    {
      name: "city",
      type: "string",
    },
    {
      name: "region",
      type: "string",
    },
  ],
};
