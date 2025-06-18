'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, TrendingUp, MapPin, Mail, Phone, 
  Calendar, Building, Lightbulb, Shield, Heart, Star,
  CheckCircle, ArrowRight, Globe, Zap, Clock
} from 'lucide-react';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function About() {
  // 公司数据
  const companyStats = [
    {
      label: '成立时间',
      value: '2019年',
      description: '专注AR技术研发',
      icon: <Calendar className="w-8 h-8 text-blue-500" />
    },
    {
      label: '团队规模',
      value: '50+',
      description: '专业技术团队',
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      label: '成功项目',
      value: '100+',
      description: '已完成项目',
      icon: <Award className="w-8 h-8 text-purple-500" />
    },
    {
      label: '服务客户',
      value: '80+',
      description: '合作企业',
      icon: <Building className="w-8 h-8 text-orange-500" />
    }
  ];

  // 核心价值观
  const coreValues = [
    {
      title: '创新驱动',
      description: '持续创新，引领AR行业发展',
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />
    },
    {
      title: '品质至上',
      description: '严格质量控制，确保产品卓越品质',
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      title: '客户为本',
      description: '以客户需求为导向，提供优质服务',
      icon: <Heart className="w-12 h-12 text-red-500" />
    },
    {
      title: '合作共赢',
      description: '与合作伙伴共同成长，实现互利共赢',
      icon: <Star className="w-12 h-12 text-green-500" />
    }
  ];

  // 技术优势
  const techAdvantages = [
    {
      title: '自主研发AR引擎',
      description: '拥有完全自主知识产权的AR引擎，性能优异，兼容性强。',
      features: ['高精度定位', '实时渲染', '跨平台支持'],
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: '专业技术团队',
      description: '汇聚计算机视觉、3D图形学、人工智能等领域的顶尖人才。',
      features: ['博士团队', '丰富经验', '持续创新'],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: '完整解决方案',
      description: '从硬件适配到软件开发，提供端到端的AR解决方案。',
      features: ['硬件兼容', '软件定制', '服务支持'],
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: '快速响应能力',
      description: '敏捷开发流程，快速响应客户需求，缩短项目交付周期。',
      features: ['敏捷开发', '快速迭代', '及时交付'],
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <Layout>
      <SEO
        title="关于我们 - 武汉凡尘合创科技"
        description="了解武汉凡尘合创科技，专业的AR解决方案提供商，致力于为各行业提供创新的增强现实技术服务和解决方案。"
        keywords="关于我们, 武汉凡尘合创, AR公司, 增强现实技术, 公司介绍, 团队介绍"
      />

      {/* 移除面包屑导航部分 */}
      
      {/* 页面标题 */}
      <Section 
        padding="lg" 
        className="relative bg-gray-900 overflow-hidden"
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
            <Heading as="h1" size="3xl" className="mb-4 text-white">
              关于武汉凡尘合创科技
            </Heading>
            <Paragraph size="lg" className="text-gray-300 max-w-2xl mx-auto">
              我们是一家专注于增强现实（AR）技术研发与应用的创新型科技公司，致力于为各行业提供专业的AR解决方案，推动传统行业的数字化转型升级。
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 公司统计 */}
      <Section className="py-16 bg-gray-900">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 其余内容保持原样，但需要将背景色改为深色主题 */}
      {/* 核心价值观 */}
      <Section className="py-16 bg-gray-800">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl" className="mb-4 text-white">
              核心价值观
            </Heading>
            <Paragraph className="text-gray-300 max-w-2xl mx-auto">
              我们秉承创新、品质、客户、合作的核心价值观，为客户创造价值
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow bg-gray-700 border-gray-600">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <Heading as="h3" size="lg" className="mb-3 text-white">
                      {value.title}
                    </Heading>
                    <Paragraph className="text-gray-300">
                      {value.description}
                    </Paragraph>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 技术优势 */}
      <Section className="py-16 bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" size="2xl" className="mb-4 text-white">
              技术优势
            </Heading>
            <Paragraph className="text-gray-300 max-w-2xl mx-auto">
              凭借强大的技术实力和丰富的行业经验，为客户提供领先的AR解决方案
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-blue-400">
                        {advantage.icon}
                      </div>
                      <Heading as="h3" size="lg" className="ml-3 text-white">
                        {advantage.title}
                      </Heading>
                    </div>
                    <Paragraph className="text-gray-300 mb-4">
                      {advantage.description}
                    </Paragraph>
                    <div className="flex flex-wrap gap-2">
                      {advantage.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}