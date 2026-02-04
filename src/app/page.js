// app/page.tsx
import HeroBanner from "@/components/HeroBanner";
import AboutBrief from "@/components/Home/AboutBrief";
import ProjectsShowcase from "@/components/Home/ProjectShowCase";
import Testimonials from "@/components/Home/Testimonials";
import ServicesSection from "@/components/Home/ServiceSection";
import OurClients from "@/components/Home/OurClients";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <AboutBrief />
      <ServicesSection />
      <ProjectsShowcase />
      <OurClients />
      <Testimonials />
      {/* <Other sections like CTA, Stats, etc. */}
    </main>
  );
}
