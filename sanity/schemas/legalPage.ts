import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

/**
 * Privacy Policy, Terms of Service, and any other legal page. One schema,
 * two documents (fixed slugs 'privacy' and 'terms'). Content is Portable
 * Text so the client gets a friendly rich-text editor.
 */
export const legalPage = defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      description: "Shown as the H1 and the browser tab title.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      description: "e.g. 'privacy' → /privacy, 'terms' → /terms",
      options: { source: "title", maxLength: 40 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "effectiveDate",
      title: "Effective Date",
      type: "date",
      description: "Shown at the top of the page.",
    }),
    defineField({
      name: "summary",
      title: "Short Summary",
      type: "text",
      rows: 2,
      description: "One-sentence subtitle shown under the title.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `/${subtitle}` : "" };
    },
  },
});
