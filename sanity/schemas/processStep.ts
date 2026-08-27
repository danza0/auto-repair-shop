import { defineType, defineField } from "sanity";
import { RocketIcon } from "@sanity/icons";

export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "document",
  icon: RocketIcon,
  description: "Steps shown in the 'Simple from Start to Finish' section.",
  fields: [
    defineField({
      name: "stepNumber",
      title: "Step Number (as text)",
      type: "string",
      description: "e.g. 01, 02, 03",
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
          { title: "Calendar Check", value: "calendarCheck" },
          { title: "Search", value: "search" },
          { title: "Car", value: "car" },
          { title: "Wrench", value: "wrench" },
          { title: "Check Circle", value: "checkCircle" },
        ],
      },
      initialValue: "calendarCheck",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      validation: (r) => r.required(),
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
    select: { title: "title", subtitle: "stepNumber" },
    prepare({ title, subtitle }) {
      return { title: `${subtitle ?? ""} · ${title ?? ""}` };
    },
  },
});
