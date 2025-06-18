'use client';

import React from 'react';
import { Layout } from '../../components/layout';
import { Section, Container, Heading, Paragraph, Card, CardContent } from '../../components/ui';
import { Breadcrumb } from '../../components/ui';

import Link from 'next/link';
import Image from 'next/image';
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
    image: '/sources/news/ar-industry-trends.jpg',
    featured: true,
  },
  {
    id: 2,
    slug: 'industrial-ar-case-study',
    title: '工业AR应用案例：智能制造新突破',
    excerpt: '分享我们在工业制造领域的AR应用案例，展示AR技术如何提升生产效率和质量控制。',
    date: '2024-01-10',
    category: '案例分享',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 3,
    slug: 'education-ar-innovation',
    title: '教育AR创新：沉浸式学习体验',
    excerpt: '探索AR技术在教育领域的创新应用，为学生提供更加生动有趣的学习体验。',
    date: '2024-01-05',
    category: '技术创新',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 4,
    slug: 'company-milestone-2023',
    title: '凡尘合创2023年度里程碑回顾',
    excerpt: '回顾2023年公司在AR技术研发、项目交付和团队建设方面取得的重要成就。',
    date: '2023-12-30',
    category: '公司动态',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 5,
    slug: 'ar-retail-transformation',
    title: 'AR技术推动零售业数字化转型',
    excerpt: '分析AR技术在零售行业的应用价值，展示虚拟试穿、商品展示等创新解决方案。',
    date: '2023-12-25',
    category: '行业应用',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 6,
    slug: 'medical-ar-breakthrough',
    title: '医疗AR技术新突破：精准手术导航',
    excerpt: '介绍我们在医疗AR领域的最新技术突破，为外科手术提供精准的AR导航系统。',
    date: '2023-12-20',
    category: '技术突破',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 7,
    slug: 'ar-automotive-innovation',
    title: 'AR技术赋能汽车行业：智能驾驶新体验',
    excerpt: '探索AR技术在汽车行业的创新应用，从智能导航到维修指导，全面提升驾驶和维护体验。',
    date: '2023-12-15',
    category: '行业应用',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 8,
    slug: 'ar-cloud-platform-launch',
    title: 'AR云平台正式发布：开启协作新时代',
    excerpt: '凡尘合创AR云平台正式上线，支持多人协作、远程指导和实时数据同步，为企业提供全新的AR解决方案。',
    date: '2023-12-10',
    category: '产品发布',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 9,
    slug: 'ar-training-simulation',
    title: 'AR培训仿真系统：安全高效的技能培训',
    excerpt: '基于AR技术的培训仿真系统，为企业提供安全、高效、低成本的员工技能培训解决方案。',
    date: '2023-12-05',
    category: '技术创新',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 10,
    slug: 'ar-smart-city-project',
    title: '智慧城市AR项目：数字化城市管理新模式',
    excerpt: '参与智慧城市建设，运用AR技术实现城市基础设施的可视化管理和智能化运维。',
    date: '2023-11-30',
    category: '案例分享',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 11,
    slug: 'ar-remote-assistance',
    title: 'AR远程协助系统：跨越距离的专业指导',
    excerpt: '创新的AR远程协助解决方案，让专家能够实时指导现场操作，大幅提升工作效率和准确性。',
    date: '2023-11-25',
    category: '技术突破',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 12,
    slug: 'ar-marketing-revolution',
    title: 'AR营销革命：沉浸式品牌体验新时代',
    excerpt: '探索AR技术在营销领域的创新应用，为品牌打造独特的沉浸式体验，提升用户参与度和转化率。',
    date: '2023-11-20',
    category: '行业应用',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 13,
    slug: 'ar-architecture-design',
    title: 'AR建筑设计：可视化设计流程的革新',
    excerpt: 'AR技术在建筑设计领域的深度应用，实现设计方案的实时可视化展示和交互式修改。',
    date: '2023-11-15',
    category: '行业分析',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 14,
    slug: 'ar-future-workplace',
    title: 'AR未来工作场所：重新定义办公体验',
    excerpt: '展望AR技术如何改变未来的工作方式，从虚拟会议到协作设计，打造全新的数字化办公环境。',
    date: '2023-11-10',
    category: '公司动态',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
];

const categories = ['全部', '行业分析', '案例分享', '技术创新', '公司动态', '行业应用', '技术突破', '产品发布'];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('全部');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6; // 每页显示6篇新闻
  
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
  
  // 分页逻辑
  const totalPages = Math.ceil(regularNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = regularNews.slice(startIndex, endIndex);
  

  
  // 重置分页当筛选条件改变时
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* 面包屑导航 */}
      <Section className="bg-gray-900 py-4">
        <Container>
          <Breadcrumb
            items={[
              { label: '首页', href: '/' },
              { label: '新闻资讯', href: '/news' },
            ]}
            className="text-gray-300"
          />
        </Container>
      </Section>

      {/* 页面标题 */}
      <Section 
        padding="lg" 
        className="relative bg-gray-900 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* 深色遮罩 */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading as="h1" size="3xl" className="mb-4 text-white">
                新闻资讯
              </Heading>
              <Paragraph size="lg" className="text-gray-300 max-w-2xl mx-auto">
                了解AR技术的最新发展动态，探索行业趋势和创新应用
              </Paragraph>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 特色新闻 */}
      {featuredNews.length > 0 && (
        <Section className="bg-gray-900">
          <Container>
            <Heading as="h2" size="2xl" className="mb-8 text-white">
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
                        <Image 
                          src={news.image} 
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
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
      <Section className="bg-gray-900">
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
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
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 搜索结果计数 */}
          {(searchTerm || selectedCategory !== '全部') && (
            <div className="mb-6 text-gray-300">
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
            {currentNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/news/${news.slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 h-full bg-gray-800 border-gray-700">
                      <div className="aspect-video bg-gray-700 relative overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-black/70 px-3 py-1 rounded-full text-sm font-medium text-white">
                            {news.category}
                          </span>
                        </div>
                      </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <Heading as="h3" size="lg" className="mb-3 group-hover:text-primary transition-colors text-white">
                        {news.title}
                      </Heading>
                      <Paragraph className="text-gray-300 mb-4 flex-1 line-clamp-3">
                        {news.excerpt}
                      </Paragraph>
                      <div className="flex items-center justify-between text-sm text-gray-400">
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
              <div className="text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <Heading as="h3" size="lg" className="mb-2 text-gray-300">
                暂无匹配的新闻
              </Heading>
              <Paragraph className="text-gray-400 mb-6">
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
          {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 border border-gray-600 rounded-lg transition-colors ${
                  currentPage === 1 
                    ? 'text-gray-500 cursor-not-allowed' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                上一页
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'border border-gray-600 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 border border-gray-600 rounded-lg transition-colors ${
                  currentPage === totalPages 
                    ? 'text-gray-500 cursor-not-allowed' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
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