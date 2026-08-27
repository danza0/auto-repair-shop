/**
 * Env var helpers. The site (and Studio) will build & run without Sanity
 * configured — components fall back to their hardcoded defaults. Once the
 * env vars are set, Sanity takes over.
 */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const useCdn = false;

export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET || "";

/** True only when the project id is set — used to skip Sanity fetches
 *  at build time on a fresh clone with no env vars. */
export const isSanityConfigured = projectId.length > 0;

export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
