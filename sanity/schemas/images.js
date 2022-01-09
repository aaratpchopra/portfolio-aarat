import UUID from "uuid";

export default {
  name: "images",
  title: "Images",
  type: "document",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
  ],
};
