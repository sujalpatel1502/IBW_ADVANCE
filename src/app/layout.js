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


export const metadata = {
  metadataBase: new URL("https://www.instabizweb.com"),
  title: {
    default: "Insta Biz Web - Leading IT Solutions & Custom Software Development Company in India",
    template: "%s | Insta Biz Web - IT Solutions, Web Development & Software Services",
  },
  description:
    "Insta Biz Web is India's leading IT solutions company offering custom software development, web & mobile app development, cloud computing, IT consulting, enterprise software solutions, and digital transformation services. Serving businesses across Ahmedabad, Mumbai, Surat, Gandhinagar, Vadodara and pan-India.",
  keywords: [
    "IT solutions company in India",
    "best IT solutions provider India",
    "enterprise IT solutions",
    "custom software development company",
    "software development services India",
    "enterprise software development",
    "web application development company",
    "mobile app development services",
    "IT solutions company in Ahmedabad",
    "software development company in Ahmedabad",
    "IT services in Ahmedabad",
    "custom software development Ahmedabad",
    "IT consulting services Ahmedabad",
    "IT solutions company in Mumbai",
    "software development company in Mumbai",
    "IT services in Mumbai",
    "IT solutions company in Surat",
    "software development company in Surat",
    "cloud computing services",
    "cloud solutions provider",
    "IT infrastructure services",
    "managed IT services",
    "cybersecurity solutions",
    "ERP software development",
    "CRM software development",
    "SaaS development services",
    "enterprise application development",
    "business automation solutions",
    "digital transformation services",
  ],
  authors: [{ name: "Insta Biz Web", url: "https://www.instabizweb.com" }],
  creator: "Insta Biz Web",
  publisher: "Insta Biz Web",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.instabizweb.com",
    title: "Insta Biz Web - Leading IT Solutions & Custom Software Development Company",
    description:
      "Transform your business with cutting-edge IT solutions, custom software development, web & mobile apps, and digital transformation services.",
    siteName: "Insta Biz Web",
    images: [
      {
        url: "https://www.instabizweb.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insta Biz Web - IT Solutions & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insta Biz Web - Leading IT Solutions & Custom Software Development",
    description:
      "Professional IT solutions, software development, and digital transformation services in India.",
    creator: "@instabizweb",
    images: ["https://www.instabizweb.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.instabizweb.com",
  },
  category: "IT Solutions & Software Development",
  classification: "Technology Services",
  verification: {
    google: "vmHuzdTef5d_mc0Kajj6SpgLm2kVB7FfoB6vesVFRv0",
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Ahmedabad",
    "geo.position": "23.0225;72.5714",
    ICBM: "23.0225, 72.5714",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="google-site-verification" content="vmHuzdTef5d_mc0Kajj6SpgLm2kVB7FfoB6vesVFRv0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.instabizweb.com" />
        
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Insta Biz Web",
            url: "https://www.instabizweb.com",
            logo: "https://www.instabizweb.com/logo.png",
            description: "Leading IT solutions and software development company in India",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9898124987",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["en", "hi", "gu"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ahmedabad, Gujarat",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "382424",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.facebook.com/instabizweb",
              "https://www.instagram.com/instabizweb",
              "https://www.linkedin.com/company/instabizweb",
            ],
            foundingDate: "2020",
          })}
        </script>

        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Insta Biz Web",
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
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "18:00",
            },
            areaServed: [
              { "@type": "City", name: "Ahmedabad" },
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Surat" },
            ],
            priceRange: "$$",
          })}
        </script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" async></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}