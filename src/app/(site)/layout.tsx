import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { getSiteSettings } from "@/sanity/queries";

/**
 * Site chrome (Navbar / Footer / FloatingCTA) lives here, not in the root
 * layout — so the /studio route can render without any of it.
 */
export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();
  return (
    <>
      <Navbar siteSettings={siteSettings} />
      <main className="relative">{children}</main>
      <Footer siteSettings={siteSettings} />
      <FloatingCTA siteSettings={siteSettings} />
    </>
  );
}
