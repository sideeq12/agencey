const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'https://agencey.pro';
const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');

function readJson(rel) {
  const p = path.join(process.cwd(), rel);
  if (!fs.existsSync(p)) return [];
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function extractSlugsFromPseo() {
  const p = path.join(process.cwd(), 'data', 'pseo.ts');
  if (!fs.existsSync(p)) return { industries: [], locations: [] };
  const txt = fs.readFileSync(p, 'utf8');
  const industrySlugs = [...txt.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
  // assume first block is industries then locations
  const industries = industrySlugs.slice(0, Math.floor(industrySlugs.length / 2));
  const locations = industrySlugs.slice(Math.floor(industrySlugs.length / 2));
  // More robust: parse objects by section headings
  const industriesMatch = txt.match(/export const industries[\s\S]*?\];/);
  const locationsMatch = txt.match(/export const locations[\s\S]*?\];/);
  const inds = industriesMatch ? [...industriesMatch[0].matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]) : industries;
  const locs = locationsMatch ? [...locationsMatch[0].matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]) : locations;
  return { industries: inds, locations: locs };
}

function buildUrls() {
  const urls = [];
  const now = new Date().toISOString().slice(0, 10);

  // static routes
  const staticRoutes = ['/', '/webflow', '/wordpress', '/shopify', '/contact', '/custom', '/design', '/seo', '/services', '/social-media'];
  for (const r of staticRoutes) urls.push({ loc: `${BASE_URL}${r}`, lastmod: now, changefreq: 'weekly', priority: r === '/' ? 1 : 0.8 });

  // platform pages
  const webflow = readJson('data/webflow/pages.json');
  const wordpress = readJson('data/wordpress/pages.json');
  const shopify = readJson('data/shopify/pages.json');
  const custom = readJson('data/custom/pages.json');

  for (const p of webflow) urls.push({ loc: `${BASE_URL}/webflow/${p.slug}`, lastmod: now, changefreq: 'monthly', priority: 0.6 });
  for (const p of wordpress) urls.push({ loc: `${BASE_URL}/wordpress/${p.slug}`, lastmod: now, changefreq: 'monthly', priority: 0.6 });
  for (const p of shopify) urls.push({ loc: `${BASE_URL}/shopify/${p.slug}`, lastmod: now, changefreq: 'monthly', priority: 0.6 });
  for (const p of custom) urls.push({ loc: `${BASE_URL}/custom/${p.slug}`, lastmod: now, changefreq: 'monthly', priority: 0.6 });

  // services combinations from data/pseo.ts
  const { industries, locations } = extractSlugsFromPseo();
  for (const ind of industries) {
    for (const loc of locations) {
      urls.push({ loc: `${BASE_URL}/services/${ind}/${loc}`, lastmod: now, changefreq: 'monthly', priority: 0.6 });
    }
  }

  // remove duplicates by loc
  const seen = new Set();
  return urls.filter(u => {
    if (seen.has(u.loc)) return false;
    seen.add(u.loc);
    return true;
  });
}

function writeSitemap(items) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const footer = '\n</urlset>';
  const lines = items.map(i => {
    return `  <url>\n    <loc>${i.loc}</loc>\n    <lastmod>${i.lastmod}</lastmod>\n    <changefreq>${i.changefreq}</changefreq>\n    <priority>${i.priority}</priority>\n  </url>`;
  }).join('\n');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, header + lines + footer, 'utf8');
  console.log('Wrote sitemap to', outPath);
}

try {
  const items = buildUrls();
  writeSitemap(items);
} catch (err) {
  console.error('Failed to generate sitemap:', err);
  process.exit(1);
}
