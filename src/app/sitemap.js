// src/app/sitemap.js

export default async function sitemap() {
  const baseUrl = "https://www.instabizweb.com";

  // ✅ All Static Routes for InstaBiz Web
  const staticRoutes = [
    "", // homepage
    "about-us",
    "services",
    "portfolio",
    "portfolios",
    "blogs",
    "contact-us",
    "privacy-policy",
    "refund-policy",
    "terms-and-conditions",
  ];

  // ✅ Example dynamic blog URLs (replace later with real API or DB)
  const blogs = [
    { slug: "ai-chatbots-for-business" },
    { slug: "automation-in-marketing" },
  ];

  // ✅ Generate dynamic blog entries
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // ✅ Generate static page entries
  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency:
      route === "" || route === "blogs" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // ✅ Merge and return full sitemap
  return [...staticUrls, ...blogRoutes];
}
