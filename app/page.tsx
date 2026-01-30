import Hero from "@/components/Home/hero";
import ServicesOverview from "@/components/Home/services";
import WhyChooseUs from "@/components/Home/trust";
import BrandsWorkedWith from "@/components/Home/brands";
import CTAStrip from "@/components/Home/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <BrandsWorkedWith />
      <CTAStrip />
    </main>
  );
}
