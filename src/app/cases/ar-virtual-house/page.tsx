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
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AR房地产虚拟看房平台 - AR虚拟房屋案例研究',
  description: 'AR房地产虚拟看房平台是一个革命性的房地产科技解决方案，通过增强现实技术为买家、卖家和中介提供沉浸式的房产展示和交易体验。',
  keywords: ['AR房地产', '虚拟看房', '3D建模', 'AR可视化', '虚拟装修', '智能推荐'],
}

export default function ARVirtualHouse() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <Section className="py-4 border-b border-gray-100">
        <Container>
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '案例研究', href: '/cases' },
              { label: 'AR房地产虚拟看房平台' }
            ]}
          />
        </Container>
      </Section>

      {/* Hero Section - 重新设计，使用高质量背景图片 */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景图片层 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80")',
          }}
        ></div>
        
        {/* 渐变遮罩层 */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/70"></div>
        
        {/* 动态粒子效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-30"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* 标签 */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-200 text-sm font-medium mb-8 backdrop-blur-md border border-white/10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-semibold">房地产科技创新领航者</span>
            </div>
            
            {/* 主标题 */}
            <Heading as="h1" className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                AR房地产
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
                虚拟看房平台
              </span>
            </Heading>
            
            {/* 副标题 */}
            <Paragraph className="text-2xl text-blue-100/90 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              通过前沿增强现实技术重新定义房产展示体验，
              <br className="hidden md:block" />
              为买家、卖家和中介提供革命性的沉浸式房地产服务解决方案
            </Paragraph>
            
            {/* 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-10 py-5 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  体验虚拟看房
                </span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 text-lg font-semibold transition-all duration-300 hover:border-white/50"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  观看演示视频
                </span>
              </Button>
            </div>
            
            {/* 滚动提示 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Overview - 优化设计 */}
      <Section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                项目概述
              </div>
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  革命性房地产科技解决方案
                </span>
              </Heading>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
              <Paragraph className="text-xl text-gray-700 leading-relaxed text-center">
                AR房地产虚拟看房平台是一个<span className="font-semibold text-blue-600">革命性的房地产科技解决方案</span>，
                通过增强现实技术为买家、卖家和中介提供<span className="font-semibold text-purple-600">沉浸式的房产展示和交易体验</span>。
                该平台整合了<span className="font-semibold text-pink-600">3D建模、AR可视化、虚拟装修和智能推荐</span>等先进技术，
                重新定义了传统房地产行业的服务模式。
              </Paragraph>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry Pain Points */}
      <Section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-red-300 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-orange-300 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border border-yellow-300 rounded-full"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                痛点分析
              </div>
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  行业痛点分析
                </span>
              </Heading>
              <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <Heading as="h3" className="text-2xl font-bold text-gray-900">
                    传统看房模式的局限
                  </Heading>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">时间成本高</strong>：买家需要花费大量时间实地看房</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">地理限制</strong>：异地购房者无法便捷实地考察</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">信息不对称</strong>：房源信息不够直观和全面</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">决策困难</strong>：难以想象装修后的实际效果</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <Heading as="h3" className="text-2xl font-bold text-gray-900">
                    房地产行业挑战
                  </Heading>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">营销成本高</strong>：传统营销方式成本高昂</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">客户转化率低</strong>：看房到成交的转化率偏低</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">服务效率低</strong>：中介服务效率有待提升</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 mr-4 flex-shrink-0 shadow-sm"></span>
                    <span><strong className="text-gray-800">市场竞争激烈</strong>：需要差异化的竞争优势</span>
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
                解决方案架构
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">🎮</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    AR渲染引擎
                  </Heading>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• 实时渲染：高质量的实时3D场景渲染</li>
                  <li>• 光照模拟：真实的光照和阴影效果</li>
                  <li>• 材质系统：丰富的材质库和纹理系统</li>
                  <li>• 物理引擎：真实的物理交互效果</li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">🏗️</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    3D重建技术
                  </Heading>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• 激光扫描：高精度的房屋结构扫描</li>
                  <li>• 摄影测量：基于照片的3D模型重建</li>
                  <li>• AI辅助建模：人工智能辅助的快速建模</li>
                  <li>• 云端处理：大规模3D数据的云端处理</li>
                </ul>
              </Card>
            </div>

            {/* Function Modules */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl">🏠</span>
                  </div>
                  <Heading as="h4" className="text-lg font-semibold text-gray-900">
                    虚拟看房系统
                  </Heading>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 360度全景浏览</li>
                  <li>• 自由行走模式</li>
                  <li>• 细节放大查看</li>
                  <li>• 信息叠加显示</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 text-2xl">🎨</span>
                  </div>
                  <Heading as="h4" className="text-lg font-semibold text-gray-900">
                    AR装修设计
                  </Heading>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 虚拟家具摆放</li>
                  <li>• 装修方案预览</li>
                  <li>• 材料选择</li>
                  <li>• 预算估算</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-pink-600 text-2xl">🤖</span>
                  </div>
                  <Heading as="h4" className="text-lg font-semibold text-gray-900">
                    智能推荐系统
                  </Heading>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 个性化推荐</li>
                  <li>• 相似房源</li>
                  <li>• 价格分析</li>
                  <li>• 投资建议</li>
                </ul>
              </Card>
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-600 text-xl">🏢</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    万科集团AR售楼中心
                  </Heading>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <Paragraph className="text-sm text-gray-600 mb-2">
                      <strong>项目规模：</strong>全国50个重点项目
                    </Paragraph>
                    <Paragraph className="text-sm text-gray-600">
                      <strong>技术配置：</strong>AR眼镜 + 大屏展示系统
                    </Paragraph>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">300%</div>
                      <div className="text-sm text-gray-600">看房效率提升</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-sm text-gray-600">客户满意度</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">40%</div>
                      <div className="text-sm text-gray-600">转化率提升</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">50%</div>
                      <div className="text-sm text-gray-600">成本降低</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white border border-pink-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-pink-600 text-xl">🔗</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    链家AR二手房平台
                  </Heading>
                </div>
                <div className="space-y-4">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <Paragraph className="text-sm text-gray-600 mb-2">
                      <strong>平台规模：</strong>覆盖100万套二手房源
                    </Paragraph>
                    <Paragraph className="text-sm text-gray-600">
                      <strong>用户规模：</strong>月活跃用户500万
                    </Paragraph>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg">
                      <div className="text-2xl font-bold text-pink-600">200%</div>
                      <div className="text-sm text-gray-600">看房量增长</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg">
                      <div className="text-2xl font-bold text-pink-600">150%</div>
                      <div className="text-sm text-gray-600">效率提升</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg">
                      <div className="text-2xl font-bold text-pink-600">99%</div>
                      <div className="text-sm text-gray-600">空间准确度</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg">
                      <div className="text-2xl font-bold text-pink-600">24h</div>
                      <div className="text-sm text-gray-600">快速建模</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Technical Innovation */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                技术创新
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-cyan-600 text-xl">🔬</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    AR技术突破
                  </Heading>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-cyan-100">
                    <Heading as="h4" className="text-sm font-semibold text-gray-900 mb-2">
                      高精度建模
                    </Heading>
                    <Paragraph className="text-sm text-gray-600">
                      毫米级精度，24小时内完成复杂房屋的3D重建
                    </Paragraph>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-cyan-100">
                    <Heading as="h4" className="text-sm font-semibold text-gray-900 mb-2">
                      实时渲染优化
                    </Heading>
                    <Paragraph className="text-sm text-gray-600">
                      LOD技术、遮挡剔除、材质压缩等优化策略
                    </Paragraph>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">💡</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    业务技术创新
                  </Heading>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <Heading as="h4" className="text-sm font-semibold text-gray-900 mb-2">
                      智能推荐算法
                    </Heading>
                    <Paragraph className="text-sm text-gray-600">
                      多维度分析、用户画像、协同过滤、深度学习
                    </Paragraph>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <Heading as="h4" className="text-sm font-semibold text-gray-900 mb-2">
                      大数据分析
                    </Heading>
                    <Paragraph className="text-sm text-gray-600">
                      市场趋势分析、价格评估模型、投资风险评估
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Business Value */}
      <Section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-4">
                商业价值
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 text-2xl">👥</span>
                  </div>
                  <Heading as="h3" className="text-lg font-semibold text-gray-900">
                    对买家的价值
                  </Heading>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 时间节约：大幅减少实地看房时间</li>
                  <li>• 决策支持：更全面的信息支持决策</li>
                  <li>• 体验提升：更好的看房和选房体验</li>
                  <li>• 风险降低：降低购房决策风险</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl">🏠</span>
                  </div>
                  <Heading as="h3" className="text-lg font-semibold text-gray-900">
                    对卖家的价值
                  </Heading>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 展示效果：更好的房屋展示效果</li>
                  <li>• 营销效率：提高营销推广效率</li>
                  <li>• 成交速度：加快房屋成交速度</li>
                  <li>• 价值提升：通过AR展示提升房屋价值</li>
                </ul>
              </Card>

              <Card className="p-6 bg-white border border-pink-100 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-pink-600 text-2xl">🤝</span>
                  </div>
                  <Heading as="h3" className="text-lg font-semibold text-gray-900">
                    对中介的价值
                  </Heading>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 服务效率：大幅提升服务效率</li>
                  <li>• 客户满意度：提高客户服务满意度</li>
                  <li>• 竞争优势：获得差异化竞争优势</li>
                  <li>• 业务拓展：拓展新的业务模式</li>
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
                未来发展
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-teal-50 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-600 text-xl">🚀</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    技术演进方向
                  </Heading>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>AI深度集成</strong>：更深层次的人工智能集成</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>5G应用</strong>：充分利用5G网络的高速特性</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>区块链应用</strong>：区块链技术在房产交易中的应用</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>IoT集成</strong>：与智能家居和物联网的集成</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-teal-600 text-xl">🌍</span>
                  </div>
                  <Heading as="h3" className="text-xl font-semibold text-gray-900">
                    业务拓展计划
                  </Heading>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>全球化扩展</strong>：向海外市场扩展业务</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>垂直整合</strong>：向房地产产业链上下游扩展</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>生态建设</strong>：构建完整的房地产科技生态</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>新业务模式</strong>：探索基于AR的新业务模式</span>
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
              <div className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mb-6"></div>
            </div>
            <Card className="p-8 bg-white border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-sm">👥</span>
                      </div>
                      <span className="text-gray-700"><strong>核心团队：</strong>120+人的专业团队</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 text-sm">🔧</span>
                      </div>
                      <span className="text-gray-700"><strong>技术专家：</strong>AR/VR工程师、3D建模师、AI算法专家</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-purple-600 text-sm">💼</span>
                      </div>
                      <span className="text-gray-700"><strong>业务专家：</strong>房地产行业专家、产品经理</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-orange-600 text-sm">🤝</span>
                      </div>
                      <span className="text-gray-700"><strong>合作伙伴：</strong>与知名房地产企业和技术公司合作</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 text-sm">💰</span>
                      </div>
                      <span className="text-gray-700"><strong>投资规模：</strong>累计投入1.5亿元研发资金</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-indigo-600 text-sm">📜</span>
                      </div>
                      <span className="text-gray-700"><strong>专利成果：</strong>获得50+项相关技术专利</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section - 优化设计 */}
      <Section className="relative py-24 overflow-hidden">
        {/* 背景图片 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        ></div>
        
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90"></div>
        
        {/* 动态背景元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-blue-200 text-sm font-medium mb-8 backdrop-blur-md border border-white/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              开始您的AR项目
            </div>
            
            <Heading as="h2" className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                准备开始您的
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                AR房地产项目？
              </span>
            </Heading>
            
            <Paragraph className="text-xl md:text-2xl text-blue-100/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              让我们帮助您实现下一个突破性的房地产增强现实解决方案，
              <br className="hidden md:block" />
              开启房地产行业的数字化转型之旅
            </Paragraph>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-10 py-5 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    联系我们
                  </span>
                </Button>
              </Link>
              <Link href="/cases">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 text-lg font-semibold transition-all duration-300 hover:border-white/50"
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    查看更多案例
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}