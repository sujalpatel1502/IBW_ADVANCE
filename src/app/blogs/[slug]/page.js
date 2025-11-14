import Script from "next/script";
import BlogDetailClient from "./BlogDetailClient";

// Blog data for metadata generation
const blogPosts = {
  'ai-automation-transforming-business-operations': {
    id: 1,
    slug: 'ai-automation-transforming-business-operations',
    title: 'AI Automation: Transforming Business Operations in 2024',
    excerpt: 'Discover how AI automation is revolutionizing business operations, streamlining workflows, and driving unprecedented efficiency across industries. Learn practical implementation strategies and real-world success stories.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    author: 'IBW Team',
    date: 'January 15, 2024',
    readTime: '5 min read',
    category: 'AI & Automation',
    publishedDate: '2024-01-15',
  },
  'comprehensive-guide-odoo-crm-implementation': {
    id: 2,
    slug: 'comprehensive-guide-odoo-crm-implementation',
    title: 'A Comprehensive Guide to Odoo CRM Implementation for Small Businesses',
    excerpt: 'Learn how Odoo CRM can transform your small business operations. This comprehensive guide covers everything from planning and implementation to best practices and common pitfalls to avoid.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    author: 'IBW Team',
    date: 'January 10, 2024',
    readTime: '7 min read',
    category: 'IT Services',
    publishedDate: '2024-01-10',
  }
};

// Generate metadata for blog posts
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogPosts[slug];

  if (!blog) {
    return {
      title: "Blog Not Found | InstaBiz Web",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: `${blog.title} | InstaBiz Web Blog`,
    description: blog.excerpt,
    keywords: [
      blog.category,
      "InstaBiz Web",
      "Business Automation",
      "AI Solutions",
      "Digital Transformation",
    ].join(", "),
    alternates: {
      canonical: `https://www.instabizweb.com/blogs/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://www.instabizweb.com/blogs/${blog.slug}`,
      siteName: "InstaBiz Web",
      locale: "en_US",
      type: "article",
      publishedTime: blog.publishedDate,
      authors: [blog.author],
      tags: [blog.category],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      creator: "@instabizweb",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ---------------------------------------------
// ✅ JSON-LD Structured Data for Blog Post
// ---------------------------------------------
function generateBlogSchema(blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.publishedDate,
    dateModified: blog.publishedDate,
    author: {
      "@type": "Organization",
      name: blog.author,
      url: "https://www.instabizweb.com",
    },
    publisher: {
      "@type": "Organization",
      name: "InstaBiz Web",
      legalName: "InstaBiz Web Technologies Pvt. Ltd.",
      url: "https://www.instabizweb.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.instabizweb.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.instabizweb.com/blogs/${blog.slug}`,
    },
    articleSection: blog.category,
  };
}

// ---------------------------------------------
// ✅ Page Component
// ---------------------------------------------
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogPosts[slug];

  if (!blog) {
    return <BlogDetailClient />;
  }

  const blogSchema = generateBlogSchema(blog);

  return (
    <>
      {/* ✅ Inject JSON-LD Schema for Google Rich Results */}
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      {/* ✅ Render the client-side Blog Detail content */}
      <BlogDetailClient />
    </>
  );
}
