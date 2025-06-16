'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Factory, GraduationCap, ShoppingBag, Heart, Building, Building2,
  Calendar, Clock, Users, TrendingUp, ArrowRight, Star, CheckCircle,
  Eye, ThumbsUp, Award, Target
} from 'lucide-react';
import { Layout } from '../../components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedCase, setSelectedCase] = useState(null);

  // 案例分类
  const categories = [
    { id: '全部', name: '全部案例', count: 12 },
    { id: '工业制造', name: '工业制造', count: 4 },
    { id: '教育培训', name: '教育培训', count: 3 },
    { id: '零售电商', name: '零售电商', count: 2 },
    { id: '医疗健康', name: '医疗健康', count: 2 },
    { id: '建筑设计', name: '建筑设计', count: 1 }
  ];

  // 案例数据
  const cases = [
    {
      id: 1,
      title: '某汽车制造厂AR装配指导系统',
      category: '工业制造',
      client: '某知名汽车制造企业',
      description: '为汽车制造企业开发的AR装配指导系统，通过AR技术为工人提供实时装配指导，大幅提升装配效率和质量。',
      challenge: '传统装配流程依赖纸质图纸，容易出错，培训周期长，质量控制困难。',
      solution: '开发AR装配指导系统，实时显示装配步骤、零件信息和质量检查点，提供智能错误检测和纠正功能。',
      results: [
        '装配效率提升40%',
        '装配错误率降低65%',
        '新员工培训时间减少50%',
        '质量检测准确率提升30%'
      ],
      technologies: ['AR引擎', 'SLAM定位', '物体识别', '数据分析'],
      duration: '6个月',
      teamSize: '8人',
      image: '/images/cases/automotive-assembly.jpg',
      icon: <Factory className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-700',
      status: '已完成',
      year: '2023',
      tags: ['工业4.0', '智能制造', '质量控制'],
      metrics: {
        efficiency: '+40%',
        accuracy: '+65%',
        training: '-50%',
        satisfaction: '95%'
      }
    },
    {
      id: 2,
      title: '某医科大学AR解剖教学平台',
      category: '教育培训',
      client: '知名医科大学',
      description: '为医科大学开发的AR解剖教学平台，让学生通过AR技术进行3D人体解剖学习，提升教学效果。',
      challenge: '传统解剖教学依赖标本和图片，学习效果有限，学生理解困难，教学成本高。',
      solution: '开发AR解剖教学平台，提供3D人体模型、器官结构展示、交互式学习和考核评估功能。',
      results: [
        '学习效果提升60%',
        '学生参与度提升80%',
        '教学成本降低40%',
        '知识留存率提升50%'
      ],
      technologies: ['3D建模', 'AR渲染', '交互设计', '学习分析'],
      duration: '4个月',
      teamSize: '6人',
      image: '/images/cases/medical-education.jpg',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-green-500 to-green-700',
      status: '已完成',
      year: '2023',
      tags: ['医学教育', '3D教学', '虚拟解剖'],
      metrics: {
        learning: '+60%',
        engagement: '+80%',
        cost: '-40%',
        retention: '+50%'
      }
    },
    {
      id: 3,
      title: '某电商平台AR虚拟试穿系统',
      category: '零售电商',
      client: '大型电商平台',
      description: '为电商平台开发的AR虚拟试穿系统，让用户在线试穿服装，提升购物体验和转化率。',
      challenge: '在线购物无法试穿，退货率高，用户体验差，转化率低。',
      solution: '开发AR虚拟试穿系统，支持实时试穿、尺寸匹配、颜色选择和社交分享功能。',
      results: [
        '转化率提升35%',
        '退货率降低45%',
        '用户满意度提升70%',
        '平均停留时间增加60%'
      ],
      technologies: ['人体识别', 'AR渲染', '尺寸算法', '云端处理'],
      duration: '5个月',
      teamSize: '10人',
      image: '/images/cases/virtual-try-on.jpg',
      icon: <ShoppingBag className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-700',
      status: '已完成',
      year: '2023',
      tags: ['电商营销', '虚拟试穿', '用户体验'],
      metrics: {
        conversion: '+35%',
        returns: '-45%',
        satisfaction: '+70%',
        engagement: '+60%'
      }
    },
    {
      id: 4,
      title: '某医院AR手术导航系统',
      category: '医疗健康',
      client: '三甲医院',
      description: '为医院开发的AR手术导航系统，为外科医生提供精确的手术导航和实时指导。',
      challenge: '传统手术依赖医生经验，精度有限，风险较高，学习曲线陡峭。',
      solution: '开发AR手术导航系统，提供3D解剖结构显示、实时定位、风险提示和手术记录功能。',
      results: [
        '手术精度提升30%',
        '手术时间缩短25%',
        '并发症减少40%',
        '医生满意度95%'
      ],
      technologies: ['医学影像', '3D重建', '精确定位', '实时渲染'],
      duration: '8个月',
      teamSize: '12人',
      image: '/images/cases/surgery-navigation.jpg',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-red-700',
      status: '已完成',
      year: '2023',
      tags: ['精准医疗', '手术导航', '医疗安全'],
      metrics: {
        precision: '+30%',
        time: '-25%',
        complications: '-40%',
        satisfaction: '95%'
      }
    },
    {
      id: 5,
      title: '某制造企业AR设备维护平台',
      category: '工业制造',
      client: '大型制造企业',
      description: '为制造企业开发的AR设备维护平台，为维护人员提供可视化维护指导和远程专家支持。',
      challenge: '设备维护依赖经验，故障诊断困难，维修效率低，安全风险高。',
      solution: '开发AR设备维护平台，提供故障诊断、维修指导、安全提醒和维护记录功能。',
      results: [
        '维修效率提升45%',
        '故障率降低35%',
        '安全事故减少80%',
        '维护成本降低30%'
      ],
      technologies: ['故障诊断', 'AR指导', '远程协作', '数据分析'],
      duration: '7个月',
      teamSize: '9人',
      image: '/images/cases/equipment-maintenance.jpg',
      icon: <Factory className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-700',
      status: '已完成',
      year: '2023',
      tags: ['预测性维护', '远程支持', '安全管理'],
      metrics: {
        efficiency: '+45%',
        failures: '-35%',
        safety: '-80%',
        cost: '-30%'
      }
    },
    {
      id: 6,
      title: '某职业学院AR技能培训系统',
      category: '教育培训',
      client: '职业技术学院',
      description: '为职业学院开发的AR技能培训系统，为学生提供安全、高效的技能训练环境。',
      challenge: '传统技能培训成本高、风险大、效果有限，实训设备不足。',
      solution: '开发AR技能培训系统，提供虚拟实训环境、技能评估、进度跟踪和证书管理功能。',
      results: [
        '培训效果提升55%',
        '培训成本降低40%',
        '安全事故减少90%',
        '学生满意度92%'
      ],
      technologies: ['技能模拟', '评估算法', '进度跟踪', '证书系统'],
      duration: '5个月',
      teamSize: '7人',
      image: '/images/cases/skills-training.jpg',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-teal-500 to-teal-700',
      status: '已完成',
      year: '2023',
      tags: ['职业培训', '技能认证', '安全培训'],
      metrics: {
        effectiveness: '+55%',
        cost: '-40%',
        safety: '-90%',
        satisfaction: '92%'
      }
    }
  ];

  // 统计数据
  const statistics = [
    {
      label: '成功案例',
      value: '50+',
      description: '已完成项目',
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      label: '客户满意度',
      value: '98%',
      description: '客户好评率',
      icon: <ThumbsUp className="w-8 h-8 text-green-500" />
    },
    {
      label: '效率提升',
      value: '40%',
      description: '平均效率提升',
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />
    },
    {
      label: '服务行业',
      value: '10+',
      description: '覆盖行业数量',
      icon: <Target className="w-8 h-8 text-orange-500" />
    }
  ];

  // 筛选案例
  const filteredCases = useMemo(() => {
    if (selectedCategory === '全部') {
      return cases;
    }
    return cases.filter(caseItem => caseItem.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Layout>
      <SEO
        title="成功案例 - 武汉凡尘合创科技"
        description="查看武汉凡尘合创的AR项目成功案例，涵盖工业制造、教育培训、零售电商、医疗健康等多个行业的实际应用案例。"
        keywords="AR案例, 增强现实案例, 工业AR案例, 教育AR案例, 零售AR案例, 医疗AR案例"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* 面包屑导航 */}
        <Container className="pt-8">
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '案例', href: '/cases' }
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
                成功案例展示
              </Heading>
              <Paragraph size="lg" className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                探索我们为不同行业客户打造的AR解决方案，
                每个案例都展现了AR技术在实际业务中的强大价值和创新应用，
                助力企业实现数字化转型和业务增长。
              </Paragraph>
            </motion.div>
        </Container>
      </Section>

        {/* 统计数据 */}
        <Section className="py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
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

        {/* 案例分类筛选 */}
        <Section className="py-8">
        <Container>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
              <Button
                variant={selectedCategory === category.id ? 'primary' : 'outline'}
                    size="md"
                onClick={() => setSelectedCategory(category.id)}
                    className="transition-all duration-300 hover:scale-105 font-semibold"
              >
                {category.name}
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
              </Button>
                </motion.div>
            ))}
          </div>
        </Container>
      </Section>

        {/* 案例列表 */}
        <Section className="py-8">
        <Container>
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredCases.map((caseItem, index) => (
              <motion.div
                  key={caseItem.id}
                  layout
                initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden">
                    {/* 案例头部 */}
                    <div className={`aspect-video bg-gradient-to-br ${caseItem.color} rounded-t-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                          {caseItem.icon}
                        </div>
                      </div>
                      {/* 分类标签 */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                          {caseItem.category}
                        </span>
                      </div>
                      {/* 状态标签 */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-green-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                          {caseItem.status}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      {/* 案例标题和客户 */}
                      <div className="mb-6">
                        <Heading as="h3" size="lg" className="mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {caseItem.title}
                        </Heading>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {caseItem.client}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {caseItem.year}
                          </span>
                        </div>
                        <Paragraph className="text-gray-700 leading-relaxed">
                          {caseItem.description}
                        </Paragraph>
                      </div>
                      
                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {caseItem.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                    </div>
                    
                      {/* 关键成果 */}
                      <div className="space-y-3 mb-6">
                        <div className="text-sm font-semibold text-gray-800 mb-2">关键成果：</div>
                        {caseItem.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* 项目信息 */}
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-gray-600">项目周期</div>
                          <div className="font-semibold text-gray-800">{caseItem.duration}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600">团队规模</div>
                          <div className="font-semibold text-gray-800">{caseItem.teamSize}</div>
                      </div>
                    </div>
                    
                      {/* 查看详情按钮 */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-600">
                          了解更多详情
                    </div>
                        <Link href={`/cases/${caseItem.id}`}>
                          <Button size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            查看详情
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </motion.div>

            {/* 无案例提示 */}
            {filteredCases.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <Heading as="h3" size="lg" className="mb-4 text-gray-700">
                  暂无相关案例
                    </Heading>
                <Paragraph className="text-gray-600">
                  请尝试选择其他分类或联系我们了解更多案例
                    </Paragraph>
              </motion.div>
            )}
        </Container>
      </Section>

      {/* CTA Section */}
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
                  让我们为您打造下一个成功案例
              </Heading>
                <Paragraph size="lg" className="mb-10 text-white/95 leading-relaxed">
                  每个成功案例的背后都有我们专业团队的精心设计和技术创新。
                  联系我们，让AR技术为您的业务创造更大价值。
              </Paragraph>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg font-semibold">
                      开始合作
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                      了解服务
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