import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "/",
  "/services",
  "/services/water-damage",
  "/services/mold-remediation",
  "/services/rebuilding",
  "/about",
  "/service-areas",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
