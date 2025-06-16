import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
  alternateLanguages?: { hrefLang: string; href: string }[];
}

const defaultMeta = {
  siteName: '武汉凡尘合创科技有限公司',
  siteUrl: 'https://fanchen-ar.com',
  defaultTitle: '武汉凡尘合创科技 - 专业AR/VR/MR技术解决方案提供商',
  defaultDescription: '武汉凡尘合创科技专注于AR、VR、MR技术研发与应用，为工业制造、教育培训、零售电商等行业提供专业的增强现实解决方案。联系电话：027-8888-9999',
  defaultKeywords: 'AR技术,VR技术,MR技术,增强现实,虚拟现实,混合现实,武汉AR公司,工业AR,教育AR,零售AR',
  defaultOgImage: '/images/og-default.jpg',
  twitterHandle: '@fanchen_ar',
  facebookAppId: '',
};

export const EnhancedSEO: React.FC<SEOProps> = ({
  title,
  description = defaultMeta.defaultDescription,
  keywords = defaultMeta.defaultKeywords,
  canonical,
  ogImage = defaultMeta.defaultOgImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  noindex = false,
  nofollow = false,
  structuredData,
  alternateLanguages,
}) => {
  const fullTitle = title 
    ? `${title} | ${defaultMeta.siteName}`
    : defaultMeta.defaultTitle;

  const fullCanonical = canonical 
    ? `${defaultMeta.siteUrl}${canonical}`
    : undefined;

  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${defaultMeta.siteUrl}${ogImage}`;

  // 生成robots meta标签
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  // 默认结构化数据 - 组织信息
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: defaultMeta.siteName,
    url: defaultMeta.siteUrl,
    logo: `${defaultMeta.siteUrl}/images/logo.png`,
    description: defaultMeta.defaultDescription,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-027-8888-9999',
      contactType: 'customer service',
      areaServed: 'CN',
      availableLanguage: ['Chinese', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '光谷软件园B座15楼',
      addressLocality: '武汉市',
      addressRegion: '湖北省',
      postalCode: '430000',
      addressCountry: 'CN',
    },
    sameAs: [
      'https://weibo.com/fanchen-ar',
      'https://www.linkedin.com/company/fanchen-ar',
    ],
  };

  // 合并结构化数据
  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* 基本Meta标签 */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullCanonical || defaultMeta.siteUrl} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:locale" content="zh_CN" />
      
      {/* Article specific Open Graph */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      {defaultMeta.twitterHandle && (
        <meta name="twitter:site" content={defaultMeta.twitterHandle} />
      )}
      
      {/* Facebook App ID */}
      {defaultMeta.facebookAppId && (
        <meta property="fb:app_id" content={defaultMeta.facebookAppId} />
      )}
      
      {/* 多语言支持 */}
      {alternateLanguages && alternateLanguages.map(lang => (
        <link
          key={lang.hrefLang}
          rel="alternate"
          hrefLang={lang.hrefLang}
          href={lang.href}
        />
      ))}
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* DNS预解析和预连接 */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* 主题颜色 */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Apple Meta */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={defaultMeta.siteName} />
      
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData),
        }}
      />
    </Head>
  );
};

// 便捷的SEO Hook
export const useSEO = (seoProps: SEOProps) => {
  return <EnhancedSEO {...seoProps} />;
};

// 预设的SEO配置
export const HomepageSEO = () => (
  <EnhancedSEO
    canonical="/"
    structuredData={{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: defaultMeta.siteName,
      url: defaultMeta.siteUrl,
      logo: `${defaultMeta.siteUrl}/images/logo.png`,
      description: defaultMeta.defaultDescription,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AR/VR/MR服务',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '工业AR解决方案',
              description: '为制造业提供AR装配指导、设备维护等解决方案',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '教育AR应用',
              description: '为教育行业提供沉浸式学习体验解决方案',
            },
          },
        ],
      },
    }}
  />
);

export const NewsSEO = ({ title, description, publishedTime, tags }: {
  title: string;
  description: string;
  publishedTime?: string;
  tags?: string[];
}) => (
  <EnhancedSEO
    title={title}
    description={description}
    ogType="article"
    publishedTime={publishedTime}
    author="武汉凡尘合创科技"
    section="新闻资讯"
    tags={tags}
    structuredData={{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      datePublished: publishedTime,
      author: {
        '@type': 'Organization',
        name: '武汉凡尘合创科技',
      },
      publisher: {
        '@type': 'Organization',
        name: '武汉凡尘合创科技',
        logo: {
          '@type': 'ImageObject',
          url: `${defaultMeta.siteUrl}/images/logo.png`,
        },
      },
    }}
  />
);

export default EnhancedSEO; 