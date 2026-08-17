export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TreeService",

    name: "Rick's Tree Service",

    url: "https://ricks-tree-service.com",

    telephone: ["+1-903-599-2073", "+1-903-875-4834"],

    email: "contact@ricks-tree-service.com",

    description:
      "Professional tree service with over 40 years of experience providing tree removal, trimming and pruning, stump grinding, storm damage cleanup, bucket truck services, and more.",

    areaServed: {
      "@type": "Place",
      name: "Fairfield, Texas and surrounding areas",
    },

    priceRange: "$$",

    image: "https://ricks-tree-service.com/images/branding/ricks-logo.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
