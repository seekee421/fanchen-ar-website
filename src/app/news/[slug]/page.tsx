import React from 'react';
import { notFound } from 'next/navigation';
import { Layout } from '../../../components/layout';
import { Section, Container, Heading, Paragraph, Card, CardContent } from '../../../components/ui';
import { Breadcrumb } from '../../../components/ui';

import Link from 'next/link';
import { Metadata } from 'next';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

// 模拟新闻数据（实际项目中应该从数据库或API获取）
const newsData = {
  'ar-industry-trends-2024': {
    id: 1,
    title: '2024年AR行业发展趋势分析',
    excerpt: '深入分析增强现实技术在各行业的应用前景和发展机遇，探讨AR技术的未来发展方向。',
    content: `
      <h2>引言</h2>
      <p>随着技术的不断进步，增强现实（AR）技术正在各个行业中展现出巨大的潜力。2024年，我们预计AR技术将在以下几个关键领域实现重大突破。</p>
      
      <h2>主要发展趋势</h2>
      
      <h3>1. 工业制造领域的深度应用</h3>
      <p>AR技术在工业制造中的应用将更加深入，包括：</p>
      <ul>
        <li>智能装配指导系统</li>
        <li>设备维护和故障诊断</li>
        <li>质量检测和控制</li>
        <li>员工培训和技能提升</li>
      </ul>
      
      <h3>2. 教育培训的革命性变化</h3>
      <p>AR技术将为教育行业带来革命性的变化：</p>
      <ul>
        <li>沉浸式学习体验</li>
        <li>虚拟实验室和实践环境</li>
        <li>个性化学习路径</li>
        <li>远程协作学习</li>
      </ul>
      
      <h3>3. 医疗健康的精准应用</h3>
      <p>医疗领域的AR应用将更加精准和专业：</p>
      <ul>
        <li>手术导航和辅助</li>
        <li>医学教育和培训</li>
        <li>康复治疗</li>
        <li>远程医疗诊断</li>
      </ul>
      
      <h2>技术发展方向</h2>
      
      <h3>硬件设备的轻量化</h3>
      <p>AR设备将变得更加轻便、舒适，电池续航能力显著提升，为长时间使用提供保障。</p>
      
      <h3>软件算法的优化</h3>
      <p>计算机视觉、机器学习等核心算法将持续优化，提供更加精准的跟踪和识别能力。</p>
      
      <h3>云端计算的融合</h3>
      <p>边缘计算和云计算的结合将为AR应用提供更强大的计算能力和更丰富的内容资源。</p>
      
      <h2>市场前景展望</h2>
      <p>根据市场研究报告，预计2024年全球AR市场规模将达到新的高度，各行业对AR技术的需求将持续增长。企业应该抓住这一机遇，积极布局AR技术应用。</p>
      
      <h2>结论</h2>
      <p>2024年将是AR技术发展的关键一年，技术的成熟和应用的深化将为各行业带来新的发展机遇。武汉凡尘合创将继续致力于AR技术的研发和应用，为客户提供更加优质的解决方案。</p>
    `,
    date: '2024-01-15',
    category: '行业分析',
    author: '技术团队',
    readTime: '8分钟',
    tags: ['AR技术', '行业趋势', '技术发展', '市场分析'],
    image: '/images/news/ar-trends-2024.jpg',
  },
  'industrial-ar-case-study': {
    id: 2,
    title: '工业AR应用案例：智能制造新突破',
    excerpt: '分享我们在工业制造领域的AR应用案例，展示AR技术如何提升生产效率和质量控制。',
    content: `
      <h2>项目背景</h2>
      <p>某大型制造企业面临着生产效率低下、质量控制困难、员工培训成本高等挑战。为了解决这些问题，我们为其定制开发了一套完整的工业AR解决方案。</p>
      
      <h2>解决方案</h2>
      
      <h3>1. AR装配指导系统</h3>
      <p>通过AR技术为工人提供实时的装配指导：</p>
      <ul>
        <li>3D可视化装配步骤</li>
        <li>实时错误检测和提醒</li>
        <li>装配进度跟踪</li>
        <li>质量检查点提示</li>
      </ul>
      
      <h3>2. 设备维护AR系统</h3>
      <p>为设备维护人员提供智能化的维护指导：</p>
      <ul>
        <li>设备状态可视化</li>
        <li>故障诊断辅助</li>
        <li>维护步骤指导</li>
        <li>历史维护记录查询</li>
      </ul>
      
      <h3>3. 员工培训AR平台</h3>
      <p>构建沉浸式的员工培训环境：</p>
      <ul>
        <li>虚拟操作环境</li>
        <li>安全培训模拟</li>
        <li>技能评估系统</li>
        <li>学习进度跟踪</li>
      </ul>
      
      <h2>实施效果</h2>
      
      <h3>生产效率提升</h3>
      <p>通过AR装配指导系统，装配效率提升了35%，装配错误率降低了60%。</p>
      
      <h3>维护成本降低</h3>
      <p>设备维护时间缩短了40%，维护成本降低了25%。</p>
      
      <h3>培训效果改善</h3>
      <p>新员工培训时间缩短了50%，培训效果显著提升。</p>
      
      <h2>技术特点</h2>
      
      <h3>高精度跟踪</h3>
      <p>采用先进的计算机视觉算法，实现毫米级的跟踪精度。</p>
      
      <h3>实时渲染</h3>
      <p>优化的渲染引擎确保AR内容的实时显示和流畅交互。</p>
      
      <h3>云端协作</h3>
      <p>支持多用户协作和远程专家指导。</p>
      
      <h2>未来展望</h2>
      <p>基于这个成功案例，我们将继续深化AR技术在工业制造领域的应用，为更多企业提供智能化的解决方案。</p>
    `,
    date: '2024-01-10',
    category: '案例分享',
    author: '项目团队',
    readTime: '6分钟',
    tags: ['工业AR', '智能制造', '案例研究', '效率提升'],
    image: '/images/news/industrial-ar.jpg',
  },
  'education-ar-innovation': {
    id: 3,
    title: '教育AR创新：沉浸式学习体验',
    excerpt: '探索AR技术在教育领域的创新应用，为学生提供更加生动有趣的学习体验。',
    content: `
      <h2>教育AR的重要性</h2>
      <p>传统教育模式面临着学生注意力分散、学习兴趣不高、抽象概念难以理解等挑战。AR技术的引入为教育行业带来了新的解决方案。</p>
      
      <h2>AR教育应用场景</h2>
      
      <h3>1. 科学实验教学</h3>
      <p>通过AR技术创建虚拟实验室：</p>
      <ul>
        <li>化学分子结构可视化</li>
        <li>物理现象模拟演示</li>
        <li>生物器官3D展示</li>
        <li>安全实验环境</li>
      </ul>
      
      <h3>2. 历史文化教育</h3>
      <p>让历史文化"活"起来：</p>
      <ul>
        <li>古建筑3D重现</li>
        <li>历史事件场景还原</li>
        <li>文物互动体验</li>
        <li>文化传承教育</li>
      </ul>
      
      <h3>3. 语言学习</h3>
      <p>创造沉浸式语言环境：</p>
      <ul>
        <li>虚拟对话场景</li>
        <li>文字识别翻译</li>
        <li>发音纠正指导</li>
        <li>文化背景介绍</li>
      </ul>
      
      <h2>技术实现</h2>
      
      <h3>内容制作平台</h3>
      <p>为教师提供简单易用的AR内容制作工具，无需编程基础即可创建AR教学内容。</p>
      
      <h3>多平台支持</h3>
      <p>支持手机、平板、AR眼镜等多种设备，适应不同的教学环境。</p>
      
      <h3>云端资源库</h3>
      <p>建立丰富的AR教育资源库，涵盖各个学科和年级。</p>
      
      <h2>应用效果</h2>
      
      <h3>学习兴趣提升</h3>
      <p>学生对AR教学内容的兴趣度提升了80%以上。</p>
      
      <h3>理解能力增强</h3>
      <p>抽象概念的理解率提升了65%。</p>
      
      <h3>记忆效果改善</h3>
      <p>通过AR技术学习的内容，记忆保持率提升了55%。</p>
      
      <h2>发展挑战</h2>
      
      <h3>技术门槛</h3>
      <p>需要降低AR内容制作的技术门槛，让更多教师能够参与。</p>
      
      <h3>设备成本</h3>
      <p>AR设备的成本仍然较高，需要寻找更加经济适用的解决方案。</p>
      
      <h3>内容标准</h3>
      <p>需要建立统一的AR教育内容标准和评估体系。</p>
      
      <h2>未来展望</h2>
      <p>随着AR技术的不断发展和成本的降低，AR教育将成为未来教育的重要组成部分，为学生提供更加个性化和高效的学习体验。</p>
    `,
    date: '2024-01-05',
    category: '技术创新',
    author: '教育团队',
    readTime: '7分钟',
    tags: ['教育AR', '学习体验', '技术创新', '沉浸式教育'],
    image: '/images/news/education-ar.jpg',
  },
};

// 相关新闻推荐
const relatedNews = [
  {
    id: 4,
    slug: 'company-milestone-2023',
    title: '凡尘合创2023年度里程碑回顾',
    category: '公司动态',
    date: '2023-12-30',
  },
  {
    id: 5,
    slug: 'ar-retail-transformation',
    title: 'AR技术推动零售业数字化转型',
    category: '行业应用',
    date: '2023-12-25',
  },
  {
    id: 6,
    slug: 'medical-ar-breakthrough',
    title: '医疗AR技术新突破：精准手术导航',
    category: '技术突破',
    date: '2023-12-20',
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const news = newsData[params.slug as keyof typeof newsData];
  
  if (!news) {
    return {
      title: '新闻不存在',
      description: '您访问的新闻页面不存在',
    };
  }

  return {
    title: news.title,
    description: news.excerpt,
    keywords: news.tags.join(','),
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
      type: 'article',
      publishedTime: news.date,
      authors: [news.author],
    },
  };
}

export default function NewsDetailPage({ params }: PageProps) {
  const news = newsData[params.slug as keyof typeof newsData];

  if (!news) {
    notFound();
  }

  // 获取相关新闻（同类别的其他新闻）
  const relatedNews = Object.entries(newsData)
    .filter(([slug, item]) => item.category === news.category && item.id !== news.id)
    .slice(0, 3)
    .map(([slug, item]) => ({ ...item, slug }));

  // 结构化数据（mock，可后续替换）
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": news.title,
    "description": news.excerpt,
    "image": news.image || '',
    "datePublished": news.date,
    "author": {
      "@type": "Organization",
      "name": "武汉凡尘合创科技"
    },
    "articleSection": news.category,
    "keywords": news.tags.join(', ')
  };

  return (
    <Layout>
      <EnhancedSEO
        title={`${news.title} - 新闻资讯`}
        description={news.excerpt}
        keywords={news.tags.join(', ')}
        canonical={`/news/${params.slug}`}
        structuredData={structuredData}
      />
      {/* 面包屑导航 */}
      <Section className="bg-gray-50 py-4">
        <Container>
          <Breadcrumb
            items={[
              { label: '首页', href: '/' },
              { label: '新闻资讯', href: '/news' },
              { label: news.title, href: `/news/${params.slug}` },
            ]}
          />
        </Container>
      </Section>

      {/* 文章头部 */}
      <Section padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* 文章配图 */}
            {news.image && (
              <img src={news.image} alt={news.title} className="rounded-xl w-full object-cover aspect-video mb-6" />
            )}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{news.category}</span>
                <span>·</span>
                  <span>{new Date(news.date).toLocaleDateString('zh-CN')}</span>
                <span>·</span>
                  <span>{news.readTime}</span>
              </div>
              {/* 返回新闻列表按钮 */}
              <Link href="/news" className="text-primary hover:underline text-sm">
                ← 返回新闻列表
              </Link>
                </div>
            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
                {news.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: news.content }} />
            {/* 分享按钮组 */}
            <div className="flex gap-4 mt-8 mb-8">
              <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700" title="分享到微信">微信</button>
              <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700" title="分享到微博">微博</button>
              <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-gray-700" title="复制链接">复制链接</button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 相关新闻推荐 */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="2xl" className="mb-8">
              相关新闻
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((item, index) => (
                <div key={item.id}>
                  <Link href={`/news/${item.slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-3">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                            {item.category}
                          </span>
                        </div>
                        <Heading as="h3" size="md" className="mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </Heading>
                        <div className="text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString('zh-CN')}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 返回列表 */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/news">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                ← 返回新闻列表
              </button>
            </Link>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

// 生成静态路径（可选，用于静态生成）
export async function generateStaticParams() {
  return Object.keys(newsData).map((slug) => ({
    slug,
  }));
}