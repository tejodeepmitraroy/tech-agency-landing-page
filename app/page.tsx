import HeroSection from "./(home)/hero";
import FooterSection from "./(home)/Footer";
import AboutSection from "./(home)/About";
import ServicesSection from "./(home)/Services";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
