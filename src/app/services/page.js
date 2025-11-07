import Script from "next/script";
import Services from "./Services";

// ---------------------------------------------
// ✅ SEO Metadata for InstaBiz Web - Services Page
// ---------------------------------------------
export const metadata = {
  title: "Our Services | InstaBiz Web - AI Automation & Digital Solutions",
  description:
    "Explore InstaBiz Web’s range of AI automation services including chatbot development, CRM integration, marketing automation, and workflow optimization designed to help businesses scale intelligently.",
  keywords: [
    "InstaBiz Web Services",
    "AI Automation",
    "Chatbot Development",
    "CRM Integration",
    "Marketing Automation",
    "Workflow Optimization",
    "AI Solutions India",
    "InstaBiz Web Technologies Pvt. Ltd.",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/services",
  },
  openGraph: {
    title: "InstaBiz Web Services | AI Automation & Workflow Solutions",
    description:
      "InstaBiz Web offers AI-driven chatbot, CRM, and marketing automation services to help businesses operate smarter and scale faster.",
    url: "https://www.instabizweb.com/services",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "InstaBiz Web Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaBiz Web Services | AI Automation Experts",
    description:
      "Discover InstaBiz Web’s services — AI chatbots, CRM automation, and digital workflow systems built for modern businesses.",
    images: ["https://www.instabizweb.com/opengraph-image.png"],
    creator: "@instabizweb",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------------------------
// ✅ JSON-LD Structured Data for Services Page
// ---------------------------------------------
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation & Digital Solutions",
  provider: {
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
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "InstaBiz Web Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot Development",
          description:
            "Intelligent chatbot design and integration for business automation and customer engagement.",
          url: "https://www.instabizweb.com/services/ai-chatbot-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CRM Automation",
          description:
            "Automate CRM workflows and lead management to improve sales efficiency.",
          url: "https://www.instabizweb.com/services/crm-automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Automation",
          description:
            "AI-powered marketing tools to personalize campaigns and maximize ROI.",
          url: "https://www.instabizweb.com/services/marketing-automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow Optimization",
          description:
            "Streamline business operations with AI-driven workflow solutions.",
          url: "https://www.instabizweb.com/services/workflow-optimization",
        },
      },
    ],
  },
  inLanguage: "en",
  dateModified: new Date().toISOString().split("T")[0],
};

// ---------------------------------------------
// ✅ Page Component
// ---------------------------------------------
export default function ServicesPage() {
  return (
    <>
      {/* ✅ Inject JSON-LD Schema for Google Rich Results */}
      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      {/* ✅ Render Services Component */}
      <Services />
    </>
  );
}
