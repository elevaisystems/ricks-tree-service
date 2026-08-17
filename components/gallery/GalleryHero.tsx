import Link from "next/link";

export default function GalleryHero() {
  return (
    <section className="gallery-hero">
      <div className="gallery-hero-overlay" />

      <div className="container-site gallery-hero-content">
        <h1>
          See Our
          <span>Work</span>
          For Yourself
        </h1>

        <div className="gallery-hero-divider" />

        <p className="gallery-hero-description">
          Take a look at tree removals, trimming, storm cleanup, stump grinding,
          and other work completed by Rick&apos;s Tree Service.
        </p>

        <div className="gallery-hero-actions">
          <Link href="/contact" className="button button-primary">
            Get a Quote
          </Link>

          <Link href="/services" className="button button-outline">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
