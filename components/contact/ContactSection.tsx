"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Clock3, MapPin, Phone } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your request.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact submission error:", error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section className="contact-main">
      <div className="container-site contact-main-grid">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <div className="contact-section-eyebrow">
            <span />
            <p>Get in Touch</p>
          </div>

          <h2>
            Ready to Get Started?
            <span>Give Us a Call.</span>
          </h2>

          <p className="contact-info-intro">
            Have a tree that needs attention? Tell us what&apos;s going on and
            we&apos;ll help you determine the next step. Estimates are free and
            there&apos;s no obligation.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Phone size={24} />
              </div>

              <div>
                <span>Call Rick&apos;s Tree Service</span>

                <a href="tel:9035992073">903-599-2073</a>

                <a href="tel:9038754834">903-875-4834</a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <MapPin size={24} />
              </div>

              <div>
                <span>Service Area</span>
                <strong>Fairfield &amp; Surrounding Areas</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <Clock3 size={24} />
              </div>

              <div>
                <span>Free Estimates</span>
                <strong>Call Today to Get Started</strong>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-card">
          {status === "success" ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <CheckCircle2 size={42} strokeWidth={1.8} />
              </div>

              <span>Request Sent</span>

              <h3>Thank You!</h3>

              <p>
                Your request has been sent to Rick&apos;s Tree Service.
                We&apos;ll be in touch as soon as possible.
              </p>

              <button
                type="button"
                className="button button-primary"
                onClick={() => setStatus("idle")}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <>
              <div className="contact-form-heading">
                <span>Free Estimate</span>

                <h3>Tell Us About Your Project</h3>

                <p>
                  Fill out the form below and we&apos;ll get back with you as
                  soon as possible.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>

                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">Your Name *</label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      autoComplete="name"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="phone">Phone Number *</label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      autoComplete="tel"
                      required
                      disabled={status === "sending"}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    disabled={status === "sending"}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="service">Service Needed</label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    disabled={status === "sending"}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Tree Removal">Tree Removal</option>

                    <option value="Tree Trimming & Pruning">
                      Tree Trimming &amp; Pruning
                    </option>

                    <option value="Stump Grinding">Stump Grinding</option>

                    <option value="Storm Damage Cleanup">
                      Storm Damage Cleanup
                    </option>

                    <option value="Bucket Truck Services">
                      Bucket Truck Services
                    </option>

                    <option value="Other Tree Service">
                      Other Tree Service
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="message">How Can We Help?</label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us a little about the work you need done..."
                    disabled={status === "sending"}
                  />
                </div>

                {status === "error" && (
                  <div
                    className="contact-form-message contact-form-error"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="button button-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Request a Free Estimate"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
