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

export const metadata: Metadata = {
  title: 'BMW AR汽车显示系统 - 增强现实案例研究',
  description: 'BMW通过AR抬头显示系统和智能制造AR系统，重新定义了驾驶体验和生产效率，成为汽车行业AR技术应用的标杆。',
  keywords: ['BMW', 'AR汽车', '抬头显示', '智能制造', '增强现实', '汽车科技'],
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
              { label: 'BMW AR汽车显示系统' }
            ]}
          />
        </Container>
      </Section>

      {/* Hero Section - 增强渐变和动画效果 */}
      <Section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        {/* 添加动态背景元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
              汽车科技创新领域
            </div>
            <Heading as="h1" className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              BMW AR汽车显示系统
            </Heading>
            <Paragraph className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
              通过AR抬头显示系统和智能制造技术，BMW重新定义了驾驶体验和生产效率，
              成为汽车行业增强现实技术应用的领导者
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-10 py-5 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                查看技术详情
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                观看演示视频
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Overview - 增强卡片设计 */}
      <Section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                项目概述
              </Heading>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
              <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
                探索BMW如何通过创新的AR技术重塑汽车行业
              </Paragraph>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 border border-blue-100 shadow-xl">
              <Paragraph className="text-lg text-gray-700 leading-relaxed text-center">
                BMW作为豪华汽车制造商的领导者，在增强现实技术的应用上走在行业前沿。
                从AR抬头显示系统到智能制造流程，BMW通过AR技术重新定义了驾驶体验和生产效率。
              </Paragraph>
            </div>
          </div>
        </Container>
      </Section>

      {/* Challenges and Opportunities - 美化图标和布局 */}
      <Section className="py-20 bg-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                挑战与机遇
              </Heading>
              <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <Card className="p-10 bg-gradient-to-br from-red-50 to-orange-500 border-l-4 border-red-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Heading as="h3" className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  驾驶安全挑战
                </Heading>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-red-700">注意力分散：</strong>传统导航系统需要驾驶员低头查看</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-red-700">信息过载：</strong>复杂的仪表盘信息影响驾驶专注度</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-red-700">夜间驾驶：</strong>低能见度条件下的安全隐患</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-red-700">复杂路况：</strong>城市复杂路况的导航困难</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-10 bg-gradient-to-br from-orange-50 to-yellow-50 border-l-4 border-orange-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Heading as="h3" className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  制造业痛点
                </Heading>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-orange-700">生产复杂性：</strong>现代汽车制造工艺日益复杂</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-orange-700">质量控制：</strong>传统质检方式效率低下</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-orange-700">培训成本：</strong>新员工培训周期长、成本高</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-orange-700">设备维护：</strong>复杂设备的维护和故障诊断困难</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution Architecture - 增强视觉效果 */}
      <Section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                解决方案架构
              </Heading>
              <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
            </div>
            
            {/* AR HUD System */}
            <div className="mb-20">
              <Card className="p-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 shadow-2xl rounded-3xl">
                <Heading as="h3" className="text-3xl font-bold text-gray-900 mb-10 flex items-center">
                  <span className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-6 text-white shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  AR抬头显示系统（AR HUD）
                </Heading>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <Heading as="h4" className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                      技术特点
                    </Heading>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                        大视场角显示：提供更大的信息显示区域
                      </li>
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                        高分辨率投影：确保信息清晰可读
                      </li>
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                        实时渲染：毫秒级的信息更新响应
                      </li>
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                        环境适应：自动调节亮度和对比度
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <Heading as="h4" className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
                      核心功能
                    </Heading>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></span>
                        导航信息叠加：将导航指示直接投影到道路上
                      </li>
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></span>
                        车道保持辅助：实时显示车道边界和偏离警告
                      </li>
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></span>
                        危险预警：前方障碍物和危险情况的实时提醒
                      </li>
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></span>
                        车速限制显示：当前路段限速信息实时显示
                      </li>
                      <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="w-3 h-3 bg-indigo-400 rounded-full mr-4"></span>
                        兴趣点标注：周边加油站、餐厅等信息标注
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Smart Manufacturing AR System */}
            <Card className="p-12 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 border border-green-200 shadow-2xl rounded-3xl">
              <Heading as="h3" className="text-3xl font-bold text-gray-900 mb-10 flex items-center">
                <span className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 text-white shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                智能制造AR系统
              </Heading>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <Heading as="h4" className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                    生产线应用
                  </Heading>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                      装配指导：AR眼镜显示详细装配步骤
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                      质量检测：实时检测零部件装配质量
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                      工艺优化：通过AR分析优化生产流程
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                      安全监控：实时监控生产安全状况
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <Heading as="h4" className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <span className="w-2 h-8 bg-teal-500 rounded-full mr-3"></span>
                    维护支持
                  </Heading>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-teal-400 rounded-full mr-4"></span>
                      故障诊断：AR辅助快速定位设备故障
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-teal-400 rounded-full mr-4"></span>
                      维修指导：步骤化的维修操作指导
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-teal-400 rounded-full mr-4"></span>
                      零件识别：快速识别和定位需要更换的零件
                    </li>
                    <li className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="w-3 h-3 bg-teal-400 rounded-full mr-4"></span>
                      远程支持：专家远程AR指导维修操作
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Implementation Process */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                实施过程
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            </div>
            
            <div className="space-y-8">
              <Card className="p-8 bg-white border-l-4 border-purple-500 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </span>
                  <div>
                    <Heading as="h3" className="text-xl font-bold text-gray-900">
                      第一阶段：技术研发（2015-2017）
                    </Heading>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ml-16">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      概念验证：AR HUD技术可行性验证
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      原型开发：第一代AR抬头显示原型
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      测试优化：在测试车辆上进行大量测试
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      供应链建设：与AR技术供应商建立合作关系
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-white border-l-4 border-blue-500 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </span>
                  <div>
                    <Heading as="h3" className="text-xl font-bold text-gray-900">
                      第二阶段：产品集成（2018-2020）
                    </Heading>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ml-16">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      系统集成：将AR HUD集成到车辆电子系统
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      软件开发：开发专用的AR导航软件
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      用户测试：大规模用户体验测试
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      量产准备：建立AR HUD的量产能力
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8 bg-white border-l-4 border-green-500 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </span>
                  <div>
                    <Heading as="h3" className="text-xl font-bold text-gray-900">
                      第三阶段：规模化应用（2021-至今）
                    </Heading>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 ml-16">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      车型覆盖：在多个车型系列中配置AR HUD
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      功能扩展：持续增加新的AR功能
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      制造应用：在生产线上大规模部署AR系统
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      生态建设：构建AR应用生态系统
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
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    🚗
                  </span>
                  驾驶安全提升
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">事故率降低</span>
                    <span className="text-2xl font-bold text-emerald-600">25%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">反应时间缩短</span>
                    <span className="text-2xl font-bold text-emerald-600">30%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">导航错误率降低</span>
                    <span className="text-2xl font-bold text-emerald-600">40%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">用户满意度</span>
                    <span className="text-2xl font-bold text-emerald-600">95%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    🏭
                  </span>
                  制造效率提升
                </Heading>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">装配效率提高</span>
                    <span className="text-2xl font-bold text-blue-600">35%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">质量缺陷减少</span>
                    <span className="text-2xl font-bold text-blue-600">50%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">培训时间缩短</span>
                    <span className="text-2xl font-bold text-blue-600">60%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="text-gray-700">维护成本降低</span>
                    <span className="text-2xl font-bold text-blue-600">30%</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Commercial Value */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
              <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-white">
                  💼
                </span>
                商业价值
              </Heading>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>产品差异化：</strong>AR技术成为重要的产品卖点</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>品牌价值提升：</strong>强化了BMW的科技创新形象</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>市场份额增长：</strong>在豪华车市场份额持续增长</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>成本优化：</strong>生产成本和运营成本双重优化</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Technical Innovation */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                技术创新
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    📱
                  </span>
                  AR显示技术突破
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>超大视场角：</strong>实现业界领先的显示视场角</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>高对比度显示：</strong>在强光环境下保持清晰显示</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>低延迟渲染：</strong>实现毫秒级的图像渲染延迟</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>节能优化：</strong>显著降低系统功耗</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    🔧
                  </span>
                  制造技术创新
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>数字孪生集成：</strong>AR与数字孪生技术深度融合</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>AI辅助决策：</strong>基于机器学习的智能决策支持</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>预测性维护：</strong>通过AR实现设备预测性维护</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>协作机器人：</strong>AR辅助的人机协作系统</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Future Development */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                未来规划
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    🚀
                  </span>
                  技术发展路线
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>全息显示：</strong>向全息显示技术演进</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>AI深度集成：</strong>更深层次的人工智能集成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>5G应用：</strong>充分利用5G网络的高速低延迟特性</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>自动驾驶融合：</strong>与自动驾驶技术深度融合</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                <Heading as="h3" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3 text-white">
                    📈
                  </span>
                  应用扩展
                </Heading>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>全车系覆盖：</strong>在所有车型中标配AR技术</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>功能丰富化：</strong>持续增加新的AR应用功能</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>生态合作：</strong>与更多合作伙伴共建AR生态</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>全球推广：</strong>在全球市场推广AR技术</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Team */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                项目团队
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
            </div>
            
            <Card className="p-8 bg-white border border-gray-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-orange-50 rounded-lg">
                    <span className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      👥
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">研发团队</div>
                      <div className="text-orange-600 font-bold">200+人的跨学科研发团队</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <span className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      🎓
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">技术专家</div>
                      <div className="text-blue-600 font-bold">AR/VR专家、汽车工程师、软件开发者</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <span className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      🤝
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">合作伙伴</div>
                      <div className="text-green-600 font-bold">与全球顶级AR技术公司合作</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <span className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      💰
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">投资规模</div>
                      <div className="text-purple-600 font-bold">超过5亿欧元的研发投入</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
                    <span className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      📋
                    </span>
                    <div>
                      <div className="font-semibold text-gray-900">专利成果</div>
                      <div className="text-indigo-600 font-bold">获得100+项AR相关技术专利</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" className="text-3xl font-bold mb-4 text-white">
              准备开始您的AR项目？
            </Heading>
            <Paragraph className="text-xl text-gray-300 mb-8">
              让我们帮助您实现下一个突破性的增强现实解决方案
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