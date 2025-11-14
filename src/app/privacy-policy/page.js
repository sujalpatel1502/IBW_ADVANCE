import Script from "next/script";
import PrivacyPolicy from "./PrivacyPolicy";

// ---------------------------------------------
// ✅ SEO Metadata for InstaBiz Web - Privacy Policy
// ---------------------------------------------
export const metadata = {
  title: "Privacy Policy | InstaBiz Web - Data Protection & User Privacy",
  description:
    "Read InstaBiz Web’s Privacy Policy to understand how we collect, store, and protect user data in compliance with GDPR, CCPA, and India’s IT Act.",
  keywords: [
    "InstaBiz Web Privacy Policy",
    "Data Protection",
    "User Privacy",
    "GDPR Compliance",
    "CCPA Compliance",
    "InstaBiz Web Technologies Pvt. Ltd.",
    "AI platform data security",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | InstaBiz Web - Data Protection & User Privacy",
    description:
      "InstaBiz Web ensures transparency and security in data handling practices for all AI automation services.",
    url: "https://www.instabizweb.com/privacy",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "InstaBiz Web Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaBiz Web - Privacy Policy",
    description:
      "Learn how InstaBiz Web manages and protects personal data in accordance with international standards.",
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
// ✅ JSON-LD Schema for Privacy Policy
// ---------------------------------------------
const privacySchema = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  name: "InstaBiz Web Privacy Policy",
  url: "https://www.instabizweb.com/privacy",
  description:
    "InstaBiz Web Technologies Pvt. Ltd. describes how personal data is collected, stored, and used across AI automation products and services.",
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
export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ✅ Inject Schema */}
      <Script
        id="privacy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema),
        }}
      />

      {/* ✅ Render Privacy Policy Component */}
      <PrivacyPolicy />
    </>
  );
}
