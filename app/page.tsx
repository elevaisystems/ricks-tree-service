import Hero from "@/components/home/Hero";
import ServiceStrip from "@/components/home/ServiceStrip";
import TrustBar from "@/components/home/TrustBar";
import AboutSection from "@/components/home/AboutSection";
import ReviewCarousel from "@/components/ui/ReviewCarousel";
import QuoteCTA from "@/components/ui/QuoteCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Tree Care",
  description:
    "Rick's Tree Service provides professional tree removal, trimming, stump grinding, storm cleanup, and more backed by over 40 years of experience.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceStrip />
      <TrustBar />
      <AboutSection />
      <QuoteCTA />
      <ReviewCarousel />
    </>
  );
}
