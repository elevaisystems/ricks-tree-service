import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay" />

      <div className="container-site contact-hero-content">
        <h1>
          Need Tree Service?
          <span>Let&apos;s Talk.</span>
        </h1>

        <div className="contact-hero-divider" />

        <p className="contact-hero-description">
          Whether you need tree removal, trimming, stump grinding, storm
          cleanup, or another tree service, give Rick&apos;s Tree Service a call
          and let&apos;s talk about your property.
        </p>

        <div className="contact-hero-actions">
          <a href="tel:9035992073" className="button button-primary">
            Call Us Today
          </a>

          <Link href="/services" className="button button-outline">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
