'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../../components/layout';
import { Section, Container, Heading, Paragraph } from '../../components/ui';
import { SEO } from '../../components/seo';

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="隐私政策 - 武汉凡尘合创科技"
        description="武汉凡尘合创科技隐私政策，了解我们如何收集、使用和保护您的个人信息。"
        keywords="隐私政策,个人信息保护,数据安全,武汉凡尘合创科技"
      />

      <Section padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="4xl" className="mb-8 text-center">
                隐私政策
              </Heading>
              
              <div className="prose prose-lg max-w-none">
                <Paragraph className="text-gray-600 mb-8 text-center">
                  最后更新时间：2024年1月1日
                </Paragraph>

                <div className="space-y-8">
                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      1. 引言
                    </Heading>
                    <Paragraph className="mb-4">
                      武汉凡尘合创科技有限公司（以下简称"我们"、"公司"或"凡尘合创"）非常重视用户的隐私保护。
                      本隐私政策说明了我们在您使用我们的网站、产品和服务时如何收集、使用、存储和保护您的个人信息。
                    </Paragraph>
                    <Paragraph>
                      请您仔细阅读本隐私政策。如果您不同意本政策的任何条款，请不要使用我们的服务。
                      通过使用我们的服务，您表示同意按照本隐私政策收集和使用信息。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      2. 信息收集
                    </Heading>
                    <Heading as="h3" size="xl" className="mb-3">
                      2.1 我们收集的信息类型
                    </Heading>
                    <Paragraph className="mb-4">
                      我们可能收集以下类型的信息：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>个人身份信息：姓名、电子邮件地址、电话号码、公司名称、职位等</li>
                      <li>技术信息：IP地址、浏览器类型、操作系统、访问时间等</li>
                      <li>使用信息：您如何使用我们的网站和服务的信息</li>
                      <li>通信信息：您与我们的通信记录</li>
                    </ul>
                    
                    <Heading as="h3" size="xl" className="mb-3">
                      2.2 信息收集方式
                    </Heading>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>直接收集：当您填写表单、注册账户或联系我们时</li>
                      <li>自动收集：通过cookies和类似技术</li>
                      <li>第三方来源：合法的第三方数据提供商</li>
                    </ul>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      3. 信息使用
                    </Heading>
                    <Paragraph className="mb-4">
                      我们使用收集的信息用于以下目的：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>提供、维护和改进我们的服务</li>
                      <li>处理您的请求和查询</li>
                      <li>发送重要通知和更新</li>
                      <li>进行市场研究和分析</li>
                      <li>防止欺诈和确保安全</li>
                      <li>遵守法律义务</li>
                    </ul>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      4. 信息共享
                    </Heading>
                    <Paragraph className="mb-4">
                      我们不会出售、交易或租赁您的个人信息给第三方。我们可能在以下情况下共享您的信息：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>获得您的明确同意</li>
                      <li>与我们的服务提供商共享，以便他们代表我们提供服务</li>
                      <li>遵守法律要求或响应法律程序</li>
                      <li>保护我们的权利、财产或安全</li>
                      <li>在业务转让的情况下</li>
                    </ul>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      5. 数据安全
                    </Heading>
                    <Paragraph className="mb-4">
                      我们采取适当的技术和组织措施来保护您的个人信息，包括：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>数据加密传输和存储</li>
                      <li>访问控制和身份验证</li>
                      <li>定期安全评估和更新</li>
                      <li>员工隐私培训</li>
                      <li>安全事件响应程序</li>
                    </ul>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      6. 数据保留
                    </Heading>
                    <Paragraph>
                      我们只在必要的时间内保留您的个人信息，以实现收集目的或遵守法律要求。
                      具体保留期限取决于信息类型和使用目的。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      7. 您的权利
                    </Heading>
                    <Paragraph className="mb-4">
                      根据适用的隐私法律，您可能享有以下权利：
                    </Paragraph>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>访问您的个人信息</li>
                      <li>更正不准确的信息</li>
                      <li>删除您的个人信息</li>
                      <li>限制处理您的信息</li>
                      <li>数据可携带性</li>
                      <li>反对处理您的信息</li>
                    </ul>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      8. Cookies和跟踪技术
                    </Heading>
                    <Paragraph className="mb-4">
                      我们使用cookies和类似技术来改善用户体验、分析网站使用情况和提供个性化内容。
                      您可以通过浏览器设置管理cookies偏好。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      9. 第三方链接
                    </Heading>
                    <Paragraph>
                      我们的网站可能包含第三方网站的链接。我们不对这些第三方网站的隐私做法负责。
                      我们建议您查看这些网站的隐私政策。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      10. 儿童隐私
                    </Heading>
                    <Paragraph>
                      我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。
                      如果我们发现收集了此类信息，我们将立即删除。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      11. 政策更新
                    </Heading>
                    <Paragraph>
                      我们可能会不时更新本隐私政策。重大变更将通过网站通知或其他适当方式告知您。
                      继续使用我们的服务表示您接受更新后的政策。
                    </Paragraph>
                  </section>

                  <section>
                    <Heading as="h2" size="2xl" className="mb-4">
                      12. 联系我们
                    </Heading>
                    <Paragraph className="mb-4">
                      如果您对本隐私政策有任何问题或需要行使您的权利，请通过以下方式联系我们：
                    </Paragraph>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Paragraph className="mb-2">
                        <strong>武汉凡尘合创科技有限公司</strong>
                      </Paragraph>
                      <Paragraph className="mb-2">
                        地址：湖北省武汉市洪山区光谷大道3号未来科技城
                      </Paragraph>
                      <Paragraph className="mb-2">
                        电话：027-8888-8888
                      </Paragraph>
                      <Paragraph className="mb-2">
                        邮箱：privacy@fanchen-ar.com
                      </Paragraph>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}