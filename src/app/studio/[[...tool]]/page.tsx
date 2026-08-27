/**
 * Embeds the Sanity Studio at /studio. Client-only route: no SSR, no cache.
 * Login is handled by Sanity — anyone in the project's Members list can edit.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
