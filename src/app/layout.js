import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/bootstrap.css";
import "../styles/animate.min.css";
import "../styles/helper.css";
import "../styles/unit-test.css";
import "../styles/main-style.css";
import "../styles/navbar.css";
import "../styles/portfolio.css";
import Header from "../components/Header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// -------------------------------------------------------------
// 🌐 GLOBAL METADATA CONFIGURATION (SEO + Social + Crawling)
// -------------------------------------------------------------
export const metadata = {
  metadataBase: new URL("https://www.instabizweb.com"),
  title: {
    default: "Insta Biz Web - IT Solutions, Web Development & Software Company in India",
    template: "%s | Insta Biz Web - Software, Web & IT Services",
  },
  description:
    "Insta Biz Web is a top IT solutions company in India, providing custom software, web & mobile app development, digital transformation, and cloud services. Trusted by businesses across Ahmedabad, Mumbai, and India.",
  keywords: [
    "Insta Biz Web",
    "IT solutions company India",
    "software development company Ahmedabad",
    "custom web development services",
    "mobile app development India",
    "enterprise software solutions",
    "IT consulting services",
    "cloud solutions provider",
    "SaaS development company",
    "digital transformation services",
    "eCommerce web development",
    "cybersecurity services",
  ].join(", "),
  authors: [{ name: "Insta Biz Web", url: "https://www.instabizweb.com" }],
  creator: "Insta Biz Web Team",
  publisher: "Insta Biz Web Pvt. Ltd.",
  alternates: {
    canonical: "https://www.instabizweb.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.instabizweb.com",
    siteName: "Insta Biz Web",
    title: "Insta Biz Web - Leading IT Solutions & Custom Software Company",
    description:
      "We deliver IT solutions, custom software development, web & mobile app design, and enterprise technology services in India.",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Insta Biz Web - Custom Software & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insta Biz Web - IT Solutions & Software Development",
    description:
      "India's trusted IT partner for software, cloud, and digital transformation services.",
    creator: "@instabizweb",
    images: ["https://www.instabizweb.com/opengraph-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "vmHuzdTef5d_mc0Kajj6SpgLm2kVB7FfoB6vesVFRv0",
  },
  category: "Technology Services",
  classification: "IT & Software Development",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};

// -------------------------------------------------------------
// 🌍 STRUCTURED DATA (JSON-LD for SEO + Google Knowledge Panel)
// -------------------------------------------------------------
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Insta Biz Web",
  url: "https://www.instabizweb.com",
  logo: "https://www.instabizweb.com/logo.png",
  description:
    "Leading IT solutions, web development, and custom software company in India.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9898124987",
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"],
  },
  sameAs: [
    "https://www.facebook.com/instabizweb",
    "https://www.instagram.com/instabizweb",
    "https://www.linkedin.com/company/instabizweb",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad, Gujarat",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382424",
    addressCountry: "IN",
  },
  foundingDate: "2020",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Insta Biz Web",
  url: "https://www.instabizweb.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.instabizweb.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Insta Biz Web",
  image: "https://www.instabizweb.com/logo.png",
  url: "https://www.instabizweb.com",
  telephone: "+91-9898124987",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ahmedabad, Gujarat",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382424",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: ["Ahmedabad", "Mumbai", "Surat", "Gandhinagar", "Vadodara"],
};

// -------------------------------------------------------------
// 🧱 ROOT LAYOUT COMPONENT
// -------------------------------------------------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.instabizweb.com" />

        {/* ✅ CDN Styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        {/* ✅ Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* ✅ Optional Analytics (uncomment when ready) */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_GA_ID');
          `}
        </Script> */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
