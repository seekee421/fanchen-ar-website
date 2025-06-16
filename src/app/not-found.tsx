'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout';
import { Section, Container, Heading, Paragraph, Button } from '../components/ui';

export default function NotFound() {
  return (
    <Layout>
      <Section padding="xl" className="min-h-[60vh] flex items-center">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 404图标 */}
              <div className="mb-8">
                <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">🔍</span>
                </div>
              </div>

              {/* 错误信息 */}
              <Heading as="h1" size="2xl" className="mb-4">
                页面未找到
              </Heading>
              <Paragraph size="lg" className="text-gray-600 mb-8">
                抱歉，您访问的页面不存在或已被移动。
                请检查URL是否正确，或返回首页继续浏览。
              </Paragraph>

              {/* 操作按钮 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="primary" size="lg">
                    返回首页
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    联系我们
                  </Button>
                </Link>
              </div>

              {/* 快速导航 */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Paragraph className="text-gray-500 mb-4">
                  您可能在寻找：
                </Paragraph>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/about" className="text-primary hover:text-primary-dark transition-colors">
                    关于我们
                  </Link>
                  <Link href="/services" className="text-primary hover:text-primary-dark transition-colors">
                    服务方案
                  </Link>
                  <Link href="/products" className="text-primary hover:text-primary-dark transition-colors">
                    产品展示
                  </Link>
                  <Link href="/cases" className="text-primary hover:text-primary-dark transition-colors">
                    成功案例
                  </Link>
                  <Link href="/news" className="text-primary hover:text-primary-dark transition-colors">
                    新闻资讯
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}