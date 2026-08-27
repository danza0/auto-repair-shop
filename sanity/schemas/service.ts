import { defineType, defineField } from "sanity";
import { WrenchIcon } from "@sanity/icons";

const ICON_OPTIONS = [
  { title: "CPU (diagnostics)", value: "cpu" },
  { title: "Code (programming)", value: "code" },
  { title: "Battery Charging", value: "battery-charging" },
  { title: "Monitor (electronics)", value: "monitor" },
  { title: "Wrench (maintenance)", value: "wrench" },
  { title: "Lightning (charging)", value: "zap" },
  { title: "Circle-Dot (brakes)", value: "circle-dot" },
  { title: "Thermometer (climate)", value: "thermometer" },
  { title: "Git-Branch (drivetrain)", value: "git-branch" },
];

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: WrenchIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used in the URL and passed to Calendly. Auto-generated from title.",
      options: { source: "title", maxLength: 64 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category (small label)",
      type: "string",
      description: "e.g. EV & Hybrid, Electrical, Diagnostics",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: { list: ICON_OPTIONS },
      initialValue: "wrench",
    }),
    defineField({
      name: "details",
      title: "Details / Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      description: "3–5 short lines shown on the service card and page.",
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      description: "Featured services show in the main services grid on the homepage.",
      initialValue: false,
    }),
    defineField({
      name: "calendlyUrl",
      title: "Calendly URL",
      type: "url",
      description: "Direct booking link for this service.",
    }),
    defineField({
      name: "durationMinutes",
      title: "Duration (minutes)",
      type: "number",
      initialValue: 60,
    }),
    defineField({
      name: "availabilityNote",
      title: "Availability Note",
      type: "string",
      description: "Small text on the service card, e.g. 'Same-week appointments'.",
    }),
    defineField({
      name: "consultationFirst",
      title: "Consultation Required First",
      type: "boolean",
      description: "Turn on if a diagnostic visit needs to happen before booking the repair.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower = shows first. Leave blank to sort alphabetically.",
    }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", featured: "featured" },
    prepare({ title, subtitle, featured }) {
      return {
        title,
        subtitle: [featured ? "★ Featured" : null, subtitle].filter(Boolean).join(" · "),
      };
    },
  },
});
