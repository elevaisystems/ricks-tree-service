import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-overlay" />

      <div className="container-site services-hero-content">
        <h1>
          Professional
          <span>Tree Services</span>
          You Can Trust
        </h1>

        <div className="services-hero-divider" />

        <p className="services-hero-description">
          From routine trimming to difficult removals and storm cleanup,
          Rick&apos;s Tree Service provides safe, dependable tree care backed by
          over 40 years of experience.
        </p>

        <div className="services-hero-actions">
          <Link href="/contact" className="button button-primary">
            Get a Quote
          </Link>

          <Link href="/gallery" className="button button-outline">
            Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
