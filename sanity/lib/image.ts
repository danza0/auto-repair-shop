import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, isSanityConfigured, projectId } from "../env";

// Guard: the builder throws with an empty projectId. When Sanity isn't
// configured yet, urlFor() shouldn't be called (queries return null), but
// we still keep the builder undefined instead of throwing at import time.
const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : undefined;

export function urlFor(source: Image) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source);
}
