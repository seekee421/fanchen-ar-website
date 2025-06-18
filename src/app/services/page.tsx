'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Factory, GraduationCap, ShoppingBag, Heart, Building, Building2,
  Zap, Target, Clock, Wrench, BarChart3, Settings, Users, Shield,
  CheckCircle, ArrowRight, Star
} from 'lucide-react';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';

// 服务数据
const services = [
  {
    id: 'industrial',
    category: 'industrial',
    title: '工业制造AR解决方案',
    description: '为制造业提供智能化AR应用，提升生产效率和操作精度',
    features: ['设备维护指导', '装配流程优化', '质量检测辅助', '远程专家支持'],
    benefits: ['效率提升35%', '错误率降低60%', '培训时间减少50%'],
    price: '定制报价',
    icon: <Factory className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'education',
    category: 'education',
    title: '教育培训AR系统',
    description: '打造沉浸式学习体验，让抽象概念变得具体可见',
    features: ['3D模型展示', '互动式学习', '虚拟实验室', '技能培训模拟'],
    benefits: ['学习效率提升40%', '学生参与度提升80%', '教学成本降低30%'],
    price: '定制报价',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'retail',
    category: 'retail',
    title: '零售电商AR体验',
    description: '为零售行业提供创新的购物体验和营销工具',
    features: ['虚拟试穿', '产品3D展示', 'AR导购', '空间布局预览'],
    benefits: ['转化率提升25%', '退货率降低35%', '用户满意度95%'],
    price: '定制报价',
    icon: <ShoppingBag className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'healthcare',
    category: 'healthcare',
    title: '医疗健康AR应用',
    description: '为医疗行业提供精准的AR辅助诊疗和培训解决方案',
    features: ['手术导航', '医学教育', '康复训练', '远程诊疗'],
    benefits: ['手术精度提升30%', '培训效果提升50%', '诊疗效率提升40%'],
    price: '定制报价',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'architecture',
    category: 'architecture',
    title: '建筑设计AR可视化',
    description: '为建筑设计和房地产行业提供沉浸式展示解决方案',
    features: ['3D建筑展示', '室内设计预览', '施工指导', '营销展示'],
    benefits: ['设计效率提升45%', '客户满意度90%', '销售转化率提升35%'],
    price: '定制报价',
    icon: <Building className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'entertainment',
    category: 'entertainment',
    title: '娱乐游戏AR体验',
    description: '为娱乐行业打造创新的AR游戏和互动体验',
    features: ['AR游戏开发', '互动娱乐', '主题公园应用', '社交AR'],
    benefits: ['用户参与度提升60%', '游戏时长增加40%', '用户留存率85%'],
    price: '定制报价',
    icon: <Star className="w-8 h-8" />,
    color: 'from-pink-500 to-pink-700'
  }
];

// 服务优势数据
const serviceAdvantages = [
  {
    icon: <Target className="w-12 h-12 text-blue-500" />,
    title: '精准定制',
    description: '根据行业特点和客户需求，提供量身定制的AR解决方案'
  },
  {
    icon: <Zap className="w-12 h-12 text-green-500" />,
    title: '快速部署',
    description: '专业团队支持，快速实施部署，缩短项目周期'
  },
  {
    icon: <Shield className="w-12 h-12 text-purple-500" />,
    title: '技术保障',
    description: '采用先进AR技术，确保系统稳定性和安全性'
  },
  {
    icon: <Users className="w-12 h-12 text-orange-500" />,
    title: '专业服务',
    description: '提供全程技术支持和培训服务，确保项目成功'
  }
];

// 实施流程数据
const implementationSteps = [
  {
    step: '01',
    title: '需求分析',
    description: '深入了解客户需求，制定详细的解决方案',
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    step: '02',
    title: '方案设计',
    description: '基于需求分析，设计最优的AR应用方案',
    icon: <Settings className="w-8 h-8" />
  },
  {
    step: '03',
    title: '开发实施',
    description: '专业团队进行AR应用开发和系统集成',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    step: '04',
    title: '测试部署',
    description: '全面测试验证，确保系统稳定运行',
    icon: <CheckCircle className="w-8 h-8" />
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  const [selectedService, setSelectedService] = React.useState(null);

  const categories = [
    { id: 'all', name: '全部服务' },
    { id: 'industrial', name: '工业制造' },
    { id: 'education', name: '教育培训' },
    { id: 'healthcare', name: '医疗健康' },
    { id: 'retail', name: '零售营销' },
    { id: 'architecture', name: '建筑设计' },
    { id: 'entertainment', name: '娱乐游戏' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <Layout>
      <SEO
        title="专业AR解决方案 - 武汉凡尘合创科技"
        description="武汉凡尘合创为工业制造、教育培训、零售电商、医疗健康等行业提供专业的AR解决方案，助力企业数字化转型。"
        keywords="AR解决方案,工业AR,教育AR,零售AR,医疗AR,建筑AR,娱乐AR"
      />

      {/* 页面标题 - 深色主题 */}
      <Section 
        className="relative bg-gray-900 overflow-hidden py-16"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading size="3xl" className="mb-6 text-white">
              专业AR解决方案
            </Heading>
            <Paragraph size="lg" className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              我们为不同行业提供定制化的增强现实解决方案，
              帮助企业实现数字化转型，提升业务效率和用户体验，
              让AR技术真正为您的业务创造价值。
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 服务分类筛选 - 深色背景 */}
      <Section className="py-8 bg-gray-800">
        <Container>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button
                  variant={selectedCategory === category.id ? 'primary' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? 'bg-blue-600 text-white border-blue-600' 
                    : 'bg-transparent text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white'
                  }
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* 服务列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 bg-gray-700 border-gray-600 hover:border-gray-500">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                      {service.icon}
                    </div>
                    
                    <Heading as="h3" size="lg" className="mb-3 text-white">
                      {service.title}
                    </Heading>
                    
                    <Paragraph className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </Paragraph>
                    
                    <div className="mb-4">
                      <Heading as="h4" size="sm" className="mb-2 text-gray-200">
                        核心功能
                      </Heading>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <Heading as="h4" size="sm" className="mb-2 text-gray-200">
                        预期效果
                      </Heading>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div className="flex-1">
                        <span className="text-sm text-gray-400">价格</span>
                        <div className="text-lg font-semibold text-white">{service.price}</div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <Button 
                          variant="primary" 
                          size="sm"
                          onClick={() => router.push(`/services/${service.id}`)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          了解详情
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 服务优势 - 深色背景 */}
      <Section className="py-16 bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Heading as="h2" size="2xl" className="mb-4 text-white">
              为什么选择我们
            </Heading>
            <Paragraph className="text-gray-300 max-w-2xl mx-auto">
              专业的技术团队，丰富的项目经验，为您提供最优质的AR解决方案
            </Paragraph>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <Heading as="h3" size="lg" className="mb-3 text-white">
                  {advantage.title}
                </Heading>
                <Paragraph className="text-gray-300">
                  {advantage.description}
                </Paragraph>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 实施流程 - 深色背景 */}
      <Section className="py-16 bg-gray-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Heading as="h2" size="2xl" className="mb-4 text-white">
              实施流程
            </Heading>
            <Paragraph className="text-gray-300 max-w-2xl mx-auto">
              标准化的项目实施流程，确保每个项目都能按时高质量交付
            </Paragraph>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-600 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="text-sm text-blue-400 font-semibold mb-2">
                    {step.step}
                  </div>
                  <Heading as="h3" size="lg" className="mb-3 text-white">
                    {step.title}
                  </Heading>
                  <Paragraph className="text-gray-300">
                    {step.description}
                  </Paragraph>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA区域 - 深色背景 */}
      <Section className="py-16 bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading as="h2" size="2xl" className="mb-4 text-white">
              准备开始您的AR项目？
            </Heading>
            <Paragraph size="lg" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              联系我们的专业团队，获取免费的项目咨询和定制化解决方案
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                免费咨询
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                查看案例
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}