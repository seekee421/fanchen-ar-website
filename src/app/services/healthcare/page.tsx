'use client';

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui';
import { Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { 
  Heart, 
  CheckCircle,
  ArrowLeft,
  Users,
  Award,
  Clock,
  Target,
  Activity,
  Stethoscope,
  Shield
} from 'lucide-react';
import Link from 'next/link';

const serviceDetails = {
  id: 'healthcare',
  title: '医疗健康AR应用',
  description: '为医疗行业提供精准的AR辅助诊疗和培训解决方案',
  fullDescription: '我们的医疗健康AR解决方案专为医疗行业设计，通过增强现实技术为医生提供精准的手术导航、为医学生提供沉浸式的学习体验、为患者提供个性化的康复训练。从诊断到治疗，从教育到康复，我们的解决方案覆盖医疗健康的各个环节。',
  features: [
    {
      title: '手术导航',
      description: '为外科医生提供精准的AR手术导航，提高手术成功率。',
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: '医学教育',
      description: '通过AR技术让医学生更直观地学习人体结构和疾病机理。',
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: '康复训练',
      description: '为患者提供个性化的AR康复训练方案，提高康复效果。',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: '远程诊疗',
      description: '通过AR技术实现远程医疗诊断和治疗指导。',
      icon: <Users className="w-6 h-6" />
    }
  ],
  benefits: [
    { metric: '30%', description: '手术精度提升' },
    { metric: '50%', description: '培训效果提升' },
    { metric: '40%', description: '诊疗效率提升' },
    { metric: '60%', description: '康复速度提升' }
  ],
  applications: [
    '外科手术',
    '医学教育',
    '康复治疗',
    '远程医疗',
    '医疗培训',
    '病理诊断'
  ],
  process: [
    {
      step: '01',
      title: '医疗需求调研',
      description: '深入了解医疗机构的具体需求和应用场景'
    },
    {
      step: '02', 
      title: '临床方案设计',
      description: '基于医疗标准设计符合临床需求的AR方案'
    },
    {
      step: '03',
      title: '系统开发验证',
      description: '开发医疗级AR系统并进行严格的安全验证'
    },
    {
      step: '04',
      title: '临床试验部署',
      description: '在临床环境中试验部署，确保系统稳定性'
    },
    {
      step: '05',
      title: '培训维护支持',
      description: '提供医护人员培训和长期技术支持'
    }
  ]
};

export default function HealthcareService() {
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
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6">
                <Heart className="w-8 h-8 text-white" />
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
              我们的医疗AR解决方案提供全方位的诊疗支持
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
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-red-600">
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
        </Container>
      </Section>

      {/* 预期效果 */}
      <Section className="py-16 bg-red-600">
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
            <Paragraph className="text-red-100 max-w-2xl mx-auto">
              通过我们的AR医疗解决方案，您的医疗服务将获得显著的效果提升
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
                <div className="text-red-100">
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
              我们的解决方案适用于多种医疗健康场景
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
              专业的医疗AR项目实施流程，确保项目成功交付
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
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-200 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
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
              准备开始您的医疗AR项目？
            </Heading>
            <Paragraph size="lg" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              联系我们的专业团队，获取免费的项目咨询和定制化解决方案
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
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