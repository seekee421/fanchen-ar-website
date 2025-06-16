'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout';
import { Section, Container, Heading, Paragraph, Button } from '../components/ui';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // 记录错误到错误报告服务
    console.error('Application error:', error);
  }, [error]);

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
              {/* 错误图标 */}
              <div className="mb-8">
                <div className="text-8xl font-bold text-red-500/20 mb-4">500</div>
                <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">⚠️</span>
                </div>
              </div>

              {/* 错误信息 */}
              <Heading as="h1" size="2xl" className="mb-4">
                服务器错误
              </Heading>
              <Paragraph size="lg" className="text-gray-600 mb-8">
                抱歉，服务器遇到了一个错误，无法完成您的请求。
                我们已经记录了这个问题，正在努力修复。
              </Paragraph>

              {/* 错误详情（仅在开发环境显示） */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                  <Heading as="h3" size="sm" className="mb-2 text-red-800">
                    错误详情（开发模式）：
                  </Heading>
                  <pre className="text-xs text-red-700 overflow-auto">
                    {error.message}
                  </pre>
                  {error.digest && (
                    <p className="text-xs text-red-600 mt-2">
                      错误ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* 操作按钮 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={reset}
                >
                  重试
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/'}
                >
                  返回首页
                </Button>
              </div>

              {/* 联系信息 */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Paragraph className="text-gray-500 mb-4">
                  如果问题持续存在，请联系我们：
                </Paragraph>
                <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                  <a 
                    href="mailto:support@fanchen-ar.com" 
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    📧 support@fanchen-ar.com
                  </a>
                  <a 
                    href="tel:+86-027-12345678" 
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    📞 027-12345678
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}