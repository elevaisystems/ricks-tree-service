import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import QuoteCTA from "@/components/ui/QuoteCTA";
import ReviewCarousel from "@/components/ui/ReviewCarousel";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rick's Tree Service and more than 40 years of hands-on experience providing dependable professional tree care.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <QuoteCTA />
      <ReviewCarousel />
    </>
  );
}
