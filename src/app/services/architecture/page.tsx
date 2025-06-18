'use client';

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui';
import { Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { 
  Building, 
  CheckCircle,
  ArrowLeft,
  Users,
  Award,
  Clock,
  Target,
  Home,
  Ruler,
  Palette,
  Camera
} from 'lucide-react';
import Link from 'next/link';

const serviceDetails = {
  id: 'architecture',
  title: '建筑设计AR可视化',
  description: '为建筑设计和房地产行业提供沉浸式展示解决方案',
  fullDescription: '我们的建筑设计AR可视化解决方案专为建筑设计师、房地产开发商和室内设计师打造。通过增强现实技术，将建筑设计图纸转化为立体的3D模型，让客户能够在实际环境中预览建筑效果，提升设计沟通效率，增强客户满意度。',
  features: [
    {
      title: '3D建筑展示',
      description: '将建筑设计图纸转化为逼真的3D模型，让客户直观感受建筑效果。',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: '室内设计预览',
      description: '在实际空间中预览室内设计方案，包括家具布局和装修效果。',
      icon: <Home className="w-6 h-6" />
    },
    {
      title: '施工指导',
      description: '为施工人员提供AR辅助的施工指导，提高施工精度和效率。',
      icon: <Ruler className="w-6 h-6" />
    },
    {
      title: '营销展示',
      description: '为房地产销售提供创新的AR展示工具，提升销售转化率。',
      icon: <Camera className="w-6 h-6" />
    }
  ],
  benefits: [
    { metric: '45%', description: '设计效率提升' },
    { metric: '90%', description: '客户满意度' },
    { metric: '35%', description: '销售转化率提升' },
    { metric: '50%', description: '设计变更减少' }
  ],
  applications: [
    '住宅设计',
    '商业建筑',
    '室内设计',
    '景观设计',
    '房地产销售',
    '建筑施工'
  ],
  process: [
    {
      step: '01',
      title: '设计需求分析',
      description: '深入了解建筑设计需求和展示目标'
    },
    {
      step: '02', 
      title: '3D模型制作',
      description: '基于设计图纸制作高精度的3D建筑模型'
    },
    {
      step: '03',
      title: 'AR应用开发',
      description: '开发AR可视化应用，集成3D模型和交互功能'
    },
    {
      step: '04',
      title: '测试优化部署',
      description: '在实际环境中测试AR效果并优化用户体验'
    },
    {
      step: '05',
      title: '培训支持维护',
      description: '提供使用培训和持续的技术支持服务'
    }
  ]
};

export default function ArchitectureService() {
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
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-6">
                <Building className="w-8 h-8 text-white" />
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
              我们的建筑AR解决方案提供全方位的可视化支持
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
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
      <Section className="py-16 bg-orange-600">
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
            <Paragraph className="text-orange-100 max-w-2xl mx-auto">
              通过我们的AR建筑解决方案，您的设计将获得显著的效果提升
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
                <div className="text-orange-100">
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
              我们的解决方案适用于多种建筑设计场景
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
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-200 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
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
              准备开始您的建筑AR项目？
            </Heading>
            <Paragraph size="lg" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              联系我们的专业团队，获取免费的项目咨询和定制化解决方案
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
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