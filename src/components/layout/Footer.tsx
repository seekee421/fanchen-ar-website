import React from 'react';
import Link from 'next/link';
import { Container, Heading, Paragraph, Text } from '@/components/ui';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '解决方案',
      links: [
        { href: '/services', label: '工业AR' },
        { href: '/services', label: '教育培训' },
        { href: '/services', label: '零售展示' },
        { href: '/services', label: '医疗健康' },
      ],
    },
    {
      title: '服务支持',
      links: [
        { href: '/support/documentation', label: '技术文档' },
        { href: '/support/training', label: '培训服务' },
        { href: '/support/maintenance', label: '维护支持' },
        { href: '/support/consulting', label: '咨询服务' },
      ],
    },
    {
      title: '公司信息',
      links: [
        { href: '/about', label: '关于我们' },
        { href: '/careers', label: '加入我们' },
        { href: '/news', label: '新闻动态' },
        { href: '/contact', label: '联系我们' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: '微信',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.298c-.019.065-.044.13-.044.2 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.833.39c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.932 7.621-.72-.252-2.537-2.862-4.446-6.365-4.446zm-2.363 5.991a.72.72 0 0 1-.727-.72.72.72 0 0 1 .727-.72.72.72 0 0 1 .727.72.72.72 0 0 1-.727.72zm4.727 0a.72.72 0 0 1-.727-.72.72.72 0 0 1 .727-.72.72.72 0 0 1 .727.72.72.72 0 0 1-.727.72z"/>
          <path d="M17.308 11.472c-3.781 0-6.855 2.416-6.855 5.4 0 1.748 1.084 3.316 2.774 4.395a.59.59 0 0 1 .213.665l-.39 1.298c-.019.065-.044.13-.044.2 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098c.543.163 1.084.26 1.685.26 3.781 0 6.855-2.416 6.855-5.4s-3.074-5.847-6.855-5.847zm-2.363 4.727a.72.72 0 0 1-.727-.72.72.72 0 0 1 .727-.72.72.72 0 0 1 .727.72.72.72 0 0 1-.727.72zm4.727 0a.72.72 0 0 1-.727-.72.72.72 0 0 1 .727-.72.72.72 0 0 1 .727.72.72.72 0 0 1-.727.72z"/>
        </svg>
      ),
    },
    {
      name: '微博',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.797 2.312c3.506 0 6.844 1.993 6.844 6.094 0 2.219-1.312 4.344-3.531 5.531a.469.469 0 0 0-.219.531l.312 1.031c.016.063.031.125.031.188 0 .156-.125.281-.281.281a.312.312 0 0 1-.156-.047l-1.844-1.062a.781.781 0 0 0-.656-.094c-.5.156-.969.25-1.5.25-3.506 0-6.844-1.993-6.844-6.094S6.291 2.312 9.797 2.312z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">FC</span>
                </div>
                <div>
                  <div className="text-xl font-bold">武汉凡尘合创</div>
                  <div className="text-sm text-gray-400">AR Technology</div>
                </div>
              </div>
              <Paragraph className="text-gray-300 mb-6 max-w-md">
                专注于增强现实(AR)技术的创新应用，为企业提供专业的AR解决方案，
                助力数字化转型和智能化升级。
              </Paragraph>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>湖北省武汉市江汉区武汉中央商务区CBD泛海国际SOHO城1栋307号</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+86 027-8811-6621</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@fanchen-ar.com</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <Heading as="h4" size="sm" className="text-white mb-4">
                  {section.title}
                </Heading>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={`${link.href}-${link.label}-${index}`}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Text size="sm" color="muted">
                © {currentYear} 武汉凡尘合创科技有限公司. 保留所有权利.
              </Text>
              <div className="flex space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  隐私政策
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  服务条款
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  网站地图
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;