'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, Clock, Phone, Mail, Settings, AlertTriangle,
  CheckCircle, ArrowRight, Wrench, Monitor, Zap, Users
} from 'lucide-react';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function Maintenance() {
  // 维护服务套餐
  const maintenancePackages = [
    {
      title: '基础维护',
      description: '适合小型项目的基础维护服务',
      price: '¥2,999/月',
      features: [
        '5x8技术支持（工作日）',
        '系统监控和报告',
        '基础故障排除',
        '月度系统检查',
        '邮件技术支持'
      ],
      responseTime: '4小时内响应',
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      popular: false
    },
    {
      title: '标准维护',
      description: '适合中型企业的全面维护服务',
      price: '¥5,999/月',
      features: [
        '7x24技术支持',
        '实时系统监控',
        '优先故障处理',
        '双周系统优化',
        '电话+邮件支持',
        '远程技术支持'
      ],
      responseTime: '2小时内响应',
      icon: <Settings className="w-8 h-8 text-green-500" />,
      popular: true
    },
    {
      title: '企业维护',
      description: '适合大型企业的专业维护服务',
      price: '¥12,999/月',
      features: [
        '7x24专属技术支持',
        '主动系统监控',
        '紧急故障处理',
        '周度系统优化',
        '专属技术经理',
        '现场技术支持',
        '定制化解决方案'
      ],
      responseTime: '1小时内响应',
      icon: <Wrench className="w-8 h-8 text-purple-500" />,
      popular: false
    }
  ];

  // 维护服务内容
  const maintenanceServices = [
    {
      title: '系统监控',
      description: '24/7实时监控系统运行状态，及时发现和处理问题',
      icon: <Monitor className="w-12 h-12 text-blue-500" />,
      details: [
        '服务器性能监控',
        '应用程序状态检查',
        '数据库性能监控',
        '网络连接监控'
      ]
    },
    {
      title: '故障处理',
      description: '快速响应和解决系统故障，最小化业务影响',
      icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
      details: [
        '故障快速定位',
        '紧急修复处理',
        '根因分析报告',
        '预防措施建议'
      ]
    },
    {
      title: '性能优化',
      description: '定期优化系统性能，确保最佳运行效果',
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      details: [
        '代码性能优化',
        '数据库查询优化',
        '缓存策略优化',
        '资源配置调优'
      ]
    },
    {
      title: '技术支持',
      description: '专业技术团队提供全方位的技术咨询和支持',
      icon: <Users className="w-12 h-12 text-green-500" />,
      details: [
        '技术咨询服务',
        '使用指导培训',
        '最佳实践建议',
        '升级方案规划'
      ]
    }
  ];

  // 服务流程
  const serviceProcess = [
    {
      step: '01',
      title: '问题报告',
      description: '通过多种渠道报告问题或请求支持'
    },
    {
      step: '02',
      title: '快速响应',
      description: '技术团队在承诺时间内响应并评估问题'
    },
    {
      step: '03',
      title: '问题诊断',
      description: '深入分析问题原因，制定解决方案'
    },
    {
      step: '04',
      title: '解决实施',
      description: '执行解决方案，恢复系统正常运行'
    },
    {
      step: '05',
      title: '验证总结',
      description: '验证修复效果，提供问题总结报告'
    }
  ];

  // 联系方式
  const contactMethods = [
    {
      title: '紧急热线',
      description: '7x24小时紧急技术支持热线',
      contact: '400-888-9999',
      icon: <Phone className="w-8 h-8 text-red-500" />
    },
    {
      title: '技术邮箱',
      description: '技术支持邮箱，详细问题描述',
      contact: 'support@fanchen-ar.com',
      icon: <Mail className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="维护支持 - 凡尘合创AR"
        description="凡尘合创AR专业维护支持服务，提供7x24技术支持、系统监控、故障处理和性能优化服务。"
        keywords="AR维护,技术支持,系统监控,故障处理,性能优化"
      />
      
      {/* 面包屑导航 */}
      <Section className="py-4 bg-gray-50">
        <Container>
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '服务支持', href: '/support' },
              { label: '维护支持', href: '/support/maintenance' }
            ]}
          />
        </Container>
      </Section>

      {/* 页面标题 */}
      <Section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading as="h1" className="text-4xl md:text-5xl font-bold mb-6">
              维护支持
            </Heading>
            <Paragraph className="text-xl opacity-90 max-w-3xl mx-auto">
              专业的系统维护和技术支持服务，确保您的AR应用稳定运行
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 维护套餐 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              维护服务套餐
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              选择适合您业务需求的维护服务套餐
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      推荐
                    </span>
                  </div>
                )}
                
                <Card className={`h-full hover:shadow-lg transition-shadow ${pkg.popular ? 'ring-2 ring-green-500' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {pkg.icon}
                      <div className="ml-4">
                        <Heading as="h3" className="text-xl font-semibold">
                          {pkg.title}
                        </Heading>
                        <div className="text-2xl font-bold text-blue-600 mt-1">
                          {pkg.price}
                        </div>
                      </div>
                    </div>
                    
                    <Paragraph className="text-gray-600 mb-4">
                      {pkg.description}
                    </Paragraph>
                    
                    <div className="bg-green-50 text-green-800 px-3 py-2 rounded-lg text-sm font-medium mb-4">
                      {pkg.responseTime}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}>
                      选择套餐
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 维护服务内容 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              维护服务内容
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              全方位的维护服务，确保系统稳定高效运行
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      {service.icon}
                      <div className="ml-4 flex-1">
                        <Heading as="h3" className="text-xl font-semibold mb-2">
                          {service.title}
                        </Heading>
                        <Paragraph className="text-gray-600 mb-4">
                          {service.description}
                        </Paragraph>
                        
                        <div className="space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 服务流程 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              服务流程
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              标准化的服务流程，确保问题得到快速有效解决
            </Paragraph>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {serviceProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
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

      {/* 联系方式 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              联系技术支持
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              遇到问题？我们的技术支持团队随时为您提供帮助
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
                    <div className="text-lg font-bold text-blue-600">
                      {method.contact}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 立即开始 */}
      <Section className="py-16">
        <Container>
          <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardContent className="p-8 text-center">
              <Heading as="h3" className="text-2xl font-bold mb-4">
                立即获得专业维护支持
              </Heading>
              <Paragraph className="text-lg opacity-90 mb-6">
                联系我们的技术支持团队，为您的AR应用提供专业的维护服务
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    联系技术支持
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600" asChild>
                  <Link href="/support/consulting">
                    查看咨询服务
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