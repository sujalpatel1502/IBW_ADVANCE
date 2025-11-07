import Script from "next/script";
import Terms from "./Terms"; // ✅ Make sure your component file is named Terms.js

// ---------------------------------------------
// ✅ SEO Metadata for InstaBiz Web - Terms & Conditions
// ---------------------------------------------
export const metadata = {
  title: "Terms & Conditions | InstaBiz Web - User Agreement & Policies",
  description:
    "Review InstaBiz Web’s Terms and Conditions — outlining our user agreement, service policies, privacy standards, and usage guidelines. Operated by InstaBiz Web Technologies Pvt. Ltd.",
  keywords: [
    "InstaBiz Web Terms and Conditions",
    "InstaBiz Web Policies",
    "User Agreement",
    "Terms of Service",
    "Service Terms",
    "InstaBiz Web Technologies Pvt. Ltd.",
    "AI automation policies",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | InstaBiz Web - User Agreement & Policies",
    description:
      "Understand InstaBiz Web’s terms of use, data handling policies, and user agreements for accessing our AI automation and chatbot services.",
    url: "https://www.instabizweb.com/terms",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InstaBiz Web Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaBiz Web - Terms & Conditions",
    description:
      "Read InstaBiz Web’s official Terms and Conditions for AI automation, chatbot, and CRM services.",
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
// ✅ JSON-LD Structured Data for Terms of Service
// ---------------------------------------------
const termsSchema = {
  "@context": "https://schema.org",
  "@type": "TermsOfService",
  name: "InstaBiz Web Terms & Conditions",
  description:
    "These Terms and Conditions govern the use of InstaBiz Web’s AI automation platform and related services.",
  url: "https://www.instabizweb.com/terms",
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
export default function TermsAndConditionsPage() {
  return (
    <>
      {/* ✅ Inject JSON-LD Schema for Rich Results */}
      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsSchema),
        }}
      />

      {/* ✅ Render Terms Component */}
      <Terms />
    </>
  );
}
