import "server-only";

import type { QueryParams } from "next-sanity";

import { client } from "./client";
import { isSanityConfigured } from "../env";

export const SANITY_TAG = "sanity";

/**
 * Server-side GROQ fetch with Next.js cache tag so a single
 * revalidateTag(SANITY_TAG) from the publish webhook refreshes every page.
 *
 * Returns `null` when Sanity isn't configured yet, which lets components
 * fall back to their hardcoded defaults instead of crashing at build time.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [SANITY_TAG],
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<T | null> {
  if (!isSanityConfigured || !client) return null;
  return client.fetch<T>(query, params, {
    next: { revalidate: 60, tags },
  });
}
