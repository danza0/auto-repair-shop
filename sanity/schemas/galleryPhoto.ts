import { defineType, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const galleryPhoto = defineType({
  name: "galleryPhoto",
  title: "Gallery Photo",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "For screen readers and SEO. Describe what's in the photo.",
        },
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Shown on the photo, e.g. 'Tesla & EV service bay'.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      description: "Small pill in the corner, e.g. EV, Diagnostics, Location.",
    }),
    defineField({
      name: "size",
      title: "Bento Size (desktop)",
      type: "string",
      description: "How the photo fits into the desktop bento grid. On mobile all photos are full-width.",
      options: {
        list: [
          { title: "Large (2 cols × 2 rows)", value: "large" },
          { title: "Tall (1 col × 2 rows)", value: "tall" },
          { title: "Wide (2 cols × 1 row)", value: "wide" },
          { title: "Small (1 col × 1 row)", value: "small" },
        ],
        layout: "radio",
      },
      initialValue: "small",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower = shows first.",
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "caption", subtitle: "tag", media: "image" },
  },
});
