import type { Metadata } from "next";
import { getLegalPage } from "@/sanity/queries";
import { LegalPageView } from "../legal/LegalPageView";
import { DEFAULT_PRIVACY, DEFAULT_EFFECTIVE_DATE } from "../legal/defaults";

export const metadata: Metadata = {
  title: "Privacy Policy — SmartCare Auto Repair",
  description:
    "How SmartCare Auto Repair collects, uses, and protects your information.",
};

export default async function PrivacyPage() {
  const fromSanity = await getLegalPage("privacy");
  return (
    <LegalPageView
      fromSanity={fromSanity}
      fallback={DEFAULT_PRIVACY}
      fallbackEffectiveDate={DEFAULT_EFFECTIVE_DATE}
    />
  );
}
