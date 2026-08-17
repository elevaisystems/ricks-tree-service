import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import QuoteCTA from "@/components/ui/QuoteCTA";
import ReviewCarousel from "@/components/ui/ReviewCarousel";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Services",
  description:
    "Explore tree removal, tree trimming and pruning, stump grinding, storm damage cleanup, bucket truck services, and more from Rick's Tree Service.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
      <QuoteCTA />
      <ReviewCarousel />
    </>
  );
}
