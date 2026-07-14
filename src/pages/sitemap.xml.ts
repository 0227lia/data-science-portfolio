import type { APIRoute } from "astro";

import { projects } from "../data/projects";

export const prerender = true;

const basePath = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("Astro site URL is required to generate the sitemap.");
  }

  const routes = [basePath, ...projects.map((project) => `${basePath}projects/${project.slug}/`)];
  const entries = routes
    .map((route) => `  <url><loc>${new URL(route, site).href}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
