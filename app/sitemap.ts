import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://excalibur-renovations.localsiteslab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/building",
    "/plumbing-heating",
    "/extensions-conversions",
    "/kitchens-bathrooms",
    "/carpentry",
    "/projects",
    "/about",
    "/areas-covered",
    "/testimonials",
    "/contact",
    "/privacy",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
