'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Factory, GraduationCap, ShoppingBag, Heart, Building, Building2,
  Zap, Target, Clock, Wrench, BarChart3, Settings, Users, Shield,
  CheckCircle, ArrowRight, Star
} from 'lucide-react';
import { Layout } from '../../components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

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
    description: '为医疗行业提供精准的AR辅助工具和培训系统',
    features: ['手术导航', '医学培训', '康复治疗', '远程诊断'],
    benefits: ['手术精度提升30%', '培训效果提升50%', '诊断准确率提升20%'],
    price: '定制报价',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'architecture',
    category: 'architecture',
    title: '建筑设计AR可视化',
    description: '为建筑和房地产行业提供沉浸式设计展示方案',
    features: ['3D建筑模型', '室内设计预览', '施工指导', '客户展示'],
    benefits: ['设计效率提升45%', '客户满意度提升60%', '沟通成本降低40%'],
    price: '定制报价',
    icon: <Building className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'entertainment',
    category: 'entertainment',
    title: '娱乐游戏AR平台',
    description: '为娱乐行业打造创新的AR游戏和互动体验',
    features: ['AR游戏开发', '互动体验', '社交功能', '内容管理'],
    benefits: ['用户粘性提升70%', '收入增长50%', '用户满意度90%'],
    price: '定制报价',
    icon: <Building2 className="w-8 h-8" />,
    color: 'from-indigo-500 to-indigo-700'
  }
];

// 服务流程数据
const serviceProcess = [
  {
    step: '01',
    title: '需求分析',
    description: '深入了解客户业务需求，制定AR解决方案规划',
    icon: <Target className="w-8 h-8" />
  },
  {
    step: '02',
    title: '方案设计',
    description: '基于需求分析，设计定制化的AR技术方案',
    icon: <Settings className="w-8 h-8" />
  },
  {
    step: '03',
    title: '原型开发',
    description: '快速构建AR应用原型，验证技术可行性',
    icon: <Wrench className="w-8 h-8" />
  },
  {
    step: '04',
    title: '产品开发',
    description: '基于原型进行完整的产品开发和功能实现',
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    step: '05',
    title: '测试部署',
    description: '全面测试AR应用性能，确保稳定部署上线',
    icon: <CheckCircle className="w-8 h-8" />
  },
  {
    step: '06',
    title: '维护支持',
    description: '提供持续的技术支持和系统维护服务',
    icon: <Shield className="w-8 h-8" />
  }
];

// 技术优势数据
const technicalAdvantages = [
  {
    title: '核心技术自研',
    description: '拥有自主知识产权的AR引擎和算法，技术实力雄厚',
    icon: <Zap className="w-12 h-12 text-accent" />
  },
  {
    title: '跨平台支持',
    description: '支持iOS、Android、HoloLens等多平台部署',
    icon: <Settings className="w-12 h-12 text-accent" />
  },
  {
    title: '云端协同',
    description: '基于云计算的AR内容管理和协同工作平台',
    icon: <Users className="w-12 h-12 text-accent" />
  },
  {
    title: '安全可靠',
    description: '企业级安全保障，数据加密传输和存储',
    icon: <Shield className="w-12 h-12 text-accent" />
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* 面包屑导航 */}
        <Container className="pt-8">
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '服务', href: '/services' }
            ]}
          />
        </Container>

        {/* 页面标题 */}
        <Section className="pt-12 pb-8">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Heading size="xl" className="mb-6 text-gray-900">
                专业AR解决方案
              </Heading>
              <Paragraph size="lg" className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                我们为不同行业提供定制化的增强现实解决方案，
                帮助企业实现数字化转型，提升业务效率和用户体验，
                让AR技术真正为您的业务创造价值。
              </Paragraph>
            </motion.div>
          </Container>
        </Section>

        {/* 服务分类筛选 */}
        <Section className="py-8">
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
                    size="md"
                    onClick={() => setSelectedCategory(category.id)}
                    className="transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    {category.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 服务列表 */}
        <Section className="py-8">
          <Container>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
                        onClick={() => setSelectedService(service as any)}>
                    <div className={`aspect-video bg-gradient-to-br ${service.color} rounded-t-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <Heading as="h3" size="lg" className="mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </Heading>
                      <Paragraph className="mb-6 text-gray-700 leading-relaxed">
                        {service.description}
                      </Paragraph>
                      
                      <div className="space-y-3 mb-6">
                        <div className="text-sm font-semibold text-gray-800 mb-2">核心功能：</div>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <div className="text-sm font-semibold text-gray-800 mb-2">预期效果：</div>
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-lg font-bold text-primary">{service.price}</div>
                        <Button size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          了解详情
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </Section>

        {/* 服务流程 */}
        <Section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <Container className="relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading as="h2" size="3xl" className="mb-6 text-white">
                  专业服务流程
                </Heading>
                <Paragraph size="lg" className="max-w-3xl mx-auto text-white/95 leading-relaxed">
                  我们采用标准化的服务流程，确保每个项目都能高质量交付，
                  从需求分析到后期维护，全程专业服务。
                </Paragraph>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="text-white mb-6 flex justify-center transform hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>
                      <div className="text-3xl font-bold text-accent mb-4">
                        {process.step}
                      </div>
                      <Heading as="h3" size="md" className="mb-4 text-white">
                        {process.title}
                      </Heading>
                      <Paragraph size="sm" className="text-white/90 leading-relaxed">
                        {process.description}
                      </Paragraph>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* 技术优势 */}
        <Section padding="xl">
          <Container>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                  技术优势
                </Heading>
                <Paragraph size="lg" className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
                  凭借强大的技术实力和丰富的项目经验，
                  我们为客户提供最先进、最可靠的AR技术解决方案。
                </Paragraph>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {advantage.icon}
                      </div>
                      <Heading as="h3" size="md" className="mb-4 text-gray-900">
                        {advantage.title}
                      </Heading>
                      <Paragraph className="text-gray-700 leading-relaxed">
                        {advantage.description}
                      </Paragraph>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section padding="xl" className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading as="h2" size="3xl" className="mb-6 text-white">
                  准备开始您的AR项目？
                </Heading>
                <Paragraph size="lg" className="mb-10 text-white/95 leading-relaxed">
                  联系我们的专家团队，获取免费的项目咨询和技术方案评估。
                  让我们一起探索AR技术为您的业务带来的无限可能。
                </Paragraph>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg font-semibold">
                      免费咨询
                    </Button>
                  </Link>
                  <Link href="/cases">
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                      查看案例
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>
      </div>
    </Layout>
  );
}