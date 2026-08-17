import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Tree Removal",
  "Tree Trimming & Pruning",
  "Stump Grinding",
  "Storm Damage Cleanup",
  "Bucket Truck Services",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-site footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/images/branding/ricks-horizontal-logo.png"
              alt="Rick's Tree Service"
              width={300}
              height={120}
            />
          </Link>

          <p>
            Professional tree care backed by over 40 years of experience.
            Dependable service, quality work, and the equipment to handle just
            about any tree care need.
          </p>

          <div className="footer-insured">
            <span>✓</span>
            Fully Insured
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <div className="footer-heading-line" />

          <nav className="footer-links">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Our Services</h3>
          <div className="footer-heading-line" />

          <div className="footer-service-list">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>
          <div className="footer-heading-line" />

          <div className="footer-contact-item">
            <Phone size={18} />

            <div>
              <small>Call Us</small>

              <a href="tel:9035992073">903-599-2073</a>

              <a href="tel:9038754834">903-875-4834</a>
            </div>
          </div>

          <div className="footer-contact-item">
            <MapPin size={18} />

            <div>
              <small>Service Area</small>
              <span>Fairfield & Surrounding Areas</span>
            </div>
          </div>

          <div className="footer-contact-item">
            <Clock3 size={18} />

            <div>
              <small>Estimates</small>
              <span>Call Today for a Free Estimate</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <div className="container-site footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Rick&apos;s Tree Service. All Rights
            Reserved.
          </p>

          <p>Fairfield, Texas</p>
        </div>
      </div>
    </footer>
  );
}
