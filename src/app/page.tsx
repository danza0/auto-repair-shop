import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GallerySection from "@/components/sections/GallerySection";
import ProcessSection from "@/components/sections/ProcessSection";
import BookingSection from "@/components/sections/BookingSection";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <ProcessSection />
      <BookingSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
