import { BadgeCheck, ShieldCheck, Truck, Users } from "lucide-react";

const trustItems = [
  {
    title: "Fully Insured",
    description: "Your property is protected with full liability insurance.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Crew",
    description: "Skilled professionals with years of hands-on experience.",
    icon: Users,
  },
  {
    title: "Modern Equipment",
    description: "Professional equipment for safe and efficient results.",
    icon: Truck,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work and put our customers first.",
    icon: BadgeCheck,
  },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container-site trust-bar-grid">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className="trust-item" key={item.title}>
              <div className="trust-icon">
                <Icon size={36} strokeWidth={2.2} />
              </div>

              <div className="trust-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
