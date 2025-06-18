import { Layout } from '../../../components/layout';
import { Container, Section, Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import { PageBreadcrumb } from '@/components/ui/Breadcrumb';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';
import Link from 'next/link';
import Image from 'next/image';

export default function ARVirtualTeachingClassroom() {
  return (
    <Layout>
      <EnhancedSEO
        title="AR智慧教育平台 - 虚拟教学课堂解决方案"
        description="通过增强现实技术革新传统教育模式，为K-12教育、高等教育和职业培训提供沉浸式学习体验"
        keywords="AR教育, 虚拟课堂, 智慧教育, 增强现实教学, STEM教育"
        canonical="/cases/ar-virtual-teaching-classroom"
      />

      {/* Breadcrumb */}
      <Section padding="sm" className="bg-gray-50">
        <Container>
          <PageBreadcrumb />
        </Container>
      </Section>

      {/* Hero Section */}
      <Section padding="none" className="relative overflow-hidden">
        <div className="relative min-h-[600px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="AR智慧教育平台"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-transparent" />
          <div className="absolute inset-0 flex items-center py-24 lg:py-32">
            <Container>
              <div className="max-w-3xl text-white">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  教育科技创新案例
                </div>
                <Heading as="h1" size="4xl" className="mb-6 text-white leading-tight">
                  AR智慧教育平台
                  <span className="block text-blue-300 mt-2">重塑未来教育体验</span>
                </Heading>
                <Paragraph size="xl" className="mb-8 text-gray-200 leading-relaxed">
                  通过将虚拟内容与真实世界相结合，为K-12教育、高等教育和职业培训提供沉浸式学习体验，覆盖科学、历史、地理、艺术等多个学科领域。
                </Paragraph>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    了解解决方案
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                    观看演示视频
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Section>

      {/* 项目概述 */}
      <Section padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                项目概述
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <Paragraph size="lg" className="text-gray-700 leading-relaxed mb-8">
                AR智慧教育平台是一个综合性的增强现实教育解决方案，通过将虚拟内容与真实世界相结合，为K-12教育、高等教育和职业培训提供沉浸式学习体验。该平台覆盖科学、历史、地理、艺术等多个学科领域。
              </Paragraph>
            </div>

            {/* 核心优势 */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <Heading as="h3" size="lg" className="mb-4">沉浸式学习</Heading>
                  <Paragraph className="text-gray-600">通过AR技术创造身临其境的学习环境，让抽象概念变得具体可感</Paragraph>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <Heading as="h3" size="lg" className="mb-4">多学科覆盖</Heading>
                  <Paragraph className="text-gray-600">涵盖科学、历史、地理、艺术等多个学科，提供全方位教育解决方案</Paragraph>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <Heading as="h3" size="lg" className="mb-4">个性化学习</Heading>
                  <Paragraph className="text-gray-600">AI驱动的个性化内容推荐，满足不同学生的学习需求和进度</Paragraph>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 教育挑战分析 */}
      <Section padding="xl" className="bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" className="mb-6">教育挑战分析</Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto">
                深入分析传统教育面临的痛点，为AR智慧教育平台的设计提供科学依据
              </Paragraph>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Heading as="h3" size="2xl" className="mb-8 text-red-600">传统教育痛点</Heading>
                <div className="space-y-6">
                  {[
                    { title: "抽象概念理解困难", desc: "学生难以理解抽象的科学概念" },
                    { title: "学习兴趣不足", desc: "传统教学方式缺乏互动性和趣味性" },
                    { title: "个性化学习缺失", desc: "无法满足不同学生的学习需求" },
                    { title: "实验条件限制", desc: "危险或昂贵的实验无法在课堂进行" },
                    { title: "地域资源差异", desc: "优质教育资源分布不均" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <Heading as="h4" size="md" className="mb-2">{item.title}</Heading>
                        <Paragraph className="text-gray-600">{item.desc}</Paragraph>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Heading as="h3" size="2xl" className="mb-8 text-blue-600">现代教育需求</Heading>
                <div className="space-y-6">
                  {[
                    { title: "数字化原住民", desc: "新一代学生更适应数字化学习方式" },
                    { title: "STEM教育重视", desc: "科学、技术、工程、数学教育需求增长" },
                    { title: "21世纪技能", desc: "批判性思维、创造力、协作能力培养" },
                    { title: "终身学习", desc: "快速变化的社会需要持续学习能力" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div>
                        <Heading as="h4" size="md" className="mb-2">{item.title}</Heading>
                        <Paragraph className="text-gray-600">{item.desc}</Paragraph>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 解决方案设计 */}
      <Section padding="xl">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" className="mb-6">解决方案设计</Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto">
                基于先进的AR技术和教育理念，构建全方位的智慧教育生态系统
              </Paragraph>
            </div>

            {/* 核心技术架构 */}
            <div className="mb-16">
              <Heading as="h3" size="2xl" className="mb-8 text-center">核心技术架构</Heading>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <CardTitle>AR渲染引擎</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>跨平台支持：支持iOS、Android、Windows等多平台</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>高性能渲染：优化的3D渲染引擎确保流畅体验</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>实时追踪：精确的物体和环境追踪技术</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>云端计算：复杂计算任务云端处理，降低设备要求</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    <CardTitle>内容管理系统</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>多媒体资源库：丰富的3D模型、动画、音频资源</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>课程编辑器：教师可自主创建AR教学内容</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>版本控制：内容版本管理和更新机制</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>权限管理：细粒度的用户权限控制</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 学科应用模块 */}
            <div className="mb-16">
              <Heading as="h3" size="2xl" className="mb-8 text-center">学科应用模块</Heading>
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <Heading as="h4" size="lg" className="mb-4">科学教育</Heading>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 虚拟物理实验：电磁学、光学、力学实验</li>
                      <li>• 分子结构展示：3D分子模型互动学习</li>
                      <li>• 天体运动模拟：太阳系、星系运动演示</li>
                      <li>• 量子物理可视化：抽象概念的直观展示</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <Heading as="h4" size="lg" className="mb-4">历史文化教育</Heading>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 历史重现：古代文明和历史事件的3D重现</li>
                      <li>• 文物探索：珍贵文物的高精度3D展示</li>
                      <li>• 地理探险：世界地理的沉浸式探索</li>
                      <li>• 文化体验：不同文化的虚拟体验</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <Heading as="h4" size="lg" className="mb-4">语言学习</Heading>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 情境对话：真实场景中的语言交流练习</li>
                      <li>• 发音纠正：AI辅助的发音评估和纠正</li>
                      <li>• 文化背景：语言背后的文化背景展示</li>
                      <li>• 游戏化学习：通过AR游戏学习语言</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 实施案例 */}
      <Section padding="xl" className="bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" className="mb-6">实施案例</Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto">
                在全球范围内的成功实施案例，验证了AR智慧教育平台的实际效果
              </Paragraph>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* 新加坡国立大学案例 */}
              <Card className="border-0 shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="新加坡国立大学AR化学实验室"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      高等教育
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Heading as="h3" size="xl" className="mb-4">新加坡国立大学AR化学实验室</Heading>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">合作时间</span>
                      <span className="font-medium">2022年9月启动</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">覆盖范围</span>
                      <span className="font-medium">化学系本科生和研究生</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">设备配置</span>
                      <span className="font-medium">HoloLens 2 + iPad Pro</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">45%</div>
                      <div className="text-sm text-gray-600">学习效率提升</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">92%</div>
                      <div className="text-sm text-gray-600">学生满意度</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">0</div>
                      <div className="text-sm text-gray-600">安全事故</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">60%</div>
                      <div className="text-sm text-gray-600">成本节约</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 美国加州中学案例 */}
              <Card className="border-0 shadow-xl">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="美国加州中学STEM教育项目"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      K-12教育
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Heading as="h3" size="xl" className="mb-4">美国加州中学STEM教育项目</Heading>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">参与学校</span>
                      <span className="font-medium">50所中学</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">覆盖学生</span>
                      <span className="font-medium">15,000名学生</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">实施周期</span>
                      <span className="font-medium">2021-2024年</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">65%</div>
                      <div className="text-sm text-gray-600">STEM兴趣提升</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">20%</div>
                      <div className="text-sm text-gray-600">成绩改善</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-1">500</div>
                      <div className="text-sm text-gray-600">教师培训</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 mb-1">显著</div>
                      <div className="text-sm text-gray-600">创新性增强</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 项目成果 */}
      <Section padding="xl">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" className="mb-6">项目成果</Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto">
                通过数据驱动的评估体系，全面展示AR智慧教育平台带来的积极影响
              </Paragraph>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* 教育效果 */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center">
                  <CardTitle>教育效果</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                      <div className="text-sm text-gray-600">学习兴趣提升</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                      <div className="text-sm text-gray-600">知识保留率提高</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                      <div className="text-sm text-gray-600">理解速度提升</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 教师发展 */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center">
                  <CardTitle>教师发展</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">数字素养大幅提升</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">教学方法创新</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">工作效率显著提高</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">职业满意度提升</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 社会影响 */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center">
                  <CardTitle>社会影响</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">促进教育公平</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">提高人才培养质量</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">推动产业发展</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">扩大国际影响力</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 技术创新 */}
      <Section padding="xl" className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" className="mb-6 text-white">技术创新</Heading>
              <Paragraph size="lg" className="text-gray-300 max-w-3xl mx-auto">
                持续的技术创新是AR智慧教育平台保持领先地位的核心驱动力
              </Paragraph>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Heading as="h3" size="2xl" className="mb-8 text-blue-300">AR技术突破</Heading>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Heading as="h4" size="lg" className="mb-3 text-white">低延迟渲染</Heading>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 自主研发的渲染优化算法</li>
                      <li>• 边缘计算减少网络延迟</li>
                      <li>• 基于用户行为的预测性渲染</li>
                      <li>• 根据设备性能自动调整渲染质量</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Heading as="h4" size="lg" className="mb-3 text-white">多人协作</Heading>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 多用户实时同步技术</li>
                      <li>• 云端协调多用户交互</li>
                      <li>• 智能的操作冲突解决机制</li>
                      <li>• 灵活的用户角色和权限管理</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Heading as="h3" size="2xl" className="mb-8 text-purple-300">教育技术创新</Heading>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Heading as="h4" size="lg" className="mb-3 text-white">自适应学习</Heading>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 基于大数据的学习行为分析</li>
                      <li>• AI驱动的个性化内容推荐</li>
                      <li>• 根据学习进度自动调节内容难度</li>
                      <li>• 智能优化个人学习路径</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Heading as="h4" size="lg" className="mb-3 text-white">评估系统</Heading>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 学习过程中的实时能力评估</li>
                      <li>• 知识、技能、态度的综合评价</li>
                      <li>• 直观的学习进度和成果报告</li>
                      <li>• 学习成果的预测和预警</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 未来发展 */}
      <Section padding="xl" className="bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading as="h2" size="3xl" className="mb-6">未来发展</Heading>
              <Paragraph size="lg" className="text-gray-600 max-w-3xl mx-auto">
                面向未来的技术演进和应用拓展，构建更加完善的教育生态系统
              </Paragraph>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Heading as="h3" size="2xl" className="mb-8 text-blue-600">技术演进</Heading>
                <div className="space-y-6">
                  {[
                    { title: "AI深度融合", desc: "与人工智能技术深度融合" },
                    { title: "5G应用", desc: "充分利用5G网络的高速低延迟特性" },
                    { title: "脑机接口", desc: "探索脑机接口在教育中的应用" },
                    { title: "量子计算", desc: "为复杂科学模拟提供量子计算支持" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <Heading as="h4" size="md" className="mb-2">{item.title}</Heading>
                        <Paragraph className="text-gray-600">{item.desc}</Paragraph>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Heading as="h3" size="2xl" className="mb-8 text-purple-600">应用拓展</Heading>
                <div className="space-y-6">
                  {[
                    { title: "全学科覆盖", desc: "扩展到所有学科领域" },
                    { title: "全龄段服务", desc: "从幼儿教育到终身学习的全覆盖" },
                    { title: "职业培训", desc: "扩展到职业技能培训领域" },
                    { title: "特殊教育", desc: "为特殊需求学生提供定制化解决方案" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-purple-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <Heading as="h4" size="md" className="mb-2">{item.title}</Heading>
                        <Paragraph className="text-gray-600">{item.desc}</Paragraph>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 项目团队 */}
      <Section padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" size="3xl" className="mb-6">项目团队</Heading>
            <Paragraph size="lg" className="text-gray-600 mb-12">
              由150+人的跨学科团队打造，汇聚全球顶尖的技术专家和教育专家
            </Paragraph>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">150+</span>
                </div>
                <Heading as="h4" size="md" className="mb-2">核心团队</Heading>
                <Paragraph className="text-gray-600 text-sm">跨学科专业团队</Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">50+</span>
                </div>
                <Heading as="h4" size="md" className="mb-2">技术专家</Heading>
                <Paragraph className="text-gray-600 text-sm">AR/VR和AI工程师</Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">30+</span>
                </div>
                <Heading as="h4" size="md" className="mb-2">教育顾问</Heading>
                <Paragraph className="text-gray-600 text-sm">知名教育专家</Paragraph>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">$2亿</span>
                </div>
                <Heading as="h4" size="md" className="mb-2">投资规模</Heading>
                <Paragraph className="text-gray-600 text-sm">累计研发资金</Paragraph>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="xl" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-white">
              准备开启您的AR教育之旅？
            </Heading>
            <Paragraph size="xl" className="mb-8 text-blue-100">
              AR智慧教育平台展示了技术如何革新传统教育模式，为培养21世纪人才提供了强有力的工具和平台。
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">
                  联系我们
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
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