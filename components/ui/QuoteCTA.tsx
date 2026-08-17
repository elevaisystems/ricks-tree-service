import Link from "next/link";
import { Phone } from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="quote-cta">
      <div className="quote-cta-overlay" />

      <div className="container-site compact-quote-content">
        <div className="compact-quote-copy">
          <p className="compact-quote-label">
            Professional Tree Care You Can Count On
          </p>

          <h2>
            Need Tree Service?
            <span>We&apos;re Here to Help.</span>
          </h2>

          <p>
            Whether you need a tree removed, branches trimmed, a stump ground,
            or help cleaning up after a storm, Rick&apos;s Tree Service is ready
            to get the job done.
          </p>
        </div>

        <div className="compact-quote-actions">
          <a href="tel:9035992073" className="compact-call-button">
            <Phone size={19} />
            <span>
              <small>Call Us Today</small>
              <strong>903-599-2073</strong>
            </span>
          </a>

          <Link href="/contact" className="compact-estimate-button">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
