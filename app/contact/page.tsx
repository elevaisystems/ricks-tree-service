import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ReviewCarousel from "@/components/ui/ReviewCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Rick's Tree Service for professional tree care and a free estimate. Call today or send us your project details online.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <ReviewCarousel />
    </>
  );
}
