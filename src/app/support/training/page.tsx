'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, Clock, Calendar, MapPin, Star,
  CheckCircle, ArrowRight, BookOpen, Video, Award, Target
} from 'lucide-react';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function Training() {
  // 培训课程
  const trainingCourses = [
    {
      title: 'AR开发基础培训',
      description: '面向初学者的AR开发入门课程，涵盖基础概念和开发环境搭建',
      duration: '3天',
      level: '初级',
      participants: '10-15人',
      price: '¥3,999',
      features: [
        'AR技术基础理论',
        '开发环境配置',
        '简单AR应用开发',
        '实战项目练习'
      ],
      icon: <BookOpen className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'AR高级开发培训',
      description: '深入学习AR高级技术，包括空间定位、渲染优化等核心技术',
      duration: '5天',
      level: '高级',
      participants: '8-12人',
      price: '¥7,999',
      features: [
        '高级渲染技术',
        '空间定位算法',
        '性能优化策略',
        '复杂项目实战'
      ],
      icon: <Target className="w-8 h-8 text-purple-500" />
    },
    {
      title: '企业定制培训',
      description: '根据企业需求定制的专业培训方案，提供针对性的技术指导',
      duration: '灵活安排',
      level: '定制',
      participants: '5-20人',
      price: '面议',
      features: [
        '需求分析定制',
        '专业讲师指导',
        '项目实战演练',
        '后续技术支持'
      ],
      icon: <Users className="w-8 h-8 text-green-500" />
    }
  ];

  // 培训优势
  const advantages = [
    {
      title: '专业讲师团队',
      description: '由资深AR技术专家和项目经理组成的讲师团队',
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />
    },
    {
      title: '实战项目驱动',
      description: '基于真实项目案例的实战培训，学以致用',
      icon: <Award className="w-12 h-12 text-green-500" />
    },
    {
      title: '小班精品教学',
      description: '小班制教学，确保每位学员都能得到充分指导',
      icon: <Users className="w-12 h-12 text-purple-500" />
    },
    {
      title: '持续技术支持',
      description: '培训结束后提供3个月的技术咨询支持服务',
      icon: <CheckCircle className="w-12 h-12 text-orange-500" />
    }
  ];

  // 培训流程
  const trainingProcess = [
    {
      step: '01',
      title: '需求咨询',
      description: '了解培训需求，制定个性化培训方案'
    },
    {
      step: '02',
      title: '方案确认',
      description: '确认培训内容、时间安排和费用'
    },
    {
      step: '03',
      title: '培训实施',
      description: '专业讲师授课，理论与实践相结合'
    },
    {
      step: '04',
      title: '考核认证',
      description: '培训考核，颁发结业证书'
    },
    {
      step: '05',
      title: '后续支持',
      description: '提供技术咨询和项目指导服务'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="培训服务 - 凡尘合创AR"
        description="凡尘合创AR专业培训服务，提供AR开发基础培训、高级培训和企业定制培训，助力技术团队快速成长。"
        keywords="AR培训,AR开发培训,企业培训,技术培训,AR教育"
      />
      
      {/* 面包屑导航 */}
      <Section className="py-4 bg-gray-50">
        <Container>
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '服务支持', href: '/support' },
              { label: '培训服务', href: '/support/training' }
            ]}
          />
        </Container>
      </Section>

      {/* 页面标题 */}
      <Section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading as="h1" className="text-4xl md:text-5xl font-bold mb-6">
              培训服务
            </Heading>
            <Paragraph className="text-xl opacity-90 max-w-3xl mx-auto">
              专业的AR技术培训服务，助力您的团队快速掌握AR开发技能
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 培训课程 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              培训课程
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们提供从基础到高级的全方位AR技术培训课程
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {course.icon}
                      <div className="ml-4">
                        <Heading as="h3" className="text-xl font-semibold">
                          {course.title}
                        </Heading>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {course.level}
                          </span>
                          <span className="text-sm text-gray-500">
                            {course.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Paragraph className="text-gray-600 mb-4">
                      {course.description}
                    </Paragraph>
                    
                    <div className="space-y-2 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm text-gray-500">参训人数</div>
                          <div className="font-medium">{course.participants}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">培训费用</div>
                          <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                        </div>
                      </div>
                      
                      <Button className="w-full text-black">
                        立即咨询
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 培训优势 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              培训优势
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              专业的培训体系和丰富的项目经验，确保培训效果
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
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
                <Heading as="h4" className="text-lg font-semibold mb-2">
                  {advantage.title}
                </Heading>
                <Paragraph className="text-gray-600">
                  {advantage.description}
                </Paragraph>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 培训流程 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              培训流程
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              标准化的培训流程，确保培训质量和效果
            </Paragraph>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {trainingProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                    {process.step}
                  </div>
                  <Heading as="h4" className="text-lg font-semibold mb-2">
                    {process.title}
                  </Heading>
                  <Paragraph className="text-gray-600 text-sm">
                    {process.description}
                  </Paragraph>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 联系我们 */}
      <Section className="py-16">
        <Container>
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <Heading as="h3" className="text-2xl font-bold mb-4">
                开始您的AR学习之旅
              </Heading>
              <Paragraph className="text-lg opacity-90 mb-6">
                联系我们的培训顾问，获取详细的培训方案和报价
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    联系培训顾问
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                  <Link href="/support/documentation">
                    查看技术文档
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </Layout>
  );
}