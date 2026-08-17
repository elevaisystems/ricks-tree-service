import Link from "next/link";
import { Phone, TreePine } from "lucide-react";

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-overlay" />

      <div className="container-site hero-content">
        <div className="hero-copy">
          <h1>
            <span>Expert Tree Care</span>
            You Can Trust
          </h1>

          <div className="hero-divider" />

          <p>
            Professional tree services with safety, quality, and customer
            service in mind.
          </p>

          <div className="hero-actions">
            <Link href="/services" className="button button-primary">
              <TreePine size={19} />
              Our Services
            </Link>

            <Link href="/contact" className="button button-outline">
              <Phone size={19} />
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
