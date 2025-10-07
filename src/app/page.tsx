import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Technologies } from "@/sections/Technologies";
import { CallToAction } from "@/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Technologies />
      <CallToAction />
    </>
  );
}
