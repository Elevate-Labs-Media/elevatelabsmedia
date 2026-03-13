import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elevatelabsmedia.ae";

  const routes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/work",
    "/blog",
    "/careers",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/branding",
    "/digital-marketing",
    "/creative-design",
    "/media-production",
    "/e-commerce",
    "/seo-optimization",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
