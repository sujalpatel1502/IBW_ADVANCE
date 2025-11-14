import Home from './Home';
import Script from "next/script";

// ---------------------------
// ✅ Homepage SEO Metadata (Improved)
// ---------------------------
export const metadata = {
  title: "Instabiz Web | Web Design, Development & Digital Marketing Agency in Ahmedabad",
  description:
    "Instabiz Web builds modern websites, eCommerce platforms, AI automations, and digital marketing campaigns that grow your business. Trusted web agency in Ahmedabad.",
  keywords: [
    "Instabiz Web",
    "Website Design",
    "Web Development",
    "Digital Marketing",
    "SEO Services Ahmedabad",
    "Ecommerce Website Development",
    "Branding Agency",
    "Social Media Marketing",
    "Ahmedabad Web Agency",
    "AI Automation",
    "Blutec AI",
    "Blutec Ping",
    "Blutec Scout"
  ],
  openGraph: {
    title: "Instabiz Web | Web Design & Digital Marketing Agency Ahmedabad",
    description:
      "Professional website design, development & digital marketing company in Ahmedabad — Instabiz Web helps brands grow with modern solutions.",
    url: "https://instabizweb.com",
    siteName: "Instabiz Web",
    type: "website",
    images: [
      {
        url: "https://instabizweb.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Instabiz Web - Website Design & Development",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instabiz Web | Custom Web Design & Digital Marketing",
    description:
      "Instabiz Web creates impactful digital experiences through design, development & smart marketing.",
    images: ["https://instabizweb.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://instabizweb.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------
// 📌 Organization Schema (Improved)
// ---------------------------
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Instabiz Web",
  legalName: "Instabiz Web Pvt. Ltd.",
  url: "https://instabizweb.com",
  logo: "https://instabizweb.com/assets/logo.png",
  sameAs: [
    "https://www.facebook.com/instabizweb",
    "https://www.instagram.com/instabizweb",
    "https://www.linkedin.com/company/instabizweb"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9898124987",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad, Gujarat, India",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382424",
    addressCountry: "IN"
  }
};

// ---------------------------
// 📌 LocalBusiness Schema (NEW — Boosts Visibility)
// ---------------------------
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Instabiz Web",
  image: "https://instabizweb.com/assets/logo.png",
  url: "https://instabizweb.com",
  telephone: "+91-9898124987",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad, Gujarat, India",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382424",
    addressCountry: "IN"
  },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/people/Insta-Biz-Web/61578562181866",
    "https://www.instagram.com/insta_biz_web",
    "https://www.linkedin.com/company/insta-biz-web"
  ]
};

// ---------------------------
// 📌 WebSite Schema
// ---------------------------
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Instabiz Web",
  url: "https://instabizweb.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://instabizweb.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// ---------------------------
// 📌 Breadcrumb Schema (NEW)
// ---------------------------
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://instabizweb.com"
    }
  ]
};

const HomePage = () => {
  return (
    <>
      {/* Required for SEO Audit */}
      <link rel="image_src" href="https://instabizweb.com/opengraph-image.png" />

      {/* Schema */}
      <Script id="organization-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} 
      />

      <Script id="local-business-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} 
      />

      <Script id="website-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} 
      />

      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} 
      />

      <Home />
    </>
  );
};

export default HomePage;
