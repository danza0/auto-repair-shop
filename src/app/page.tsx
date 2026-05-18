import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import TrustSection from "@/components/sections/TrustSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import BookingContact from "@/components/sections/BookingContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <GallerySection />
      <BookingContact />
    </>
  );
}
