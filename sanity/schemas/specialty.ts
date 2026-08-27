import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export const specialty = defineType({
  name: "specialty",
  title: "Specialty Strip",
  type: "document",
  icon: StarIcon,
  description:
    "Horizontal rows at the bottom of the services section — a bigger callout for each of your top areas.",
  fields: [
    defineField({
      name: "tag",
      title: "Tag (small label)",
      type: "string",
      description: "e.g. EV & Hybrid, Programming, Diagnostics",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Battery Charging (EV)", value: "battery-charging" },
          { title: "Code (Programming)", value: "code" },
          { title: "CPU (Diagnostics)", value: "cpu" },
          { title: "Wrench (Maintenance)", value: "wrench" },
          { title: "Lightning", value: "zap" },
          { title: "Monitor (Electronics)", value: "monitor" },
        ],
      },
      initialValue: "battery-charging",
    }),
    defineField({
      name: "features",
      title: "Feature Chips",
      type: "array",
      of: [{ type: "string" }],
      description: "3–4 short chips shown on the right side of the row.",
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
    select: { title: "title", subtitle: "tag" },
  },
});
