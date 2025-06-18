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
    { 
      id: '全部', 
      name: '全部产品', 
      description: '查看所有AR产品解决方案',
      icon: <BarChart3 className="w-6 h-6" />
    },
    { 
      id: '工业制造', 
      name: '工业制造', 
      description: '智能制造与工业4.0解决方案',
      icon: <Factory className="w-6 h-6" />
    },
    { 
      id: '教育培训', 
      name: '教育培训', 
      description: '沉浸式学习与技能培训平台',
      icon: <GraduationCap className="w-6 h-6" />
    },
    { 
      id: '零售电商', 
      name: '零售电商', 
      description: '增强购物体验与营销工具',
      icon: <ShoppingBag className="w-6 h-6" />
    },
    { 
      id: '医疗健康', 
      name: '医疗健康', 
      description: '医疗诊断与康复训练系统',
      icon: <Heart className="w-6 h-6" />
    },
    { 
      id: '建筑设计', 
      name: '建筑设计', 
      description: '建筑可视化与设计协作平台',
      icon: <Building2 className="w-6 h-6" />
    },
    { 
      id: '娱乐游戏', 
      name: '娱乐游戏', 
      description: '沉浸式娱乐与游戏体验',
      icon: <Zap className="w-6 h-6" />
    }
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
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
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

      {/* Hero Section - 深色背景设计 */}
      <Section className="py-16 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 text-sm font-medium rounded-full border border-blue-400/30">
                  全栈AR解决方案
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

      {/* Product Categories */}
      <Section id="products" padding="xl" className="bg-white">
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
                全行业AR解决方案
              </Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                基于深度行业理解和技术创新，为各行各业提供专业的AR产品和服务
              </Paragraph>
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <ProductCategories 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Products Grid */}
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
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    {/* 背景图片 */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${product.image})`
                      }}
                    />
                    {/* 半透明色块叠加 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-75`} />
                    {/* 图标居中显示 */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
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
                      <Link href={`/products/${product.id}`}>
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                          了解详情
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
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
      <Section padding="xl" className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/40 relative overflow-hidden">
        {/* Enhanced Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-100/30 to-teal-100/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-emerald-400/40 rounded-full animate-bounce" style={{animationDelay: '2.5s'}} />
        </div>
        
        <Container className="relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/15 to-purple-500/15 backdrop-blur-md text-blue-700 text-sm font-bold rounded-full border border-blue-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="relative">
                    <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping absolute" />
                    <span className="w-3 h-3 bg-blue-600 rounded-full relative" />
                  </span>
                  核心技术优势
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI驱动</span>
                </span>
              </div>
              <Heading as="h2" size="4xl" className="mb-8 text-gray-900 font-black">
                <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                  突破性技术创新
                </span>
              </Heading>
              <Paragraph size="xl" className="text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                融合前沿AI算法与自主研发核心技术，为企业提供
                <span className="text-blue-600 font-semibold">稳定可靠</span>、
                <span className="text-purple-600 font-semibold">高性能</span>的AR解决方案
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: '计算机视觉',
                description: '基于深度学习的SLAM算法和智能物体识别，实现毫米级精度的空间定位与实时跟踪',
                icon: '👁️',
                gradient: 'from-blue-500 to-cyan-400',
                bgGradient: 'from-blue-50/80 to-cyan-50/80',
                borderGradient: 'from-blue-200 to-cyan-200',
                features: ['6DOF精确追踪', '实时SLAM建图', 'AI物体识别', '毫米级定位'],
                stats: '99.9%',
                statsLabel: '识别精度'
              },
              {
                title: '渲染引擎',
                description: '自研高性能3D渲染引擎，支持PBR物理材质、实时全局光照和高级后处理效果',
                icon: '🎨',
                gradient: 'from-purple-500 to-pink-400',
                bgGradient: 'from-purple-50/80 to-pink-50/80',
                borderGradient: 'from-purple-200 to-pink-200',
                features: ['PBR物理渲染', '实时全局光照', '高级后处理', '4K高清输出'],
                stats: '120fps',
                statsLabel: '渲染性能'
              },
              {
                title: '云端服务',
                description: '弹性微服务架构，支持千万级并发处理，提供全球CDN加速和智能负载均衡',
                icon: '☁️',
                gradient: 'from-emerald-500 to-teal-400',
                bgGradient: 'from-emerald-50/80 to-teal-50/80',
                borderGradient: 'from-emerald-200 to-teal-200',
                features: ['弹性自动扩容', '实时数据同步', '全球CDN加速', '智能负载均衡'],
                stats: '99.99%',
                statsLabel: '服务可用性'
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4, type: "spring", stiffness: 200 }
                }}
                className={`group relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gradient-to-r ${tech.borderGradient} overflow-hidden transform-gpu`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)`,
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Enhanced Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgGradient} opacity-0 group-hover:opacity-60 transition-all duration-700`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`} />
                
                {/* Floating Icon Container */}
                <div className="relative z-10 mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 rounded-3xl" />
                    <span className="text-3xl filter drop-shadow-lg relative z-10">{tech.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl" />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-gray-200/50">
                    <div className="text-center">
                      <div className={`text-sm font-bold bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>{tech.stats}</div>
                      <div className="text-xs text-gray-500">{tech.statsLabel}</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content */}
                <div className="relative z-10">
                  <Heading as="h3" size="xl" className="mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300 font-black">
                    <span className={`bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-gray-900 transition-all duration-300`}>
                      {tech.title}
                    </span>
                  </Heading>
                  <Paragraph className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    {tech.description}
                  </Paragraph>
                  
                  {/* Enhanced Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {tech.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-2 p-2 rounded-xl bg-white/50 group-hover:bg-white/70 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: 4 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${tech.gradient} rounded-full shadow-sm group-hover:scale-125 transition-transform duration-300 flex-shrink-0`} />
                        <span className="text-xs text-gray-700 font-semibold group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Hover Effects */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`} />
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/40 rounded-full blur-sm group-hover:animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Professional Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24 mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Team Background Image */}
              <div 
                className="h-80 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&crop=faces)'
                }}
              />
              
              {/* Semi-transparent Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/80 to-blue-900/85 backdrop-blur-[1px]" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        专业团队
                      </span>
                    </div>
                    <Heading as="h3" size="3xl" className="mb-6 text-white font-bold">
                      <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        资深技术专家团队
                      </span>
                    </Heading>
                    <Paragraph size="lg" className="text-white/90 max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                      汇聚来自清华、北大、中科院等顶尖院校的AI与AR领域专家，
                      平均从业经验超过8年，致力于为客户提供最前沿的技术解决方案
                    </Paragraph>
                    
                    {/* Team Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-white mb-2">50+</div>
                        <div className="text-white/80 text-sm font-medium">技术专家</div>
                      </motion.div>
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-white mb-2">8+</div>
                        <div className="text-white/80 text-sm font-medium">平均经验年限</div>
                      </motion.div>
                      <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-3xl font-bold text-white mb-2">100+</div>
                        <div className="text-white/80 text-sm font-medium">成功项目</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-full" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/20 rounded-full" />
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
              <div className="absolute top-1/4 right-8 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </motion.div>
          
          {/* Enhanced Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/70 backdrop-blur-lg rounded-2xl border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
              </div>
              <span className="text-sm text-gray-700 font-bold group-hover:text-gray-800 transition-colors duration-300">持续创新 · 技术领先 · 行业标杆</span>
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                <span className="text-white text-xs">✨</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="bg-gray-900 text-white relative overflow-hidden">
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