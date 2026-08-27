import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "contact", title: "Contact" },
    { name: "seo", title: "SEO" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    defineField({
      name: "businessName",
      title: "Business Name",
      type: "string",
      initialValue: "SmartCare Auto Repair",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "shortName",
      title: "Short Name (logo pill, browser tab)",
      type: "string",
      initialValue: "SmartCare",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Small text next to the logo, e.g. AUTO REPAIR",
      initialValue: "Auto Repair",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      group: "contact",
      initialValue: "(253) 214-3774",
    }),
    defineField({
      name: "phoneHref",
      title: "Phone Link (tel:)",
      type: "string",
      description: "Include country code, e.g. +12532143774",
      group: "contact",
      initialValue: "+12532143774",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "contact",
      initialValue: "smartcareautorepair@gmail.com",
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      group: "contact",
      initialValue: "108 163rd St S",
    }),
    defineField({
      name: "cityStateZip",
      title: "City, State, ZIP",
      type: "string",
      group: "contact",
      initialValue: "Spanaway, WA 98387",
    }),
    defineField({
      name: "mapsUrl",
      title: "Google Maps URL",
      type: "url",
      group: "contact",
      initialValue:
        "https://maps.google.com/?q=108+163rd+St+S+Spanaway+WA+98387",
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "string",
      group: "contact",
      initialValue: "Mon – Fri, 9 AM – 5 PM",
    }),
    defineField({
      name: "languages",
      title: "Languages Spoken",
      type: "string",
      group: "contact",
      initialValue: "EN / ES / UK / RU",
    }),
    defineField({
      name: "generalBookingUrl",
      title: "General Calendly URL",
      type: "url",
      group: "contact",
      description: "Used as the fallback booking link when no service is selected.",
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "seo",
      description: "Browser tab title and Google result title.",
      validation: (r) => r.max(70).warning("Aim for under 70 characters"),
      initialValue:
        "SmartCare Auto Repair — EV & Hybrid Specialists | Spanaway, WA",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Shown under the title in Google search results.",
      validation: (r) => r.max(180).warning("Aim for under 180 characters"),
      initialValue:
        "SmartCare Auto Repair in Spanaway, WA — EV & hybrid specialists. Diagnostics, programming, HV battery service, electronics, and maintenance. Call (253) 214-3774.",
    }),
    defineField({
      name: "footerDescription",
      title: "Footer Description",
      type: "text",
      rows: 3,
      group: "footer",
      initialValue:
        "EV & hybrid specialists in Spanaway, WA — diagnostics, programming, electronics, HV battery service, and maintenance.",
    }),
  ],
  preview: {
    select: { title: "businessName" },
    prepare({ title }) {
      return { title: title || "Site Settings", subtitle: "Global settings" };
    },
  },
});
