import HeroSection from "./(home)/hero";
import Marquee from "./(home)/Marquee";
import FooterSection from "./(home)/Footer";
import AboutSection from "./(home)/About";
import ProjectsSection from "./(home)/Projects";
import ServicesSection from "./(home)/Services";
import PricingSection from "./(home)/Pricing";
import FAQSection from "./(home)/FAQ";
import CTASection from "./(home)/CTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
