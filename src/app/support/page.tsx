'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, GraduationCap, Wrench, MessageCircle, ArrowRight,
  Phone, Mail, Clock, Users, CheckCircle, Star, Zap
} from 'lucide-react';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function Support() {
  // 服务支持类型
  const supportServices = [
    {
      title: '技术文档',
      description: '完整的技术文档和资源，包括API文档、用户手册、技术白皮书和视频教程',
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      href: '/support/documentation',
      features: [
        'API接口文档',
        '用户操作手册',
        '技术白皮书',
        '视频教程库'
      ],
      color: 'blue'
    },
    {
      title: '培训服务',
      description: '专业的AR技术培训服务，从基础入门到高级开发，助力团队快速成长',
      icon: <GraduationCap className="w-12 h-12 text-green-500" />,
      href: '/support/training',
      features: [
        'AR开发基础培训',
        'AR高级开发培训',
        '企业定制培训',
        '实战项目指导'
      ],
      color: 'green'
    },
    {
      title: '维护支持',
      description: '7x24技术支持服务，包括系统监控、故障处理、性能优化等全方位维护',
      icon: <Wrench className="w-12 h-12 text-red-500" />,
      href: '/support/maintenance',
      features: [
        '7x24技术支持',
        '系统监控服务',
        '故障快速处理',
        '性能优化建议'
      ],
      color: 'red'
    },
    {
      title: '咨询服务',
      description: '专业的AR技术和业务咨询，提供技术方案、项目规划和战略指导',
      icon: <MessageCircle className="w-12 h-12 text-purple-500" />,
      href: '/support/consulting',
      features: [
        'AR技术咨询',
        '项目规划咨询',
        '业务战略咨询',
        '团队培训咨询'
      ],
      color: 'purple'
    }
  ];

  // 服务优势
  const advantages = [
    {
      title: '专业团队',
      description: '资深AR技术专家和项目经理组成的专业服务团队',
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: '快速响应',
      description: '7x24小时技术支持，最快1小时内响应客户需求',
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: '丰富经验',
      description: '100+成功项目经验，深度了解各行业AR应用场景',
      icon: <Star className="w-8 h-8 text-green-500" />
    },
    {
      title: '持续服务',
      description: '从项目启动到后期维护的全生命周期服务支持',
      icon: <Clock className="w-8 h-8 text-purple-500" />
    }
  ];

  // 联系方式
  const contactMethods = [
    {
      title: '技术支持热线',
      description: '7x24小时技术支持热线',
      contact: '400-888-9999',
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      available: '全天候服务'
    },
    {
      title: '技术支持邮箱',
      description: '发送详细问题描述获得专业解答',
      contact: 'support@fanchen-ar.com',
      icon: <Mail className="w-8 h-8 text-green-500" />,
      available: '24小时内回复'
    }
  ];

  // 服务统计
  const serviceStats = [
    {
      label: '服务客户',
      value: '200+',
      description: '企业客户'
    },
    {
      label: '技术支持',
      value: '7x24',
      description: '小时服务'
    },
    {
      label: '响应时间',
      value: '< 1h',
      description: '平均响应'
    },
    {
      label: '满意度',
      value: '98%',
      description: '客户满意'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="服务支持 - 凡尘合创AR"
        description="凡尘合创AR全方位服务支持，提供技术文档、培训服务、维护支持和咨询服务，助力您的AR项目成功。"
        keywords="AR服务支持,技术文档,培训服务,维护支持,咨询服务"
      />
      
      {/* 面包屑导航 */}
      <Section className="py-4 bg-gray-50">
        <Container>
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '服务支持', href: '/support' }
            ]}
          />
        </Container>
      </Section>

      {/* 页面标题 */}
      <Section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading as="h1" className="text-4xl md:text-5xl font-bold mb-6">
              服务支持
            </Heading>
            <Paragraph className="text-xl opacity-90 max-w-3xl mx-auto">
              全方位的AR技术服务支持，从技术文档到专业培训，从维护支持到咨询服务
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 服务统计 */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 服务类型 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              服务类型
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们提供全方位的AR技术服务支持，满足您在不同阶段的需求
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="ml-4 flex-1">
                        <Heading as="h3" className="text-xl font-semibold mb-2">
                          {service.title}
                        </Heading>
                        <Paragraph className="text-gray-600 mb-4">
                          {service.description}
                        </Paragraph>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700`}
                          asChild
                        >
                          <Link href={service.href}>
                            了解详情
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
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

      {/* 服务优势 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              服务优势
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              专业的团队、丰富的经验、快速的响应，为您提供优质的服务体验
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

      {/* 联系方式 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              联系我们
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              遇到问题或需要帮助？我们的技术支持团队随时为您服务
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {method.icon}
                    </div>
                    <Heading as="h3" className="text-xl font-semibold mb-2">
                      {method.title}
                    </Heading>
                    <Paragraph className="text-gray-600 mb-4">
                      {method.description}
                    </Paragraph>
                    <div className="text-lg font-bold text-blue-600 mb-2">
                      {method.contact}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      {method.available}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 立即开始 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <Heading as="h3" className="text-2xl font-bold mb-4">
                需要技术支持？
              </Heading>
              <Paragraph className="text-lg opacity-90 mb-6">
                我们的专业团队随时为您提供技术支持和咨询服务
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    联系我们
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/support/documentation">
                    查看文档
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