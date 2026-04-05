import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessSection from "@/components/sections/ProcessSection";
import EstimateCTA from "@/components/sections/EstimateCTA";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/sections/BookingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <SpecialtiesSection />
      <WhyChooseUs />
      <ProcessSection />
      <EstimateCTA />
      <Testimonials />
      <BookingSection />
      <ContactSection />
    </>
  );
}
