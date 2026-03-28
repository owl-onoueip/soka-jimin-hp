import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soka-jsg.com";
  const now = new Date();

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/members`, priority: 0.9 },
    { url: `${baseUrl}/policy`, priority: 0.8 },
    { url: `${baseUrl}/news`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.7 },
  ].map((page) => ({
    ...page,
    lastModified: now,
    changeFrequency: "weekly" as const,
  }));

  const memberPages = [1, 2, 3, 4, 5, 6, 7].map((id) => ({
    url: `${baseUrl}/members/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...memberPages];
}
