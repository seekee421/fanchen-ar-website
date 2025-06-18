import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://fanchen-ar.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow specific important pages
Allow: /
Allow: /about
Allow: /services
Allow: /products
Allow: /news
Allow: /contact

# Block specific file types
Disallow: /*.json$
Disallow: /*.xml$ 
Disallow: /*.txt$

# Crawl-delay for better server performance
Crawl-delay: 1

# Host directive
Host: https://fanchen-ar.com`;

  // 使用TextEncoder确保正确的编码
  const encoder = new TextEncoder();
  const encodedContent = encoder.encode(robotsTxt);

  return new Response(encodedContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
} 