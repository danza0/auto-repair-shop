import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

import { SANITY_TAG } from "../../../../sanity/lib/fetch";
import { revalidateSecret } from "../../../../sanity/env";

/**
 * Sanity webhook target. Configure at
 *   sanity.io/manage → your project → API → Webhooks
 * with:
 *   URL:     https://<your-site>/api/revalidate
 *   Trigger: Create, Update, Delete
 *   Filter:  (leave empty — fires on every publish)
 *   Secret:  same value as SANITY_REVALIDATE_SECRET in Vercel env
 *
 * When the client hits Publish, this route calls revalidateTag('sanity')
 * so every page that reads from Sanity refetches on next request.
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      revalidateSecret,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    revalidateTag(SANITY_TAG);

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      type: body._type,
    });
  } catch (err) {
    console.error("Sanity revalidate error:", err);
    return NextResponse.json(
      { message: (err as Error).message },
      { status: 500 },
    );
  }
}
