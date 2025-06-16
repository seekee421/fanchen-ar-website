import { Metadata } from 'next';
import { ARShowroom } from '@/components/3d';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

export const metadata: Metadata = {
  title: 'AR场馆产品展示 - 武汉凡尘合创科技',
  description: '体验武汉凡尘合创科技AR场馆的3D产品功能演示，包含工业制造、教育培训、零售电商、医疗健康、文旅景区等多个应用场景。',
  keywords: ['AR场馆', '3D展示', 'AR应用', '虚拟现实', '增强现实', '武汉凡尘合创科技'],
  openGraph: {
    title: 'AR场馆产品展示 - 武汉凡尘合创科技',
    description: '沉浸式AR产品功能演示，探索未来科技应用场景',
    type: 'website',
    images: [
      {
        url: '/images/ar-showroom-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AR场馆产品展示'
      }
    ]
  }
};

export default function ARShowroomPage() {
  return (
    <>
      <EnhancedSEO
        title="AR场馆产品展示 - 武汉凡尘合创科技"
        description="体验武汉凡尘合创科技AR场馆的3D产品功能演示，包含工业制造、教育培训、零售电商、医疗健康、文旅景区等多个应用场景。"
        keywords="AR场馆, 3D展示, AR应用, 虚拟现实, 增强现实, 武汉凡尘合创科技"
        canonical="/products/ar-showroom"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "AR场馆产品展示系统",
          "description": "武汉凡尘合创科技AR场馆的3D产品功能演示系统",
          "brand": {
            "@type": "Brand",
            "name": "武汉凡尘合创科技"
          },
          "category": "AR Technology",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "0",
            "priceCurrency": "CNY"
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* 页面标题部分 */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🚀 AR场馆产品展示
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                探索武汉凡尘合创科技AR场馆的3D产品功能演示，通过先进的增强现实技术，
                为工业制造、教育培训、零售电商、医疗健康、文旅景区等领域提供创新解决方案
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🎯 精准定位技术</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">⚡ 实时3D渲染</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🤝 多人协作体验</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">📱 跨平台支持</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3D展示区域 */}
        <div className="container mx-auto px-4 py-12">
          <ARShowroom />
        </div>

        {/* 技术优势说明 */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              🎯 为什么选择我们的AR场馆解决方案？
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">先进技术栈</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  采用Three.js、WebXR、计算机视觉等前沿技术，确保流畅的3D渲染体验和精准的AR定位。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">数据驱动优化</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  实时性能监控和用户行为分析，持续优化用户体验，确保最佳的AR交互效果。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">定制化设计</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  根据不同行业特点和客户需求，提供个性化的AR场景设计和功能定制服务。
                </p>
              </div>
            </div>

            {/* 应用案例数据 */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">🏆 应用成果展示</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">成功案例</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-90">客户满意度</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">60fps</div>
                  <div className="text-sm opacity-90">渲染帧率</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5ms</div>
                  <div className="text-sm opacity-90">响应延迟</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 联系我们 */}
        <div className="bg-white border-t">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">准备开始您的AR之旅？</h2>
              <p className="text-gray-600 mb-8">
                联系我们的专业团队，获取个性化的AR场馆解决方案和技术支持
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  🎯 预约演示
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  📞 联系销售
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}