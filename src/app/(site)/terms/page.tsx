import type { Metadata } from "next";
import { getLegalPage } from "@/sanity/queries";
import { LegalPageView } from "../legal/LegalPageView";
import { DEFAULT_TERMS, DEFAULT_EFFECTIVE_DATE } from "../legal/defaults";

export const metadata: Metadata = {
  title: "Terms of Service — SmartCare Auto Repair",
  description:
    "The terms that apply when you use the SmartCare Auto Repair website or book an appointment with us.",
};

export default async function TermsPage() {
  const fromSanity = await getLegalPage("terms");
  return (
    <LegalPageView
      fromSanity={fromSanity}
      fallback={DEFAULT_TERMS}
      fallbackEffectiveDate={DEFAULT_EFFECTIVE_DATE}
    />
  );
}
