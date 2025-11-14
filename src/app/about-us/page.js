import Script from "next/script";
import AboutUsClient from "./AboutUS";

// ---------------------------------------------
// ✅ Static SEO Metadata for InstaBiz Web
// ---------------------------------------------
export const metadata = {
  title: "About InstaBiz Web - AI-Powered Business Automation Platform",
  description:
    "Learn more about InstaBiz Web, operated by InstaBiz Web Technologies Pvt. Ltd. — a global AI automation platform helping businesses scale through chatbots, CRM integration, and intelligent workflow automation.",
  keywords: [
    "InstaBiz Web",
    "About InstaBiz Web",
    "AI automation company",
    "Business automation tools",
    "AI chatbots",
    "CRM automation",
    "workflow automation",
    "AI business solutions",
    "InstaBiz CRM",
    "AI customer engagement",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/about-us",
  },
  openGraph: {
    title: "About InstaBiz Web - Empowering AI Business Automation",
    description:
      "Discover InstaBiz Web — the AI-powered automation platform revolutionizing business operations with chatbots, CRM, and analytics.",
    url: "https://www.instabizweb.com/about-us",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "About InstaBiz Web - AI Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About InstaBiz Web - AI Business Automation Platform",
    description:
      "InstaBiz Web helps global businesses automate marketing, CRM, and customer engagement through AI-driven solutions.",
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
// ✅ JSON-LD Structured Data for AboutPage
// ---------------------------------------------
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "InstaBiz Web",
    alternateName: "InstaBiz Web Technologies Pvt. Ltd.",
    url: "https://www.instabizweb.com",
    logo: "https://www.instabizweb.com/opengraph-image.png",
    description:
      "InstaBiz Web is a cutting-edge AI automation platform that enables businesses to scale faster with intelligent chatbots, CRM systems, and workflow automation.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7874866543",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "SG Highway, Ahmedabad",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/instabizweb",
      "https://www.instagram.com/instabizweb",
      "https://twitter.com/instabizweb",
    ],
  },
};

// ---------------------------------------------
// ✅ Page Component
// ---------------------------------------------
export default function AboutUsPage() {
  return (
    <>
      {/* ✅ Inject JSON-LD Schema for Google Rich Results */}
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      {/* ✅ Render the client-side AboutUs content */}
      <AboutUsClient />
    </>
  );
}
