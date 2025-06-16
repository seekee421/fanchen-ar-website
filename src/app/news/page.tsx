'use client';

import React from 'react';
import { Layout } from '../../components/layout';
import { Section, Container, Heading, Paragraph, Card, CardContent } from '../../components/ui';
import { Breadcrumb } from '../../components/ui';

import Link from 'next/link';
import { motion } from 'framer-motion';

// 模拟新闻数据
const newsData = [
  {
    id: 1,
    slug: 'ar-industry-trends-2024',
    title: '2024年AR行业发展趋势分析',
    excerpt: '深入分析增强现实技术在各行业的应用前景和发展机遇，探讨AR技术的未来发展方向。',
    date: '2024-01-15',
    category: '行业分析',
    image: '/images/news/ar-trends-2024.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'industrial-ar-case-study',
    title: '工业AR应用案例：智能制造新突破',
    excerpt: '分享我们在工业制造领域的AR应用案例，展示AR技术如何提升生产效率和质量控制。',
    date: '2024-01-10',
    category: '案例分享',
    image: '/images/news/industrial-ar.jpg',
    featured: false,
  },
  {
    id: 3,
    slug: 'education-ar-innovation',
    title: '教育AR创新：沉浸式学习体验',
    excerpt: '探索AR技术在教育领域的创新应用，为学生提供更加生动有趣的学习体验。',
    date: '2024-01-05',
    category: '技术创新',
    image: '/images/news/education-ar.jpg',
    featured: false,
  },
  {
    id: 4,
    slug: 'company-milestone-2023',
    title: '凡尘合创2023年度里程碑回顾',
    excerpt: '回顾2023年公司在AR技术研发、项目交付和团队建设方面取得的重要成就。',
    date: '2023-12-30',
    category: '公司动态',
    image: '/images/news/company-milestone.jpg',
    featured: false,
  },
  {
    id: 5,
    slug: 'ar-retail-transformation',
    title: 'AR技术推动零售业数字化转型',
    excerpt: '分析AR技术在零售行业的应用价值，展示虚拟试穿、商品展示等创新解决方案。',
    date: '2023-12-25',
    category: '行业应用',
    image: '/images/news/ar-retail.jpg',
    featured: false,
  },
  {
    id: 6,
    slug: 'medical-ar-breakthrough',
    title: '医疗AR技术新突破：精准手术导航',
    excerpt: '介绍我们在医疗AR领域的最新技术突破，为外科手术提供精准的AR导航系统。',
    date: '2023-12-20',
    category: '技术突破',
    image: '/images/news/medical-ar.jpg',
    featured: false,
  },
];

const categories = ['全部', '行业分析', '案例分享', '技术创新', '公司动态', '行业应用', '技术突破'];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('全部');
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredNews = newsData
    .filter(news => {
      // 分类筛选
      const categoryMatch = selectedCategory === '全部' || news.category === selectedCategory;
      // 搜索筛选
      const searchMatch = !searchTerm || 
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.category.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });

  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

  return (
    <Layout>
      {/* 面包屑导航 */}
      <Section className="bg-gray-50 py-4">
        <Container>
          <Breadcrumb
            items={[
              { label: '首页', href: '/' },
              { label: '新闻资讯', href: '/news' },
            ]}
          />
        </Container>
      </Section>

      {/* 页面标题 */}
      <Section padding="lg">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h1" size="3xl" className="mb-4">
                新闻资讯
              </Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-2xl mx-auto">
                了解AR技术的最新发展动态，探索行业趋势和创新应用
              </Paragraph>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 特色新闻 */}
      {featuredNews.length > 0 && (
        <Section>
          <Container>
            <Heading as="h2" size="2xl" className="mb-8">
              特色资讯
            </Heading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/news/${news.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
                            {news.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <Heading as="h3" size="xl" className="mb-3 group-hover:text-primary transition-colors">
                          {news.title}
                        </Heading>
                        <Paragraph className="text-gray-600 mb-4 line-clamp-3">
                          {news.excerpt}
                        </Paragraph>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{new Date(news.date).toLocaleDateString('zh-CN')}</span>
                          <span className="text-primary font-medium">阅读更多 →</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 搜索和筛选 */}
      <Section>
        <Container>
          {/* 搜索框 */}
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索新闻标题、内容或分类..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 分类筛选 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 搜索结果计数 */}
          {(searchTerm || selectedCategory !== '全部') && (
            <div className="mb-6 text-gray-600">
              <Paragraph>
                {searchTerm && `搜索"${searchTerm}"`}
                {searchTerm && selectedCategory !== '全部' && ' 在 '}
                {selectedCategory !== '全部' && `"${selectedCategory}"`}
                {searchTerm || selectedCategory !== '全部' ? ` 中找到 ${regularNews.length} 篇文章` : ''}
              </Paragraph>
            </div>
          )}

          {/* 新闻列表 */}
          {regularNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/news/${news.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <Heading as="h3" size="lg" className="mb-3 group-hover:text-primary transition-colors">
                        {news.title}
                      </Heading>
                      <Paragraph className="text-gray-600 mb-4 flex-1 line-clamp-3">
                        {news.excerpt}
                      </Paragraph>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{new Date(news.date).toLocaleDateString('zh-CN')}</span>
                        <span className="text-primary font-medium">阅读更多 →</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          ) : (
            /* 暂无结果 */
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <Heading as="h3" size="lg" className="mb-2 text-gray-600">
                暂无匹配的新闻
              </Heading>
              <Paragraph className="text-gray-500 mb-6">
                {searchTerm ? `没有找到包含"${searchTerm}"的新闻` : '该分类下暂无新闻内容'}
              </Paragraph>
              {(searchTerm || selectedCategory !== '全部') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('全部');
                  }}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  查看全部新闻
                </button>
              )}
            </div>
          )}

          {/* 分页 */}
          {regularNews.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                上一页
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                下一页
              </button>
            </div>
          </div>
          )}
        </Container>
      </Section>
    </Layout>
  );
}