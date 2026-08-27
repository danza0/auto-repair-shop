import type { SchemaTypeDefinition } from "sanity";

import { siteSettings } from "./siteSettings";
import { hero } from "./hero";
import { service } from "./service";
import { specialty } from "./specialty";
import { testimonial } from "./testimonial";
import { stat } from "./stat";
import { processStep } from "./processStep";
import { galleryPhoto } from "./galleryPhoto";
import { trustReason } from "./trustReason";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons
  siteSettings,
  hero,
  // Collections
  service,
  specialty,
  testimonial,
  stat,
  processStep,
  galleryPhoto,
  trustReason,
];
