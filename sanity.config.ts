"use client";

/**
 * Sanity Studio config. Rendered at /studio on the same Next.js deploy.
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID (and optionally _DATASET) in env.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/lib/structure";

// Docs whose ids are the same as their schema name — one document per type.
const SINGLETON_TYPES = new Set(["siteSettings", "hero"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "SmartCare CMS",
  schema: {
    types: schemaTypes,
    // Hide "New document" for singletons so the client doesn't accidentally
    // create a second Site Settings or Hero.
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETON_TYPES.has(schemaType)),
  },
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // Same guard for the doc-level "Duplicate" and "Delete" actions.
    actions: (input, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? input.filter(
            ({ action }) =>
              action !== "duplicate" && action !== "delete" && action !== "unpublish",
          )
        : input,
  },
});
