'use client';

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui';
import { Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { 
  Factory, 
  CheckCircle,
  ArrowLeft,
  Users,
  Award,
  Clock,
  Target,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const serviceDetails = {
  id: 'industrial',
  title: '工业制造AR解决方案',
  description: '为制造业提供智能化AR应用，提升生产效率和操作精度',
  fullDescription: '我们的工业制造AR解决方案专为现代制造业设计，通过增强现实技术将数字信息与物理世界完美融合。从设备维护到质量检测，从员工培训到远程协作，我们的解决方案覆盖制造业的各个环节，帮助企业实现数字化转型。',
  features: [
    {
      title: '设备维护指导',
      description: '通过AR技术提供实时的设备维护指导，减少停机时间，提高维护效率。',
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: '装配流程优化',
      description: '可视化装配流程，减少人为错误，提高装配质量和效率。',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: '质量检测辅助',
      description: 'AR辅助质量检测，提高检测精度，确保产品质量。',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: '远程专家支持',
      description: '通过AR技术实现远程专家指导，降低现场支持成本。',
      icon: <Users className="w-6 h-6" />
    }
  ],
  benefits: [
    { metric: '35%', description: '生产效率提升' },
    { metric: '60%', description: '错误率降低' },
    { metric: '50%', description: '培训时间减少' },
    { metric: '40%', description: '维护成本降低' }
  ],
  applications: [
    '汽车制造',
    '电子产品组装',
    '机械设备制造',
    '航空航天',
    '重工业设备',
    '精密仪器制造'
  ],
  process: [
    {
      step: '01',
      title: '需求分析',
      description: '深入了解客户的具体需求和现有工艺流程'
    },
    {
      step: '02', 
      title: '方案设计',
      description: '基于需求分析结果，设计定制化AR解决方案'
    },
    {
      step: '03',
      title: '原型开发',
      description: '开发AR应用原型，进行初步测试和验证'
    },
    {
      step: '04',
      title: '部署实施',
      description: '在生产环境中部署AR系统，提供培训支持'
    },
    {
      step: '05',
      title: '优化维护',
      description: '持续优化系统性能，提供技术支持和维护'
    }
  ]
};

export default function IndustrialService() {
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
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                <Factory className="w-8 h-8 text-white" />
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
            <Heading as="h2" size="2xl" className="mb-6 text-center">
              解决方案概述
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
            className="text-center mb-12"
          >
            <Heading as="h2" size="2xl" className="mb-4">
              核心功能
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们的工业AR解决方案提供全方位的功能支持
            </Paragraph>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceDetails.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {feature.icon}
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
        </Container>
      </Section>

      {/* 预期效果 */}
      <Section className="py-16 bg-blue-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <Heading as="h2" size="2xl" className="mb-4 text-white">
              预期效果
            </Heading>
            <Paragraph className="text-blue-100 max-w-2xl mx-auto">
              通过我们的AR解决方案，您的企业将获得显著的效益提升
            </Paragraph>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceDetails.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.metric}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {benefit.metric}
                </div>
                <div className="text-blue-100">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 应用场景 */}
      <Section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-12"
          >
            <Heading as="h2" size="2xl" className="mb-4">
              应用场景
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们的解决方案适用于多种工业制造场景
            </Paragraph>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviceDetails.applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <Paragraph className="font-medium">
                  {application}
                </Paragraph>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 实施流程 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mb-12"
          >
            <Heading as="h2" size="2xl" className="mb-4">
              实施流程
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              标准化的项目实施流程，确保项目成功交付
            </Paragraph>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {serviceDetails.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="text-center relative"
              >
                {index < serviceDetails.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {step.step}
                  </div>
                  <Heading as="h3" size="sm" className="mb-2">
                    {step.title}
                  </Heading>
                  <Paragraph size="sm" className="text-gray-600">
                    {step.description}
                  </Paragraph>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA区域 */}
      <Section className="py-16 bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center"
          >
            <Heading as="h2" size="2xl" className="mb-4 text-white">
              准备开始您的工业AR项目？
            </Heading>
            <Paragraph size="lg" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              联系我们的专业团队，获取免费的项目咨询和定制化解决方案
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                免费咨询
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                下载方案书
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </Layout>
  );
}