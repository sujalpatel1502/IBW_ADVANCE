import Script from "next/script";
import Portfolio from "./Portfolio";

// ---------------------------------------------
// ✅ SEO Metadata for InstaBiz Web - Portfolio Page
// ---------------------------------------------
export const metadata = {
  title: "Portfolio | InstaBiz Web - AI Solutions, Automation & Digital Projects",
  description:
    "Explore InstaBiz Web’s portfolio — a showcase of AI automation, chatbot solutions, and digital transformation projects across diverse industries.",
  keywords: [
    "InstaBiz Web Portfolio",
    "AI Automation Projects",
    "Business Chatbot Examples",
    "CRM Integration Case Studies",
    "Digital Marketing Automation",
    "InstaBiz Web Technologies Pvt. Ltd.",
    "AI Solutions Showcase",
    "AI Case Studies",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/portfolio",
  },
  openGraph: {
    title:
      "Portfolio | InstaBiz Web - Showcasing AI-Powered Business Automation Projects",
    description:
      "Take a look at InstaBiz Web’s successful AI automation projects — from chatbot development to CRM and workflow optimization.",
    url: "https://www.instabizweb.com/portfolio",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InstaBiz Web Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaBiz Web Portfolio | AI Automation Case Studies",
    description:
      "View InstaBiz Web’s portfolio of AI and digital transformation projects built for businesses worldwide.",
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
// ✅ JSON-LD Structured Data for Portfolio Page
// ---------------------------------------------
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "InstaBiz Web Portfolio",
  description:
    "Portfolio of AI-powered business automation and chatbot development projects by InstaBiz Web Technologies Pvt. Ltd.",
  url: "https://www.instabizweb.com/portfolio",
  mainEntity: [
    {
      "@type": "CreativeWork",
      name: "AI Chatbot for E-Commerce",
      description:
        "An AI-powered chatbot that helps e-commerce stores automate customer support, track orders, and increase conversions.",
      url: "https://www.instabizweb.com/portfolio/ecommerce-chatbot",
      image: "https://www.instabizweb.com/portfolio/ecommerce-chatbot.jpg",
    },
    {
      "@type": "CreativeWork",
      name: "CRM Automation for Real Estate",
      description:
        "A smart CRM automation solution designed for real estate businesses to manage leads and client follow-ups efficiently.",
      url: "https://www.instabizweb.com/portfolio/real-estate-crm",
      image: "https://www.instabizweb.com/portfolio/real-estate-crm.jpg",
    },
    {
      "@type": "CreativeWork",
      name: "WhatsApp Campaign Automation",
      description:
        "Automated WhatsApp marketing tool to boost engagement and communication for enterprises.",
      url: "https://www.instabizweb.com/portfolio/whatsapp-campaign",
      image: "https://www.instabizweb.com/portfolio/whatsapp-campaign.jpg",
    },
  ],
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
};

// ---------------------------------------------
// ✅ Page Component
// ---------------------------------------------
export default function PortfolioPage() {
  return (
    <>
      {/* ✅ Inject JSON-LD Schema */}
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />

      {/* ✅ Render Portfolio UI */}
      <Portfolio />
    </>
  );
}
