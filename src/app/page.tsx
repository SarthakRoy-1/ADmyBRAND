import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer"; 
import { Contact } from "@/components/sections/Contact";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { Blog } from "@/components/sections/Blog";


export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <PricingCalculator />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer /> 
      <Contact />
    </main>
  );
}
