'use client';

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui';
import { Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { 
  Star, 
  CheckCircle,
  ArrowLeft,
  Users,
  Award,
  Clock,
  Target,
  Gamepad2,
  Zap,
  Music,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const serviceDetails = {
  id: 'entertainment',
  title: '娱乐游戏AR体验',
  description: '为娱乐行业打造创新的AR游戏和互动体验',
  fullDescription: '我们的娱乐游戏AR体验解决方案专为娱乐行业设计，通过增强现实技术为用户创造前所未有的沉浸式娱乐体验。从AR游戏开发到主题公园应用，从社交AR到互动娱乐，我们的解决方案让娱乐变得更加生动有趣，提升用户参与度和留存率。',
  features: [
    {
      title: 'AR游戏开发',
      description: '开发创新的AR游戏，融合现实与虚拟，带来全新的游戏体验。',
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: '互动娱乐',
      description: '打造多人互动的AR娱乐体验，增强社交性和趣味性。',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: '主题公园应用',
      description: '为主题公园和景区提供AR增强的游览体验和互动项目。',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: '社交AR',
      description: '开发社交化的AR应用，让用户在虚拟世界中互动交流。',
      icon: <Music className="w-6 h-6" />
    }
  ],
  benefits: [
    { metric: '60%', description: '用户参与度提升' },
    { metric: '40%', description: '游戏时长增加' },
    { metric: '85%', description: '用户留存率' },
    { metric: '70%', description: '用户满意度提升' }
  ],
  applications: [
    'AR手机游戏',
    '主题公园',
    '娱乐场所',
    '社交平台',
    '音乐演出',
    '体感游戏'
  ],
  process: [
    {
      step: '01',
      title: '创意策划',
      description: '深入了解娱乐需求，策划创新的AR体验方案'
    },
    {
      step: '02', 
      title: '游戏设计',
      description: '设计AR游戏玩法和交互机制，确保趣味性'
    },
    {
      step: '03',
      title: '技术开发',
      description: '开发AR游戏引擎和核心功能模块'
    },
    {
      step: '04',
      title: '测试优化',
      description: '进行用户测试，优化游戏体验和性能'
    },
    {
      step: '05',
      title: '发布运营',
      description: '发布AR游戏并提供持续的运营支持'
    }
  ]
};

export default function EntertainmentService() {
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
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mr-6">
                <Star className="w-8 h-8 text-white" />
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
              我们的娱乐AR解决方案提供全方位的游戏体验
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
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
      <Section className="py-16 bg-pink-600">
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
            <Paragraph className="text-pink-100 max-w-2xl mx-auto">
              通过我们的AR娱乐解决方案，您的游戏将获得显著的效果提升
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
                <div className="text-pink-100">
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
              我们的解决方案适用于多种娱乐游戏场景
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
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-pink-200 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
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
              准备开始您的娱乐AR项目？
            </Heading>
            <Paragraph size="lg" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              联系我们的专业团队，获取免费的项目咨询和定制化解决方案
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
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