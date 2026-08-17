import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const highlights = [
  "Over 40 years of hands-on experience",
  "Fully insured",
  "Free estimates",
  "Professional equipment",
];

export default function AboutStory() {
  return (
    <section className="about-story">
      <div className="container-site about-story-grid">
        {/* IMAGE */}
        <div className="about-story-visual">
          <div className="about-story-image">
            <Image
              src="/images/about/about-story.png"
              alt="Large mature tree representing Rick's Tree Service"
              fill
              sizes="(max-width: 850px) 100vw, 50vw"
            />
          </div>

          <div className="about-story-badge">
            <strong>40+</strong>

            <span>
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="about-story-content">
          <div className="about-story-eyebrow">
            <span />
            <p>About Rick&apos;s Tree Service</p>
          </div>

          <h2>
            Decades of Experience.
            <span>Quality You Can Trust.</span>
          </h2>

          <div className="about-story-divider" />

          <p>
            With more than 40 years of experience in tree care, Rick&apos;s Tree
            Service brings decades of hands-on knowledge to every job. From
            routine trimming and stump grinding to difficult removals and storm
            cleanup, experience matters when the work involves large trees,
            heavy equipment, and your property.
          </p>

          <p>
            We believe in dependable service, straightforward communication, and
            doing quality work from start to finish. Whether the job is simple
            or challenging, our goal is to get it done safely and leave your
            property looking better than when we arrived.
          </p>

          <div className="about-story-highlights">
            {highlights.map((highlight) => (
              <div className="about-story-highlight" key={highlight}>
                <span>
                  <Check size={14} strokeWidth={3} />
                </span>

                <p>{highlight}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="button button-primary">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
