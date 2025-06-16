'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../../components/layout';
import { Section, Container, Heading, Paragraph, Button, Card, CardContent } from '../../components/ui';
import { SEO } from '../../components/seo';

// 在线聊天组件
const OnlineChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: '您好！欢迎咨询武汉凡尘合创科技，我是您的专属顾问。请问有什么可以帮助您的吗？', time: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = {
      type: 'user' as const,
      content: inputMessage,
      time: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // 模拟自动回复
    setTimeout(() => {
      const botResponse = {
        type: 'bot' as const,
        content: '感谢您的咨询！我们的专业顾问会在工作时间内尽快为您提供详细解答。您也可以留下联系方式，我们会主动联系您。',
        time: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* 聊天窗口 */}
      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col"
        >
          {/* 聊天头部 */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">在线咨询</h3>
              <p className="text-xs opacity-90">专业顾问为您服务</p>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20 rounded p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* 消息区域 */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          {/* 输入区域 */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="输入消息..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition-colors"
              >
                发送
              </button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* 聊天按钮 */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors z-40 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isChatOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>
    </>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    industry: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        industry: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: '总部地址',
      content: '湖北省武汉市洪山区光谷软件园',
      icon: '📍',
    },
    {
      title: '联系电话',
      content: '+86 027-8888-9999',
      icon: '📞',
    },
    {
      title: '邮箱地址',
      content: 'contact@fanchen-ar.com',
      icon: '✉️',
    },
    {
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      icon: '🕒',
    },
  ];

  const offices = [
    {
      city: '武汉总部',
      address: '湖北省武汉市洪山区光谷软件园B座15楼',
      phone: '+86 027-8888-9999',
      email: 'wuhan@fanchen-ar.com',
    },
    {
      city: '北京分公司',
      address: '北京市海淀区中关村科技园区',
      phone: '+86 010-6666-8888',
      email: 'beijing@fanchen-ar.com',
    },
    {
      city: '上海分公司',
      address: '上海市浦东新区张江高科技园区',
      phone: '+86 021-5555-7777',
      email: 'shanghai@fanchen-ar.com',
    },
    {
      city: '深圳分公司',
      address: '广东省深圳市南山区科技园',
      phone: '+86 0755-4444-6666',
      email: 'shenzhen@fanchen-ar.com',
    },
  ];

  const industries = [
    '工业制造',
    '教育培训',
    '零售电商',
    '医疗健康',
    '文旅娱乐',
    '房地产',
    '汽车行业',
    '其他',
  ];

  return (
    <Layout>
      <SEO
        title="联系我们"
        description="联系武汉凡尘合创科技有限公司，获取专业的AR解决方案咨询。我们的团队随时为您提供技术支持和项目合作服务。电话：027-8888-9999"
        keywords="联系我们,AR咨询,技术支持,项目合作,武汉AR公司联系方式"
        url="/contact"
      />
      {/* Hero Section */}
      <Section variant="primary" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary opacity-90" />
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="4xl" className="text-white mb-6">
                联系我们
              </Heading>
              <Paragraph size="xl" className="text-white/90 max-w-3xl mx-auto">
                准备开始您的AR项目？我们的专业团队随时为您提供咨询和技术支持。
                让我们一起探讨如何通过AR技术为您的业务创造价值。
              </Paragraph>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section padding="xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-8">
                    <Heading as="h2" size="2xl" className="mb-6">
                      发送消息
                    </Heading>
                    
                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2">✅</span>
                          <span className="text-green-700">消息发送成功！我们会尽快与您联系。</span>
                        </div>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center">
                          <span className="text-red-500 mr-2">❌</span>
                          <span className="text-red-700">发送失败，请稍后重试或直接联系我们。</span>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            姓名 *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="请输入您的姓名"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            公司名称 *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="请输入公司名称"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            邮箱地址 *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="请输入邮箱地址"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            联系电话
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="请输入联系电话"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            所属行业
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          >
                            <option value="">请选择行业</option>
                            {industries.map((industry) => (
                              <option key={industry} value={industry}>
                                {industry}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            咨询主题
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            placeholder="请输入咨询主题"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          详细需求 *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                          placeholder="请详细描述您的项目需求、预期目标、预算范围等信息..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? '发送中...' : '发送消息'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-6">
                      联系信息
                    </Heading>
                    <div className="space-y-4">
                      {contactInfo.map((info) => (
                        <div key={info.title} className="flex items-start">
                          <span className="text-2xl mr-3 mt-1">{info.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 mb-1">
                              {info.title}
                            </div>
                            <div className="text-gray-600">{info.content}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-6">
                      快速响应
                    </Heading>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✅</span>
                        <span className="text-sm text-gray-600">1小时内响应咨询</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✅</span>
                        <span className="text-sm text-gray-600">24小时内提供方案</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✅</span>
                        <span className="text-sm text-gray-600">免费技术咨询</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-500 mr-2">✅</span>
                        <span className="text-sm text-gray-600">专业团队支持</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h3" size="lg" className="mb-4">
                      关注我们
                    </Heading>
                    <div className="flex space-x-4">
                      {[
                        { name: '微信', icon: '💬' },
                        { name: '微博', icon: '📱' },
                        { name: 'LinkedIn', icon: '💼' },
                        { name: 'GitHub', icon: '💻' },
                      ].map((social) => (
                        <button
                          key={social.name}
                          className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors"
                          title={social.name}
                        >
                          {social.icon}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Office Locations */}
      <Section variant="secondary" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" size="3xl" className="mb-4">
                办公地点
              </Heading>
              <Paragraph size="lg" color="secondary" className="max-w-2xl mx-auto">
                我们在全国主要城市设有办事处，为客户提供就近服务和技术支持。
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Heading as="h3" size="md" className="mb-4 text-primary">
                      {office.city}
                    </Heading>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <span className="text-gray-400 mr-2 mt-0.5">📍</span>
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-2">📞</span>
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 mr-2">✉️</span>
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="xl">
        <Container>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" size="3xl" className="mb-4">
                常见问题
              </Heading>
              <Paragraph size="lg" color="secondary" className="max-w-2xl mx-auto">
                以下是客户经常咨询的问题，希望能帮助您更好地了解我们的服务。
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: 'AR项目的开发周期一般是多长？',
                answer: '根据项目复杂度不同，一般在3-12个月之间。简单的展示类应用3-6个月，复杂的工业应用可能需要8-12个月。',
              },
              {
                question: 'AR解决方案的成本如何？',
                answer: '成本取决于项目规模、功能复杂度和定制需求。我们提供从标准化产品到完全定制的多种方案，价格从几万到几百万不等。',
              },
              {
                question: '你们支持哪些AR设备平台？',
                answer: '我们支持主流的AR设备，包括iOS/Android移动设备、HoloLens、Magic Leap、以及各种AR眼镜等。',
              },
              {
                question: '项目交付后是否提供技术支持？',
                answer: '是的，我们提供完整的售后服务，包括技术支持、系统维护、功能升级等，确保系统稳定运行。',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Heading as="h3" size="md" className="mb-3 text-primary">
                      {faq.question}
                    </Heading>
                    <Paragraph size="sm" color="secondary">
                      {faq.answer}
                    </Paragraph>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* 在线聊天组件 */}
      <OnlineChat />
    </Layout>
  );
}