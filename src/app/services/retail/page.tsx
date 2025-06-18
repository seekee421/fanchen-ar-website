'use client';

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui';
import { Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { 
  ShoppingBag, 
  CheckCircle,
  ArrowLeft,
  Users,
  Award,
  Clock,
  Target,
  Eye,
  Smartphone,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const serviceDetails = {
  id: 'retail',
  title: '零售电商AR体验',
  description: '为零售行业提供创新的购物体验和营销工具',
  fullDescription: '我们的零售电商AR解决方案专为现代零售业设计，通过增强现实技术为消费者提供前所未有的购物体验。从虚拟试穿到产品展示，从空间布局到互动营销，我们的解决方案帮助零售商提升销售转化率，降低退货率，增强客户满意度。',
  features: [
    {
      title: '虚拟试穿',
      description: '让顾客在购买前虚拟试穿服装、配饰等产品，提升购物体验。',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: '产品3D展示',
      description: '以360度3D模型展示产品细节，让顾客全方位了解产品。',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'AR导购',
      description: '智能AR导购助手，为顾客提供个性化的购物建议和服务。',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: '空间布局预览',
      description: '让顾客在购买家具前预览产品在实际空间中的效果。',
      icon: <Target className="w-6 h-6" />
    }
  ],
  benefits: [
    { metric: '25%', description: '转化率提升' },
    { metric: '35%', description: '退货率降低' },
    { metric: '95%', description: '用户满意度' },
    { metric: '45%', description: '客户参与度提升' }
  ],
  applications: [
    '服装零售',
    '家具家居',
    '美妆护肤',
    '珠宝配饰',
    '电子产品',
    '汽车展示'
  ],
  process: [
    {
      step: '01',
      title: '商业需求分析',
      description: '了解零售业务特点和客户购物习惯'
    },
    {
      step: '02', 
      title: 'AR体验设计',
      description: '设计符合品牌特色的AR购物体验'
    },
    {
      step: '03',
      title: '系统开发集成',
      description: '开发AR应用并集成到现有电商平台'
    },
    {
      step: '04',
      title: '测试优化上线',
      description: '全面测试AR功能并优化用户体验'
    },
    {
      step: '05',
      title: '数据分析优化',
      description: '分析用户行为数据，持续优化AR体验'
    }
  ]
};

export default function RetailService() {
  return (
    <Layout>
      <SEO 
        title={`${serviceDetails.title} - 梵辰AR`}
        description={serviceDetails.description}
      />
      
      {/* 返回按钮和页面标题 */}
      <Section className="py-16 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/services" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回服务列表
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <Heading as="h1" size="3xl" className="text-white mb-2">
                  {serviceDetails.title}
                </Heading>
                <Paragraph size="lg" className="text-gray-300">
                  {serviceDetails.description}
                </Paragraph>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 详细介绍 */}
      <Section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Heading as="h2" size="2xl" className="text-center mb-8">
              解决方案详情
            </Heading>
            <Paragraph size="lg" className="text-gray-600 leading-relaxed">
              {serviceDetails.fullDescription}
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 核心功能 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Heading as="h2" size="2xl" className="text-center mb-12">
              核心功能
            </Heading>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceDetails.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="text-purple-600">
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <Heading as="h3" size="lg" className="mb-2">
                            {feature.title}
                          </Heading>
                          <Paragraph className="text-gray-600">
                            {feature.description}
                          </Paragraph>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 预期效果 */}
      <Section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Heading as="h2" size="2xl" className="text-center mb-12">
              预期效果
            </Heading>
            <div className="grid md:grid-cols-4 gap-8">
              {serviceDetails.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <Heading as="h3" size="2xl" className="text-purple-600 mb-2">
                    {benefit.metric}
                  </Heading>
                  <Paragraph className="text-gray-600">
                    {benefit.description}
                  </Paragraph>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 应用场景 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Heading as="h2" size="2xl" className="text-center mb-12">
              应用场景
            </Heading>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceDetails.applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <Heading as="h3" size="lg">
                        {application}
                      </Heading>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 实施流程 */}
      <Section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Heading as="h2" size="2xl" className="text-center mb-12">
              实施流程
            </Heading>
            <div className="space-y-8">
              {serviceDetails.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <Heading as="h3" size="lg" className="mb-2">
                      {step.title}
                    </Heading>
                    <Paragraph className="text-gray-600">
                      {step.description}
                    </Paragraph>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA区域 */}
      <Section className="py-16 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <Heading as="h2" size="2xl" className="text-white mb-6">
              准备开始您的AR零售之旅？
            </Heading>
            <Paragraph size="lg" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              联系我们的专家团队，获取定制化的AR零售解决方案，提升您的销售业绩。
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                免费咨询
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                查看案例
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}