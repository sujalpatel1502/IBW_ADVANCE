import Home from './Home';
import Script from "next/script";



// ---------------------------
// ✅ Homepage SEO Metadata
// ---------------------------
export const metadata = {
  title: "Instabiz Web | Web Design, Development & Digital Marketing Agency",
  description:
    "Instabiz Web builds modern websites, eCommerce platforms, and digital marketing campaigns that grow your business. Let’s create something amazing together.",
  keywords: [
    "Instabiz Web",
    "Website Design",
    "Web Development",
    "Digital Marketing",
    "SEO Services",
    "Branding Agency",
    "Ecommerce Website Development",
    "Business Websites",
    "Ahmedabad Web Agency",
    "Social Media Marketing",
    "AI Automations",
    "Blutec Scout",
    "Blutec Ping",
    "Blutec AI",
    "Blutec Voice",
    "Blutec Orbit"
  ],
  openGraph: {
    title: "Instabiz Web | Web Design & Digital Marketing Agency in Ahmedabad",
    description:
      "Professional website design, development, and digital marketing company — Instabiz Web helps brands stand out online.",
    url: "https://instabizweb.com",
    siteName: "Instabiz Web",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Instabiz Web Home Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instabiz Web | Custom Web Design & Marketing",
    description:
      "Instabiz Web creates impactful digital experiences through modern design, custom development, and smart marketing.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://instabizweb.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};



// 👇 Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Instabiz Web",
  legalName: "Instabiz Web Pvt. Ltd.",
  url: "https://instabizweb.com",
  logo: "https://instabizweb.com/logo.png",
  sameAs: [
    "https://www.facebook.com/instabizweb",
    "https://www.instagram.com/instabizweb",
    "https://www.linkedin.com/company/instabizweb",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7874866543",
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad, Gujarat, India",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
};


// 👇 WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Instabiz Web",
  url: "https://instabizweb.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://instabizweb.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const HomePage = () => {
  
  return (
        <>
            <Script
            id="organization-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
          <Script
            id="website-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
          />
        <Home />  
        </>
      );
    };

export default HomePage;