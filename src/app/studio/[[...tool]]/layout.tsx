/**
 * The Studio needs its own layout — bypass the site's fonts/navbar/footer
 * and give Sanity full control of the viewport.
 */
export const metadata = {
  title: "SmartCare CMS",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
