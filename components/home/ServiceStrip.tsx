import Image from "next/image";
import Link from "next/link";
import { CloudLightning, Scissors, TreePine, CircleDot } from "lucide-react";

const services = [
  {
    title: "Tree Removal",
    description:
      "Safe and efficient removal of trees of any size, including hazardous trees and tight spaces.",
    image: "/images/services/tree-removal.png",
    alt: "Professional tree removal service",
    icon: TreePine,
  },
  {
    title: "Tree Trimming & Pruning",
    description:
      "Improve the health, safety, and appearance of your trees with professional trimming and pruning.",
    image: "/images/services/tree-trimming-pruning.png",
    alt: "Professional tree trimming and pruning",
    icon: Scissors,
  },
  {
    title: "Stump Grinding",
    description:
      "Remove unwanted stumps and reclaim your property with professional stump grinding.",
    image: "/images/services/stump-grinding.png",
    alt: "Professional stump grinding service",
    icon: CircleDot,
  },
  {
    title: "Storm Damage Cleanup",
    description:
      "Fast, dependable cleanup of fallen trees, broken limbs, and other storm-related tree damage.",
    image: "/images/services/storm-damage-cleanup.png",
    alt: "Storm damaged tree cleanup",
    icon: CloudLightning,
  },
];

export default function ServiceStrip() {
  return (
    <section className="home-services">
      <div className="container-site">
        <div className="home-services-heading">
          <div className="services-eyebrow">
            <span />
            <p>Our Services</p>
            <span />
          </div>

          <h2>Complete Tree Care Solutions</h2>
        </div>

        <div className="home-services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="home-service-card" key={service.title}>
                <div className="service-card-content">
                  <div className="service-card-icon">
                    <Icon size={27} strokeWidth={2.2} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-card-image">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="home-services-action">
          <Link href="/services" className="view-services-button">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
