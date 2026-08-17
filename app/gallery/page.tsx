import GalleryHero from "@/components/gallery/GalleryHero";
import ProjectGallery from "@/components/gallery/ProjectGallery";
import QuoteCTA from "@/components/ui/QuoteCTA";
import ReviewCarousel from "@/components/ui/ReviewCarousel";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "View tree care projects from Rick's Tree Service, including tree removal, trimming, storm cleanup, stump grinding, and more.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <ProjectGallery />
      <QuoteCTA />
      <ReviewCarousel />
    </>
  );
}
