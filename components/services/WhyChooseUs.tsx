import { Check, ShieldCheck } from "lucide-react";

const columns = [
  ["Fully Insured", "Free Estimates"],
  ["Experienced Crew", "Affordable Pricing"],
  ["Modern Equipment", "Satisfaction Guaranteed"],
];

export default function WhyChooseUs() {
  return (
    <section className="services-why">
      <div className="container-site">
        <div className="services-why-box">
          {/* LEFT TITLE */}
          <div className="services-why-intro">
            <ShieldCheck className="services-why-shield" strokeWidth={1.8} />

            <div className="services-why-title">
              <h2>Why Choose Rick&apos;s</h2>
              <h3>Tree Service?</h3>
            </div>
          </div>

          {/* THREE BENEFIT COLUMNS */}
          {columns.map((column, index) => (
            <div className="services-why-column" key={index}>
              {column.map((item) => (
                <div className="services-why-benefit" key={item}>
                  <span className="services-why-check">
                    <Check size={17} strokeWidth={3} />
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
