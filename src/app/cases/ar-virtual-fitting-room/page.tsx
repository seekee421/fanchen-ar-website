import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '../../../components/layout';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { PageBreadcrumb } from '@/components/ui/Breadcrumb';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

export default function ARVirtualFittingRoom() {
  return (
    <Layout>
      <EnhancedSEO
        title="AR虚拟试衣间解决方案 - 成功案例"
        description="IKEA Place是宜家于2017年推出的增强现实应用，允许用户在自己的家中虚拟放置宜家家具，为家具购物带来了革命性的变化。"
        keywords="AR虚拟试衣间,增强现实,家具购物,IKEA Place,AR技术"
        canonical="/cases/ar-virtual-fitting-room"
      />

      {/* Breadcrumb */}
      <Section padding="sm" className="bg-gray-50">
        <Container>
          <PageBreadcrumb />
        </Container>
      </Section>

      {/* Hero Section with Background Image */}
      <Section padding="none" className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80"
            alt="AR虚拟试衣间技术展示"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 py-24 lg:py-32 w-full">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  零售电商解决方案
                </div>
                <Heading as="h1" size="4xl" className="text-white mb-6 leading-tight">
                  AR虚拟试衣间
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    解决方案
                  </span>
                </Heading>
                <Paragraph size="xl" className="text-white/90 mb-8 leading-relaxed">
                  革新家具购物体验的增强现实技术应用，让用户在购买前就能看到家具在自己家中的真实效果
                </Paragraph>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    查看演示
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                    技术详情
                  </Button>
                </div>
              </div>
              
              {/* Feature Highlights */}
              <div className="lg:pl-8">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400 text-xl">🎯</span>
                      </div>
                      <Heading as="h3" size="sm" className="text-white">
                        精准定位技术
                      </Heading>
                    </div>
                    <Paragraph className="text-white/80 text-sm">
                      毫米级精度的空间识别和物体定位
                    </Paragraph>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400 text-xl">🎨</span>
                      </div>
                      <Heading as="h3" size="sm" className="text-white">
                        真实渲染效果
                      </Heading>
                    </div>
                    <Paragraph className="text-white/80 text-sm">
                      1:1比例的高质量3D模型渲染
                    </Paragraph>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-green-400 text-xl">⚡</span>
                      </div>
                      <Heading as="h3" size="sm" className="text-white">
                        实时交互体验
                      </Heading>
                    </div>
                    <Paragraph className="text-white/80 text-sm">
                      流畅的实时渲染和交互响应
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Section>

      {/* 项目概述 */}
      <Section padding="xl">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" size="3xl" className="mb-4">
                项目概述
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Paragraph className="text-lg leading-relaxed mb-6 text-gray-700">
                  IKEA Place是宜家于2017年推出的增强现实应用，允许用户在自己的家中虚拟放置宜家家具，为家具购物带来了革命性的变化。
                </Paragraph>
                <Paragraph className="text-gray-600 leading-relaxed">
                  这款应用利用先进的AR技术，让消费者能够在购买前就看到家具在自己家中的真实效果，大大降低了购买风险，提升了购物体验。
                </Paragraph>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="IKEA Place AR应用界面"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 挑战与痛点 */}
      <Section padding="xl" className="bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" size="3xl" className="mb-4">
                挑战与痛点
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
              <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
                传统家具购物面临的核心问题
              </Paragraph>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">📏</span>
                    </div>
                    <div>
                      <Heading as="h4" size="lg" className="mb-3 text-gray-900">
                        空间适配问题
                      </Heading>
                      <Paragraph className="text-gray-600 leading-relaxed">
                        消费者难以判断家具是否适合自己的空间，经常出现购买后发现尺寸不合适的情况
                      </Paragraph>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">❌</span>
                    </div>
                    <div>
                      <Heading as="h4" size="lg" className="mb-3 text-gray-900">
                        尺寸误判
                      </Heading>
                      <Paragraph className="text-gray-600 leading-relaxed">
                        仅凭想象难以准确评估家具的实际大小，导致购买决策困难
                      </Paragraph>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">💸</span>
                    </div>
                    <div>
                      <Heading as="h4" size="lg" className="mb-3 text-gray-900">
                        高退货率
                      </Heading>
                      <Paragraph className="text-gray-600 leading-relaxed">
                        由于尺寸或风格不匹配导致的退货成本高昂，影响客户满意度
                      </Paragraph>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">🤔</span>
                    </div>
                    <div>
                      <Heading as="h4" size="lg" className="mb-3 text-gray-900">
                        决策困难
                      </Heading>
                      <Paragraph className="text-gray-600 leading-relaxed">
                        无法在购买前真实体验家具在家中的效果，增加了购买的不确定性
                      </Paragraph>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 解决方案 */}
      <Section padding="xl">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" size="3xl" className="mb-4">
                解决方案
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
              <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
                基于AR技术的创新解决方案
              </Paragraph>
            </div>
            
            {/* AR技术实现 */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <Heading as="h3" size="2xl" className="mb-4">
                  AR技术实现
                </Heading>
                <Paragraph className="text-gray-600 max-w-2xl mx-auto">
                  采用最先进的增强现实技术，为用户提供沉浸式的购物体验
                </Paragraph>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <Heading as="h4" size="sm" className="mb-2">
                    真实比例3D渲染
                  </Heading>
                  <Paragraph className="text-gray-600 text-sm">
                    提供1:1比例的家具3D模型
                  </Paragraph>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🗺️</span>
                  </div>
                  <Heading as="h4" size="sm" className="mb-2">
                    空间识别技术
                  </Heading>
                  <Paragraph className="text-gray-600 text-sm">
                    利用ARKit技术精确识别房间空间
                  </Paragraph>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <Heading as="h4" size="sm" className="mb-2">
                    实时渲染
                  </Heading>
                  <Paragraph className="text-gray-600 text-sm">
                    即时显示家具在真实环境中的效果
                  </Paragraph>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">🔄</span>
                  </div>
                  <Heading as="h4" size="sm" className="mb-2">
                    多角度查看
                  </Heading>
                  <Paragraph className="text-gray-600 text-sm">
                    支持360度查看家具摆放效果
                  </Paragraph>
                </div>
              </div>
            </div>
            
            {/* 核心功能 */}
            <div>
              <div className="text-center mb-10">
                <Heading as="h3" size="2xl" className="mb-4">
                  核心功能
                </Heading>
                <Paragraph className="text-gray-600 max-w-2xl mx-auto">
                  全方位的AR购物体验功能
                </Paragraph>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-white text-2xl">🏠</span>
                      </div>
                      <Heading as="h4" size="lg" className="text-white mb-2">
                        虚拟家具放置
                      </Heading>
                    </div>
                    <div className="p-6">
                      <Paragraph className="text-gray-600">
                        将宜家产品目录中的家具虚拟放置在用户空间，实现真实的预览效果
                      </Paragraph>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-green-500 to-blue-500 p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-white text-2xl">📐</span>
                      </div>
                      <Heading as="h4" size="lg" className="text-white mb-2">
                        尺寸验证
                      </Heading>
                    </div>
                    <div className="p-6">
                      <Paragraph className="text-gray-600">
                        确保家具尺寸与实际空间匹配，避免购买后的尺寸问题
                      </Paragraph>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-white text-2xl">🎨</span>
                      </div>
                      <Heading as="h4" size="lg" className="text-white mb-2">
                        风格搭配
                      </Heading>
                    </div>
                    <div className="p-6">
                      <Paragraph className="text-gray-600">
                        帮助用户评估家具与现有装饰的协调性，确保整体风格统一
                      </Paragraph>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-white text-2xl">🛒</span>
                      </div>
                      <Heading as="h4" size="lg" className="text-white mb-2">
                        购买引导
                      </Heading>
                    </div>
                    <div className="p-6">
                      <Paragraph className="text-gray-600">
                        直接链接到产品页面完成购买，简化购物流程
                      </Paragraph>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 项目成果 */}
      <Section padding="xl" className="bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" size="3xl" className="mb-4">
                项目成果
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
              <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
                显著的业务成果和用户反馈
              </Paragraph>
            </div>
            
            {/* 业务指标 */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <Heading as="h3" size="2xl" className="mb-4">
                  业务指标
                </Heading>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">-30%</span>
                    </div>
                    <Heading as="h4" size="lg" className="mb-2 text-gray-900">
                      退货率降低
                    </Heading>
                    <Paragraph className="text-gray-600 text-sm">
                      显著减少了因尺寸不匹配导致的退货
                    </Paragraph>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">📈</span>
                    </div>
                    <Heading as="h4" size="lg" className="mb-2 text-gray-900">
                      用户满意度提升
                    </Heading>
                    <Paragraph className="text-gray-600 text-sm">
                      客户购买决策更加自信
                    </Paragraph>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">数百万</span>
                    </div>
                    <Heading as="h4" size="lg" className="mb-2 text-gray-900">
                      下载量突破
                    </Heading>
                    <Paragraph className="text-gray-600 text-sm">
                      应用发布后迅速获得数百万下载
                    </Paragraph>
                  </CardContent>
                </Card>
                
                <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl">🚀</span>
                    </div>
                    <Heading as="h4" size="lg" className="mb-2 text-gray-900">
                      转化率提升
                    </Heading>
                    <Paragraph className="text-gray-600 text-sm">
                      使用AR功能的用户购买转化率显著提高
                    </Paragraph>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* 用户反馈 */}
            <div>
              <div className="text-center mb-10">
                <Heading as="h3" size="2xl" className="mb-4">
                  用户反馈
                </Heading>
              </div>
              
              <Card className="max-w-4xl mx-auto border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-3xl">💬</span>
                    </div>
                    <Paragraph className="text-2xl italic mb-8 text-gray-700 leading-relaxed">
                      "IKEA Place让我能在购买前就看到家具在我家中的实际效果，这大大增强了我的购买信心。现在我再也不用担心买回来的家具不合适了。"
                    </Paragraph>
                    <div className="border-t pt-6">
                      <Heading as="h4" size="lg" className="mb-1">
                        张女士
                      </Heading>
                      <Paragraph className="text-gray-600">
                        宜家忠实用户
                      </Paragraph>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="xl" className="bg-gradient-to-br from-gray-900 to-blue-900">
        <Container>
          <div className="text-center text-white">
            <Heading as="h2" size="3xl" className="text-white mb-4">
              准备开始您的AR项目？
            </Heading>
            <Paragraph size="xl" className="text-white/90 mb-8 max-w-2xl mx-auto">
              联系我们的专家团队，获取定制化的AR解决方案和技术咨询。
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/contact">
                  免费咨询
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/cases">
                  查看更多案例
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}