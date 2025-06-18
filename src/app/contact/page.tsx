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
          className="fixed bottom-24 right-6 w-80 h-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 z-50 flex flex-col overflow-hidden"
        >
          {/* 聊天头部 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">在线咨询</h3>
              <p className="text-xs opacity-90">专业顾问为您服务</p>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
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
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          {/* 输入区域 */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="输入消息..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* 聊天按钮 */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-2xl hover:from-blue-600 hover:to-purple-700 transition-all z-40 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {isChatOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </>
          )}
        </div>
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
      content: '湖北省武汉市江汉区武汉中央商务区CBD泛海国际SOHO城1栋307',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-red-500 to-pink-500',
    },
    {
      title: '联系电话',
      content: '+86 027-8811-6621',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '邮箱地址',
      content: 'contact@fanchen-ar.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const offices = [
    {
      city: '武汉总部',
      address: '湖北省武汉市江汉区武汉中央商务区CBD泛海国际SOHO城1栋307',
      phone: '+86 027-8811-6621',
      email: 'wuhan@fanchen-ar.com',
    },
    {
      city: '北京分公司',
      address: '北京市海淀区中关村丰盈大厦C座2122',
      phone: '+86 010-8455-6355',
      email: 'beijing@fanchen-ar.com',
    },
    {
      city: '上海分公司',
      address: '上海市浦东新区张江高科技园区东大办公区F12栋',
      phone: '+86 021-8543-6621',
      email: 'shanghai@fanchen-ar.com',
    },
    {
      city: '深圳分公司',
      address: '广东省深圳市南山区科技园深蓝园区12栋504',
      phone: '+86 0755-8755-2322',
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

  const socialLinks = [
    {
      name: '微信',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.529-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.248 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.181-.556c1.52-1.186 2.506-2.952 2.506-4.998-.001-3.381-2.895-6.002-6.069-6.002zm-2.525 7.622c-.535 0-.969-.44-.969-.982 0-.546.434-.99.969-.99s.969.444.969.99c0 .542-.434.982-.969.982zm5.049 0c-.535 0-.969-.44-.969-.982 0-.546.434-.99.969-.99s.969.444.969.99c0 .542-.434.982-.969.982z"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600',
    },
    {
      name: '微博',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.31 8.17c-2.73-.13-4.3.53-4.3 2.26 0 .93.55 2.3 1.5 3.33 1.16 1.24 2.38 1.78 3.5 1.78 2.73.13 4.3-.53 4.3-2.26 0-.93-.55-2.3-1.5-3.33-1.16-1.24-2.38-1.78-3.5-1.78z"/>
          <path d="M20.5 6c-.62-.58-1.58-.62-2.1-.04-.35.4-.23 1.04.37 1.37 1.45.8 2.23 1.94 2.23 3.27 0 2.5-2.5 4.52-6.32 4.52-.77 0-1.52-.1-2.23-.28-.23-.06-.47.04-.55.26-.23.66-.87 1.11-1.56 1.11-.87 0-1.58-.71-1.58-1.58 0-.35.12-.67.32-.93.47-.6.47-1.48-.13-1.96-.73-.58-1.5-1.32-2.04-2.19C5.87 8.08 5.5 6.66 5.5 5.32c0-2.5 2.5-4.52 6.32-4.52 2.73 0 4.96.93 6.32 2.38.52.56.52 1.42-.04 1.96-.4.4-1.04.23-1.37-.37-.8-1.45-1.94-2.23-3.27-2.23-2.5 0-4.52 2.5-4.52 6.32 0-2.73-.93-4.96-2.38-6.32z"/>
        </svg>
      ),
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-gray-700 to-gray-800',
    },
  ];

  return (
    <Layout>
      <SEO
        title="联系我们"
        description="联系武汉凡尘合创科技有限公司，获取专业的AR解决方案咨询。我们的团队随时为您提供技术支持和项目合作服务。电话：027-8811-6621"
        keywords="联系我们,AR咨询,技术支持,项目合作,武汉AR公司联系方式"
        url="/contact" />
      {/* Hero Section - 重新设计 */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
          }}
        ></div>

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90"></div>

        {/* 动态背景元素 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 标签 */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-blue-200 text-sm font-medium mb-8 backdrop-blur-md border border-white/20">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                联系我们
              </div>

              <Heading as="h1" className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                  开启您的
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
                  AR创新之旅
                </span>
              </Heading>

              <Paragraph className="text-xl md:text-2xl text-blue-100/90 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
                准备开始您的AR项目？我们的专业团队随时为您提供咨询和技术支持。
                <br className="hidden md:block" />
                我们一起探讨如何通过AR技术为您的业务创造无限价值。
              </Paragraph>

              {/* 快速联系按钮 */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <motion.a
                  href="#contact-form"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-2xl text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  立即咨询
                </motion.a>
                <motion.a
                  href="tel:+8602788889999"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-2xl text-lg font-semibold transition-all duration-300 hover:border-white/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  电话咨询
                </motion.a>
              </div>

              {/* 联系信息快速预览 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 mx-auto text-white shadow-lg`}>
                      {info.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                    <p className="text-blue-100/80 text-sm">{info.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section id="contact-form" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl">
                  <CardContent className="p-10">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        发送消息
                      </div>
                      <Heading as="h2" className="text-3xl font-bold text-gray-900 mb-2">
                        让我们开始对话
                      </Heading>
                      <p className="text-gray-600">填写下方表单，我们会在1小时内回复您</p>
                    </div>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-green-700 font-medium">消息发送成功！我们会尽快与您联系。</span>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-red-700 font-medium">发送失败，请稍后重试或直接联系我们。</span>
                        </div>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            姓名 *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="请输入您的姓名" />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            公司名称 *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="请输入公司名称" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            邮箱地址 *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="请输入邮箱地址" />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            联系电话
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="请输入联系电话" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            所属行业
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
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
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            咨询主题
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="请输入咨询主题" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          详细需求 *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                          placeholder="请详细描述您的项目需求、预期目标、预算范围等信息..." />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            发送中...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            发送消息
                          </span>
                        )}
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
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        联系信息
                      </div>
                      <Heading as="h3" className="text-xl font-bold text-gray-900">
                        多种联系方式
                      </Heading>
                    </div>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.div
                          key={info.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start p-4 rounded-2xl hover:bg-gray-50/50 transition-colors"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 text-white shadow-lg flex-shrink-0`}>
                            {info.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">
                              {info.title}
                            </div>
                            <div className="text-gray-600 text-sm">{info.content}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        快速响应
                      </div>
                      <Heading as="h3" className="text-xl font-bold text-gray-900">
                        专业服务承诺
                      </Heading>
                    </div>
                    <div className="space-y-4">
                      {[
                        { text: '1小时内响应咨询', icon: '⚡' },
                        { text: '24小时内提供方案', icon: '📋' },
                        { text: '免费技术咨询', icon: '💡' },
                        { text: '专业团队支持', icon: '👥' },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center p-3 rounded-xl hover:bg-green-50/50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 text-white text-sm shadow-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2m-5 4v6m-3-3h6" />
                        </svg>
                        关注我们
                      </div>
                      <Heading as="h3" className="text-xl font-bold text-gray-900">
                        社交媒体
                      </Heading>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.button
                          key={social.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-4 bg-gradient-to-r ${social.color} text-white rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group`}
                          title={social.name}
                        >
                          <div className="mb-2 group-hover:scale-110 transition-transform">
                            {social.icon}
                          </div>
                          <span className="text-xs font-medium">{social.name}</span>
                        </motion.button>
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
      <Section className="py-20 bg-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-purple-300 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 border border-indigo-300 rounded-full"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                办公地点
              </div>
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  全国服务网络
                </span>
              </Heading>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
              <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
                我们在全国主要城市设有办事处，为客户提供就近服务和技术支持。
              </Paragraph>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl group">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <Heading as="h3" className="text-xl font-bold text-gray-900 mb-2">
                        {office.city}
                      </Heading>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 leading-relaxed">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 leading-relaxed">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-600 leading-relaxed">{office.email}</span>
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
      <Section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                常见问题
              </div>
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  常见问题解答
                </span>
              </Heading>
              <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
              <Paragraph className="text-xl text-gray-600 max-w-3xl mx-auto">
                为您整理了客户最关心的问题，帮助您快速了解我们的服务。
              </Paragraph>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "AR项目的开发周期一般需要多长时间？",
                  answer: "根据项目复杂度不同，一般的AR应用开发周期在2-6个月之间。简单的展示类应用约2-3个月，复杂的交互式应用可能需要4-6个月。我们会在项目启动前提供详细的时间规划。"
                },
                {
                  question: "AR技术对设备有什么要求？",
                  answer: "我们的AR应用支持主流的智能手机和平板设备，iOS 12+和Android 7.0+系统。对于企业级应用，我们也支持AR眼镜、HoloLens等专业设备。具体设备要求会根据项目需求进行定制。"
                },
                {
                  question: "项目费用如何计算？",
                  answer: "项目费用主要根据功能复杂度、开发周期、设计要求等因素综合评估。我们提供免费的需求分析和报价服务，确保价格透明合理。一般项目费用在10万-100万之间。"
                },
                {
                  question: "是否提供后期维护服务？",
                  answer: "是的，我们提供完善的后期维护服务，包括：免费1年技术支持、系统更新、bug修复、性能优化等。同时也提供付费的功能升级和扩展服务。"
                },
                {
                  question: "可以先看到demo效果吗？",
                  answer: "当然可以！我们会在项目初期提供原型demo，让您直观体验AR效果。同时我们的官网也有多个案例展示，您可以通过手机扫描体验我们的AR技术实力。"
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl group">
                    <CardContent className="p-8">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <Heading as="h3" className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                            {faq.question}
                          </Heading>
                          <Paragraph className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </Paragraph>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* 背景图片 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")',
          }}
        ></div>
        
        {/* 动态背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
                准备开始您的AR项目？
              </Heading>
              <Paragraph className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
                立即联系我们，获取专业的AR解决方案和免费项目咨询。让我们一起创造令人惊叹的增强现实体验！
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl text-lg shadow-2xl border-0 transition-all duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    立即咨询
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    观看演示
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 在线客服组件 */}
      <OnlineChat />
    </Layout>
  );
}
