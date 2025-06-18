import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Layout } from '@/components/layout'
import { SEO } from '@/components/seo'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ArrowLeft, Download, Share2 } from 'lucide-react'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import image from 'next/image'

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

// 产品基本信息（用于SEO和导航）
const productInfo: Record<string, { title: string; category: string; description: string }> = {
  '1': {
    title: 'AR工业装配指导系统',
    category: '工业制造',
    description: '为制造业提供精确的装配指导，通过AR技术显示装配步骤和注意事项，大幅提升装配效率和质量。'
  },
  '2': {
    title: 'AR设备维护平台',
    category: '工业制造',
    description: '通过AR技术为设备维护人员提供可视化指导，包括故障诊断、维修步骤和安全提醒。'
  },
  '3': {
    title: 'AR质量检测系统',
    category: '工业制造',
    description: '利用AR技术进行产品质量检测，实时显示检测结果和质量标准对比。'
  },
  '4': {
    title: 'AR沉浸式教学平台',
    category: '教育培训',
    description: '为教育机构提供沉浸式AR学习体验，让抽象概念变得具体可见，提高学习效果。'
  },
  '5': {
    title: 'AR技能培训系统',
    category: '教育培训',
    description: '为企业和职业院校提供AR技能培训解决方案，安全高效地进行技能训练。'
  },
  '6': {
    title: 'AR虚拟试穿系统',
    category: '零售电商',
    description: '为零售商提供AR虚拟试穿解决方案，让顾客在线体验产品，提升购物体验和转化率。'
  },
  '7': {
    title: 'AR产品展示平台',
    category: '零售电商',
    description: '为品牌商提供AR产品展示解决方案，让顾客全方位了解产品特性和功能。'
  },
  '8': {
    title: 'AR手术导航系统',
    category: '医疗健康',
    description: '为医疗机构提供AR手术导航解决方案，提高手术精度和安全性。'
  },
  '9': {
    title: 'AR医学培训平台',
    category: '医疗健康',
    description: '为医学院校和医疗机构提供AR医学培训解决方案，提升医学教育质量。'
  },
  '10': {
    title: 'AR建筑可视化系统',
    category: '建筑设计',
    description: '为建筑设计师和房地产开发商提供AR建筑可视化解决方案，提升设计展示效果。'
  },
  '11': {
    title: 'AR室内设计平台',
    category: '建筑设计',
    description: '为室内设计师提供AR室内设计解决方案，让客户直观体验设计效果。'
  },
  '12': {
    title: 'AR互动游戏平台',
    category: '娱乐游戏',
    description: '为游戏开发商和娱乐场所提供AR互动游戏解决方案，创造全新的娱乐体验。'
  }
}

async function getProductContent(id: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'md', 'products', `${id}.md`)
    const content = await fs.readFile(filePath, 'utf8')
    return content
  } catch (error) {
    console.error(`Error reading product ${id} markdown file:`, error)
    return null
  }
}

import Image from 'next/image'
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  
  // 检查产品是否存在
  const product = productInfo[id]
  if (!product) {
    notFound()
  }

  // 获取Markdown内容
  const content = await getProductContent(id)
  if (!content) {
    notFound()
  }

  return (
    <Layout>
      <SEO
        title={`${product.title} - 武汉凡尘合创科技`}
        description={product.description}
        keywords={`${product.title}, AR产品, ${product.category}, 增强现实`}
      />

      {/* 返回导航 - 保持浅色 */}
      <Section className="py-8 bg-gray-50 border-b">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/products">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                返回产品列表
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                分享
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                下载资料
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 产品详情内容 - 改为浅色背景 + 深色文字 */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* 产品标题和分类 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-blue-100 text-sm font-medium rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Markdown内容 - 使用浅色主题 */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, className, children, ...props }: { node?: any, className?: string, children?: any }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return match && !('inline' in props) ? (
                      <SyntaxHighlighter
                        style={tomorrow}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  },
                  table({ children }) {
                    return (
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          {children}
                        </table>
                      </div>
                    )
                  },
                  th({ children }) {
                    return (
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {children}
                      </th>
                    )
                  },
                  td({ children }) {
                    return (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {children}
                      </td>
                    )
                  },
                  blockquote({ children }) {
                    return (
                      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                        {children}
                      </blockquote>
                    )
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* 联系咨询 */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  想了解更多？
                </h3>
                <p className="text-gray-600 mb-6">
                  我们的专业团队将为您提供详细的产品介绍和定制化解决方案
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="px-8 text-black">
                      立即咨询
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="px-8">
                      预约演示
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

// 生成静态路径
export async function generateStaticParams() {
  return Object.keys(productInfo).map((id) => ({
    id,
  }))
}