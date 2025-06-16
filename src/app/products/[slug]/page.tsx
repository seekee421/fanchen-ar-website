import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { Layout } from '../../../components/layout';
import SEO from '@/components/seo';
import { Container, Section } from '@/components/ui';
import { Heading, Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

import { Metadata } from 'next';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

// 模拟产品数据
const productsData = {
  'industrial-ar': {
    id: 'industrial-ar',
    title: '工业AR解决方案',
    subtitle: '智能制造的未来',
    description: '为制造业提供全面的AR解决方案，包括装配指导、质量检测、维护培训等功能，显著提升生产效率和产品质量。',
    category: '工业制造',
    price: '¥50,000起',
    image: '/images/products/industrial-ar.jpg',
    gallery: [
      '/images/products/industrial-ar-1.jpg',
      '/images/products/industrial-ar-2.jpg',
      '/images/products/industrial-ar-3.jpg',
      '/images/products/industrial-ar-4.jpg'
    ],
    features: [
      '实时装配指导',
      '质量检测识别',
      '远程专家协助',
      '培训模拟系统',
      '数据分析报告',
      '多设备支持'
    ],
    specifications: {
      '跟踪精度': '≤1mm',
      '延迟时间': '≤20ms',
      '支持设备': 'HoloLens, Magic Leap, 移动设备',
      '操作系统': 'Windows, iOS, Android',
      '网络要求': '4G/5G/WiFi',
      '存储空间': '最少2GB可用空间'
    },
    useCases: [
      {
        title: '汽车装配线',
        description: '为汽车制造提供精确的装配指导，减少错误率40%',
        benefits: ['提升效率', '降低成本', '质量保证']
      },
      {
        title: '航空维护',
        description: '复杂设备的维护指导和故障诊断',
        benefits: ['安全保障', '专业培训', '远程支持']
      },
      {
        title: '电子制造',
        description: '精密电子产品的装配和质检',
        benefits: ['精度提升', '缺陷检测', '流程优化']
      }
    ],
    technicalDetails: {
      architecture: '基于云端-边缘计算架构',
      algorithms: ['SLAM定位', '物体识别', '手势追踪'],
      integration: '支持ERP、MES、PLM系统集成',
      security: '企业级安全加密'
    },
    pricing: {
      basic: {
        name: '基础版',
        price: '¥50,000',
        features: ['基础AR功能', '5个并发用户', '标准技术支持']
      },
      professional: {
        name: '专业版',
        price: '¥120,000',
        features: ['完整AR功能', '20个并发用户', '高级分析', '优先技术支持']
      },
      enterprise: {
        name: '企业版',
        price: '定制报价',
        features: ['全功能定制', '无限用户', '专属服务', '本地化部署']
      }
    }
  },
  'education-ar': {
    id: 'education-ar',
    title: '教育AR平台',
    subtitle: '让学习更生动有趣',
    description: '为教育机构提供沉浸式AR学习体验，涵盖K12到高等教育的各个学科，让抽象概念变得具体可见。',
    category: '教育培训',
    price: '¥30,000起',
    image: '/images/products/education-ar.jpg',
    gallery: [
      '/images/products/education-ar-1.jpg',
      '/images/products/education-ar-2.jpg',
      '/images/products/education-ar-3.jpg',
      '/images/products/education-ar-4.jpg'
    ],
    features: [
      '3D模型展示',
      '交互式学习',
      '多媒体内容',
      '学习进度跟踪',
      '协作学习',
      '多语言支持'
    ],
    specifications: {
      '内容库': '1000+教学模型',
      '学科覆盖': '数学、物理、化学、生物、历史等',
      '支持设备': '平板、手机、AR眼镜',
      '用户管理': '支持班级和学校管理',
      '离线模式': '支持离线学习',
      '云端同步': '学习进度云端保存'
    },
    useCases: [
      {
        title: '解剖学教学',
        description: '3D人体模型，可拆解查看各个器官系统',
        benefits: ['直观理解', '互动学习', '记忆深刻']
      },
      {
        title: '化学实验',
        description: '虚拟化学实验室，安全进行各种实验',
        benefits: ['安全无害', '重复实验', '成本节约']
      },
      {
        title: '历史文物',
        description: '古代文物和历史场景的AR重现',
        benefits: ['身临其境', '文化传承', '兴趣激发']
      }
    ],
    technicalDetails: {
      architecture: '云端内容管理+本地渲染',
      algorithms: ['图像识别', '手势交互', '语音识别'],
      integration: '支持LMS学习管理系统',
      security: '学生数据隐私保护'
    },
    pricing: {
      basic: {
        name: '学校版',
        price: '¥30,000',
        features: ['基础内容库', '100个学生账户', '标准支持']
      },
      professional: {
        name: '区域版',
        price: '¥80,000',
        features: ['完整内容库', '500个学生账户', '教师培训', '定制内容']
      },
      enterprise: {
        name: '省市版',
        price: '定制报价',
        features: ['全功能', '无限账户', '本地化服务', '专属开发']
      }
    }
  },
  'retail-ar': {
    id: 'retail-ar',
    title: '零售AR体验',
    subtitle: '重新定义购物体验',
    description: '为零售商提供创新的AR购物体验，包括虚拟试穿、产品展示、导购服务等，提升客户满意度和转化率。',
    category: '零售电商',
    price: '¥40,000起',
    image: '/images/products/retail-ar.jpg',
    gallery: [
      '/images/products/retail-ar-1.jpg',
      '/images/products/retail-ar-2.jpg',
      '/images/products/retail-ar-3.jpg',
      '/images/products/retail-ar-4.jpg'
    ],
    features: [
      '虚拟试穿',
      '产品3D展示',
      '尺寸匹配',
      '风格推荐',
      '社交分享',
      '库存查询'
    ],
    specifications: {
      '试穿精度': '95%以上匹配度',
      '响应时间': '实时渲染',
      '商品类型': '服装、鞋帽、眼镜、珠宝等',
      '平台支持': 'iOS, Android, Web',
      '集成方式': 'SDK/API接口',
      '数据分析': '用户行为分析报告'
    },
    useCases: [
      {
        title: '服装试穿',
        description: '实时试穿各种服装，查看穿着效果',
        benefits: ['减少退货', '提升体验', '增加销量']
      },
      {
        title: '家具摆放',
        description: '在真实空间中预览家具摆放效果',
        benefits: ['空间规划', '购买决策', '客户满意']
      },
      {
        title: '美妆试色',
        description: '虚拟试用化妆品和护肤品',
        benefits: ['色号匹配', '效果预览', '购买信心']
      }
    ],
    technicalDetails: {
      architecture: '移动端优化架构',
      algorithms: ['人脸识别', '身体追踪', '物体检测'],
      integration: '支持电商平台API集成',
      security: '用户隐私数据保护'
    },
    pricing: {
      basic: {
        name: '基础版',
        price: '¥40,000',
        features: ['基础试穿功能', '100个SKU', '标准支持']
      },
      professional: {
        name: '专业版',
        price: '¥100,000',
        features: ['完整功能', '1000个SKU', '数据分析', '定制界面']
      },
      enterprise: {
        name: '企业版',
        price: '定制报价',
        features: ['全功能定制', '无限SKU', '专属服务', 'API集成']
      }
    }
  },
  'medical-ar': {
    id: 'medical-ar',
    title: '医疗AR系统',
    subtitle: '精准医疗新时代',
    description: '为医疗机构提供先进的AR医疗解决方案，包括手术导航、医学教育、康复训练等，提升医疗服务质量和效率。',
    category: '医疗健康',
    price: '¥80,000起',
    image: '/images/products/medical-ar.jpg',
    gallery: [
      '/images/products/medical-ar-1.jpg',
      '/images/products/medical-ar-2.jpg',
      '/images/products/medical-ar-3.jpg',
      '/images/products/medical-ar-4.jpg'
    ],
    features: [
      '手术导航',
      '3D医学影像',
      '远程会诊',
      '医学教育',
      '康复训练',
      '患者教育'
    ],
    specifications: {
      '精度等级': '医疗级(<0.5mm)',
      '认证标准': 'FDA, CE, NMPA',
      '兼容设备': 'HoloLens, Magic Leap, 医用AR设备',
      '数据格式': 'DICOM, NIfTI, STL',
      '集成系统': 'HIS, PACS, RIS',
      '安全标准': 'HIPAA, 医疗数据保护'
    },
    useCases: [
      {
        title: '神经外科手术',
        description: '3D脑部影像叠加，精确定位病灶',
        benefits: ['精度提升', '风险降低', '时间节约']
      },
      {
        title: '骨科手术',
        description: '骨骼3D重建，手术路径规划',
        benefits: ['创伤减少', '恢复加快', '效果改善']
      },
      {
        title: '医学教育',
        description: '3D人体解剖和病理展示',
        benefits: ['理解深入', '培训效率', '成本降低']
      }
    ],
    technicalDetails: {
      architecture: '医疗级安全架构',
      algorithms: ['3D重建', '配准算法', '实时跟踪'],
      integration: '医院信息系统深度集成',
      security: 'HIPAA合规，端到端加密'
    },
    pricing: {
      basic: {
        name: '基础版',
        price: '¥80,000',
        features: ['基础AR功能', '单科室使用', '标准培训']
      },
      professional: {
        name: '专业版',
        price: '¥200,000',
        features: ['完整功能', '多科室使用', '高级培训', '技术支持']
      },
      enterprise: {
        name: '医院版',
        price: '定制报价',
        features: ['全院部署', '定制开发', '专属服务', '长期维护']
      }
    }
  },
  'tourism-ar': {
    id: 'tourism-ar',
    title: '文旅AR导览',
    subtitle: '智慧文旅新体验',
    description: '为文旅景区提供创新的AR导览体验，包括历史重现、互动导览、文化解说等，提升游客体验和景区价值。',
    category: '文旅景区',
    price: '¥35,000起',
    image: '/images/products/tourism-ar.jpg',
    gallery: [
      '/images/products/tourism-ar-1.jpg',
      '/images/products/tourism-ar-2.jpg',
      '/images/products/tourism-ar-3.jpg',
      '/images/products/tourism-ar-4.jpg'
    ],
    features: [
      '历史场景重现',
      '智能导览',
      '多语言解说',
      '互动体验',
      '路线规划',
      '社交分享'
    ],
    specifications: {
      '定位精度': 'GPS + 视觉定位',
      '内容形式': '3D模型、音频、视频、图文',
      '支持语言': '中、英、日、韩等多语言',
      '离线功能': '支持离线下载和浏览',
      '设备要求': '智能手机、平板、AR眼镜',
      '云端管理': '内容管理系统'
    },
    useCases: [
      {
        title: '古建筑复原',
        description: '通过AR技术重现古建筑原貌',
        benefits: ['历史教育', '文化传承', '体验升级']
      },
      {
        title: '博物馆导览',
        description: '文物3D展示和历史背景介绍',
        benefits: ['深度了解', '互动体验', '教育价值']
      },
      {
        title: '自然景观',
        description: '动植物识别和生态科普',
        benefits: ['科普教育', '环保意识', '趣味学习']
      }
    ],
    technicalDetails: {
      architecture: '云端内容+边缘计算',
      algorithms: ['图像识别', 'GPS定位', '语音识别'],
      integration: '景区管理系统集成',
      security: '游客数据隐私保护'
    },
    pricing: {
      basic: {
        name: '景点版',
        price: '¥35,000',
        features: ['基础AR导览', '50个兴趣点', '标准维护']
      },
      professional: {
        name: '景区版',
        price: '¥80,000',
        features: ['完整功能', '200个兴趣点', '多语言', '数据分析']
      },
      enterprise: {
        name: '集团版',
        price: '定制报价',
        features: ['多景区部署', '无限兴趣点', '定制开发', '运营支持']
      }
    }
  },
  'ar-showroom': {
    id: 'ar-showroom',
    title: 'AR场馆展示系统',
    subtitle: '沉浸式产品体验',
    description: '专业的AR场馆展示系统，为企业提供产品展示、客户体验、销售支持等功能，打造未来感十足的展示空间。',
    category: '展示营销',
    price: '¥60,000起',
    image: '/images/products/ar-showroom.jpg',
    gallery: [
      '/images/products/ar-showroom-1.jpg',
      '/images/products/ar-showroom-2.jpg',
      '/images/products/ar-showroom-3.jpg',
      '/images/products/ar-showroom-4.jpg'
    ],
    features: [
      '3D产品展示',
      '虚拟场馆',
      '互动体验',
      '多人协作',
      '数据分析',
      '远程演示'
    ],
    specifications: {
      '渲染质量': '4K高清实时渲染',
      '交互延迟': '<5ms',
      '并发用户': '支持50人同时体验',
      '内容管理': '可视化编辑器',
      '平台支持': 'Web, iOS, Android, AR设备',
      '部署方式': '云端SaaS或本地部署'
    },
    useCases: [
      {
        title: '汽车展厅',
        description: '虚拟汽车展示和配置体验',
        benefits: ['空间节约', '配置灵活', '体验丰富']
      },
      {
        title: '房地产营销',
        description: '样板间和户型的AR展示',
        benefits: ['成本降低', '展示直观', '决策快速']
      },
      {
        title: '工业设备',
        description: '大型设备的虚拟展示和操作',
        benefits: ['运输便利', '演示安全', '功能全面']
      }
    ],
    technicalDetails: {
      architecture: '云端渲染+本地优化',
      algorithms: ['实时渲染', '物理模拟', '交互识别'],
      integration: '支持CRM、ERP系统集成',
      security: '企业级数据安全'
    },
    pricing: {
      basic: {
        name: '标准版',
        price: '¥60,000',
        features: ['基础展示功能', '10个产品模型', '标准支持']
      },
      professional: {
        name: '专业版',
        price: '¥150,000',
        features: ['完整功能', '50个产品模型', '数据分析', '定制界面']
      },
      enterprise: {
        name: '企业版',
        price: '定制报价',
        features: ['无限模型', '多场馆支持', '专属服务', 'API集成']
      }
    }
  }
};

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = productsData[params.slug as keyof typeof productsData];
  
  if (!product) {
    return {
      title: '产品不存在',
      description: '您访问的产品页面不存在',
    };
  }

  return {
    title: `${product.title} - 武汉凡尘合创科技`,
    description: product.description,
    keywords: [product.category, 'AR技术', '增强现实', product.title, '武汉凡尘合创科技'].join(','),
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
      type: 'website',
    },
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productsData[params.slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  // 结构化数据（mock，可后续替换）
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.gallery?.[0] || product.image || '',
    "brand": {
      "@type": "Brand",
      "name": "武汉凡尘合创科技"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": product.price?.replace(/[^\d.]/g, '') || '0',
      "priceCurrency": "CNY"
    }
  };

  return (
    <Layout>
      <EnhancedSEO
        title={`${product.title} - 武汉凡尘合创科技`}
        description={product.description}
        keywords={`${product.category}, AR技术, 增强现实, ${product.title}, 武汉凡尘合创科技`}
        canonical={`/products/${params.slug}`}
        structuredData={structuredData}
      />

      {/* 面包屑导航 */}
      <Section className="bg-gray-50 py-4">
        <Container>
          <Breadcrumb
            items={[
              { label: '首页', href: '/' },
              { label: '产品中心', href: '/products' },
              { label: product.title, href: `/products/${params.slug}` },
            ]}
          />
        </Container>
      </Section>

      {/* 产品头部信息 */}
      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 产品图片 */}
            <div>
              {/* 主图 */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                {product.image ? (
                  <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-gray-700">产品展示图</span>
                )}
              </div>
              {/* 产品图库 */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {product.gallery && product.gallery.map((image, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={image} alt={`${product.title} 图${index + 1}`} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              {/* 返回产品列表按钮 */}
              <div className="mt-8">
                <Link href="/products" className="inline-block text-primary bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg border border-primary/20 transition-colors">
                  ← 返回产品列表
                </Link>
              </div>
            </div>

            {/* 产品信息 */}
            <div>
              <div className="mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
              
              <Heading as="h1" size="3xl" className="mb-4">
                {product.title}
              </Heading>
              
              <Paragraph size="lg" className="text-gray-700 mb-6">
                {product.subtitle}
              </Paragraph>
              
              <Paragraph className="text-gray-700 mb-8">
                {product.description}
              </Paragraph>

              <div className="mb-8">
                <div className="text-3xl font-bold text-primary mb-2">
                  {product.price}
                </div>
                <Paragraph size="sm" className="text-gray-700">
                  具体价格根据需求定制
                </Paragraph>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="flex-1">
                  立即咨询
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  预约演示
                </Button>
                </div>
              </div>
          </div>
        </Container>
      </Section>

      {/* 产品特性 */}
      <Section className="bg-gray-50">
        <Container>
          <Heading as="h2" size="2xl" className="text-center mb-12">
            产品特性
            </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div key={index}>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <Heading as="h3" size="lg" className="mb-3">
                      {feature}
                    </Heading>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 技术规格 */}
      <Section>
        <Container>
          <Heading as="h2" size="2xl" className="text-center mb-12">
                技术规格
              </Heading>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-800">{key}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                  </div>
                </CardContent>
              </Card>
          </div>
        </Container>
      </Section>

      {/* 应用案例 */}
      <Section className="bg-gray-50">
        <Container>
          <Heading as="h2" size="2xl" className="text-center mb-12">
            应用案例
            </Heading>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {product.useCases.map((useCase, index) => (
              <div key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4">
                      {useCase.title}
                    </Heading>
                    <Paragraph className="text-gray-700 mb-6">
                      {useCase.description}
                    </Paragraph>
                    <div>
                      <Heading as="h4" size="md" className="mb-3">
                        核心优势
                      </Heading>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {benefit}
                          </li>
                      ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 价格方案 */}
      <Section>
        <Container>
          <Heading as="h2" size="2xl" className="text-center mb-12">
              价格方案
            </Heading>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(product.pricing).map(([key, plan], index) => (
              <div key={key}>
                <Card className={`h-full ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                  <CardContent className="p-8 text-center">
                    {index === 1 && (
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                          推荐
                      </div>
                    )}
                    <Heading as="h3" size="xl" className="mb-4">
                        {plan.name}
                      </Heading>
                    <div className="text-3xl font-bold text-primary mb-6">
                        {plan.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={index === 1 ? 'primary' : 'outline'} 
                      size="lg" 
                      className="w-full" 
                    >
                      选择方案
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 技术详情 */}
      <Section className="bg-gray-50">
        <Container>
          <Heading as="h2" size="2xl" className="text-center mb-12">
            技术详情
          </Heading>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Heading as="h3" size="lg" className="mb-4">
                    系统架构
                  </Heading>
                  <Paragraph className="text-gray-700">
                    {product.technicalDetails.architecture}
                  </Paragraph>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heading as="h3" size="lg" className="mb-4">
                    核心算法
                  </Heading>
                  <ul className="space-y-2">
                    {product.technicalDetails.algorithms.map((algorithm, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {algorithm}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heading as="h3" size="lg" className="mb-4">
                    系统集成
                  </Heading>
                  <Paragraph className="text-gray-700">
                    {product.technicalDetails.integration}
                  </Paragraph>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heading as="h3" size="lg" className="mb-4">
                    安全保障
                  </Heading>
                  <Paragraph className="text-gray-700">
                    {product.technicalDetails.security}
                  </Paragraph>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 联系我们 */}
      <Section>
        <Container>
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
            <Heading as="h2" size="2xl" className="mb-6">
              准备开始您的AR项目？
              </Heading>
            <Paragraph size="lg" className="mb-8 opacity-90">
              联系我们的专业团队，获取定制化的AR解决方案
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                免费咨询
                </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                预约演示
                </Button>
              </div>
          </div>
        </Container>
      </Section>

      {/* 相关产品 */}
      <Section className="bg-gray-50">
        <Container>
          <Heading as="h2" size="2xl" className="text-center mb-12">
            相关产品
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(productsData)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedProduct]) => (
                <div key={slug}>
                  <Link href={`/products/${slug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                            <span className="text-gray-700">产品图片</span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                            {relatedProduct.category}
                          </span>
                        </div>
                        <Heading as="h3" size="md" className="mb-3 group-hover:text-primary transition-colors">
                          {relatedProduct.title}
                        </Heading>
                        <Paragraph size="sm" className="text-gray-700 mb-4">
                          {relatedProduct.subtitle}
                        </Paragraph>
                        <div className="font-semibold text-primary">
                          {relatedProduct.price}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug,
  }));
}