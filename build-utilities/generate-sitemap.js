const fs = require("fs");
const path = require("path");

function generateSitemap() {
  const pages = [
    { url: "https://axonstudio.tech", changefreq: "daily", priority: 1.0 },
    {
      url: "https://axonstudio.tech/about",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "https://axonstudio.tech/contact",
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: "https://axonstudio.tech/privacy",
      changefreq: "daily",
      priority: 0.5,
    },
    {
      url: "https://axonstudio.tech/refund",
      changefreq: "daily",
      priority: 0.5,
    },
    {
      url: "https://axonstudio.tech/terms",
      changefreq: "daily",
      priority: 0.5,
    },
  ];

  const sitemap = generateSitemapXml(pages);
  const filePath = path.resolve("./public/sitemap.xml");

  try {
    fs.writeFileSync(filePath, sitemap);
    console.log(`Sitemap generated successfully at ${filePath}`);
  } catch (error) {
    console.error(`Error generating sitemap: ${error}`);
  }
}

function generateSitemapXml(pages) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach((page) => {
    xml += `
        <url>
            <loc>${page.url}</loc>
            <changefreq>${page.changefreq || "daily"}</changefreq>
            <priority>${page.priority || "0.5"}</priority>
        </url>`;
  });

  xml += `
    </urlset>`;

  return xml;
}

generateSitemap();
