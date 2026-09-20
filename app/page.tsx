import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ForVendors } from "@/components/landing/ForVendors";
import { DownloadCTA } from "@/components/landing/DownloadCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <ForVendors />
      <DownloadCTA />
      <Footer />
    </main>
  );
}
