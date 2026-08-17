import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-overlay" />

      <div className="container-site about-hero-content">
        <h1>
          Built on
          <span>40+ Years</span>
          of Experience
        </h1>

        <div className="about-hero-divider" />

        <p className="about-hero-description">
          Decades of hands-on experience, dependable service, and a commitment
          to doing the job right have made Rick&apos;s Tree Service a trusted
          name for professional tree care.
        </p>

        <div className="about-hero-actions">
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
