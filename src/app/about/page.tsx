'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, TrendingUp, MapPin, Mail, Phone, 
  Calendar, Building, Lightbulb, Shield, Heart, Star,
  CheckCircle, ArrowRight, Globe, Zap, Clock
} from 'lucide-react';
import { Layout } from '../../components/layout';
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
      description: '持续技术创新，引领AR行业发展，为客户提供前沿的解决方案。',
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: '品质至上',
      description: '严格的质量控制体系，确保每个产品都达到行业领先水平。',
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '客户为本',
      description: '以客户需求为导向，提供个性化的AR解决方案和优质服务。',
      icon: <Heart className="w-12 h-12 text-red-500" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: '合作共赢',
      description: '与合作伙伴建立长期互信关系，共同推动AR技术的发展。',
      icon: <Users className="w-12 h-12 text-green-500" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // 团队成员
  const teamMembers = [
    {
      name: '张明',
      position: '创始人 & CEO',
      description: '15年AR/VR行业经验，曾任职于知名科技公司，专注于AR技术商业化应用。',
      expertise: ['战略规划', '商业模式', '团队管理'],
      avatar: '👨‍💼',
      background: 'from-blue-500 to-blue-700'
    },
    {
      name: '李华',
      position: '技术总监 & CTO',
      description: '计算机视觉博士，10年AR算法研发经验，拥有多项AR技术专利。',
      expertise: ['计算机视觉', 'AR算法', '技术架构'],
      avatar: '👨‍💻',
      background: 'from-green-500 to-green-700'
    },
    {
      name: '王芳',
      position: '产品总监',
      description: '8年产品设计经验，专注于AR产品用户体验设计和产品规划。',
      expertise: ['产品设计', '用户体验', '项目管理'],
      avatar: '👩‍💼',
      background: 'from-purple-500 to-purple-700'
    },
    {
      name: '刘强',
      position: '市场总监',
      description: '12年B2B市场营销经验，深度了解各行业AR应用需求和市场趋势。',
      expertise: ['市场策略', '客户关系', '商务拓展'],
      avatar: '👨‍💼',
      background: 'from-orange-500 to-orange-700'
    }
  ];

  // 发展历程
  const milestones = [
    {
      year: '2019',
      title: '公司成立',
      description: '武汉凡尘合创科技有限公司正式成立，专注AR技术研发。',
      achievements: ['核心团队组建', '技术框架搭建', '首个产品原型']
    },
    {
      year: '2020',
      title: '技术突破',
      description: '自主研发AR引擎，获得多项技术专利，产品性能达到行业领先水平。',
      achievements: ['AR引擎发布', '获得5项专利', '技术团队扩充']
    },
    {
      year: '2021',
      title: '市场拓展',
      description: '成功进入工业制造和教育培训领域，与多家知名企业建立合作关系。',
      achievements: ['首批客户签约', '产品商业化', '营收快速增长']
    },
    {
      year: '2022',
      title: '业务扩张',
      description: '业务范围扩展至零售、医疗等多个行业，团队规模快速增长。',
      achievements: ['多行业布局', '团队规模翻倍', '获得投资认可']
    },
    {
      year: '2023',
      title: '行业领先',
      description: '成为华中地区领先的AR解决方案提供商，服务客户超过80家。',
      achievements: ['行业地位确立', '客户满意度98%', '技术持续创新']
    },
    {
      year: '2024',
      title: '未来展望',
      description: '继续深耕AR技术，拓展国际市场，打造世界级AR技术公司。',
      achievements: ['国际化布局', '技术生态建设', '可持续发展']
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* 面包屑导航 */}
        <Container className="pt-8">
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '关于我们', href: '/about' }
            ]}
          />
        </Container>

        {/* 页面标题 */}
        <Section className="pt-12 pb-8">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Heading size="xl" className="mb-6 text-gray-900">
                关于武汉凡尘合创科技
              </Heading>
              <Paragraph size="lg" className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                我们是一家专注于增强现实（AR）技术研发与应用的创新型科技公司，
                致力于为各行业提供专业的AR解决方案，推动传统产业的数字化转型升级。
              </Paragraph>
            </motion.div>
          </Container>
        </Section>

        {/* 公司统计 */}
        <Section className="py-12">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-600">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </Container>
      </Section>

        {/* 公司使命与愿景 */}
        <Section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <Card className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <div className="flex items-center mb-6">
                    <Target className="w-12 h-12 mr-4" />
                    <Heading as="h2" size="2xl" className="text-white">
                我们的使命
              </Heading>
                  </div>
                  <Paragraph size="lg" className="text-white/95 leading-relaxed">
                    通过创新的AR技术，为各行业提供高效、智能的解决方案，
                    帮助企业提升运营效率，降低成本，创造更大的商业价值，
                    推动社会的数字化进步。
              </Paragraph>
                </Card>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              >
                <Card className="p-8 bg-gradient-to-br from-green-500 to-teal-600 text-white">
                  <div className="flex items-center mb-6">
                    <Star className="w-12 h-12 mr-4" />
                    <Heading as="h2" size="2xl" className="text-white">
                      我们的愿景
                    </Heading>
                    </div>
                  <Paragraph size="lg" className="text-white/95 leading-relaxed">
                    成为全球领先的AR技术公司，让增强现实技术真正融入人们的工作和生活，
                    创造一个更加智能、高效、美好的数字化世界。
                  </Paragraph>
                </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

        {/* 核心价值观 */}
        <Section className="py-16 bg-white">
        <Container>
            <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                  核心价值观
              </Heading>
                <Paragraph size="lg" className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  我们的价值观指导着公司的每一个决策和行动，
                  是我们持续发展和成功的基石。
              </Paragraph>
            </motion.div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="p-8">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {value.icon}
                        </div>
                      </div>
                      <Heading as="h3" size="lg" className="mb-4 text-gray-900">
                        {value.title}
                        </Heading>
                      <Paragraph className="text-gray-700 leading-relaxed">
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
        <Section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                  技术优势
                </Heading>
                <Paragraph size="lg" className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  凭借强大的技术实力和丰富的行业经验，
                  我们为客户提供最优质的AR解决方案。
                </Paragraph>
              </motion.div>
                  </div>
                  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <div className="text-primary">
                            {advantage.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <Heading as="h3" size="lg" className="mb-3 text-gray-900">
                            {advantage.title}
                          </Heading>
                          <Paragraph className="text-gray-700 leading-relaxed mb-4">
                            {advantage.description}
                          </Paragraph>
                          <div className="space-y-2">
                            {advantage.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
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

        {/* 团队介绍 */}
        <Section className="py-16 bg-white">
        <Container>
            <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                核心团队
              </Heading>
                <Paragraph size="lg" className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  我们拥有一支经验丰富、充满激情的专业团队，
                  致力于为客户提供最优质的AR解决方案和服务。
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                  <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
                    {/* 头像区域 */}
                    <div className={`aspect-square bg-gradient-to-br ${member.background} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl text-white transform group-hover:scale-110 transition-transform duration-300">
                          {member.avatar}
                        </div>
                      </div>
                    </div>

                  <CardContent className="p-6">
                      <Heading as="h3" size="lg" className="mb-2 text-gray-900">
                      {member.name}
                    </Heading>
                      <div className="text-primary font-semibold mb-4">
                      {member.position}
                    </div>
                      <Paragraph className="text-gray-700 text-sm leading-relaxed mb-4">
                      {member.description}
                    </Paragraph>
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-gray-800 mb-2">专业领域：</div>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.expertise.map((skill, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

        {/* 发展历程 */}
        <Section className="py-16">
        <Container>
            <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                  发展历程
              </Heading>
                <Paragraph size="lg" className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  从初创到行业领先，我们一步一个脚印，
                  不断创新突破，为客户创造价值。
              </Paragraph>
            </motion.div>
          </div>

            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
            <motion.div
                    key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">
                            {milestone.year}
                          </div>
                          <Heading as="h3" size="lg" className="mb-3 text-gray-900">
                            {milestone.title}
                    </Heading>
                          <Paragraph className="text-gray-700 leading-relaxed mb-4">
                            {milestone.description}
                    </Paragraph>
                          <div className="space-y-2">
                            {milestone.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{achievement}</span>
                              </div>
                            ))}
                    </div>
                  </CardContent>
                </Card>
          </div>

                    {/* 时间节点 */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="w-1/2"></div>
                  </motion.div>
                  ))}
              </div>
          </div>
        </Container>
      </Section>

        {/* 联系我们 CTA */}
        <Section padding="xl" className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Heading as="h2" size="3xl" className="mb-6 text-white">
                  加入我们，共创AR未来
                    </Heading>
                <Paragraph size="lg" className="mb-10 text-white/95 leading-relaxed">
                  我们正在寻找志同道合的伙伴，一起推动AR技术的发展，
                  为各行业创造更大的价值。联系我们，开启合作之旅。
                    </Paragraph>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg font-semibold">
                      联系我们
                    </Button>
                  </Link>
                  <Link href="/careers">
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                      加入团队
                    </Button>
                  </Link>
                </div>
              </motion.div>
          </div>
        </Container>
      </Section>
      </div>
    </Layout>
  );
}