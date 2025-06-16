'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Factory, GraduationCap, ShoppingBag, Heart, Building, Building2, Zap, Target, Clock, Wrench, BarChart3, Settings, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Layout } from '../../components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { PageBreadcrumb } from '@/components/ui/Breadcrumb';

// 从正确的相对路径导入ProductCategories组件
import { ProductCategories } from '../../components/ui/ProductCategories';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('全部');

  // 产品分类数据
  const categories = [
    { id: '全部', name: '全部产品', count: 12 },
    { id: '工业制造', name: '工业制造', count: 3 },
    { id: '教育培训', name: '教育培训', count: 2 },
    { id: '零售电商', name: '零售电商', count: 2 },
    { id: '医疗健康', name: '医疗健康', count: 2 },
    { id: '建筑设计', name: '建筑设计', count: 2 },
    { id: '娱乐游戏', name: '娱乐游戏', count: 1 }
  ];

  // 产品数据
  const products = [
    {
      id: 1,
      title: 'AR工业装配指导系统',
      category: '工业制造',
      description: '为制造业提供精确的装配指导，通过AR技术显示装配步骤和注意事项，大幅提升装配效率和质量。',
      features: ['实时装配指导', '错误检测提醒', '质量控制', '数据统计分析'],
      benefits: ['效率提升35%', '错误率降低60%', '培训时间减少50%'],
      price: '¥50,000起',
      image: '/images/products/industrial-assembly.jpg',
      icon: <Factory className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-700',
      tags: ['工业4.0', '智能制造', '质量控制']
    },
    {
      id: 2,
      title: 'AR设备维护平台',
      category: '工业制造',
      description: '通过AR技术为设备维护人员提供可视化指导，包括故障诊断、维修步骤和安全提醒。',
      features: ['故障诊断', '维修指导', '安全提醒', '维护记录'],
      benefits: ['维修效率提升40%', '故障率降低30%', '安全事故减少80%'],
      price: '¥80,000起',
      image: '/images/products/maintenance.jpg',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-green-500 to-green-700',
      tags: ['预测性维护', '远程支持', '安全管理']
    },
    {
      id: 3,
      title: 'AR质量检测系统',
      category: '工业制造',
      description: '利用AR技术进行产品质量检测，实时显示检测结果和质量标准对比。',
      features: ['自动检测', '标准对比', '缺陷标记', '报告生成'],
      benefits: ['检测精度提升25%', '检测速度提升50%', '人工成本降低40%'],
      price: '¥120,000起',
      image: '/images/products/quality-control.jpg',
      icon: <Target className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-700',
      tags: ['质量管理', '自动化检测', '数据分析']
    },
    {
      id: 4,
      title: 'AR沉浸式教学平台',
      category: '教育培训',
      description: '为教育机构提供沉浸式AR学习体验，让抽象概念变得具体可见，提高学习效果。',
      features: ['3D模型展示', '互动学习', '虚拟实验', '学习评估'],
      benefits: ['学习效率提升40%', '学生参与度提升80%', '知识留存率提升60%'],
      price: '¥30,000起',
      image: '/images/products/education.jpg',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-700',
      tags: ['沉浸式学习', '互动教学', '虚拟实验室']
    },
    {
      id: 5,
      title: 'AR技能培训系统',
      category: '教育培训',
      description: '为企业和职业院校提供AR技能培训解决方案，安全高效地进行技能训练。',
      features: ['技能模拟', '安全训练', '进度跟踪', '证书管理'],
      benefits: ['培训效果提升50%', '培训成本降低30%', '安全事故减少90%'],
      price: '¥60,000起',
      image: '/images/products/training.jpg',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-red-500 to-red-700',
      tags: ['职业培训', '技能认证', '安全培训']
    },
    {
      id: 6,
      title: 'AR虚拟试穿系统',
      category: '零售电商',
      description: '为零售商提供AR虚拟试穿解决方案，让顾客在线体验产品，提升购物体验和转化率。',
      features: ['虚拟试穿', '尺寸匹配', '颜色选择', '社交分享'],
      benefits: ['转化率提升25%', '退货率降低35%', '用户满意度95%'],
      price: '¥40,000起',
      image: '/images/products/virtual-try-on.jpg',
      icon: <ShoppingBag className="w-8 h-8" />,
      color: 'from-pink-500 to-pink-700',
      tags: ['虚拟试穿', '电商营销', '用户体验']
    },
    {
      id: 7,
      title: 'AR产品展示平台',
      category: '零售电商',
      description: '为品牌商提供AR产品展示解决方案，让顾客全方位了解产品特性和功能。',
      features: ['3D产品展示', '功能演示', '个性化定制', '购买引导'],
      benefits: ['产品理解度提升60%', '购买意愿提升45%', '品牌认知度提升30%'],
      price: '¥35,000起',
      image: '/images/products/product-showcase.jpg',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-indigo-500 to-indigo-700',
      tags: ['产品营销', '3D展示', '品牌推广']
    },
    {
      id: 8,
      title: 'AR手术导航系统',
      category: '医疗健康',
      description: '为医疗机构提供AR手术导航解决方案，提高手术精度和安全性。',
      features: ['手术导航', '实时影像', '精度定位', '安全监控'],
      benefits: ['手术精度提升30%', '手术时间缩短20%', '并发症减少40%'],
      price: '¥200,000起',
      image: '/images/products/surgery-navigation.jpg',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-teal-500 to-teal-700',
      tags: ['精准医疗', '手术导航', '医疗安全']
    },
    {
      id: 9,
      title: 'AR医学培训平台',
      category: '医疗健康',
      description: '为医学院校和医疗机构提供AR医学培训解决方案，提升医学教育质量。',
      features: ['解剖学习', '病例分析', '手术模拟', '考核评估'],
      benefits: ['学习效果提升50%', '培训成本降低40%', '实践能力提升60%'],
      price: '¥100,000起',
      image: '/images/products/medical-training.jpg',
      icon: <Clock className="w-8 h-8" />,
      color: 'from-cyan-500 to-cyan-700',
      tags: ['医学教育', '虚拟解剖', '技能培训']
    },
    {
      id: 10,
      title: 'AR建筑可视化系统',
      category: '建筑设计',
      description: '为建筑设计师和房地产开发商提供AR建筑可视化解决方案，提升设计展示效果。',
      features: ['3D建筑模型', '室内漫游', '材质预览', '光照模拟'],
      benefits: ['设计效率提升45%', '客户满意度提升60%', '沟通成本降低40%'],
      price: '¥70,000起',
      image: '/images/products/architecture.jpg',
      icon: <Building className="w-8 h-8" />,
      color: 'from-yellow-500 to-yellow-700',
      tags: ['建筑设计', '可视化', '房地产营销']
    },
    {
      id: 11,
      title: 'AR室内设计平台',
      category: '建筑设计',
      description: '为室内设计师提供AR室内设计解决方案，让客户直观体验设计效果。',
      features: ['家具摆放', '材质选择', '色彩搭配', '效果预览'],
      benefits: ['设计效率提升40%', '客户满意度提升70%', '修改次数减少50%'],
      price: '¥50,000起',
      image: '/images/products/interior-design.jpg',
      icon: <Building2 className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-700',
      tags: ['室内设计', '家装体验', '可视化设计']
    },
    {
      id: 12,
      title: 'AR互动游戏平台',
      category: '娱乐游戏',
      description: '为游戏开发商和娱乐场所提供AR互动游戏解决方案，创造全新的娱乐体验。',
      features: ['位置感知', '多人互动', '社交功能', '内容管理'],
      benefits: ['用户粘性提升70%', '收入增长50%', '用户满意度90%'],
      price: '¥80,000起',
      image: '/images/products/ar-games.jpg',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-violet-500 to-violet-700',
      tags: ['AR游戏', '互动娱乐', '社交体验']
    }
  ];

  // 筛选产品
  const filteredProducts = useMemo(() => {
    if (activeCategory === '全部') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <Layout>
      <SEO
        title="AR产品中心 - 武汉凡尘合创科技"
        description="探索武汉凡尘合创的全系列AR产品，包括工业AR、教育AR、零售AR等解决方案，为不同行业提供专业的增强现实技术服务。"
        keywords="AR产品, 增强现实解决方案, 工业AR, 教育AR, 零售AR, 医疗AR"
      />

      {/* Breadcrumb */}
      <Section padding="sm" className="bg-gray-50">
        <Container>
          <PageBreadcrumb />
        </Container>
      </Section>

      {/* Hero Section */}
      <Section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 text-sm font-medium rounded-full border border-blue-400/30">
                  🚀 全栈AR解决方案
                </span>
              </div>
              <Heading as="h1" size="4xl" className="text-white mb-8 font-bold leading-tight">
                重塑空间体验
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  轻而易现
                </span>
              </Heading>
              <Paragraph size="xl" className="text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
                致力于实现虚与实的高价值链接，为不同行业提供端到端的AR解决方案，
                让每一个创新想法在增强现实的世界中闪闪发光。
              </Paragraph>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="#products">
                  <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl hover:scale-105 transition-all duration-300 border-0">
                    探索产品
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-xl hover:scale-105 transition-all duration-300">
                    免费咨询
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section padding="lg" className="bg-gradient-to-br from-slate-50 to-blue-50 border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: '企业客户', desc: '覆盖多个行业' },
              { number: '1000+', label: 'AR应用', desc: '成功案例' },
              { number: '99.9%', label: '稳定性', desc: '服务可用性' },
              { number: '24/7', label: '技术支持', desc: '全天候服务' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product Categories */}
      <Section padding="xl" className="bg-white relative">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                  产品矩阵
                </span>
              </div>
              <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                全栈AR能力
                <span className="block text-2xl font-normal text-gray-600 mt-2">
                  提供端到端软硬一体的应用
                </span>
              </Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                我们为不同行业和应用场景提供专业的AR产品解决方案，每个产品都经过精心设计和优化，
                确保最佳的用户体验和业务价值，助力企业数字化转型。
              </Paragraph>
            </motion.div>
          </div>

          <ProductCategories
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="mb-16"
          />
        </Container>
      </Section>

      {/* Products Grid */}
      <Section padding="xl" id="products">
        <Container>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer overflow-hidden border-0 shadow-md bg-white rounded-xl">
                  {/* Product Image/Icon */}
                  <div className={`aspect-[4/3] bg-gradient-to-br ${product.color} rounded-t-xl relative overflow-hidden group-hover:shadow-lg transition-all duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                        <div className="w-16 h-16 flex items-center justify-center">
                          {product.icon}
                        </div>
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                    
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <Heading as="h3" size="lg" className="mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300 font-semibold">
                        {product.title}
                      </Heading>
                      <Paragraph className="text-gray-600 leading-relaxed text-sm">
                        {product.description}
                      </Paragraph>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-sm font-semibold text-gray-800 mb-3">核心功能</div>
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-semibold text-gray-800 mb-3">核心优势</div>
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="text-lg font-bold text-primary">{product.price}</div>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        了解详情
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No products found */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <Heading as="h3" size="lg" className="mb-4 text-gray-700">
                暂无相关产品
              </Heading>
              <Paragraph className="text-gray-600">
                请尝试选择其他分类或联系我们了解定制解决方案
              </Paragraph>
            </motion.div>
          )}
        </Container>
      </Section>

      {/* Technology Advantages */}
      <Section padding="xl" className="bg-gradient-to-br from-gray-50 to-slate-100">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                  核心技术
                </span>
              </div>
              <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                技术优势
              </Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                基于自主研发的核心算法和先进技术架构，为客户提供稳定可靠的AR解决方案
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '计算机视觉',
                description: '先进的SLAM算法和物体识别技术，实现精准的空间定位和跟踪',
                icon: '👁️',
                features: ['6DOF追踪', '实时建图', '物体识别']
              },
              {
                title: '渲染引擎',
                description: '高性能3D渲染引擎，支持PBR材质和实时光照计算',
                icon: '🎨',
                features: ['PBR渲染', '实时阴影', '后处理效果']
              },
              {
                title: '云端服务',
                description: '弹性云计算架构，支持大规模并发和数据处理',
                icon: '☁️',
                features: ['弹性扩容', '数据同步', 'CDN加速']
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <Heading as="h3" size="lg" className="mb-4 text-gray-900">
                  {tech.title}
                </Heading>
                <Paragraph className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </Paragraph>
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" size="3xl" className="mb-6">
                准备开始您的AR之旅？
              </Heading>
              <Paragraph size="lg" className="mb-10 text-white/95 leading-relaxed">
                我们的专业团队将为您提供个性化的AR解决方案咨询，
                帮助您选择最适合的产品和服务，实现业务目标。
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:scale-105 transition-all duration-300">
                    联系我们
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-xl hover:scale-105 transition-all duration-300">
                    查看案例
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}