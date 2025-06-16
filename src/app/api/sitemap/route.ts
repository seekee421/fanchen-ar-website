import { NextResponse } from 'next/server';

interface SitemapUrl {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// 模拟的新闻数据 - 在实际应用中应该从数据库获取
const newsArticles = [
  { slug: 'ar-technology-trend-2024', lastModified: '2024-12-12' },
  { slug: 'industrial-ar-solutions', lastModified: '2024-12-11' },
  { slug: 'educational-ar-applications', lastModified: '2024-12-10' },
  { slug: 'retail-ar-transformation', lastModified: '2024-12-09' },
  { slug: 'ar-future-prospects', lastModified: '2024-12-08' },
];

export async function GET() {
  const baseUrl = 'https://fanchen-ar.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // 静态页面
  const staticPages: SitemapUrl[] = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // 动态新闻页面
  const newsPages: SitemapUrl[] = newsArticles.map(article => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: article.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 合并所有URL
  const allUrls = [...staticPages, ...newsPages];

  // 生成XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
    ${page.url.includes('/news/') ? `
    <news:news>
      <news:publication>
        <news:name>武汉凡尘合创科技</news:name>
        <news:language>zh-cn</news:language>
      </news:publication>
      <news:publication_date>${page.lastModified}</news:publication_date>
      <news:title>${getNewsTitle(page.url)}</news:title>
    </news:news>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}

// 根据URL获取新闻标题（简化版）
function getNewsTitle(url: string): string {
  const slug = url.split('/').pop();
  const titleMap: Record<string, string> = {
    'ar-technology-trend-2024': 'AR技术发展趋势2024',
    'industrial-ar-solutions': '工业AR解决方案深度解析',
    'educational-ar-applications': '教育领域AR应用案例分享',
    'retail-ar-transformation': '零售行业AR数字化转型',
    'ar-future-prospects': 'AR技术未来发展前景',
  };
  
  return titleMap[slug || ''] || 'AR技术资讯';
} 