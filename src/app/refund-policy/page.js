import Script from "next/script";
import RefundPolicy from "./Refund-policy";

// ---------------------------------------------
// ✅ SEO Metadata for InstaBiz Web - Refund Policy
// ---------------------------------------------
export const metadata = {
  title: "Refund Policy | InstaBiz Web - Service Refund & Cancellation Terms",
  description:
    "Read InstaBiz Web’s Refund Policy to learn about our payment, cancellation, and refund guidelines for AI automation and digital services.",
  keywords: [
    "InstaBiz Web Refund Policy",
    "Refund Terms",
    "Cancellation Policy",
    "Payment Refund",
    "Service Refund Guidelines",
    "InstaBiz Web Technologies Pvt. Ltd.",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/refund-policy",
  },
  openGraph: {
    title:
      "Refund Policy | InstaBiz Web - Service Refund & Cancellation Guidelines",
    description:
      "InstaBiz Web outlines its refund and cancellation terms for AI automation and software service purchases.",
    url: "https://www.instabizweb.com/refund-policy",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "InstaBiz Web Refund Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaBiz Web - Refund Policy",
    description:
      "Understand InstaBiz Web’s refund and cancellation policies for AI automation and SaaS services.",
    images: ["https://www.instabizweb.com/opengraph-image.png"],
    creator: "@instabizweb",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

// ---------------------------------------------
// ✅ JSON-LD Schema for Refund Policy
// ---------------------------------------------
const refundSchema = {
  "@context": "https://schema.org",
  "@type": "RefundPolicy",
  name: "InstaBiz Web Refund Policy",
  url: "https://www.instabizweb.com/refund-policy",
  description:
    "InstaBiz Web’s refund policy details the terms under which customers can request refunds or cancellations for AI automation and software services.",
  publisher: {
    "@type": "Organization",
    name: "InstaBiz Web",
    legalName: "InstaBiz Web Technologies Pvt. Ltd.",
    url: "https://www.instabizweb.com",
    logo: "https://www.instabizweb.com/opengraph-image.png",
    sameAs: [
      "https://www.linkedin.com/company/instabizweb",
      "https://www.instagram.com/instabizweb",
      "https://twitter.com/instabizweb",
    ],
  },
  inLanguage: "en",
  dateModified: new Date().toISOString().split("T")[0],
};

// ---------------------------------------------
// ✅ Page Component
// ---------------------------------------------
export default function RefundPolicyPage() {
  return (
    <>
      {/* ✅ Inject JSON-LD Schema */}
      <Script
        id="refund-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(refundSchema),
        }}
      />

      {/* ✅ Render Refund Policy Component */}
      <RefundPolicy />
    </>
  );
}
