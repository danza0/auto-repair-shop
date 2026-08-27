import { defineType, defineField } from "sanity";
import { BarChartIcon } from "@sanity/icons";

export const stat = defineType({
  name: "stat",
  title: "Trust Stat",
  type: "document",
  icon: BarChartIcon,
  description: "Big numbers shown in the hero and Why SmartCare section.",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "e.g. Vehicles Serviced, Google Rating",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "number",
      description: "Number that animates from 0. Use 5 for 5.0 (with suffix '.0').",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "suffix",
      title: "Suffix",
      type: "string",
      description: "e.g. + , % , .0",
    }),
    defineField({
      name: "showStar",
      title: "Show Star Icon",
      type: "boolean",
      initialValue: false,
      description: "For the Google Rating stat.",
    }),
    defineField({
      name: "showInHero",
      title: "Show in Hero Stats Bar",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "showInTrustSection",
      title: "Show in 'Trusted by Thousands' Section",
      type: "boolean",
      initialValue: true,
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
    select: { title: "label", value: "value", suffix: "suffix" },
    prepare({ title, value, suffix }) {
      return { title, subtitle: `${value ?? ""}${suffix ?? ""}` };
    },
  },
});
