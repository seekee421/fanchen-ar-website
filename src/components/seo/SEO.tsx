'use client';

import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  siteName?: string;
  locale?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
}

const defaultSEO = {
  siteName: '武汉凡尘合创科技有限公司',
  title: '武汉凡尘合创科技 - 专业AR解决方案提供商',
  description: '武汉凡尘合创科技有限公司是一家专注于增强现实(AR)技术的创新型科技公司，为工业制造、教育培训、零售电商、医疗健康等行业提供专业的AR解决方案，推动企业数字化转型。',
  keywords: 'AR技术,增强现实,AR解决方案,工业AR,教育AR,零售AR,医疗AR,武汉AR公司,数字化转型',
  image: '/images/og-image.jpg',
  url: 'https://www.fanchen-ar.com',
  type: 'website' as const,
  locale: 'zh_CN',
  author: '武汉凡尘合创科技有限公司',
};

export function SEO({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  siteName = defaultSEO.siteName,
  locale = defaultSEO.locale,
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
  noIndex = false,
  noFollow = false,
  canonical,
}: SEOProps) {
  // 构建完整标题
  const fullTitle = title 
    ? `${title} - ${siteName}`
    : defaultSEO.title;

  // 构建完整URL
  const fullUrl = url.startsWith('http') ? url : `${defaultSEO.url}${url}`;
  
  // 构建完整图片URL
  const fullImage = image.startsWith('http') ? image : `${defaultSEO.url}${image}`;

  // 构建robots meta
  const robots = [];
  if (noIndex) robots.push('noindex');
  if (noFollow) robots.push('nofollow');
  const robotsContent = robots.length > 0 ? robots.join(', ') : 'index, follow';

  return (
    <Head>
      {/* 基础 Meta 标签 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      
      {/* 语言和地区 */}
      <meta httpEquiv="content-language" content={locale} />
      <meta name="language" content={locale} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* 文章特定的 Open Graph 标签 */}
      {type === 'article' && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          <meta property="article:author" content={author} />
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* 移动端优化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* 浏览器主题色 */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* 结构化数据 - 组织信息 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteName,
            description: description,
            url: defaultSEO.url,
            logo: `${defaultSEO.url}/images/logo.png`,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+86-027-8888-9999',
              contactType: 'customer service',
              areaServed: 'CN',
              availableLanguage: 'Chinese'
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '光谷软件园B座15楼',
              addressLocality: '武汉',
              addressRegion: '湖北省',
              addressCountry: 'CN'
            },
            sameAs: [
              'https://weibo.com/fanchen-ar',
              'https://www.linkedin.com/company/fanchen-ar'
            ]
          })
        }}
      />
      
      {/* 结构化数据 - 网站信息 */}
      {type === 'website' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteName,
              description: description,
              url: fullUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${defaultSEO.url}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      )}
    </Head>
  );
}

export default SEO;