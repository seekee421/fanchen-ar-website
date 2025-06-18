import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Typography'
import { Paragraph } from '@/components/ui/Typography'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Microsoft HoloLens医疗应用 - AR虚拟医院案例研究',
  description: 'Microsoft HoloLens在医疗领域的应用代表了增强现实技术在专业培训和临床实践中的重大突破，为医学教育、手术培训和远程医疗指导提供了创新解决方案。',
  keywords: ['Microsoft HoloLens', 'AR医疗', '混合现实', '医学教育', '手术培训', '远程医疗'],
}

export default function ARVirtualHospital() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <Section className="py-4 border-b border-gray-100">
        <Container>
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '案例研究', href: '/cases' },
              { label: 'Microsoft HoloLens医疗应用' }
            ]}
          />
        </Container>
      </Section>

      {/* SEO and Meta */}
      {/* <head>
        <title>Microsoft HoloLens医疗应用 - AR虚拟医院案例研究</title>
        <meta name="description" content="Microsoft HoloLens在医疗领域的应用代表了增强现实技术在专业培训和临床实践中的重大突破，为医学教育、手术培训和远程医疗指导提供了创新解决方案。" />
      </head> */}

      {/* Hero Section */}
      <Section className="relative py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              医疗科技创新
            </div>
            <div className="relative">
              <Heading as="h1" className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent relative z-20">
                Microsoft HoloLens
                <br />
                医疗应用革命
              </Heading>
              {/* 医疗场景装饰图片 */}
              <div className="absolute -top-6 -right-12 md:-right-20 w-40 h-40 md:w-56 md:h-56 opacity-25 z-10">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="医疗科技场景"
                  fill
                  className="object-cover rounded-lg filter brightness-125 blur-sm"
                />
              </div>
            </div>
            <Paragraph className="text-xl text-emerald-100 mb-8 leading-relaxed relative z-20">
              通过混合现实技术重新定义医学教育、手术培训和临床实践，
              为医疗行业的数字化转型提供创新解决方案
            </Paragraph>
            {/* 装饰性叠加图片 */}
            <div className="absolute -top-4 -right-8 md:-right-16 w-32 h-32 md:w-48 md:h-48 opacity-20 z-10">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="医疗科技装饰图"
                fill
                className="object-contain filter brightness-150"
              />
            </div>
            {/* 左侧装饰图片 */}
            <div className="absolute -top-8 -left-8 md:-left-16 w-24 h-24 md:w-36 md:h-36 opacity-15 z-10">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="HoloLens装饰图"
                fill
                className="object-contain filter brightness-200"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Overview */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                项目概述
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <Paragraph className="text-lg text-gray-700 leading-relaxed">
                Microsoft HoloLens在医疗领域的应用代表了增强现实技术在专业培训和临床实践中的重大突破。
                该项目通过混合现实技术，为医学教育、手术培训和远程医疗指导提供了创新解决方案。
              </Paragraph>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenges and Requirements */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                挑战与需求
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-shadow">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    🎓
                  </span>
                  传统医疗培训的局限
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>实践机会有限：</strong>医学生缺乏足够的实际操作机会</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>高风险环境：</strong>真实手术环境对初学者风险过高</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>资源稀缺：</strong>尸体标本和高端医疗设备获取困难</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>地域限制：</strong>优质医疗教育资源分布不均</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>成本高昂：</strong>传统培训方式成本极高</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-8 bg-white border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    🏥
                  </span>
                  临床实践痛点
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>复杂手术规划：</strong>复杂手术需要精确的术前规划</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>远程指导需求：</strong>偏远地区需要专家远程指导</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>实时信息获取：</strong>手术过程中需要实时获取患者信息</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>团队协作：</strong>多学科团队需要更好的协作工具</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution Architecture */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                解决方案
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            </div>
            
            {/* Core Technology Architecture */}
            <div className="mb-16">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <Heading as="h3" className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4 text-white">
                    🔧
                  </span>
                  核心技术架构
                </Heading>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white text-sm">🥽</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">混合现实显示</h4>
                    <p className="text-sm text-gray-600">HoloLens 2提供高分辨率全息显示</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white text-sm">🗺️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">空间映射</h4>
                    <p className="text-sm text-gray-600">精确的3D空间识别和追踪</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white text-sm">👋</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">手势识别</h4>
                    <p className="text-sm text-gray-600">自然的手势交互控制</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white text-sm">🎤</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">语音控制</h4>
                    <p className="text-sm text-gray-600">免手术操作的语音指令</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white text-sm">☁️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">云端协作</h4>
                    <p className="text-sm text-gray-600">基于Azure云平台的远程协作</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Application Scenarios */}
            <div className="space-y-8">
              <Heading as="h3" className="text-2xl font-bold text-gray-900 text-center mb-8">
                应用场景
              </Heading>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-lg">🔬</span>
                  </div>
                  <Heading as="h4" className="text-lg font-bold text-gray-900 mb-4 text-center">
                    外科手术培训
                  </Heading>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                      虚拟解剖：3D人体模型的交互式解剖学习
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                      手术模拟：真实手术场景的虚拟模拟
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                      技能评估：客观的技能水平评估系统
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                      重复练习：无限次的安全练习机会
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-lg">🌐</span>
                  </div>
                  <Heading as="h4" className="text-lg font-bold text-gray-900 mb-4 text-center">
                    远程手术指导
                  </Heading>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      实时指导：专家通过AR进行实时手术指导
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      虚拟标注：在真实手术视野中添加虚拟标记
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      多方协作：多位专家同时参与指导
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      录制回放：手术过程录制用于后续学习
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white text-lg">👥</span>
                  </div>
                  <Heading as="h4" className="text-lg font-bold text-gray-900 mb-4 text-center">
                    患者教育
                  </Heading>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      病情可视化：将患者的医学影像3D可视化
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      治疗方案展示：直观展示治疗过程和效果
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      风险告知：清晰展示手术风险和并发症
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Implementation Cases */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                实施案例
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-6"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="p-8 bg-white border-l-4 border-green-500 shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    🏥
                  </span>
                  <div>
                    <Heading as="h3" className="text-xl font-bold text-gray-900">
                      拉丁美洲首例HoloLens手术
                    </Heading>
                    <p className="text-gray-600">2018年，墨西哥完成了拉丁美洲首例使用Microsoft HoloLens的手术</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ml-16">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      术前规划优化：通过AR技术优化手术方案
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      患者沟通：向患者和家属清晰展示手术过程
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      手术精度提升：提高手术的精确性和安全性
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      教育价值：为当地医疗团队提供学习机会
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-white border-l-4 border-blue-500 shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    🦴
                  </span>
                  <div>
                    <Heading as="h3" className="text-xl font-bold text-gray-900">
                      骨科培训应用
                    </Heading>
                    <p className="text-gray-600">AR辅助训练在骨科培训中的突破性应用</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ml-16">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      学习曲线缩短：AR辅助训练显著缩短了学习曲线
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      技能标准化：确保培训质量的一致性
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      客观评估：提供量化的技能评估指标
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      安全环境：在安全环境中进行高风险操作练习
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-white border-l-4 border-purple-500 shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    📚
                  </span>
                  <div>
                    <Heading as="h3" className="text-xl font-bold text-gray-900">
                      医学教育创新
                    </Heading>
                    <p className="text-gray-600">革命性的医学教育应用和创新教学模式</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ml-16">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      HoloHuman应用：虚拟尸体解剖教学
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      HoloPatient系统：虚拟患者病例学习
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      远程教学：突破地域限制的医学教育
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      个性化学习：适应不同学习风格的教育方案
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Results */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                项目成果
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    📈
                  </span>
                  培训效果提升
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">学习效率提高</span>
                    <span className="text-2xl font-bold text-emerald-600">40%</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">技能掌握更快</div>
                    <div className="text-gray-700">复杂操作技能掌握时间缩短</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">错误率降低</div>
                    <div className="text-gray-700">培训过程中的操作错误显著减少</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">知识保留率提升</div>
                    <div className="text-gray-700">长期知识保留效果更好</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    🏥
                  </span>
                  临床应用价值
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">手术精度提升</span>
                    <span className="text-xl font-bold text-blue-600">15-20%</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">并发症减少</div>
                    <div className="text-gray-700">手术并发症发生率降低</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">患者满意度提高</div>
                    <div className="text-gray-700">患者对治疗过程理解度提升</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">医疗成本降低</div>
                    <div className="text-gray-700">减少重复手术和并发症治疗成本</div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    🌍
                  </span>
                  教育普及效果
                </Heading>
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">覆盖范围扩大</div>
                    <div className="text-gray-700">优质医疗教育资源覆盖更多地区</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">师资优化</div>
                    <div className="text-gray-700">减少对顶级专家的依赖</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">持续学习</div>
                    <div className="text-gray-700">支持医生的终身学习和技能更新</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Future Development */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                未来发展
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    🚀
                  </span>
                  技术演进
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>AI深度集成：</strong>结合人工智能提供智能诊断建议</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>5G网络应用：</strong>利用5G实现更流畅的远程协作</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>触觉反馈：</strong>增加触觉反馈提升沉浸感</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>脑机接口：</strong>探索脑机接口在医疗培训中的应用</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    📈
                  </span>
                  应用扩展
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>专科覆盖：</strong>扩展到更多医学专科领域</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>全球部署：</strong>在全球范围内推广应用</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>标准制定：</strong>建立AR医疗应用的行业标准</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>生态建设：</strong>构建完整的AR医疗生态系统</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Team */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                项目团队与合作
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <span className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      👥
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">核心团队</div>
                      <div className="text-orange-600 font-bold">Microsoft混合现实团队</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <span className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      🏥
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">医疗合作伙伴</div>
                      <div className="text-blue-600 font-bold">全球顶级医疗机构</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <span className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      ☁️
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">技术支持</div>
                      <div className="text-green-600 font-bold">Azure云服务团队</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <span className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      💰
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">投资规模</div>
                      <div className="text-purple-600 font-bold">数万美元的研发投入</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <span className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      🌐
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">合作网络</div>
                      <div className="text-indigo-600 font-bold">与全球医学院校建立合作关系</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" className="text-3xl font-bold mb-4 text-white">
              准备开始您的AR医疗项目？
            </Heading>
            <Paragraph className="text-xl text-gray-300 mb-8">
              让我们帮助您实现下一个突破性的医疗增强现实解决方案
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4">
                  联系我们
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4">
                  查看更多案例
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}