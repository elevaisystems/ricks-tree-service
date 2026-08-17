import Image from "next/image";
import Link from "next/link";
import {
  CircleDot,
  CloudLightning,
  Scissors,
  TreePine,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Tree Removal",
    description:
      "When a tree becomes dangerous, damaged, diseased, or simply needs to come down, our experienced crew has the equipment and knowledge to remove it safely and efficiently.",
    image: "/images/services/tree-removal.png",
    icon: TreePine,
  },
  {
    title: "Tree Trimming & Pruning",
    description:
      "Professional trimming helps improve the appearance, health, and safety of your trees while removing dead, damaged, or unwanted limbs.",
    image: "/images/services/tree-trimming-pruning.png",
    icon: Scissors,
  },
  {
    title: "Stump Grinding",
    description:
      "Get rid of unwanted tree stumps and reclaim valuable space around your property with professional stump grinding.",
    image: "/images/services/stump-grinding.png",
    icon: CircleDot,
  },
  {
    title: "Storm Damage Cleanup",
    description:
      "When severe weather brings down trees and limbs, we're ready to help clean up the damage and make your property safe again.",
    image: "/images/services/storm-damage-cleanup.png",
    icon: CloudLightning,
  },
  {
    title: "Bucket Truck Services",
    description:
      "Our bucket truck allows us to safely reach high limbs, difficult trees, and elevated areas that would otherwise be challenging to access.",
    image: "/images/hero/ricks-bucket-truck.png",
    icon: Truck,
  },
  {
    title: "We've Got You Covered",
    description:
      "Don't see exactly what you need? Give Rick's Tree Service a call. With decades of experience and professional equipment, we can handle just about any tree service need.",
    image: "/images/services/weve-got-you-covered.png",
    icon: Wrench,
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-page-main">
      <div className="container-site">
        <div className="services-page-heading">
          <div className="services-eyebrow">
            <span />
            <p>What We Do</p>
            <span />
          </div>

          <h2>Complete Tree Care Solutions</h2>

          <p>
            From routine maintenance to difficult removals and storm cleanup,
            Rick&apos;s Tree Service has the experience and equipment to help
            keep your property safe and looking its best.
          </p>
        </div>

        <div className="services-page-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="services-page-card" key={service.title}>
                <div className="services-page-card-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />

                  <div className="services-page-icon">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                </div>

                <div className="services-page-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <Link href="/contact">Request a Free Estimate</Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
