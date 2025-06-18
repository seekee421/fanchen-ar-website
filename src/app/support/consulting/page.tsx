'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Target, TrendingUp, Users, Clock, CheckCircle,
  ArrowRight, Brain, Zap, Award, MessageCircle, Calendar
} from 'lucide-react';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function Consulting() {
  // 咨询服务类型
  const consultingServices = [
    {
      title: 'AR技术咨询',
      description: '为您的项目提供专业的AR技术方案咨询和架构设计',
      price: '¥1,500/小时',
      features: [
        '技术方案评估',
        '架构设计建议',
        '技术选型指导',
        '风险评估分析',
        '实施路径规划'
      ],
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      duration: '1-3小时'
    },
    {
      title: '项目规划咨询',
      description: '从项目启动到交付的全流程规划和管理咨询',
      price: '¥2,000/小时',
      features: [
        '项目需求分析',
        '开发计划制定',
        '资源配置建议',
        '里程碑规划',
        '质量控制策略'
      ],
      icon: <Target className="w-8 h-8 text-green-500" />,
      duration: '2-4小时'
    },
    {
      title: '业务战略咨询',
      description: '帮助企业制定AR技术应用的业务战略和商业模式',
      price: '¥3,000/小时',
      features: [
        '市场机会分析',
        '商业模式设计',
        '竞争优势分析',
        'ROI评估',
        '发展路线图'
      ],
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      duration: '3-6小时'
    },
    {
      title: '团队培训咨询',
      description: '为技术团队提供AR开发能力提升的培训咨询',
      price: '¥2,500/小时',
      features: [
        '技能评估',
        '培训计划制定',
        '学习路径设计',
        '实战项目指导',
        '能力认证'
      ],
      icon: <Users className="w-8 h-8 text-orange-500" />,
      duration: '2-5小时'
    }
  ];

  // 咨询优势
  const advantages = [
    {
      title: '资深专家团队',
      description: '拥有丰富AR项目经验的技术专家和业务顾问',
      icon: <Award className="w-12 h-12 text-blue-500" />
    },
    {
      title: '行业深度洞察',
      description: '深入了解各行业AR应用场景和最佳实践',
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />
    },
    {
      title: '定制化方案',
      description: '根据客户具体需求提供个性化的咨询方案',
      icon: <Zap className="w-12 h-12 text-green-500" />
    },
    {
      title: '持续跟踪服务',
      description: '提供咨询后的跟踪服务，确保方案有效实施',
      icon: <Clock className="w-12 h-12 text-purple-500" />
    }
  ];

  // 咨询流程
  const consultingProcess = [
    {
      step: '01',
      title: '需求沟通',
      description: '深入了解客户需求和项目背景'
    },
    {
      step: '02',
      title: '方案设计',
      description: '制定详细的咨询方案和时间安排'
    },
    {
      step: '03',
      title: '咨询实施',
      description: '专家团队提供专业咨询服务'
    },
    {
      step: '04',
      title: '报告交付',
      description: '提供详细的咨询报告和建议'
    },
    {
      step: '05',
      title: '跟踪服务',
      description: '后续跟踪和持续支持服务'
    }
  ];

  // 成功案例
  const successCases = [
    {
      title: '制造业AR数字化转型',
      client: '某大型制造企业',
      challenge: '传统生产线效率低下，需要AR技术提升生产效率',
      solution: '设计了完整的AR生产指导系统架构和实施方案',
      result: '生产效率提升35%，错误率降低60%',
      duration: '3个月咨询周期'
    },
    {
      title: '教育行业AR课程设计',
      client: '知名教育机构',
      challenge: '希望将AR技术融入教学，提升学习体验',
      solution: '制定了AR教育产品的商业模式和技术实现路径',
      result: '成功推出AR教育产品，用户满意度95%',
      duration: '2个月咨询周期'
    },
    {
      title: '零售业AR营销策略',
      client: '连锁零售品牌',
      challenge: '寻求创新营销方式，提升客户体验',
      solution: '设计了AR试穿/试用系统的整体解决方案',
      result: '客户转化率提升45%，品牌知名度显著提升',
      duration: '1.5个月咨询周期'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="咨询服务 - 凡尘合创AR"
        description="凡尘合创AR专业咨询服务，提供AR技术咨询、项目规划、业务战略和团队培训等专业咨询服务。"
        keywords="AR咨询,技术咨询,项目规划,业务战略,团队培训"
      />
      
      {/* 面包屑导航 */}
      <Section className="py-4 bg-gray-50">
        <Container>
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '服务支持', href: '/support' },
              { label: '咨询服务', href: '/support/consulting' }
            ]}
          />
        </Container>
      </Section>

      {/* 页面标题 */}
      <Section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading as="h1" className="text-4xl md:text-5xl font-bold mb-6">
              咨询服务
            </Heading>
            <Paragraph className="text-xl opacity-90 max-w-3xl mx-auto">
              专业的AR技术和业务咨询服务，助力您的项目成功
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 咨询服务类型 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              咨询服务类型
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们提供全方位的AR技术和业务咨询服务
            </Paragraph>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <div className="ml-4 flex-1">
                        <Heading as="h3" className="text-xl font-semibold">
                          {service.title}
                        </Heading>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-2xl font-bold text-blue-600">
                            {service.price}
                          </span>
                          <span className="text-sm text-gray-500">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
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
                    
                    <Button className="w-full">
                      预约咨询
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 咨询优势 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              咨询优势
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              专业的团队和丰富的经验，为您提供高质量的咨询服务
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

      {/* 咨询流程 */}
      <Section className="py-16">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h3" className="text-xl font-semibold mb-3">
              技术咨询
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              标准化的咨询流程，确保咨询效果和客户满意度
            </Paragraph>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {consultingProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
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

      {/* 成功案例 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              咨询流程
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              标准化的咨询流程，确保咨询效果和客户满意度
            </Paragraph>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {consultingProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
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

      {/* 成功案例 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              为什么选择我们
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们为众多企业提供了专业的咨询服务，助力他们成功实现AR技术应用
            </Paragraph>
          </div>
          
          <div className="space-y-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={case_.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <Heading as="h4" className="text-lg font-semibold mb-2">
                          {case_.title}
                        </Heading>
                        <div className="text-sm text-gray-500 mb-2">{case_.client}</div>
                        <div className="text-sm text-blue-600 font-medium">{case_.duration}</div>
                      </div>
                      
                      <div>
                        <div className="mb-3">
                          <div className="text-sm font-medium text-gray-700 mb-1">挑战</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.challenge}
                          </Paragraph>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">解决方案</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.solution}
                          </Paragraph>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">成果</div>
                        <div className="bg-green-50 text-green-800 p-3 rounded-lg">
                          <Paragraph className="text-sm font-medium">
                            {case_.result}
                          </Paragraph>
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

      {/* 成功案例 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h3" className="text-xl font-semibold mb-3">
              专业团队
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们为众多企业提供了专业的咨询服务，助力他们成功实现AR技术应用
            </Paragraph>
          </div>
          
          <div className="space-y-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={case_.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <Heading as="h4" className="text-lg font-semibold mb-2">
                          {case_.title}
                        </Heading>
                        <div className="text-sm text-gray-500 mb-2">{case_.client}</div>
                        <div className="text-sm text-blue-600 font-medium">{case_.duration}</div>
                      </div>
                      
                      <div>
                        <div className="mb-3">
                          <div className="text-sm font-medium text-gray-700 mb-1">挑战</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.challenge}
                          </Paragraph>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">解决方案</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.solution}
                          </Paragraph>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">成果</div>
                        <div className="bg-green-50 text-green-800 p-3 rounded-lg">
                          <Paragraph className="text-sm font-medium">
                            {case_.result}
                          </Paragraph>
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

      {/* 成功案例 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h3" className="text-xl font-semibold mb-3">
              联系我们
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们为众多企业提供了专业的咨询服务，助力他们成功实现AR技术应用
            </Paragraph>
          </div>
          
          <div className="space-y-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={case_.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <Heading as="h4" className="text-lg font-semibold mb-2">
                          {case_.title}
                        </Heading>
                        <div className="text-sm text-gray-500 mb-2">{case_.client}</div>
                        <div className="text-sm text-blue-600 font-medium">{case_.duration}</div>
                      </div>
                      
                      <div>
                        <div className="mb-3">
                          <div className="text-sm font-medium text-gray-700 mb-1">挑战</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.challenge}
                          </Paragraph>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">解决方案</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.solution}
                          </Paragraph>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">成果</div>
                        <div className="bg-green-50 text-green-800 p-3 rounded-lg">
                          <Paragraph className="text-sm font-medium">
                            {case_.result}
                          </Paragraph>
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

      {/* 成功案例 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h3" className="text-xl font-semibold mb-3">
              获取专业咨询
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              我们为众多企业提供了专业的咨询服务，助力他们成功实现AR技术应用
            </Paragraph>
          </div>
          
          <div className="space-y-8">
            {successCases.map((case_, index) => (
              <motion.div
                key={case_.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <Heading as="h4" className="text-lg font-semibold mb-2">
                          {case_.title}
                        </Heading>
                        <div className="text-sm text-gray-500 mb-2">{case_.client}</div>
                        <div className="text-sm text-blue-600 font-medium">{case_.duration}</div>
                      </div>
                      
                      <div>
                        <div className="mb-3">
                          <div className="text-sm font-medium text-gray-700 mb-1">挑战</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.challenge}
                          </Paragraph>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">解决方案</div>
                          <Paragraph className="text-sm text-gray-600">
                            {case_.solution}
                          </Paragraph>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-1">成果</div>
                        <div className="bg-green-50 text-green-800 p-3 rounded-lg">
                          <Paragraph className="text-sm font-medium">
                            {case_.result}
                          </Paragraph>
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

      {/* 预约咨询 */}
      <Section className="py-16">
        <Container>
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <Heading as="h3" className="text-2xl font-bold mb-4">
                开始您的AR咨询之旅
              </Heading>
              <Paragraph className="text-lg opacity-90 mb-6">
                联系我们的咨询顾问，获取专业的AR技术和业务咨询服务
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    <Calendar className="mr-2 w-4 h-4" />
                    预约咨询
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
                  <Link href="/support/training">
                    <MessageCircle className="mr-2 w-4 h-4" />
                    在线咨询
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