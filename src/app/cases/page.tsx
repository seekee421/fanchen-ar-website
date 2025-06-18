'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Gamepad2,
  ShoppingBag,
  GraduationCap,
  Heart,
  Car,
  Home
} from 'lucide-react';

import Layout from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CardContent } from '@/components/ui/Card';

export default function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  // 案例分类
  const categories = [
    { id: 'all', name: '全部案例', count: 12 },
    { id: 'retail', name: '零售电商', count: 4 },
    { id: 'education', name: '教育培训', count: 3 },
    { id: 'healthcare', name: '医疗健康', count: 2 },
    { id: 'automotive', name: '汽车工业', count: 2 },
    { id: 'real-estate', name: '房地产', count: 1 }
  ];

  // 案例数据
  // 在案例数据数组的开头添加slug字段
  const cases = [
    {
      id: 1,
      slug: 'ar-virtual-fitting-room', // 对应1.md
      title: 'AR虚拟试衣间解决方案',
      category: '零售电商',
      client: '时尚品牌A',
      description: '为知名时尚品牌打造的AR虚拟试衣间，让顾客在家即可体验真实的试衣效果，大幅提升了在线购物体验和转化率。',
      challenges: [
        '传统在线购物无法试穿体验',
        '高退货率影响盈利能力',
        '用户购买决策困难'
      ],
      solutions: [
        '开发高精度3D人体建模技术',
        '实现实时服装物理仿真',
        '集成AI尺寸推荐算法'
      ],
      results: [
        '在线转化率提升45%',
        '退货率降低30%',
        '用户满意度提升至92%',
        '平均购物时长增加60%'
      ],
      technologies: ['ARKit', 'Unity 3D', '机器学习', '计算机视觉'],
      duration: '6个月',
      teamSize: '8人',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      icon: <ShoppingBag className="w-16 h-16" />,
      color: 'from-purple-500 to-pink-500',
      status: '已完成',
      year: '2023',
      tags: ['AR试衣', '电商', '3D建模', 'AI推荐'],
      metrics: {
        roi: '300%',
        users: '50万+',
        satisfaction: '92%'
      }
    },
    {
      id: 2,
      slug: 'ar-virtual-teaching-classroom',
      title: 'AR互动教学平台',
      category: '教育培训',
      client: '知名大学B',
      description: '为高等教育机构开发的AR互动教学平台，将抽象的理论知识转化为可视化的3D模型，提升学习效果。',
      challenges: [
        '抽象概念难以理解',
        '学生参与度不高',
        '传统教学方式单一'
      ],
      solutions: [
        '构建3D知识模型库',
        '开发多人协作AR环境',
        '设计游戏化学习机制'
      ],
      results: [
        '学习效率提升65%',
        '知识掌握率提高40%',
        '学生参与度提升80%',
        '教师满意度达95%'
      ],
      technologies: ['ARCore', 'Unity 3D', '云计算', '多人同步'],
      duration: '8个月',
      teamSize: '10人',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      icon: <GraduationCap className="w-16 h-16" />,
      color: 'from-blue-500 to-cyan-500',
      status: '已完成',
      year: '2023',
      tags: ['AR教育', '3D模型', '多人协作', '游戏化'],
      metrics: {
        roi: '250%',
        users: '10万+',
        satisfaction: '95%'
      }
    },
    {
      id: 3,
      slug: 'ar-virtual-hospital',
      title: 'AR手术导航系统',
      category: '医疗健康',
      client: '三甲医院C',
      description: '为医疗机构开发的AR手术导航系统，通过实时影像叠加技术，为外科医生提供精确的手术指导。',
      challenges: [
        '手术精度要求极高',
        '实时性能要求严格',
        '医疗数据安全性'
      ],
      solutions: [
        '开发毫米级精度追踪',
        '优化实时渲染算法',
        '建立医疗级安全架构'
      ],
      results: [
        '手术精度提升35%',
        '手术时间缩短25%',
        '并发症率降低40%',
        '医生满意度达98%'
      ],
      technologies: ['HoloLens', 'DICOM', '实时追踪', '医疗云'],
      duration: '12个月',
      teamSize: '12人',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      icon: <Heart className="w-16 h-16" />,
      color: 'from-red-500 to-pink-500',
      status: '已完成',
      year: '2023',
      tags: ['AR医疗', '手术导航', '精密追踪', '医疗安全'],
      metrics: {
        roi: '400%',
        users: '500+',
        satisfaction: '98%'
      }
    },
    {
      id: 4,
      slug: 'ar-virtual-car',
      title: 'AR汽车展示系统',
      category: '汽车工业',
      client: '汽车品牌D',
      description: '为汽车制造商打造的AR展示系统，让客户可以在展厅中体验车辆的各种配置和功能。',
      challenges: [
        '展厅空间有限',
        '车型配置展示复杂',
        '客户体验不够直观'
      ],
      solutions: [
        '开发1:1比例AR车型',
        '实现配置实时切换',
        '集成语音交互功能'
      ],
      results: [
        '展厅效率提升50%',
        '客户停留时间增加70%',
        '销售转化率提升35%',
        '客户满意度达94%'
      ],
      technologies: ['ARKit', 'Unity 3D', '语音识别', '云渲染'],
      duration: '5个月',
      teamSize: '6人',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
      icon: <Car className="w-16 h-16" />,
      color: 'from-gray-600 to-gray-800',
      status: '已完成',
      year: '2023',
      tags: ['AR展示', '汽车', '配置切换', '语音交互'],
      metrics: {
        roi: '280%',
        users: '20万+',
        satisfaction: '94%'
      }
    },
    {
      id: 5,
      slug: 'ar-virtual-house',
      title: 'AR房产展示平台',
      category: '房地产',
      client: '地产公司E',
      description: '为房地产开发商创建的AR房产展示平台，让客户可以在售楼处体验未建成房屋的真实效果。',
      challenges: [
        '期房无法实地查看',
        '户型理解困难',
        '装修效果难以想象'
      ],
      solutions: [
        '构建高精度建筑模型',
        '开发装修风格切换',
        '实现虚拟漫游体验'
      ],
      results: [
        '销售效率提升60%',
        '客户决策时间缩短40%',
        '预售转化率提升45%',
        '客户满意度达96%'
      ],
      technologies: ['ARCore', 'Unity 3D', '建筑建模', 'VR集成'],
      duration: '4个月',
      teamSize: '7人',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      icon: <Home className="w-16 h-16" />,
      color: 'from-green-500 to-teal-500',
      status: '已完成',
      year: '2023',
      tags: ['AR房产', '建筑可视化', '虚拟漫游', '装修预览'],
      metrics: {
        roi: '350%',
        users: '30万+',
        satisfaction: '96%'
      }
    }
  ];

  // 筛选案例
  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.category === categories.find(cat => cat.id === selectedCategory)?.name);

  // 统计数据
  const stats = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      value: '50+',
      label: '成功案例',
      description: '覆盖多个行业领域'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      value: '100万+',
      label: '服务用户',
      description: '累计用户体验次数'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      value: '95%',
      label: '客户满意度',
      description: '持续优质服务'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      value: '300%',
      label: '平均ROI',
      description: '投资回报率'
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <Section padding="xl" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Heading as="h1" size="4xl" className="mb-6 text-white">
                成功案例展示
              </Heading>
              <Paragraph size="xl" className="mb-8 text-gray-300 leading-relaxed">
                探索我们为各行业客户打造的创新AR解决方案，见证技术如何改变业务模式，创造卓越价值。
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300 text-white">
                    咨询合作
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black shadow-xl hover:scale-105 transition-all duration-300">
                    了解服务
                  </Button>
                </Link>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* 统计数据 */}
        <Section className="py-16 bg-gray-800">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-700 border-gray-600">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-300 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-400">
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
        <Section className="py-8 bg-gray-900">
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
                    className={`transition-all duration-300 hover:scale-105 font-semibold ${
                      selectedCategory === category.id 
                        ? 'text-white' 
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
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
        <Section className="py-8 bg-gray-900">
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
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden bg-gray-800 border-gray-700">
                    {/* 案例头部 - 使用在线图片 */}
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title}
                        className="w-full h-full object-cover"
                      />
                      {/* 半透明叠加层 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
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
                        <Heading as="h3" size="lg" className="mb-3 text-white group-hover:text-primary transition-colors duration-300">
                          {caseItem.title}
                        </Heading>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {caseItem.client}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {caseItem.year}
                          </span>
                        </div>
                        <Paragraph className="text-gray-300 leading-relaxed">
                          {caseItem.description}
                        </Paragraph>
                      </div>
                      
                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {caseItem.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    
                      {/* 关键成果 */}
                      <div className="space-y-3 mb-6">
                        <div className="text-sm font-semibold text-gray-300 mb-2">关键成果：</div>
                        {caseItem.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{result}</span>
                          </div>
                        ))}
                      </div>

                      {/* 项目信息 */}
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-700 rounded-lg">
                        <div className="text-center">
                          <div className="text-sm text-gray-400">项目周期</div>
                          <div className="font-semibold text-gray-200">{caseItem.duration}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-400">团队规模</div>
                          <div className="font-semibold text-gray-200">{caseItem.teamSize}</div>
                        </div>
                      </div>
                    
                      {/* 查看详情按钮 */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="text-sm text-gray-400">
                          了解更多详情
                        </div>
                        <Link href={`/cases/${caseItem.slug}`}>
                          <Button size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-white">
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
                <Heading as="h3" size="lg" className="mb-4 text-gray-300">
                  暂无相关案例
                </Heading>
                <Paragraph className="text-gray-400">
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
                    <Button variant="primary" size="lg" className="shadow-xl hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg font-semibold text-white">
                      开始合作
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
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