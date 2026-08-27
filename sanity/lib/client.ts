import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from "../env";

/**
 * The read client. `undefined` until Sanity is configured — every fetch
 * goes through `sanityFetch` which checks `isSanityConfigured` first,
 * so we never dereference an undefined client at runtime.
 */
export const client: SanityClient | undefined = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: "published",
    })
  : undefined;
