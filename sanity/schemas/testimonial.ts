import { defineType, defineField } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: CommentIcon,
  description: "Customer reviews shown in the auto-scrolling row on the homepage.",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      rows: 5,
      validation: (r) => r.required().max(400),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description: "Where the review is from, e.g. Google, Yelp",
      initialValue: "Google",
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      validation: (r) => r.min(1).max(5),
      initialValue: 5,
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
    select: { title: "name", subtitle: "text" },
  },
});
