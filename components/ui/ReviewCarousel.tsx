"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Elisa H.",
    text: "Thank you to Rick's Tree Service for the excellent job that they did! They worked very hard at my house. They took shrubs out, trimmed and topped trees, cleaned the fence line, cut overgrown trees. It was a lot of stuff! I really appreciate the excellent job that they did! I highly recommend them!",
  },
  {
    name: "Kelly O.",
    text: "Rick and his team has the right equipment and years of experience to tackle hard jobs and make them look easy!  Thoroughly impressed with their work!  I'm a customer for life now!",
  },
  {
    name: "Deniese M.",
    text: "I just had some tree removal complete by Rick’s.  Josh and his crew went over and above my expectations regarding their work! He even removed trees that weren’t in the original quote for me!! There are trees gone and you literally can’t even tell they were there! He even blew out my garage when he was done!!!! 100/10 recommend them!",
  },
  {
    name: "David F.",
    text: "Excellent work. Reasonably priced. Overall, an excellent company experience.",
  },
  {
    name: "Joy T.",
    text: "Thanks to Josh and his crew for taking down several trees near my house. 3 out of 4 were just a storm away from falling on my home. They took their time doing a good job, very professional,  and didn't leave me with a big mess!",
  },
];

export default function ReviewCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleReviews = [0, 1, 2].map(
    (offset) => reviews[(startIndex + offset) % reviews.length],
  );

  const previous = () => {
    setStartIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setStartIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="reviews-section">
      <div className="container-site">
        <div className="reviews-heading">
          <div className="reviews-eyebrow">
            <span />
            <p>What Our Customers Say</p>
            <span />
          </div>

          <h2>5 Star Service</h2>
        </div>

        <div className="reviews-carousel">
          <button
            className="review-arrow review-arrow-left"
            onClick={previous}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={34} />
          </button>

          <div className="reviews-grid">
            {visibleReviews.map((review, index) => (
              <article
                className="review-card"
                key={`${review.name}-${startIndex}-${index}`}
              >
                <div className="review-stars" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p>&ldquo;{review.text}&rdquo;</p>

                <strong>— {review.name}</strong>
              </article>
            ))}
          </div>

          <button
            className="review-arrow review-arrow-right"
            onClick={next}
            aria-label="Next reviews"
          >
            <ChevronRight size={34} />
          </button>
        </div>

        <div className="review-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              aria-label={`Show review set ${index + 1}`}
              className={index === startIndex ? "active" : ""}
              onClick={() => setStartIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
