import { Metadata } from 'next';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const baseUrl = 'https://www.fanchen-ar.com';
const siteName = '武汉凡尘合创科技有限公司';
const defaultImage = '/images/og-image.jpg';

export function generateMetadata({
  title,
  description,
  keywords,
  image = defaultImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: PageMetadata): Metadata {
  const fullTitle = `${title} - ${siteName}`;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      type,
      locale: 'zh_CN',
      url: fullUrl,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// 预定义的页面元数据
export const pageMetadata = {
  home: {
    title: '专业AR解决方案提供商',
    description: '武汉凡尘合创科技有限公司是一家专注于增强现实(AR)技术的创新型科技公司，为工业制造、教育培训、零售电商、医疗健康等行业提供专业的AR解决方案，推动企业数字化转型。',
    keywords: 'AR技术,增强现实,AR解决方案,工业AR,教育AR,零售AR,医疗AR,武汉AR公司,数字化转型',
    url: '/',
  },
  about: {
    title: '关于我们',
    description: '了解武汉凡尘合创科技有限公司的发展历程、企业文化、核心团队和技术实力。我们致力于成为中国领先的AR技术解决方案提供商。',
    keywords: '关于我们,公司介绍,企业文化,团队介绍,AR技术团队,武汉科技公司',
    url: '/about',
  },
  services: {
    title: '服务方案',
    description: '武汉凡尘合创提供全方位的AR技术服务，包括工业AR、教育AR、零售AR、医疗AR等解决方案，助力企业实现数字化转型升级。',
    keywords: 'AR服务,AR解决方案,工业AR应用,教育AR培训,零售AR体验,医疗AR技术,数字化服务',
    url: '/services',
  },
  products: {
    title: '产品展示',
    description: '展示武汉凡尘合创科技的AR产品矩阵，包括AR开发平台、AR应用软件、AR硬件设备等创新产品。',
    keywords: 'AR产品,AR软件,AR平台,AR应用,AR设备,增强现实产品,AR开发工具',
    url: '/products',
  },
  cases: {
    title: '成功案例',
    description: '查看武汉凡尘合创科技在各行业的AR应用成功案例，了解我们如何帮助客户实现业务创新和效率提升。',
    keywords: 'AR案例,成功案例,AR应用案例,工业AR案例,教育AR案例,零售AR案例,客户案例',
    url: '/cases',
  },
  news: {
    title: '新闻资讯',
    description: '获取最新的AR行业动态、技术趋势、公司新闻和产品更新信息，了解增强现实技术的发展前沿。',
    keywords: 'AR新闻,行业动态,技术资讯,公司新闻,AR趋势,增强现实资讯,科技新闻',
    url: '/news',
  },
  contact: {
    title: '联系我们',
    description: '联系武汉凡尘合创科技有限公司，获取专业的AR技术咨询和解决方案。我们期待与您合作，共创AR技术新未来。',
    keywords: '联系我们,技术咨询,商务合作,AR咨询,解决方案咨询,武汉AR公司联系方式',
    url: '/contact',
  },
};

// 生成结构化数据
export function generateStructuredData(type: 'organization' | 'website' | 'article', data?: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'organization':
      return {
        ...baseStructuredData,
        '@type': 'Organization',
        name: siteName,
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        description: '专注于增强现实(AR)技术的创新型科技公司',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CN',
          addressRegion: '湖北省',
          addressLocality: '武汉市',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+86-027-xxxxxxxx',
          contactType: 'customer service',
        },
        sameAs: [
          // 社交媒体链接
        ],
      };

    case 'website':
      return {
        ...baseStructuredData,
        '@type': 'WebSite',
        name: siteName,
        url: baseUrl,
        description: '专业AR解决方案提供商',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };

    case 'article':
      return {
        ...baseStructuredData,
        '@type': 'Article',
        headline: data?.title,
        description: data?.description,
        author: {
          '@type': 'Organization',
          name: siteName,
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo.png`,
          },
        },
        datePublished: data?.publishedTime,
        dateModified: data?.modifiedTime,
        image: data?.image ? `${baseUrl}${data.image}` : `${baseUrl}${defaultImage}`,
        url: data?.url ? `${baseUrl}${data.url}` : baseUrl,
      };

    default:
      return baseStructuredData;
  }
}