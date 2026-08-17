"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const projects = [
  {
    src: "/images/gallery/temp-gallery.png",
    alt: "Rick's Tree Service project",
  },
  {
    src: "/images/gallery/temp-gallery.png",
    alt: "Rick's Tree Service project",
  },
  {
    src: "/images/gallery/temp-gallery.png",
    alt: "Rick's Tree Service project",
  },
  {
    src: "/images/gallery/temp-gallery.png",
    alt: "Rick's Tree Service project",
  },
  {
    src: "/images/gallery/temp-gallery.png",
    alt: "Rick's Tree Service project",
  },
  {
    src: "/images/gallery/temp-gallery.png",
    alt: "Rick's Tree Service project",
  },
];

export default function ProjectGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <section className="project-gallery">
        <div className="container-site">
          <div className="project-gallery-heading">
            <div className="project-gallery-eyebrow">
              <span />
              <p>Our Work</p>
              <span />
            </div>

            <h2>See the Difference Experience Makes</h2>

            <p>
              Take a look at some of the tree care projects completed by
              Rick&apos;s Tree Service.
            </p>
          </div>

          <div className="project-gallery-grid">
            {projects.map((project, index) => (
              <button
                type="button"
                className="project-gallery-item"
                key={`${project.src}-${index}`}
                onClick={() => setActiveImage(project.src)}
                aria-label={`View project ${index + 1}`}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />

                <div className="project-gallery-overlay">
                  <div className="project-gallery-zoom">
                    <ZoomIn size={24} />
                  </div>

                  <span>View Project</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="gallery-lightbox" onClick={() => setActiveImage(null)}>
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
          >
            <X size={27} />
          </button>

          <div
            className="gallery-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt="Rick's Tree Service project"
              fill
              sizes="95vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
