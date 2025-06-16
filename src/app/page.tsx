'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Target, Wrench, Sparkles, 
  Factory, GraduationCap, ShoppingBag, Heart,
  Zap, Users, Clock, DollarSign,
  Search, Building, Lightbulb, Shield,
  Settings, TrendingUp, Award,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Layout } from '@/components/layout';
import { Section, Container, Heading, Paragraph, Button, Card, CardContent } from '@/components/ui';
import { SEO } from '@/components/seo';


// 将 mediaItems 移到组件外部，避免每次渲染时重新创建
const mediaItems = [
  {
    type: 'video',
    src: '/sources/index/shouye_shuzichengshi.mov',
    alt: '数字城市AR演示'
  },
  {
    type: 'gif',
    src: '/sources/index/souye_dongtu.gif',
    alt: 'AR动态展示'
  },
  {
    type: 'video',
    src: '/sources/index/souye_shipin.mp4',
    alt: 'AR场景演示'
  }
];

// 轮播背景组件
const HeroBackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  // 确保组件已挂载，避免 hydration 错误
  useEffect(() => {
    setIsMounted(true);
    setIsLoaded(true);
  }, []);



  // 自动轮播
  useEffect(() => {
    if (!isMounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 8000); // 8秒切换一次
    return () => clearInterval(interval);
  }, [isMounted]);

  // 视频播放处理
  useEffect(() => {
    if (!isMounted) return;
    
    // 暂停所有视频
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
      }
    });
    
    // 播放当前视频
    const currentVideo = videoRefs.current[currentIndex];
    const currentItem = mediaItems[currentIndex];
    if (currentVideo && currentItem?.type === 'video') {
      const playVideo = () => {
        currentVideo.play().catch(err => {
          // 忽略 AbortError，这是正常的中断
          if (err.name !== 'AbortError') {
            console.warn('视频播放失败:', err);
          }
        });
      };
      
      if (currentVideo.readyState >= 2) {
        playVideo();
      } else {
        currentVideo.addEventListener('loadeddata', playVideo, { once: true });
      }
    }
  }, [currentIndex, isMounted]);

  // 清理视频资源
  useEffect(() => {
    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.removeAttribute('src');
          video.load();
        }
      });
    };
  }, []);

  // 在组件未挂载时返回静态背景
  if (!isMounted) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 媒体轮播层 */}
      {mediaItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item.type === 'video' ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.6) contrast(1.1)' }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              {item.src.endsWith('.mov') ? (
                <>
                  <source src={item.src} type="video/mp4" />
                  <source src={item.src} type="video/quicktime" />
                </>
              ) : (
                <source src={item.src} type="video/mp4" />
              )}
              您的浏览器不支持视频播放。
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.6) contrast(1.1)' }}
            />
          )}
        </div>
      ))}

      {/* 增强渐变遮罩层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      
      {/* 轮播指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isMounted) return;
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-110 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`切换到第${index + 1}个素材`}
          />
        ))}
      </div>
    </div>
  );
};

// 服务数据
const services = [
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
        <Factory className="w-8 h-8 text-white" />
      </div>
    ),
    title: "工业制造AR",
    description: "为制造业提供设备维护、装配指导、质量检测等AR应用，提升生产效率和操作精度。",
    features: ["设备维护指导", "装配流程优化", "质量检测辅助", "远程专家支持"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
        <GraduationCap className="w-8 h-8 text-white" />
      </div>
    ),
    title: "教育培训AR",
    description: "打造沉浸式学习体验，让抽象概念变得具体可见，提高学习效果和参与度。",
    features: ["3D模型展示", "互动式学习", "虚拟实验室", "技能培训模拟"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
        <ShoppingBag className="w-8 h-8 text-white" />
      </div>
    ),
    title: "零售电商AR",
    description: "为零售行业提供虚拟试穿、产品展示、导购服务等AR功能，提升购物体验。",
    features: ["虚拟试穿", "产品3D展示", "AR导购", "空间布局预览"],
    gradient: "from-green-500 to-emerald-600"
  }
];

// 行业应用数据
const industries = [
  {
    title: "制造业",
    description: "智能制造与工业4.0",
    icon: <Factory className="w-8 h-8 text-white" />,
    href: "/services#industrial",
    stats: "50+ 项目",
    images: ["/sources/cases/制造业.jpg", "/sources/cases/AR制造业.jpg"]
  },
  {
    title: "教育培训",
    description: "沉浸式学习体验",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    href: "/services#education",
    stats: "30+ 院校",
    images: ["/sources/cases/教育培训.png"]
  },
  {
    title: "零售电商",
    description: "新零售购物体验",
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    href: "/services#retail",
    stats: "20+ 品牌",
    images: ["/sources/cases/零售电商.webp"]
  },
  {
    title: "医疗健康",
    description: "精准医疗辅助",
    icon: <Heart className="w-8 h-8 text-white" />,
    href: "/services#healthcare",
    stats: "15+ 医院",
    images: ["/sources/cases/AR医疗.png"]
  }
];

// 核心优势数据
const advantages = [
  {
    icon: <Zap className="w-12 h-12 text-accent" />,
    title: "技术领先",
    description: "拥有自主知识产权的AR核心技术，持续投入研发创新，保持技术领先优势。"
  },
  {
    icon: <Users className="w-12 h-12 text-accent" />,
    title: "专业团队",
    description: "汇聚AR领域顶尖人才，具备丰富的项目经验和深厚的技术积累。"
  },
  {
    icon: <Clock className="w-12 h-12 text-accent" />,
    title: "快速交付",
    description: "成熟的项目管理体系和开发流程，确保项目按时高质量交付。"
  },
  {
    icon: <DollarSign className="w-12 h-12 text-accent" />,
    title: "成本优化",
    description: "提供性价比最优的解决方案，帮助客户以最小投入获得最大价值。"
  },
  {
    icon: <Search className="w-12 h-12 text-accent" />,
    title: "深度定制",
    description: "深入了解客户需求，提供完全定制化的AR解决方案和技术服务。"
  },
  {
    icon: <Shield className="w-12 h-12 text-accent" />,
    title: "可靠保障",
    description: "完善的售后服务体系，提供长期技术支持和系统维护保障。"
  }
];

export default function Home() {
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);
  
  return (
    <Layout>
      <SEO 
        title="武汉凡尘合创AR科技有限公司 - 专业AR解决方案提供商"
        description="武汉凡尘合创专注于增强现实(AR)技术研发与应用，为工业制造、教育培训、零售电商等行业提供专业的AR解决方案。"
        keywords="AR技术,增强现实,工业AR,教育AR,零售AR,武汉AR公司"
      />
      
      {/* Hero Section */}
      <Section variant="primary" padding="xl" className="relative overflow-hidden min-h-screen">
          {/* 轮播背景 */}
          <HeroBackgroundCarousel />
          
          {/* 装饰性光效 */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center w-full">
            <div className="flex items-center justify-center min-h-screen py-20 w-full">
              {/* 居中内容 */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-4xl mx-auto px-4"
              >
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>领先的AR技术解决方案</span>
                </motion.div>

                <Heading 
                  as="h1" 
                  size="4xl"
                  className="mb-8 text-white font-bold leading-tight"
                >
                  <span className="block text-6xl lg:text-7xl mb-4">
                    重塑空间
                  </span>
                  <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    轻而易现
                  </span>
              </Heading>

                <Paragraph 
                  size="xl" 
                  className="mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto text-center"
                >
                  致力于实现虚与实的高价值链接，为企业提供全栈AR技术解决方案
              </Paragraph>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/services">
                    <Button 
                      size="lg" 
                      className="px-10 py-5 text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 rounded-full"
                    >
                      计算空间梦想
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-10 py-5 text-lg font-semibold border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 transition-all duration-300 rounded-full"
                    >
                      链接虚实世界
                    </Button>
                  </Link>
                </div>

                {/* 核心能力标签 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-wrap gap-4 mt-12 justify-center"
                >
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-white font-medium">全栈AR能力</span>
                  </div>
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-white font-medium">端到端解决方案</span>
                  </div>
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-white font-medium">软硬一体应用</span>
                  </div>
                </motion.div>
              </motion.div>
          </div>
        </div>
      </Section>

      {/* Products & Services Highlights */}
      <Section className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6 border border-blue-200/50">
                <Sparkles className="w-4 h-4" />
                <span>专业AR解决方案</span>
              </div>
              <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                产品与服务亮点
              </Heading>
              <Paragraph size="lg" className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
                从AR开发平台到定制化解决方案，我们提供完整的产品矩阵和专业服务，
                为不同行业量身定制最适合的AR技术方案。
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 relative">
                    {/* 背景渐变装饰 */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      
                      <Heading as="h3" size="lg" className="mb-4 text-gray-900 text-center group-hover:text-gray-800 transition-colors">
                        {service.title}
                      </Heading>
                      
                      <Paragraph className="mb-6 text-gray-700 leading-relaxed text-center">
                        {service.description}
                      </Paragraph>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 group/item">
                            <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}></div>
                            <span className="text-sm text-gray-600 group-hover/item:text-gray-800 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* 底部装饰线 */}
                      <div className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* 底部装饰元素 */}
          <div className="relative mt-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

        {/* Industries Section */}
      <Section padding="xl" className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <Heading as="h2" size="3xl" className="mb-6 text-gray-900">
                  行业应用领域
              </Heading>
                <Paragraph size="lg" className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
                  我们的AR技术已成功应用于多个行业，为不同领域的客户创造价值，
                  推动传统行业的数字化转型和智能化升级。
              </Paragraph>
            </motion.div>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
              >
                <Link href="/cases" className="block">
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={industry.images[0]}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay - appears on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                            {industry.icon}
                          </div>
                        </div>
                        
                        {/* Title */}
                        <Heading as="h3" size="xl" className="mb-3 text-white font-bold">
                          {industry.title}
                        </Heading>
                        
                        {/* Description */}
                        <Paragraph size="lg" className="text-white/90 mb-4 px-4">
                          {industry.description}
                        </Paragraph>
                        
                        {/* Stats */}
                        <div className="inline-flex items-center px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30">
                          {industry.stats}
                        </div>
                        
                        {/* Click hint */}
                        <div className="mt-4 text-sm text-white/80">
                          点击查看案例
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom gradient for better text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          </Container>
        </Section>

        {/* Advantages Section */}
        <Section padding="xl" className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <Container className="relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <Heading as="h2" size="3xl" className="mb-6 text-white">
                为什么选择我们的AR解决方案
              </Heading>
                <Paragraph size="lg" className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
                  我们提供全方位的AR技术服务，从概念设计到产品落地，
                  凭借专业的技术实力和丰富的项目经验，助力企业实现数字化创新。
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/15 overflow-hidden">
                    <CardContent className="p-8 text-center relative">
                      {/* Card background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/30 group-hover:from-blue-400/30 group-hover:to-purple-400/30 group-hover:border-white/50 transition-all duration-500">
                            {feature.icon}
                          </div>
                        </div>
                        <Heading as="h3" size="md" className="mb-4 text-white group-hover:text-blue-200 transition-colors duration-300">
                        {feature.title}
                      </Heading>
                        <Paragraph className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                       {feature.description}
                     </Paragraph>
                       </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
        <Section padding="xl" className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 to-black/40"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
            
            {/* Floating particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-yellow-300/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-300/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-300/30 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Heading as="h2" size="3xl" className="mb-6 text-white drop-shadow-lg">
                  准备开始您的AR项目了吗？
                </Heading>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Paragraph size="lg" className="mb-10 text-white/95 leading-relaxed drop-shadow-md">
                  联系我们的专家团队，获取免费的项目咨询和技术方案评估。
                    让我们一起探索AR技术为您的业务成就无限可能。
                </Paragraph>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <Link href="/contact">
                      <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 shadow-2xl hover:scale-110 hover:shadow-white/25 transition-all duration-500 px-10 py-5 text-lg font-bold rounded-2xl border-2 border-white/20 backdrop-blur-sm">
                      <span className="flex items-center gap-2">
                        免费咨询
                      </span>
                    </Button>
                  </Link>
                  <Link href="/cases">
                      <Button variant="outline" size="lg" className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white shadow-2xl hover:scale-110 hover:shadow-white/25 transition-all duration-500 px-10 py-5 text-lg font-bold rounded-2xl backdrop-blur-sm">
                      <span className="flex items-center gap-2">
                        查看案例
                      </span>
                    </Button>
                  </Link>
                </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
