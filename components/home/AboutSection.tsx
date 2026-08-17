import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Over 40 years of experience",
  "Locally owned & operated",
  "Free estimates",
  "Safety is our top priority",
];

export default function AboutSection() {
  return (
    <section className="home-about home-about-watermark">
      <div className="container-site home-about-grid">
        <div className="home-about-image">
          <Image
            src="/images/about/home-about.png"
            alt="Mature East Texas tree at sunset"
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
          />

          <div className="experience-badge">
            <strong>40+</strong>
            <span>
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        <div className="home-about-content">
          <div className="about-eyebrow">
            <span />
            <p>About Rick&apos;s Tree Service</p>
          </div>

          <h2>
            Rooted in Experience.
            <span>Committed to You.</span>
          </h2>

          <div className="about-divider" />

          <p className="about-description">
            With over 40 years of experience, Rick&apos;s Tree Service has built
            a reputation for dependable, professional tree care throughout
            Fairfield and the surrounding East Texas area.
          </p>

          <p className="about-description">
            From routine trimming to difficult removals and storm cleanup, we
            bring the experience, equipment, and attention to detail needed to
            get the job done safely and efficiently.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="about-highlight" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link href="/about" className="about-button">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
