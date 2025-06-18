'use client';

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui';
import { Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { 
  GraduationCap, 
  CheckCircle,
  ArrowLeft,
  Users,
  Award,
  Clock,
  Target,
  BookOpen,
  Brain,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const serviceDetails = {
  id: 'education',
  title: '教育培训AR系统',
  description: '打造沉浸式学习体验，让抽象概念变得具体可见',
  fullDescription: '我们的教育培训AR系统专为现代教育设计，通过增强现实技术将抽象的知识概念转化为生动的3D可视化内容。从基础教育到职业培训，从理论学习到实践操作，我们的解决方案覆盖教育的各个环节，帮助学生更好地理解和掌握知识。',
  features: [
    {
      title: '3D模型展示',
      description: '将复杂的概念和结构以3D模型形式展示，让学习更加直观。',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: '互动式学习',
      description: '学生可以与AR内容进行实时互动，提高学习参与度和效果。',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: '虚拟实验室',
      description: '在安全的虚拟环境中进行实验，降低成本和风险。',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: '技能培训模拟',
      description: '通过AR模拟真实操作环境，提供安全有效的技能培训。',
      icon: <Lightbulb className="w-6 h-6" />
    }
  ],
  benefits: [
    { metric: '40%', description: '学习效率提升' },
    { metric: '80%', description: '学生参与度提升' },
    { metric: '30%', description: '教学成本降低' },
    { metric: '65%', description: '知识保留率提升' }
  ],
  applications: [
    '基础教育',
    '高等教育',
    '职业培训',
    '企业培训',
    '医学教育',
    '工程教育'
  ],
  process: [
    {
      step: '01',
      title: '教学需求分析',
      description: '深入了解教学目标和学习者特点'
    },
    {
      step: '02', 
      title: '内容设计开发',
      description: '设计符合教学目标的AR学习内容'
    },
    {
      step: '03',
      title: '系统集成测试',
      description: '将AR内容集成到教学系统中进行测试'
    },
    {
      step: '04',
      title: '教师培训部署',
      description: '培训教师使用AR教学系统'
    },
    {
      step: '05',
      title: '效果评估优化',
      description: '评估教学效果并持续优化内容'
    }
  ]
};

export default function EducationService() {
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
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6">
                <GraduationCap className="w-8 h-8 text-white" />
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
              我们的教育AR解决方案提供全方位的教学支持
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
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
      <Section className="py-16 bg-green-600">
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
            <Paragraph className="text-green-100 max-w-2xl mx-auto">
              通过我们的AR教育解决方案，您的教学将获得显著的效果提升
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
                <div className="text-green-100">
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
              我们的解决方案适用于多种教育培训场景
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
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
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
              准备开始您的教育AR项目？
            </Heading>
            <Paragraph size="lg" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              联系我们的专业团队，获取免费的项目咨询和定制化解决方案
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
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