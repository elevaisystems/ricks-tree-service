import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricks-tree-service.com"),

  title: {
    default: "Rick's Tree Service | Professional Tree Care",
    template: "%s | Rick's Tree Service",
  },

  description:
    "Rick's Tree Service provides professional tree removal, trimming and pruning, stump grinding, storm damage cleanup, bucket truck services, and more. Over 40 years of experience and free estimates.",

  keywords: [
    "tree service",
    "tree removal",
    "tree trimming",
    "tree pruning",
    "stump grinding",
    "storm damage cleanup",
    "bucket truck services",
    "Fairfield TX tree service",
    "Rick's Tree Service",
  ],

  authors: [
    {
      name: "Rick's Tree Service",
    },
  ],

  creator: "Rick's Tree Service",
  publisher: "Rick's Tree Service",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ricks-tree-service.com",
    siteName: "Rick's Tree Service",

    title: "Rick's Tree Service | Professional Tree Care",

    description:
      "Professional tree care backed by over 40 years of experience. Tree removal, trimming, stump grinding, storm cleanup, bucket truck services, and more.",

    images: [
      {
        url: "/images/hero/ricks-bucket-truck.png",
        width: 1200,
        height: 630,
        alt: "Rick's Tree Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Rick's Tree Service | Professional Tree Care",

    description:
      "Professional tree care backed by over 40 years of experience.",

    images: ["/images/hero/ricks-bucket-truck.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
