import UUID from "uuid";

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, options) => UUID.v4(),
        maxLength: 96,
      },
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "personal", title: "Personal Project" },
          { value: "client", title: "Client Project" },
          { value: "university", title: "University Project" },
        ],
      },
    },
    {
      name: "organization",
      title: "Organization",
      type: "string",
      hidden: ({ document }) => document.projectType !== "client",
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "date",
      title: "On",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
