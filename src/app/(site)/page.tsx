import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import BookingContact from "@/components/sections/BookingContact";
import {
  getHero,
  getServices,
  getSpecialties,
  getTestimonials,
  getStats,
  getProcessSteps,
  getGalleryPhotos,
  getTrustReasons,
  getSiteSettings,
} from "@/sanity/queries";

/**
 * Server component. Fetches everything from Sanity in parallel and hands
 * it to each section as props. When Sanity isn't configured or empty,
 * every getter returns null/[] and each section falls back to its own
 * hardcoded defaults — so the site keeps working on a fresh clone.
 */
export default async function HomePage() {
  const [
    hero,
    services,
    specialties,
    testimonials,
    stats,
    processSteps,
    galleryPhotos,
    trustReasons,
    siteSettings,
  ] = await Promise.all([
    getHero(),
    getServices(),
    getSpecialties(),
    getTestimonials(),
    getStats(),
    getProcessSteps(),
    getGalleryPhotos(),
    getTrustReasons(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero hero={hero} stats={stats} siteSettings={siteSettings} />
      <ServicesSection services={services} specialties={specialties} />
      <TrustSection
        stats={stats}
        testimonials={testimonials}
        reasons={trustReasons}
      />
      <ProcessSection steps={processSteps} />
      <GallerySection photos={galleryPhotos} siteSettings={siteSettings} />
      <BookingContact siteSettings={siteSettings} />
    </>
  );
}
