import { BadgeCheck, Handshake, ShieldCheck, Wrench } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Tree work demands experience and attention to safety. We approach every job with care for your property and everyone around it.",
  },
  {
    icon: Handshake,
    title: "Dependable Service",
    description:
      "We believe in showing up, communicating clearly, and providing straightforward service our customers can count on.",
  },
  {
    icon: Wrench,
    title: "Experience Matters",
    description:
      "More than 40 years of hands-on experience means we've encountered just about every kind of tree care challenge.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Work",
    description:
      "From the work itself to the final cleanup, our goal is to leave every customer satisfied with the finished job.",
  },
];

export default function AboutValues() {
  return (
    <section className="about-values">
      <div className="container-site">
        <div className="about-values-heading">
          <div className="about-values-eyebrow">
            <span />
            <p>What We Stand For</p>
            <span />
          </div>

          <h2>Built on Experience. Driven by Quality.</h2>

          <p>
            The same principles that have guided Rick&apos;s Tree Service for
            decades continue to guide every job today.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div className="about-value" key={value.title}>
                <div className="about-value-icon">
                  <Icon size={31} strokeWidth={1.8} />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
