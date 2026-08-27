import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "statusBadge",
      title: "Status Badge",
      type: "string",
      description: "Text next to the green pulsing dot",
      initialValue: "Now Accepting Appointments · Spanaway, WA",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline — Line 1 (orange)",
      type: "string",
      initialValue: "SmartCare",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline — Line 2",
      type: "string",
      initialValue: "Auto",
    }),
    defineField({
      name: "headlineLine3",
      title: "Headline — Line 3",
      type: "string",
      initialValue: "Repair.",
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 3,
      initialValue:
        "Expert diagnostics, EV & hybrid service, and honest pricing. Professional-grade equipment. Multilingual team.",
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Book Appointment",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "Call Now",
    }),
    defineField({
      name: "trustBadges",
      title: "Trust Badges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon", type: "string", options: {
              list: [
                { title: "Lightning (EV)", value: "zap" },
                { title: "Search", value: "search" },
                { title: "Chat", value: "messageSquare" },
              ],
            } },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "label", subtitle: "icon" } },
        },
      ],
      initialValue: [
        { icon: "zap", label: "EV & Hybrid Certified" },
        { icon: "search", label: "Factory-Level Diagnostics" },
        { icon: "messageSquare", label: "English · Spanish · Ukrainian · Russian" },
      ],
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Photo that fills the hero background",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "headlineLine1" },
    prepare({ title }) {
      return { title: "Hero Section", subtitle: title || "" };
    },
  },
});
