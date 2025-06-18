'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BookOpen, Download, Search, FileText, Video, Code, 
  ExternalLink, ArrowRight, Clock, Users, Star
} from 'lucide-react';
import { Layout } from '@/components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

export default function Documentation() {
  // 文档分类
  const documentCategories = [
    {
      title: 'API文档',
      description: 'AR SDK和API接口详细说明',
      icon: <Code className="w-8 h-8 text-blue-500" />,
      documents: [
        { name: 'AR Core API', type: 'PDF', size: '2.5MB', updated: '2024-01-15' },
        { name: 'Unity插件文档', type: 'PDF', size: '1.8MB', updated: '2024-01-10' },
        { name: 'Web AR接口', type: 'PDF', size: '1.2MB', updated: '2024-01-08' }
      ]
    },
    {
      title: '用户手册',
      description: '产品使用指南和操作说明',
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      documents: [
        { name: '工业AR用户手册', type: 'PDF', size: '5.2MB', updated: '2024-01-12' },
        { name: '教育AR操作指南', type: 'PDF', size: '3.8MB', updated: '2024-01-09' },
        { name: '零售AR使用说明', type: 'PDF', size: '2.9MB', updated: '2024-01-07' }
      ]
    },
    {
      title: '技术白皮书',
      description: '技术原理和解决方案详解',
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      documents: [
        { name: 'AR技术架构白皮书', type: 'PDF', size: '4.1MB', updated: '2024-01-14' },
        { name: '空间定位技术方案', type: 'PDF', size: '3.3MB', updated: '2024-01-11' },
        { name: '渲染优化技术', type: 'PDF', size: '2.7MB', updated: '2024-01-06' }
      ]
    },
    {
      title: '视频教程',
      description: '产品演示和使用教程视频',
      icon: <Video className="w-8 h-8 text-red-500" />,
      documents: [
        { name: 'AR开发入门教程', type: 'MP4', size: '125MB', updated: '2024-01-13' },
        { name: '项目部署指南', type: 'MP4', size: '89MB', updated: '2024-01-10' },
        { name: '故障排除视频', type: 'MP4', size: '67MB', updated: '2024-01-08' }
      ]
    }
  ];

  // 常见问题
  const faqs = [
    {
      question: '如何获取AR SDK？',
      answer: '您可以通过我们的开发者平台下载最新版本的AR SDK，或联系技术支持获取定制版本。'
    },
    {
      question: 'AR应用的系统要求是什么？',
      answer: 'iOS 12.0+或Android 7.0+，支持ARKit或ARCore，建议使用4GB以上内存的设备。'
    },
    {
      question: '如何集成AR功能到现有应用？',
      answer: '请参考我们的集成指南文档，或观看相关视频教程，也可以联系技术支持获取帮助。'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="技术文档 - 凡尘合创AR"
        description="凡尘合创AR技术文档中心，提供API文档、用户手册、技术白皮书和视频教程等技术资料。"
        keywords="AR文档,API文档,用户手册,技术白皮书,AR教程"
      />
      
      {/* 面包屑导航 */}
      <Section className="py-4 bg-gray-50">
        <Container>
          <Breadcrumb 
            items={[
              { label: '首页', href: '/' },
              { label: '服务支持', href: '/support' },
              { label: '技术文档', href: '/support/documentation' }
            ]}
          />
        </Container>
      </Section>

      {/* 页面标题 */}
      <Section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Heading as="h1" className="text-4xl md:text-5xl font-bold mb-6">
              技术文档
            </Heading>
            <Paragraph className="text-xl opacity-90 max-w-3xl mx-auto">
              完整的技术文档和资源，帮助您快速上手和深入了解我们的AR技术
            </Paragraph>
          </motion.div>
        </Container>
      </Section>

      {/* 搜索栏 */}
      <Section className="py-8 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索文档..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 文档分类 */}
      <Section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <div className="ml-4">
                        <Heading as="h3" className="text-xl font-semibold">
                          {category.title}
                        </Heading>
                        <Paragraph className="text-gray-600 mt-1">
                          {category.description}
                        </Paragraph>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {category.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{doc.name}</div>
                            <div className="text-sm text-gray-500">
                              {doc.type} • {doc.size} • 更新于 {doc.updated}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 常见问题 */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="text-3xl font-bold mb-4">
              常见问题
            </Heading>
            <Paragraph className="text-gray-600 max-w-2xl mx-auto">
              查看常见技术问题的解答，如果没有找到您需要的信息，请联系我们的技术支持团队
            </Paragraph>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h4" className="text-lg font-semibold mb-3">
                      {faq.question}
                    </Heading>
                    <Paragraph className="text-gray-600">
                      {faq.answer}
                    </Paragraph>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 联系支持 */}
      <Section className="py-16">
        <Container>
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <Heading as="h3" className="text-2xl font-bold mb-4">
                需要更多帮助？
              </Heading>
              <Paragraph className="text-lg opacity-90 mb-6">
                我们的技术支持团队随时为您提供专业的技术咨询和解决方案
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    联系技术支持
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/support/training">
                    查看培训服务
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