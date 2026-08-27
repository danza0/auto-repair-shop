import { defineType, defineField } from "sanity";
import { HeartIcon } from "@sanity/icons";

export const trustReason = defineType({
  name: "trustReason",
  title: "Why Choose Us Reason",
  type: "document",
  icon: HeartIcon,
  description: "Small tiles under 'Trusted by Thousands' — reasons customers choose you.",
  fields: [
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
      rows: 2,
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "CPU (Diagnostics)", value: "cpu" },
          { title: "Lightning (EV)", value: "zap" },
          { title: "Chat", value: "messageSquare" },
          { title: "Globe (Multilingual)", value: "globe" },
          { title: "Clock", value: "clock" },
          { title: "Dollar (Pricing)", value: "dollarSign" },
        ],
      },
      initialValue: "cpu",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
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
    select: { title: "title", subtitle: "description" },
  },
});
