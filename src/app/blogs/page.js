import Script from "next/script";
import BlogsClient from "./BlogsClient";

// ---------------------------------------------
// ✅ SEO Metadata for InstaBiz Web - Blogs Page
// ---------------------------------------------
export const metadata = {
  title: "Blog | InstaBiz Web - AI Automation, Business Insights & Technology News",
  description:
    "Read the latest articles on AI automation, business transformation, CRM implementation, and digital marketing strategies from InstaBiz Web. Get expert insights and practical tips to grow your business.",
  keywords: [
    "InstaBiz Web Blog",
    "AI Automation Articles",
    "Business Automation Tips",
    "CRM Implementation Guide",
    "Digital Marketing Insights",
    "Business Technology News",
    "AI Chatbot Best Practices",
    "Workflow Automation",
    "InstaBiz Web Technologies Pvt. Ltd.",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/blogs",
  },
  openGraph: {
    title: "Blog | InstaBiz Web - AI Automation & Business Insights",
    description:
      "Explore expert articles on AI automation, CRM systems, digital transformation, and business growth strategies from InstaBiz Web.",
    url: "https://www.instabizweb.com/blogs",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "InstaBiz Web Blog - AI Automation & Business Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | InstaBiz Web - AI Automation & Business Insights",
    description:
      "Read expert articles on AI automation, CRM implementation, and digital transformation from InstaBiz Web.",
    images: ["https://www.instabizweb.com/opengraph-image.jpeg"],
    creator: "@instabizweb",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------------------------
// ✅ JSON-LD Structured Data for Blog Listing Page
// ---------------------------------------------
const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "InstaBiz Web Blog",
  description:
    "Expert articles and insights on AI automation, business transformation, CRM systems, and digital marketing from InstaBiz Web Technologies Pvt. Ltd.",
  url: "https://www.instabizweb.com/blogs",
  publisher: {
    "@type": "Organization",
    name: "InstaBiz Web",
    legalName: "InstaBiz Web Technologies Pvt. Ltd.",
    url: "https://www.instabizweb.com",
    logo: "https://www.instabizweb.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/insta-biz-web",
      "https://www.instagram.com/insta_biz_web",
      "https://www.facebook.com/people/Insta-Biz-Web/61578562181866",
    ],
  },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "AI Automation: Transforming Business Operations in 2024",
      url: "https://www.instabizweb.com/blogs/ai-automation-transforming-business-operations",
      datePublished: "2024-01-15",
      author: {
        "@type": "Organization",
        name: "IBW Team",
      },
    },
    {
      "@type": "BlogPosting",
      headline: "A Comprehensive Guide to Odoo CRM Implementation for Small Businesses",
      url: "https://www.instabizweb.com/blogs/comprehensive-guide-odoo-crm-implementation",
      datePublished: "2024-01-10",
      author: {
        "@type": "Organization",
        name: "IBW Team",
      },
    },
  ],
};

// ---------------------------------------------
// ✅ Page Component
// ---------------------------------------------
export default function BlogsPage() {
  return (
    <>
      {/* ✅ Inject JSON-LD Schema for Google Rich Results */}
      <Script
        id="blog-listing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListingSchema),
        }}
      />

      {/* ✅ Render the client-side Blogs content */}
      <BlogsClient />
    </>
  );
}
